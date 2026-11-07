 import { motion } from "framer-motion";
 import { Instagram, Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react";
 
 const footerLinks = {
   products: [
     { name: "Tarmac SL8", href: "#" },
     { name: "Aethos", href: "#" },
     { name: "Venge", href: "#" },
     { name: "Crux", href: "#" },
   ],
   support: [
     { name: "Service Center", href: "#" },
     { name: "Warranty", href: "#" },
     { name: "Sizing Guide", href: "#" },
     { name: "FAQ", href: "#" },
   ],
   company: [
     { name: "About Us", href: "#" },
     { name: "Contact", href: "#order" },
     { name: "Careers", href: "#" },
     { name: "Press", href: "#" },
   ],
 };
 
 const socialLinks = [
   { icon: Instagram, href: "#" },
   { icon: Facebook, href: "#" },
   { icon: Youtube, href: "#" },
 ];
 
 export const Footer = () => {
   return (
     <footer className="bg-background border-t border-border">
       <div className="container mx-auto px-4 lg:px-8 py-16">
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
           {/* Brand */}
           <div className="lg:col-span-2">
             <motion.div
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
             >
               <span className="font-display text-4xl text-foreground">S-WORKS</span>
               <span className="block text-primary text-sm font-semibold uppercase tracking-widest mt-1">
                 Cambodia
               </span>
               <p className="text-muted-foreground mt-4 max-w-sm">
                 The exclusive distributor of S-Works premium racing bicycles in Cambodia. 
                 Experience world-class cycling technology.
               </p>
 
               {/* Contact Info */}
               <div className="mt-6 space-y-3">
                 <div className="flex items-center gap-3 text-muted-foreground">
                   <MapPin className="w-4 h-4 text-primary" />
                   <span className="text-sm">123 Norodom Blvd, Phnom Penh</span>
                 </div>
                 <div className="flex items-center gap-3 text-muted-foreground">
                   <Phone className="w-4 h-4 text-primary" />
                   <span className="text-sm">+855 12 345 678</span>
                 </div>
                 <div className="flex items-center gap-3 text-muted-foreground">
                   <Mail className="w-4 h-4 text-primary" />
                   <span className="text-sm">sales@sworks-cambodia.com</span>
                 </div>
               </div>
 
               {/* Social Links */}
               <div className="flex gap-4 mt-6">
                 {socialLinks.map((social, index) => (
                   <a
                     key={index}
                     href={social.href}
                     className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-primary transition-colors group"
                   >
                     <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                   </a>
                 ))}
               </div>
             </motion.div>
           </div>
 
           {/* Links */}
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
           >
             <h4 className="font-display text-lg text-foreground mb-4">PRODUCTS</h4>
             <ul className="space-y-3">
               {footerLinks.products.map((link) => (
                 <li key={link.name}>
                   <a
                     href={link.href}
                     className="text-sm text-muted-foreground hover:text-primary transition-colors"
                   >
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.2 }}
           >
             <h4 className="font-display text-lg text-foreground mb-4">SUPPORT</h4>
             <ul className="space-y-3">
               {footerLinks.support.map((link) => (
                 <li key={link.name}>
                   <a
                     href={link.href}
                     className="text-sm text-muted-foreground hover:text-primary transition-colors"
                   >
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
           </motion.div>
 
           <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
           >
             <h4 className="font-display text-lg text-foreground mb-4">COMPANY</h4>
             <ul className="space-y-3">
               {footerLinks.company.map((link) => (
                 <li key={link.name}>
                   <a
                     href={link.href}
                     className="text-sm text-muted-foreground hover:text-primary transition-colors"
                   >
                     {link.name}
                   </a>
                 </li>
               ))}
             </ul>
           </motion.div>
         </div>
 
         {/* Bottom Bar */}
         <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
           <p className="text-sm text-muted-foreground">
             © 2024 S-Works Cambodia. All rights reserved.
           </p>
           <div className="flex gap-6">
             <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
               Privacy Policy
             </a>
             <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
               Terms of Service
             </a>
           </div>
         </div>
       </div>
     </footer>
   );
 };