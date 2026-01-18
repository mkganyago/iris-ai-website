import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChevronDown, Calendar, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/generated_images/south_african_irrigation_aerial_view.png";

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const scrollToOverview = () => {
    document.querySelector("#overview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y }}
      >
        <img
          src={heroImage}
          alt="Aerial view of South African agricultural irrigation systems"
          className="w-full h-full object-cover"
          data-testid="img-hero-background"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        style={{ opacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Badge variant="secondary" className="mb-6 bg-white/10 backdrop-blur-md text-white border-white/20" data-testid="badge-organization">
            University of Johannesburg
          </Badge>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          data-testid="text-hero-title"
        >
          <span className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent">
            IRIS-AI
          </span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-4 font-medium max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          data-testid="text-hero-subtitle"
        >
          Catchment-Scale Irrigation Intelligence System
        </motion.p>

        <motion.p
          className="text-lg sm:text-xl text-white/70 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          data-testid="text-hero-description"
        >
          For Water-Use Efficiency and Compliance, Powered by Earth Observation and AI
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            size="lg"
            className="px-8 py-6 text-lg bg-primary/90 backdrop-blur-md border border-primary-border"
            onClick={scrollToOverview}
            data-testid="button-learn-more"
          >
            Learn More
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="px-8 py-6 text-lg bg-white/10 backdrop-blur-md text-white border-white/30"
            onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
            data-testid="button-contact-cta"
          >
            Get in Touch
          </Button>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center gap-4 sm:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20" data-testid="badge-timeline">
            <Calendar className="w-5 h-5 text-cyan-300" />
            <span className="text-white font-medium">2025–2027</span>
          </div>
          <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20" data-testid="badge-products">
            <Layers className="w-5 h-5 text-green-300" />
            <span className="text-white font-medium">3 Core Products</span>
          </div>
        </motion.div>
      </motion.div>

      <motion.button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/70 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={scrollToOverview}
        data-testid="button-scroll-down"
        aria-label="Scroll to content"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </section>
  );
}
