 import { motion } from "framer-motion";
 import { Wind, Feather, Gauge, Shield } from "lucide-react";
 import carbonFrame from "@/assets/carbon-frame.jpg";
 import aeroHandlebars from "@/assets/aero-handlebars.jpg";
 import drivetrain from "@/assets/drivetrain.jpg";
 import aeroWheels from "@/assets/aero-wheels.jpg";
 
 const features = [
   {
     icon: Feather,
     title: "FACT 12r Carbon",
     description:
       "The lightest frame we've ever made. Just 685g of pure racing performance engineered to perfection.",
     image: carbonFrame,
     stat: "685g",
     statLabel: "Frame Weight",
   },
   {
     icon: Wind,
     title: "Aero Optimized",
     description:
       "Win Tunnel-tested cockpit integration delivers 45 seconds savings over 40km.",
     image: aeroHandlebars,
     stat: "45s",
     statLabel: "Saved @ 40km",
   },
   {
     icon: Gauge,
     title: "Shimano Di2",
     description:
       "Flawless electronic shifting with Dura-Ace components. Precision meets reliability.",
     image: drivetrain,
     stat: "12",
     statLabel: "Speed Cassette",
   },
   {
     icon: Shield,
     title: "Roval Rapide CLX",
     description:
       "Deep-section carbon wheels optimized for speed and crosswind stability.",
     image: aeroWheels,
     stat: "51mm",
     statLabel: "Rim Depth",
   },
 ];
 
 export const FeaturesSection = () => {
   return (
     <section id="features" className="py-24 bg-carbon">
       <div className="container mx-auto px-4 lg:px-8">
         {/* Section Header */}
         <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
           className="text-center mb-16"
         >
           <span className="text-primary text-sm font-semibold uppercase tracking-widest">
             Engineering Excellence
           </span>
           <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 text-foreground">
             BUILT TO WIN
           </h2>
           <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
             Every component of the S-Works Tarmac SL8 has been meticulously engineered 
             for one purpose: crossing the finish line first.
           </p>
         </motion.div>
 
         {/* Features Grid */}
         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {features.map((feature, index) => (
             <motion.div
               key={feature.title}
               initial={{ opacity: 0, y: 40 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: index * 0.1 }}
               className="group relative overflow-hidden rounded-lg bg-card-gradient border border-border hover:border-primary/50 transition-all duration-500"
             >
               {/* Image */}
               <div className="relative h-64 overflow-hidden">
                 <img
                   src={feature.image}
                   alt={feature.title}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent" />
                 
                 {/* Stat Badge */}
                 <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
                   <span className="block font-display text-2xl text-primary-foreground">
                     {feature.stat}
                   </span>
                   <span className="text-xs text-primary-foreground/80 uppercase tracking-wide">
                     {feature.statLabel}
                   </span>
                 </div>
               </div>
 
               {/* Content */}
               <div className="p-6">
                 <div className="flex items-center gap-3 mb-3">
                   <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                     <feature.icon className="w-5 h-5 text-primary" />
                   </div>
                   <h3 className="font-display text-2xl text-foreground">
                     {feature.title}
                   </h3>
                 </div>
                 <p className="text-muted-foreground leading-relaxed">
                   {feature.description}
                 </p>
               </div>
             </motion.div>
           ))}
         </div>
       </div>
     </section>
   );
 };