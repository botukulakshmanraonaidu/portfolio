import { Github, Linkedin, Mail, Code2, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: "https://github.com/botukulakshmanraonaidu", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/lakshman-rao-botuku-900833237/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:botukulakshmanraonaidu@gmail.com", label: "Email" },
  ];



  return (
    <footer className="py-10 border-t border-border/50 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-8">
            {/* Brand */}
            <div className="max-w-sm">
              <a href="#" className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-md bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Code2 className="text-primary-foreground" size={14} />
                </div>
                <span className="font-display text-base font-bold">
                  <span className="text-gradient">LR</span>
                  <span className="text-foreground">.dev</span>
                </span>
              </a>
              <p className="text-muted-foreground text-sm leading-relaxed">
                AI & ML Developer building intelligent solutions with Python, Django & LLMs.
              </p>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">Connect</h4>
              <div className="flex items-center gap-2 mb-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary/50 text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
                    aria-label={social.label}
                  >
                    <social.icon size={16} />
                  </a>
                ))}
              </div>
              <p className="text-xs text-muted-foreground">Hyderabad, India</p>
            </div>
          </div>

          <div className="border-t border-border/30 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-muted-foreground text-xs">
              © {currentYear} Lakshman Rao Botuku. All rights reserved.
            </p>
            <p className="text-muted-foreground text-xs flex items-center gap-1">
              Built with <Heart size={10} className="text-primary" /> using React & TypeScript
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
