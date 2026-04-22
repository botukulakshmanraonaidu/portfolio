import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, MapPin, Send, Phone, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email is too long"),
  message: z.string().trim().min(1, "Message is required").max(2000, "Message is too long"),
});

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    // 1. Validate form data
    const validation = contactSchema.safeParse(formData);
    if (!validation.success) {
      const fieldErrors: typeof errors = {};
      validation.error.errors.forEach((err) => {
        const field = err.path[0] as keyof typeof errors;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      toast.error("Please fix the errors in the form.");
      return;
    }

    // 2. Check if Supabase is configured (basic check)
    if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY) {
      console.error("Supabase environment variables are missing!");
      toast.error("Contact service is temporarily unavailable. Please use the email link below.");
      return;
    }

    setIsSubmitting(true);

    try {
      // 3. Insert into Supabase 'contacts' table (for record keeping)
      const { error: insertError } = await supabase.from("contacts").insert({
        name: validation.data.name,
        email: validation.data.email,
        message: validation.data.message,
      });

      if (insertError) {
        console.error("Supabase insert error:", insertError);
        throw new Error(insertError.message);
      }

      // 4. Trigger notification (Official Supabase Function Invoke)
      // This is the reliable way to call Edge Functions
      const { data: funcData, error: funcError } = await supabase.functions.invoke(
        "send-contact-notification",
        {
          body: validation.data,
        }
      );

      if (funcError) {
        console.warn("Email notification function error:", funcError);
        // We don't throw here because the message IS in the database already
        toast.info("Message saved, but email notification failed. I will still see it in my dashboard!");
      } else {
        toast.success("Message sent! I'll get back to you shortly.");
      }

      // 5. Success UI
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error: any) {
      console.error("Contact form failure:", error);
      toast.error(error.message || "Something went wrong. Please try again or email me directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "botukulakshmanraonaidu@gmail.com", href: "mailto:botukulakshmanraonaidu@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 6305913197", href: "tel:+916305913197" },
    { icon: MapPin, label: "Location", value: "Hyderabad, India", href: null },
  ];

  return (
    <section id="contact" className="py-12 relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="section-label">Contact</span>
            <h2 className="section-title">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Looking for an AI/ML developer? I'd love to hear about your project.
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card rounded-2xl p-6 lg:p-8 border border-border/50"
          >
            <div className="max-w-2xl mx-auto space-y-12">
              {/* Contact Form */}
              <div>
                <div className="flex items-center justify-center gap-2 mb-6">
                  <MessageCircle className="text-primary" size={20} />
                  <h3 className="font-display text-lg font-semibold text-foreground">Send a Message</h3>
                </div>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">
                        Name
                      </label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                        placeholder="Your name"
                      />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">
                        Email
                      </label>
                      <Input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                        placeholder="your@email.com"
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-muted-foreground mb-1.5 uppercase tracking-wide">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className={`resize-none ${errors.message ? "border-destructive focus-visible:ring-destructive" : ""}`}
                      placeholder="Tell me about your project..."
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold text-sm hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 hover:shadow-[0_4px_20px_hsl(var(--primary)/0.3)]"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="pt-8 border-t border-border/50">
                  <div className="grid md:grid-cols-3 gap-6 text-center">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex flex-col items-center gap-2 group">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/20 transition-all relative">
                          <item.icon className="text-primary" size={16} />
                          {item.label === "Phone" && (
                            <a 
                              href={`https://wa.me/${item.value.replace(/\D/g, '')}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white border-2 border-background hover:scale-110 transition-transform"
                              title="Chat on WhatsApp"
                            >
                              <MessageCircle size={10} />
                            </a>
                          )}
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground uppercase tracking-wide mb-1">{item.label}</div>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-foreground font-medium hover:text-primary transition-colors text-sm block"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <span className="text-foreground font-medium text-sm block">{item.value}</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                {/* Quick response badge */}
                <div className="mt-8 text-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-xs text-muted-foreground">
                    ⚡ Usually responds within <span className="text-primary font-medium">24 hours</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
