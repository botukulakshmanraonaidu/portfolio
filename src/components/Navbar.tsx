import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2 } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Journey", href: "#timeline" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass-card py-3 shadow-lg" : "py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.4)] transition-shadow">
            <Code2 className="text-primary-foreground" size={20} />
          </div>
          <span className="font-display text-xl font-bold">
            <span className="text-gradient">LR</span>
            <span className="text-foreground">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-muted-foreground hover:text-foreground transition-colors duration-300 font-medium rounded-lg hover:bg-secondary/50"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground rounded-xl font-semibold hover:shadow-[0_4px_20px_hsl(var(--primary)/0.4)] transition-all duration-300 hover:-translate-y-0.5"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-secondary/50 transition-colors text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-card mt-3 mx-4 rounded-2xl overflow-hidden border border-border/50"
          >
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors py-3 px-4 rounded-xl hover:bg-secondary/50"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-semibold text-center"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
