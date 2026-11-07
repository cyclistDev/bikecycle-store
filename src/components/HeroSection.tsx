 import { motion } from "framer-motion";
 import { ArrowDown, Zap } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import heroBike from "@/assets/hero-bike.jpg";
 
 export const HeroSection = () => {
   return (
     <section
       id="home"
       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient"
     >
       {/* Background Image */}
       <div className="absolute inset-0 z-0">
         <img
           src={heroBike}
           alt="S-Works Tarmac SL8"
           className="w-full h-full object-cover opacity-60"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
         <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />
       </div>
 
       {/* Content */}
       <div className="container mx-auto px-4 lg:px-8 relative z-10 pt-20">
         <div className="max-w-4xl">
           {/* Quote Badge */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-2 mb-8"
           >
             <Zap className="w-4 h-4 text-primary" />
             <span className="text-sm font-medium text-primary">
               "Win Everything" — The S-Works Promise
             </span>
           </motion.div>
 
           {/* Main Heading */}
           <motion.h1
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.2 }}
             className="font-display text-5xl sm:text-7xl lg:text-8xl leading-none mb-6"
           >
             <span className="text-foreground">RACE</span>
             <br />
             <span className="text-gradient">WITHOUT</span>
             <br />
             <span className="text-foreground">LIMITS</span>
           </motion.h1>
 
           {/* Subheading */}
           <motion.p
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.4 }}
             className="text-lg sm:text-xl text-muted-foreground max-w-xl mb-10"
           >
             Experience the pinnacle of road cycling engineering. The S-Works Tarmac SL8 
             — where aerodynamics, lightweight design, and pure racing DNA converge.
           </motion.p>
 
           {/* CTA Buttons */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.8, delay: 0.6 }}
             className="flex flex-col sm:flex-row gap-4"
           >
             <Button variant="racing" size="lg" className="group">
               Explore Collection
               <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
             </Button>
             <Button variant="outline" size="lg">
               Book Test Ride
             </Button>
           </motion.div>
         </div>
       </div>
 
       {/* Scroll Indicator */}
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 1.2 }}
         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
       >
         <span className="text-xs text-muted-foreground uppercase tracking-widest">
           Scroll to discover
         </span>
         <motion.div
           animate={{ y: [0, 8, 0] }}
           transition={{ duration: 1.5, repeat: Infinity }}
         >
           <ArrowDown className="w-5 h-5 text-primary" />
         </motion.div>
       </motion.div>
     </section>
   );
 };