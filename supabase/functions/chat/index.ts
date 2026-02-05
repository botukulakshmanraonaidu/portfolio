import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const systemPrompt = `You are Lakshman Rao Botuku's portfolio assistant. You help visitors learn about Lakshman.

About Lakshman:
- AI & Machine Learning Developer based in Hyderabad, India
- B.Tech in CSE (AI) from Narasaraopeta Engineering College (CGPA: 8.37)
- Currently working as Software Developer at Quantum Works Private Limited

Technical Skills:
- Languages: Python, Java, JavaScript
- AI/ML: Scikit-learn, TensorFlow, HuggingFace, spaCy, OpenAI GPT
- LLM & RAG: LangChain, LlamaIndex, Prompt Engineering
- Backend: Django, FastAPI, REST APIs
- Frontend: React.js, Tailwind CSS
- Databases: MySQL, PostgreSQL, MongoDB, Firebase

Key Projects:
1. Enterprise Document Q&A System (LLM + RAG) - Built RAG system using LangChain, FAISS/Chroma for semantic search
2. Labour Management System - Django REST Framework with role-based auth
3. Laptop Price Prediction - ML pipeline achieving 89% accuracy

Contact: botukulakshmanraonaidu@gmail.com | +91 6305913197

Be helpful, concise, and professional. Guide visitors to explore the portfolio or contact Lakshman for opportunities.`;

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: systemPrompt },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
