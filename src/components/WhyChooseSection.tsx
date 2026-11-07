 import { motion } from "framer-motion";
 import { Trophy, Wrench, MapPin, CreditCard, Award, Users } from "lucide-react";
 
 const reasons = [
   {
     icon: Trophy,
     title: "Pro-Level Performance",
     description:
       "The same bikes ridden by World Tour professionals. Race-winning technology now available in Cambodia.",
   },
   {
     icon: Award,
     title: "European Quality",
     description:
       "Designed in California, engineered in Europe. Premium craftsmanship meets cutting-edge innovation.",
   },
   {
     icon: MapPin,
     title: "Local Support",
     description:
       "Dedicated service center in Phnom Penh. Expert mechanics trained by Specialized certified programs.",
   },
   {
     icon: CreditCard,
     title: "Flexible Payment",
     description:
       "Multiple payment options including installment plans. Make your dream bike accessible.",
   },
   {
     icon: Wrench,
     title: "Lifetime Warranty",
     description:
       "Industry-leading warranty coverage. We stand behind every frame, component, and accessory.",
   },
   {
     icon: Users,
     title: "Community Rides",
     description:
       "Join our weekly group rides and events. Connect with fellow cyclists across Cambodia.",
   },
 ];
 
 export const WhyChooseSection = () => {
   return (
     <section id="why-choose" className="py-24 bg-background relative overflow-hidden">
       {/* Background Accent */}
       <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
       
       <div className="container mx-auto px-4 lg:px-8 relative z-10">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
           {/* Left Content */}
           <motion.div
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <span className="text-primary text-sm font-semibold uppercase tracking-widest">
               Why Choose Us
             </span>
             <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 text-foreground leading-tight">
               THE FASTEST
               <br />
               <span className="text-gradient">BIKES IN CAMBODIA</span>
             </h2>
             <p className="text-muted-foreground text-lg mt-6 max-w-lg">
               As the exclusive S-Works distributor in Cambodia, we bring world-class 
               racing technology to Southeast Asia. Experience the difference that 
               engineering excellence makes.
             </p>
             
             {/* Stats */}
             <div className="grid grid-cols-3 gap-8 mt-12">
               <div>
                 <span className="font-display text-4xl text-primary">50+</span>
                 <p className="text-sm text-muted-foreground mt-1">Bikes Delivered</p>
               </div>
               <div>
                 <span className="font-display text-4xl text-primary">100%</span>
                 <p className="text-sm text-muted-foreground mt-1">Satisfaction</p>
               </div>
               <div>
                 <span className="font-display text-4xl text-primary">24/7</span>
                 <p className="text-sm text-muted-foreground mt-1">Support</p>
               </div>
             </div>
           </motion.div>
 
           {/* Right Grid */}
           <div className="grid sm:grid-cols-2 gap-4">
             {reasons.map((reason, index) => (
               <motion.div
                 key={reason.title}
                 initial={{ opacity: 0, y: 30 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.5, delay: index * 0.1 }}
                 className="group p-6 rounded-lg bg-card border border-border hover:border-primary/50 hover:shadow-glow transition-all duration-300"
               >
                 <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                   <reason.icon className="w-6 h-6 text-primary" />
                 </div>
                 <h3 className="font-display text-xl text-foreground mb-2">
                   {reason.title}
                 </h3>
                 <p className="text-sm text-muted-foreground leading-relaxed">
                   {reason.description}
                 </p>
               </motion.div>
             ))}
           </div>
         </div>
       </div>
     </section>
   );
 };