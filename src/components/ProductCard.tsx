 import { motion } from "framer-motion";
 import { ShoppingCart, Eye, Star, Zap, Heart } from "lucide-react";
 import { Button } from "@/components/ui/button";
 import { Badge } from "@/components/ui/badge";
 import type { Product } from "@/data/products";
 import { Link } from "react-router-dom";
 import { useWishlist } from "@/context/WishlistContext";
 
 interface ProductCardProps {
   product: Product;
   index: number;
 }
 
 export const ProductCard = ({ product, index }: ProductCardProps) => {
   const { isWishlisted, toggle } = useWishlist();
   const formatPrice = (price: number) => {
     return new Intl.NumberFormat("en-US", {
       style: "currency",
       currency: "USD",
       minimumFractionDigits: 0,
     }).format(price);
   };
 
   return (
     <motion.div
       initial={{ opacity: 0, y: 30 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.5, delay: index * 0.1 }}
       className="group relative bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all duration-500"
     >
       {/* Badges */}
       <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
         {product.isNew && (
           <Badge className="bg-primary text-primary-foreground">
             <Zap className="w-3 h-3 mr-1" />
             New
           </Badge>
         )}
         {product.isBestSeller && (
           <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
             <Star className="w-3 h-3 mr-1" />
             Best Seller
           </Badge>
         )}
         {!product.inStock && (
           <Badge variant="outline" className="border-muted-foreground text-muted-foreground">
             Pre-Order
           </Badge>
         )}
       </div>
 
       {/* Image */}
       <div className="relative h-64 overflow-hidden bg-secondary">
         <img
           src={product.image}
           alt={product.name}
           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
         />
         <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
 
         {/* Wishlist */}
         <button
           onClick={() => toggle(product)}
           aria-label="Toggle favorite"
           className={`absolute top-4 right-4 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
             isWishlisted(product.id)
               ? "bg-red-500 text-white"
               : "bg-background/80 text-foreground hover:bg-background"
           }`}
         >
           <Heart className={`w-4 h-4 ${isWishlisted(product.id) ? "fill-current" : ""}`} />
         </button>
 
         {/* Quick Actions */}
         <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
           <Link to={`/products/${product.id}`}>
             <Button variant="secondary" size="icon" className="rounded-full w-12 h-12">
               <Eye className="w-5 h-5" />
             </Button>
           </Link>
           <Button variant="racing" size="icon" className="rounded-full w-12 h-12">
             <ShoppingCart className="w-5 h-5" />
           </Button>
         </div>
       </div>
 
       {/* Content */}
       <div className="p-6">
         {/* Category */}
         <span className="text-xs text-primary uppercase tracking-widest font-semibold">
           {product.category}
         </span>
 
         {/* Title */}
         <h3 className="font-display text-2xl text-foreground mt-2 mb-2">
           {product.name}
         </h3>
 
         {/* Description */}
         <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
           {product.description}
         </p>
 
         {/* Specs */}
         <div className="flex flex-wrap gap-2 mb-4">
           <span className="text-xs bg-secondary px-2 py-1 rounded text-secondary-foreground">
             {product.weight}
           </span>
           <span className="text-xs bg-secondary px-2 py-1 rounded text-secondary-foreground">
             {product.frameCarbon}
           </span>
         </div>
 
         {/* Price & Action */}
         <div className="flex items-center justify-between pt-4 border-t border-border">
           <div>
             <span className="text-2xl font-bold text-foreground">
               {formatPrice(product.price)}
             </span>
           </div>
           <Link to={`/products/${product.id}`}>
             <Button variant="outline" size="sm">
               View Details
             </Button>
           </Link>
         </div>
       </div>
     </motion.div>
   );
 };