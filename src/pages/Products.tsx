 import { useState, useMemo } from "react";
 import { motion } from "framer-motion";
 import { Filter, SlidersHorizontal, Search, X } from "lucide-react";
 import { Navbar } from "@/components/Navbar";
 import { Footer } from "@/components/Footer";
 import { ProductCard } from "@/components/ProductCard";
 import { Button } from "@/components/ui/button";
 import { Input } from "@/components/ui/input";
 import { categories, type BikeCategory } from "@/data/products";
import { useProducts } from "@/hooks/useProducts";
 
 type SortOption = "featured" | "price-asc" | "price-desc" | "name";
 
 const sortOptions: { value: SortOption; label: string }[] = [
   { value: "featured", label: "Featured" },
   { value: "price-asc", label: "Price: Low to High" },
   { value: "price-desc", label: "Price: High to Low" },
   { value: "name", label: "Name A-Z" },
 ];
 
 const Products = () => {
   const [activeCategory, setActiveCategory] = useState<BikeCategory | "all">("all");
   const [sortBy, setSortBy] = useState<SortOption>("featured");
   const [searchQuery, setSearchQuery] = useState("");
   const [showFilters, setShowFilters] = useState(false);
   const { data: allProducts = [], isLoading } = useProducts();
 
   const filteredProducts = useMemo(() => {
     let result = [...allProducts];
 
     // Filter by category
     if (activeCategory !== "all") {
       result = result.filter((p) => p.category === activeCategory);
     }
 
     // Filter by search
     if (searchQuery) {
       const query = searchQuery.toLowerCase();
       result = result.filter(
         (p) =>
           p.name.toLowerCase().includes(query) ||
           p.description.toLowerCase().includes(query) ||
           p.category.toLowerCase().includes(query)
       );
     }
 
     // Sort
     switch (sortBy) {
       case "price-asc":
         result.sort((a, b) => a.price - b.price);
         break;
       case "price-desc":
         result.sort((a, b) => b.price - a.price);
         break;
       case "name":
         result.sort((a, b) => a.name.localeCompare(b.name));
         break;
       case "featured":
       default:
         result.sort((a, b) => {
           if (a.isBestSeller && !b.isBestSeller) return -1;
           if (!a.isBestSeller && b.isBestSeller) return 1;
           if (a.isNew && !b.isNew) return -1;
           if (!a.isNew && b.isNew) return 1;
           return 0;
         });
     }
 
     return result;
   }, [allProducts, activeCategory, sortBy, searchQuery]);
 
   return (
     <div className="min-h-screen bg-background">
       <Navbar />
 
       {/* Hero */}
       <section className="pt-32 pb-16 bg-hero-gradient">
         <div className="container mx-auto px-4 lg:px-8">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="text-center"
           >
             <span className="text-primary text-sm font-semibold uppercase tracking-widest">
               The Collection
             </span>
             <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl mt-4 text-foreground">
               S-WORKS BIKES
             </h1>
             <p className="text-muted-foreground max-w-2xl mx-auto mt-4 text-lg">
               Explore our complete range of World Tour proven racing machines.
               Each bike represents the pinnacle of cycling engineering.
             </p>
           </motion.div>
         </div>
       </section>
 
       {/* Filters & Products */}
       <section className="py-12">
         <div className="container mx-auto px-4 lg:px-8">
           {/* Filter Bar */}
           <div className="flex flex-col lg:flex-row gap-4 mb-8">
             {/* Search */}
             <div className="relative flex-1 max-w-md">
               <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
               <Input
                 type="text"
                 placeholder="Search bikes..."
                 value={searchQuery}
                 onChange={(e) => setSearchQuery(e.target.value)}
                 className="pl-12 h-12 bg-card border-border"
               />
               {searchQuery && (
                 <button
                   onClick={() => setSearchQuery("")}
                   className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                 >
                   <X className="w-4 h-4" />
                 </button>
               )}
             </div>
 
             {/* Mobile Filter Toggle */}
             <Button
               variant="outline"
               onClick={() => setShowFilters(!showFilters)}
               className="lg:hidden"
             >
               <Filter className="w-4 h-4 mr-2" />
               Filters
             </Button>
 
             {/* Desktop Filters */}
             <div className="hidden lg:flex items-center gap-4">
               {/* Categories */}
               <div className="flex gap-2">
                 {categories.map((cat) => (
                   <Button
                     key={cat.value}
                     variant={activeCategory === cat.value ? "racing" : "outline"}
                     size="sm"
                     onClick={() => setActiveCategory(cat.value)}
                   >
                     {cat.label}
                   </Button>
                 ))}
               </div>
 
               {/* Divider */}
               <div className="w-px h-8 bg-border" />
 
               {/* Sort */}
               <div className="flex items-center gap-2">
                 <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                 <select
                   value={sortBy}
                   onChange={(e) => setSortBy(e.target.value as SortOption)}
                   className="bg-card border border-border rounded-md px-3 py-2 text-sm text-foreground"
                 >
                   {sortOptions.map((opt) => (
                     <option key={opt.value} value={opt.value}>
                       {opt.label}
                     </option>
                   ))}
                 </select>
               </div>
             </div>
           </div>
 
           {/* Mobile Filters Panel */}
           {showFilters && (
             <motion.div
               initial={{ opacity: 0, height: 0 }}
               animate={{ opacity: 1, height: "auto" }}
               exit={{ opacity: 0, height: 0 }}
               className="lg:hidden mb-8 p-4 bg-card rounded-lg border border-border"
             >
               <div className="mb-4">
                 <label className="text-sm font-medium text-foreground mb-2 block">
                   Category
                 </label>
                 <div className="flex flex-wrap gap-2">
                   {categories.map((cat) => (
                     <Button
                       key={cat.value}
                       variant={activeCategory === cat.value ? "racing" : "outline"}
                       size="sm"
                       onClick={() => setActiveCategory(cat.value)}
                     >
                       {cat.label}
                     </Button>
                   ))}
                 </div>
               </div>
               <div>
                 <label className="text-sm font-medium text-foreground mb-2 block">
                   Sort By
                 </label>
                 <select
                   value={sortBy}
                   onChange={(e) => setSortBy(e.target.value as SortOption)}
                   className="w-full bg-secondary border border-border rounded-md px-3 py-2 text-sm text-foreground"
                 >
                   {sortOptions.map((opt) => (
                     <option key={opt.value} value={opt.value}>
                       {opt.label}
                     </option>
                   ))}
                 </select>
               </div>
             </motion.div>
           )}
 
           {/* Results Count */}
           <div className="mb-6">
             <p className="text-muted-foreground">
               Showing{" "}
               <span className="text-foreground font-medium">
                 {filteredProducts.length}
               </span>{" "}
               {filteredProducts.length === 1 ? "bike" : "bikes"}
             </p>
           </div>
 
           {/* Products Grid */}
           {isLoading ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {[...Array(6)].map((_, i) => (
                 <div
                   key={i}
                   className="h-96 rounded-xl bg-card border border-border animate-pulse"
                 />
               ))}
             </div>
           ) : filteredProducts.length > 0 ? (
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
               {filteredProducts.map((product, index) => (
                 <ProductCard key={product.id} product={product} index={index} />
               ))}
             </div>
           ) : (
             <div className="text-center py-16">
               <p className="text-muted-foreground text-lg mb-4">
                 No bikes found matching your criteria.
               </p>
               <Button
                 variant="outline"
                 onClick={() => {
                   setActiveCategory("all");
                   setSearchQuery("");
                 }}
               >
                 Clear Filters
               </Button>
             </div>
           )}
         </div>
       </section>
 
       <Footer />
     </div>
   );
 };
 
 export default Products;