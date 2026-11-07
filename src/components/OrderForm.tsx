 import { useState } from "react";
 import { motion } from "framer-motion";
 import { Send, User, Mail, Phone, MessageSquare, Bike, CreditCard } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { Textarea } from "@/components/ui/textarea";
 import { useToast } from "@/hooks/use-toast";
 import { useSubmitOrder } from "@/hooks/useSubmitOrder";
 import { bikeModels, paymentMethods } from "@/data/formOptions";
 import { siteConfig } from "@/config/site";
 
 export const OrderForm = () => {
   const { toast } = useToast();
   const submitOrder = useSubmitOrder();
   const [formData, setFormData] = useState({
     name: "",
     email: "",
     phone: "",
     bike: "",
     payment: "",
     message: "",
   });
 
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();

     try {
       await submitOrder.mutateAsync(formData);
       toast({
         title: "Inquiry Submitted!",
         description: "Our team will contact you within 24 hours.",
       });
       setFormData({
         name: "",
         email: "",
         phone: "",
         bike: "",
         payment: "",
         message: "",
       });
     } catch {
       toast({
         title: "Submission failed",
         description: "Something went wrong. Please try again or call us directly.",
         variant: "destructive",
       });
     }
   };
 
   return (
     <section id="order" className="py-24 bg-carbon relative">
       {/* Racing Stripe Accent */}
       <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-gradient" />
       
       <div className="container mx-auto px-4 lg:px-8">
         <div className="grid lg:grid-cols-2 gap-16 items-center">
           {/* Left Content */}
           <motion.div
             initial={{ opacity: 0, x: -40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
           >
             <span className="text-primary text-sm font-semibold uppercase tracking-widest">
               Get Started
             </span>
             <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl mt-4 text-foreground">
               ORDER YOUR
               <br />
               <span className="text-gradient">DREAM BIKE</span>
             </h2>
             <p className="text-muted-foreground text-lg mt-6 max-w-lg">
               Ready to experience the ultimate in road cycling? Fill out the form 
               and our team will guide you through the customization and ordering process.
             </p>
 
             {/* Contact Info */}
             <div className="mt-10 space-y-4">
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                   <Phone className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <p className="text-sm text-muted-foreground">Call us</p>
                   <p className="text-foreground font-medium">{siteConfig.phone}</p>
                 </div>
               </div>
               <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                   <Mail className="w-5 h-5 text-primary" />
                 </div>
                 <div>
                   <p className="text-sm text-muted-foreground">Email us</p>
                   <p className="text-foreground font-medium">{siteConfig.email}</p>
                 </div>
               </div>
             </div>
           </motion.div>
 
           {/* Form */}
           <motion.form
             initial={{ opacity: 0, x: 40 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             onSubmit={handleSubmit}
             className="bg-card rounded-xl border border-border p-8 shadow-card"
           >
             <div className="space-y-6">
               {/* Name */}
               <div className="relative">
                 <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                 <Input
                   type="text"
                   placeholder="Your Name"
                   value={formData.name}
                   onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                   className="pl-12 h-14 bg-secondary border-border"
                   required
                 />
               </div>
 
               {/* Email */}
               <div className="relative">
                 <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                 <Input
                   type="email"
                   placeholder="Email Address"
                   value={formData.email}
                   onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                   className="pl-12 h-14 bg-secondary border-border"
                   required
                 />
               </div>
 
               {/* Phone */}
               <div className="relative">
                 <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                 <Input
                   type="tel"
                   placeholder="Phone Number"
                   value={formData.phone}
                   onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                   className="pl-12 h-14 bg-secondary border-border"
                   required
                 />
               </div>
 
               {/* Bike Selection */}
               <div className="relative">
                 <Bike className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                 <select
                   value={formData.bike}
                   onChange={(e) => setFormData({ ...formData, bike: e.target.value })}
                   className="w-full pl-12 h-14 bg-secondary border border-border rounded-md text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
                   required
                 >
                   <option value="" disabled>
                     Select Bike Model
                   </option>
                   {bikeModels.map((bike) => (
                     <option key={bike} value={bike}>
                       {bike}
                     </option>
                   ))}
                 </select>
               </div>
 
               {/* Payment Method */}
               <div className="relative">
                 <CreditCard className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                 <select
                   value={formData.payment}
                   onChange={(e) => setFormData({ ...formData, payment: e.target.value })}
                   className="w-full pl-12 h-14 bg-secondary border border-border rounded-md text-foreground appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-ring"
                   required
                 >
                   <option value="" disabled>
                     Payment Method
                   </option>
                   {paymentMethods.map((method) => (
                     <option key={method} value={method}>
                       {method}
                     </option>
                   ))}
                 </select>
               </div>
 
               {/* Message */}
               <div className="relative">
                 <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-muted-foreground" />
                 <Textarea
                   placeholder="Additional details or questions..."
                   value={formData.message}
                   onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                   className="pl-12 min-h-32 bg-secondary border-border resize-none"
                 />
               </div>
 
               {/* Submit */}
               <Button
                 type="submit"
                 variant="racing"
                 size="lg"
                 className="w-full"
                 disabled={submitOrder.isPending}
               >
                 {submitOrder.isPending ? (
                   "Submitting..."
                 ) : (
                   <>
                     <Send className="w-5 h-5 mr-2" />
                     Submit Inquiry
                   </>
                 )}
               </Button>
             </div>
           </motion.form>
         </div>
       </div>
     </section>
   );
 };