import { motion } from "framer-motion";
import { Heart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { useWishlist } from "@/context/WishlistContext";

const Favorites = () => {
  const { items } = useWishlist();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Saved Bikes
            </span>
            <h1 className="font-display text-5xl sm:text-6xl text-foreground mt-2 flex items-center gap-4">
              <Heart className="w-10 h-10 text-red-500 fill-current" />
              YOUR FAVORITES
            </h1>
          </motion.div>

          {items.length === 0 ? (
            <div className="text-center py-20">
              <Heart className="w-16 h-16 text-muted-foreground/30 mx-auto mb-4" />
              <h2 className="font-display text-2xl text-foreground mb-2">
                No favorites yet
              </h2>
              <p className="text-muted-foreground mb-8">
                Tap the heart icon on any bike to save it here.
              </p>
              <Link to="/products">
                <Button variant="racing">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Browse Products
                </Button>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {items.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Favorites;
