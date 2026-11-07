import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Users,
  Target,
  Heart,
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/config/site";

const teamMembers = [
  {
    name: "Sokha Vann",
    role: "Founder & CEO",
    bio: "Former national cyclist with 15 years of professional racing experience.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop",
  },
  {
    name: "Dara Chea",
    role: "Head Mechanic",
    bio: "UCI certified mechanic with expertise in high-performance road bikes.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    name: "Lina Prak",
    role: "Sales Manager",
    bio: "Passionate cyclist dedicated to helping riders find their perfect bike.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
  },
  {
    name: "Rithy Seng",
    role: "Service Advisor",
    bio: "Expert in bike fitting and customization for optimal performance.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
  },
];

const milestones = [
  { year: "2020", event: "S-Works Cambodia founded in Phnom Penh" },
  { year: "2021", event: "Became official Specialized dealer for Cambodia" },
  { year: "2022", event: "Opened state-of-the-art service center" },
  { year: "2023", event: "Launched professional cycling team sponsorship" },
  { year: "2024", event: "Expanded to 500+ satisfied customers" },
];

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We only offer the finest cycling equipment and services.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building Cambodia's cycling community one ride at a time.",
  },
  {
    icon: Target,
    title: "Performance",
    description: "Helping every rider achieve their personal best.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We live and breathe cycling in everything we do.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-28 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="container mx-auto px-4 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Our Story
            </span>
            <h1 className="font-display text-5xl sm:text-6xl text-foreground mt-4 mb-6">
              ABOUT S-WORKS CAMBODIA
            </h1>
            <p className="text-xl text-muted-foreground">
              Cambodia's premier destination for high-performance road cycling.
              We bring world-class Specialized bikes and expert service to the
              Kingdom.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-4xl text-foreground mb-6">
                OUR JOURNEY
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  S-Works Cambodia was born from a passion for cycling and a
                  vision to bring world-class performance bikes to Southeast
                  Asia. Founded in 2020 by former national cyclist Sokha Vann,
                  we started as a small shop in Phnom Penh with a simple
                  mission: make professional-grade cycling accessible to
                  Cambodian riders.
                </p>
                <p>
                  As the exclusive Specialized dealer for Cambodia, we offer the
                  complete range of S-Works bikes—from the legendary Tarmac SL8
                  to the versatile Crux gravel machine. Our commitment to
                  excellence extends beyond sales to include professional bike
                  fitting, expert maintenance, and ongoing rider support.
                </p>
                <p>
                  Today, we're proud to serve a growing community of passionate
                  cyclists, from weekend warriors to competitive racers. Our
                  state-of-the-art service center and knowledgeable team ensure
                  every customer gets the personalized attention they deserve.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="font-display text-2xl text-foreground mb-6">
                MILESTONES
              </h3>
              {milestones.map((milestone, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-background rounded-lg border border-border"
                >
                  <span className="font-display text-2xl text-primary">
                    {milestone.year}
                  </span>
                  <span className="text-foreground">{milestone.event}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              What Drives Us
            </span>
            <h2 className="font-display text-4xl text-foreground mt-4">
              OUR VALUES
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center p-6 bg-card rounded-xl border border-border"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-xl text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              The People Behind S-Works
            </span>
            <h2 className="font-display text-4xl text-foreground mt-4">
              MEET OUR TEAM
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="font-display text-xl text-foreground">
                  {member.name}
                </h3>
                <p className="text-primary text-sm font-semibold uppercase tracking-wide mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Store Location */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-semibold uppercase tracking-widest">
              Visit Us
            </span>
            <h2 className="font-display text-4xl text-foreground mt-4">
              OUR LOCATION
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden border border-border h-[400px]"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.756067553765!2d104.91704977595376!3d11.568271744156898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951e96d257a6f%3A0x2b0b6e09e87b5b89!2sPhnom%20Penh%2C%20Cambodia!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="S-Works Cambodia Location"
              />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Address
                    </h3>
                    <p className="text-muted-foreground">
                      {siteConfig.address}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Phone
                    </h3>
                    <p className="text-muted-foreground">
                      {siteConfig.phone}
                      <br />
                      {siteConfig.whatsapp} (WhatsApp)
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Email
                    </h3>
                    <p className="text-muted-foreground">
                      {siteConfig.supportEmail}
                      <br />
                      {siteConfig.serviceEmail}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-card rounded-xl border border-border">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Opening Hours
                    </h3>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM
                      <br />
                      Saturday: 9:00 AM - 5:00 PM
                      <br />
                      Sunday: Closed
                    </p>
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

export default About;
