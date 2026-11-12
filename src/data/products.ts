 import tarmacSL8 from "@/assets/hero-bike.jpg";
 import aethos from "@/assets/bikes/endurance/aethos.jpg";
 import venge from "@/assets/bikes/aero/venge.jpg";
 import crux from "@/assets/bikes/gravel/crux.jpg";
 import roubaix from "@/assets/bikes/endurance/roubaix.jpg";
 import tarmacSL7 from "@/assets/bikes/road/tarmac-sl7.jpg";
 import shiv from "@/assets/bikes/triathlon/shiv.jpg";
 import aeroHandlebars from "@/assets/accessories/aero-handlebars.jpg";
 import aeroWheels from "@/assets/accessories/aero-wheels.jpg";
 import carbonFrame from "@/assets/accessories/carbon-frame.jpg";
 import drivetrain from "@/assets/accessories/drivetrain.jpg";
 
 export type BikeCategory = "road" | "aero" | "endurance" | "gravel" | "triathlon";
 
 export interface Product {
   id: string;
   name: string;
   category: BikeCategory;
   price: number;
   image: string;
   gallery?: string[];
   weight: string;
   groupset: string;
   frameCarbon: string;
   description: string;
   features: string[];
   inStock: boolean;
   isNew?: boolean;
   isBestSeller?: boolean;
 }
 
 export const categories: { value: BikeCategory | "all"; label: string }[] = [
   { value: "all", label: "All Bikes" },
   { value: "road", label: "Road Racing" },
   { value: "aero", label: "Aero" },
   { value: "endurance", label: "Endurance" },
   { value: "gravel", label: "Gravel" },
   { value: "triathlon", label: "Triathlon" },
 ];
 
 export const products: Product[] = [
   {
     id: "tarmac-sl8",
     name: "S-Works Tarmac SL8",
     category: "road",
     price: 14500,
     image: tarmacSL8,
     gallery: [aeroWheels, carbonFrame, drivetrain],
     weight: "6.7 kg",
     groupset: "Shimano Dura-Ace Di2",
     frameCarbon: "FACT 12r",
     description:
       "The lightest Tarmac ever made. Win Tunnel tested and World Tour proven, the SL8 is the ultimate race machine.",
     features: [
       "FACT 12r carbon frame - 685g",
       "Fully integrated cockpit",
       "45 seconds aero savings over 40km",
       "Roval Rapide CLX wheels",
     ],
     inStock: true,
     isNew: true,
     isBestSeller: true,
   },
   {
     id: "aethos",
     name: "S-Works Aethos",
     category: "road",
     price: 12800,
     image: aethos,
     gallery: [carbonFrame, drivetrain],
     weight: "5.9 kg",
     groupset: "Shimano Dura-Ace Di2",
     frameCarbon: "FACT 12r",
     description:
       "Pure climbing performance. The Aethos is designed for riders who want the ultimate lightweight race bike.",
     features: [
       "Sub-600g frameset",
       "Rider-First Engineered",
       "D'Aluisio Smartweld technology",
       "Perfect climbing geometry",
     ],
     inStock: true,
     isBestSeller: true,
   },
   {
     id: "venge",
     name: "S-Works Venge",
     category: "aero",
     price: 13200,
     image: venge,
     gallery: [aeroHandlebars, aeroWheels],
     weight: "7.2 kg",
     groupset: "Shimano Dura-Ace Di2",
     frameCarbon: "FACT 11r",
     description:
       "Pure speed. The Venge is the fastest aero road bike we've ever made, dominating sprint finishes worldwide.",
     features: [
       "120 seconds saved over 40km",
       "FreeFoil Shape Library tubes",
       "Integrated Aerofly II cockpit",
       "Wind-tunnel optimized",
     ],
     inStock: true,
   },
   {
     id: "crux",
     name: "S-Works Crux",
     category: "gravel",
     price: 11500,
     image: crux,
     gallery: [carbonFrame, drivetrain],
     weight: "7.4 kg",
     groupset: "SRAM Red AXS XPLR",
     frameCarbon: "FACT 12r",
     description:
       "The lightest gravel bike in the world. Built for racing, ready for adventure.",
     features: [
       "725g FACT 12r frame",
       "47mm tire clearance",
       "Future Shock 2.0 ready",
       "Gravel-specific geometry",
     ],
     inStock: true,
     isNew: true,
   },
   {
     id: "roubaix",
     name: "S-Works Roubaix",
     category: "endurance",
     price: 12200,
     image: roubaix,
     gallery: [drivetrain, carbonFrame],
     weight: "7.5 kg",
     groupset: "Shimano Dura-Ace Di2",
     frameCarbon: "FACT 11r",
     description:
       "Smooth is fast. Conquer the cobbles and long days in the saddle with Future Shock suspension.",
     features: [
       "Future Shock 2.0 suspension",
       "Pavé Seatpost compliance",
       "33mm tire clearance",
       "Endurance geometry",
     ],
     inStock: true,
   },
   {
     id: "tarmac-sl7",
     name: "S-Works Tarmac SL7",
     category: "road",
     price: 11900,
     image: tarmacSL7,
     gallery: [aeroWheels, carbonFrame],
     weight: "6.9 kg",
     groupset: "Shimano Dura-Ace Di2",
     frameCarbon: "FACT 11r",
     description:
       "The previous generation Tarmac that redefined what a race bike could be. Still a proven winner.",
     features: [
       "FACT 11r carbon frame",
       "Aero + lightweight balance",
       "Integrated cockpit design",
       "Race-proven geometry",
     ],
     inStock: true,
   },
   {
     id: "shiv",
     name: "S-Works Shiv TT",
     category: "triathlon",
     price: 14800,
     image: shiv,
     gallery: [aeroHandlebars, carbonFrame],
     weight: "8.1 kg",
     groupset: "Shimano Dura-Ace Di2",
     frameCarbon: "FACT 11r",
     description:
       "The ultimate time trial and triathlon machine. Designed for pure speed against the clock.",
     features: [
       "Integrated hydration system",
       "Extreme aero optimization",
       "Di2 hidden integration",
       "Adjustable TT geometry",
     ],
     inStock: false,
     isNew: true,
   },
 ];