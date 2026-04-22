import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

/**
 * Hook to get the latest resume URL.
 * It attempts to fetch from Supabase Storage 'resumes' bucket first,
 * then falls back to a local public file.
 */
export const useResume = () => {
  return useQuery({
    queryKey: ["resume-url"],
    queryFn: async () => {
      try {
        /**
         * DEFAULT STRATEGY: Use the local file in /public
         * We add a version timestamp to solve the "previous is still downloading" (caching) issue.
         * Whenever you update the file in public/, the timestamp ensures browsers get the new version.
         */
        const localPath = "/resume.pdf";
        const version = new Date().getTime();
        return `${localPath}?v=${version}`;

        /**
         * OPTIONAL: Supabase Storage Strategy
         * If you want to use Supabase Storage, uncomment the code below 
         * and ensure you have a 'resumes' bucket with a 'resume.pdf' file.
         */
        /*
        const { data } = supabase.storage
          .from("resumes")
          .getPublicUrl("resume.pdf");
        return `${data.publicUrl}?v=${new Date().getTime()}`;
        */
      } catch (error) {
        console.error("Error generating resume URL:", error);
        return "/Lakshman_Rao_Botuku.pdf";
      }
    },
    staleTime: Infinity,
  });
};
