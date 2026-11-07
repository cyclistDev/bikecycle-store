import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ShoppingCart,
  Heart,
  Share2,
  Check,
  Truck,
  Shield,
  RotateCcw,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useProducts } from "@/hooks/useProducts";
import { useCart } from "@/context/CartContext";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { addItem } = useCart();
  const { data: products = [], isLoading } = useProducts();
  const product = products.find((p) => p.id === id);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16">
          <div className="h-96 rounded-xl bg-card border border-border animate-pulse" />
        </div>
        <Footer />
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 pt-32 pb-16 text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">
            Product Not Found
          </h1>
          <p className="text-muted-foreground mb-8">
            The bike you're looking for doesn't exist.
          </p>
          <Link to="/products">
            <Button variant="racing">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Products
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addItem(product);
  };
 
   return (
     <div className="min-h-screen bg-background">
       <Navbar />
 
       <section className="pt-28 pb-16">
         <div className="container mx-auto px-4 lg:px-8">
           {/* Breadcrumb */}
           <motion.div
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="mb-8"
           >
             <Link
               to="/products"
               className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
             >
               <ArrowLeft className="w-4 h-4 mr-2" />
               Back to Products
             </Link>
           </motion.div>
 
           <div className="grid lg:grid-cols-2 gap-12">
             {/* Image */}
             <motion.div
               initial={{ opacity: 0, x: -30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6 }}
               className="relative"
             >
               <div className="relative rounded-xl overflow-hidden bg-card border border-border">
                 <img
                   src={product.image}
                   alt={product.name}
                   className="w-full aspect-[4/3] object-cover"
                 />
                 {/* Badges */}
                 <div className="absolute top-4 left-4 flex gap-2">
                   {product.isNew && (
                     <Badge className="bg-primary text-primary-foreground">
                       New
                     </Badge>
                   )}
                   {product.isBestSeller && (
                     <Badge variant="secondary">Best Seller</Badge>
                   )}
                 </div>
               </div>
             </motion.div>
 
             {/* Details */}
             <motion.div
               initial={{ opacity: 0, x: 30 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.6, delay: 0.2 }}
             >
               <span className="text-primary text-sm font-semibold uppercase tracking-widest">
                 {product.category}
               </span>
 
               <h1 className="font-display text-4xl sm:text-5xl text-foreground mt-2 mb-4">
                 {product.name}
               </h1>
 
               <p className="text-lg text-muted-foreground mb-6">
                 {product.description}
               </p>
 
               {/* Price */}
               <div className="flex items-baseline gap-4 mb-8">
                 <span className="text-4xl font-bold text-foreground">
                   {formatPrice(product.price)}
                 </span>
                 {product.inStock ? (
                  <Badge className="bg-primary/80 text-primary-foreground">In Stock</Badge>
                 ) : (
                   <Badge variant="outline">Pre-Order Available</Badge>
                 )}
               </div>
 
               {/* Specs Grid */}
               <div className="grid grid-cols-3 gap-4 mb-8">
                 <div className="bg-card rounded-lg p-4 border border-border text-center">
                   <span className="block text-2xl font-display text-primary">
                     {product.weight}
                   </span>
                   <span className="text-xs text-muted-foreground uppercase tracking-wide">
                     Weight
                   </span>
                 </div>
                 <div className="bg-card rounded-lg p-4 border border-border text-center">
                   <span className="block text-lg font-display text-primary">
                     {product.frameCarbon}
                   </span>
                   <span className="text-xs text-muted-foreground uppercase tracking-wide">
                     Carbon
                   </span>
                 </div>
                 <div className="bg-card rounded-lg p-4 border border-border text-center">
                   <span className="block text-sm font-display text-primary leading-tight">
                     {product.groupset.split(" ")[0]}
                   </span>
                   <span className="text-xs text-muted-foreground uppercase tracking-wide">
                     Groupset
                   </span>
                 </div>
               </div>
 
               {/* Features */}
               <div className="mb-8">
                 <h3 className="font-display text-xl text-foreground mb-4">
                   KEY FEATURES
                 </h3>
                 <ul className="space-y-3">
                   {product.features.map((feature, i) => (
                     <li key={i} className="flex items-start gap-3">
                       <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                       <span className="text-muted-foreground">{feature}</span>
                     </li>
                   ))}
                 </ul>
               </div>
 
               {/* Actions */}
               <div className="flex gap-4 mb-8">
                 <Button
                   variant="racing"
                   size="lg"
                   className="flex-1"
                   onClick={handleAddToCart}
                 >
                   <ShoppingCart className="w-5 h-5 mr-2" />
                   Add to Cart
                 </Button>
                 <Button variant="outline" size="lg">
                   <Heart className="w-5 h-5" />
                 </Button>
                 <Button variant="outline" size="lg">
                   <Share2 className="w-5 h-5" />
                 </Button>
               </div>
 
               {/* Trust Badges */}
               <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
                 <div className="flex items-center gap-3">
                   <Truck className="w-6 h-6 text-primary" />
                   <div>
                     <span className="block text-sm font-medium text-foreground">
                       Free Shipping
                     </span>
                     <span className="text-xs text-muted-foreground">
                       Cambodia-wide
                     </span>
                   </div>
                 </div>
                 <div className="flex items-center gap-3">
                   <Shield className="w-6 h-6 text-primary" />
                   <div>
                     <span className="block text-sm font-medium text-foreground">
                       Warranty
                     </span>
                     <span className="text-xs text-muted-foreground">
                       Lifetime frame
                     </span>
                   </div>
                 </div>
                 <div className="flex items-center gap-3">
                   <RotateCcw className="w-6 h-6 text-primary" />
                   <div>
                     <span className="block text-sm font-medium text-foreground">
                       Returns
                     </span>
                     <span className="text-xs text-muted-foreground">
                       30-day policy
                     </span>
                   </div>
                 </div>
               </div>
             </motion.div>
           </div>
         </div>
       </section>
 
       <Footer />
     </div>
   );
 };
 
 export default ProductDetail;