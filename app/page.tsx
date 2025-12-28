"use client";
import React, { useState, useEffect } from "react";
import {
  Phone,
  MapPin,
  Clock,
  MessageCircle,
  Scissors,
  Menu,
  X,
  Star,
  Award,
  Users,
  CheckCircle,
  Calendar,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const RoyalCutSalon = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    {
      name: "Signature Haircut",
      price: "50 AED",
      desc: "Professional styling consultation included",
      icon: "✂️",
      popular: true,
    },
    {
      name: "Beard Sculpting",
      price: "30 AED",
      desc: "Hot towel treatment & precision trimming",
      icon: "💈",
    },
    {
      name: "Royal Package",
      price: "70 AED",
      desc: "Hair + Beard + Complimentary beverage",
      icon: "👑",
      popular: true,
      save: "Save 10 AED",
    },
    {
      name: "Premium Facial",
      price: "80 AED",
      desc: "Deep cleansing, steam & relaxing massage",
      icon: "✨",
    },
    {
      name: "Hair Coloring",
      price: "120 AED",
      desc: "Premium products, natural results",
      icon: "🎨",
    },
    {
      name: "Kids Cut",
      price: "35 AED",
      desc: "Patient service for our young gentlemen",
      icon: "👦",
    },
  ];

  const reviews = [
    {
      name: "Ahmed K.",
      rating: 5,
      text: "Best barber in DSO! Always leave feeling fresh.",
    },
    {
      name: "Mohammed R.",
      rating: 5,
      text: "Professional service, clean salon, fair prices.",
    },
    {
      name: "Omar S.",
      rating: 5,
      text: "My go-to place for the past 2 years. Highly recommend!",
    },
  ];

  const gallery = [
    { bg: "from-amber-600 to-orange-600", label: "Classic Cuts" },
    { bg: "from-slate-600 to-slate-800", label: "Modern Styles" },
    { bg: "from-amber-700 to-amber-900", label: "Beard Grooming" },
    { bg: "from-neutral-700 to-neutral-900", label: "Premium Care" },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const WhatsAppButton = ({ fixed = false, text = "Book on WhatsApp" }) => (
    <a
      href="https://wa.me/971501234567?text=Hi%2C%20I%27d%20like%20to%20book%20an%20appointment"
      target="_blank"
      rel="noopener noreferrer"
      className={`${
        fixed
          ? "fixed bottom-6 right-6 w-16 h-16 shadow-2xl animate-pulse hover:animate-none z-50"
          : "w-full"
      } bg-linear-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold ${
        fixed ? "" : "py-4 px-8"
      } rounded-full transition-all duration-300 flex items-center justify-center ${
        fixed ? "" : "gap-3"
      } hover:scale-105 shadow-lg`}
    >
      <FaWhatsapp className={fixed ? "w-7 h-7" : "w-5 h-5"} />
      {!fixed && text}
    </a>
  );

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Navigation */}
      <nav
        className={`${
          scrolled
            ? "bg-neutral-900/95 backdrop-blur-lg shadow-xl"
            : "bg-neutral-900"
        } text-white sticky top-0 z-40 transition-all duration-300`}
      >
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="bg-linear-to-br from-amber-500 to-amber-600 p-2 rounded-lg">
                <Scissors className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold block">Royal Cut</span>
                <span className="text-xs text-amber-500">Premium Salon</span>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex gap-8">
              {["home", "services", "gallery", "reviews", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize hover:text-amber-500 transition-colors font-medium ${
                      activeSection === section ? "text-amber-500" : ""
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              {["home", "services", "gallery", "reviews", "contact"].map(
                (section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`capitalize text-left py-2 hover:text-amber-500 transition-colors ${
                      activeSection === section
                        ? "text-amber-500 font-semibold"
                        : ""
                    }`}
                  >
                    {section}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === "home" && (
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-neutral-900 via-neutral-800 to-amber-900"></div>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
          </div>

          <div className="relative max-w-6xl mx-auto px-4 py-20 md:py-32">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="inline-flex items-center gap-2 bg-linear-to-r from-amber-500 to-amber-600 text-white px-5 py-2 rounded-full text-sm font-bold shadow-lg">
                  <MapPin className="w-4 h-4" />
                  Dubai Silicon Oasis
                </div>
                <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                  Open Now
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight text-white">
                Your Style,
                <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-amber-400 to-amber-600">
                  Our Craft
                </span>
              </h1>

              <p className="text-xl md:text-2xl mb-8 text-neutral-300 leading-relaxed">
                Experience premium grooming with Dubai's most trusted barbers.
                Walk-ins welcome, appointments preferred.
              </p>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 mb-10 text-white">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                  <span className="font-semibold">4.9/5 Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-amber-500" />
                  <span className="font-semibold">1000+ Happy Clients</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-amber-500" />
                  <span className="font-semibold">5+ Years Experience</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <WhatsAppButton text="Book Appointment Now" />
                <a
                  href="tel:+971501234567"
                  className="bg-white text-neutral-900 hover:bg-neutral-100 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:scale-105"
                >
                  <Phone className="w-5 h-5" />
                  <span className="text-nowrap">Call Now</span>
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Wave */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg
              viewBox="0 0 1440 120"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
                fill="rgb(250, 250, 250)"
              />
            </svg>
          </div>
        </section>
      )}

      {/* Services Section */}
      {activeSection === "services" && (
        <section className="py-16 md:py-24 bg-linear-to-b from-white to-neutral-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Sparkles className="w-4 h-4" />
                Premium Services
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-4 text-neutral-900">
                Grooming Excellence
              </h2>
              <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                Professional styling and grooming services tailored to your
                unique style
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group relative bg-white border-2 border-neutral-200 rounded-3xl p-6 hover:border-amber-500 hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {service.popular && (
                    <div className="absolute top-0 right-0 bg-linear-to-br from-amber-500 to-amber-600 text-white text-xs font-bold px-4 py-1 rounded-bl-2xl rounded-tr-2xl shadow-lg">
                      ⭐ POPULAR
                    </div>
                  )}
                  {service.save && (
                    <div className="absolute top-0 right-0 bg-linear-to-br from-green-500 to-green-600 text-white text-xs font-bold px-4 py-1 rounded-bl-2xl rounded-tr-2xl shadow-lg">
                      💰 {service.save}
                    </div>
                  )}

                  <div className="text-5xl mb-4">{service.icon}</div>

                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-2xl font-bold text-neutral-900 group-hover:text-amber-600 transition-colors">
                      {service.name}
                    </h3>
                    <div className="text-right">
                      <span className="text-3xl font-black text-amber-600 block">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  <p className="text-neutral-600 leading-relaxed">
                    {service.desc}
                  </p>

                  <div className="mt-4 pt-4 border-t border-neutral-200">
                    <button className="text-amber-600 font-semibold hover:text-amber-700 transition-colors flex items-center gap-2">
                      Book Now <CheckCircle className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Special Offer Banner */}
            <div className="relative overflow-hidden bg-linear-to-r from-amber-500 via-amber-600 to-orange-600 rounded-3xl p-8 md:p-12 text-white shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
              <div className="relative z-10 text-center max-w-3xl mx-auto">
                <div className="text-6xl mb-4">🎉</div>
                <h3 className="text-3xl md:text-4xl font-black mb-4">
                  First Visit Special!
                </h3>
                <p className="text-xl mb-6 opacity-90">
                  Get 20% OFF any service on your first appointment
                </p>
                <WhatsAppButton text="Claim Your Discount Now" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Gallery Section */}
      {activeSection === "gallery" && (
        <section className="py-16 md:py-24 bg-neutral-900 text-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-4">Our Work</h2>
              <p className="text-xl text-neutral-400">
                Crafting confidence, one cut at a time
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {gallery.map((item, idx) => (
                <div
                  key={idx}
                  className={`relative h-64 bg-linear-to-br ${item.bg} rounded-2xl overflow-hidden group cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-xl flex items-center justify-center`}
                >
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <Scissors className="w-16 h-16 text-white/80 mb-4 group-hover:scale-110 transition-transform" />
                    <p className="font-bold text-lg text-white">{item.label}</p>
                    <p className="text-sm text-white/70 mt-2">
                      Professional Results
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-all duration-300"></div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-neutral-800 rounded-3xl p-8 text-center">
              <p className="text-xl text-neutral-300 mb-6">
                📸 <strong>Real client photos coming soon!</strong> Follow us on
                social media to see our latest work
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="#"
                  className="bg-linear-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  📷 Follow on Instagram
                </a>
                <a
                  href="#"
                  className="bg-linear-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  👍 Like on Facebook
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Reviews Section */}
      {activeSection === "reviews" && (
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-bold mb-4">
                <Star className="w-4 h-4 fill-amber-800" />
                Client Reviews
              </div>
              <h2 className="text-4xl md:text-6xl font-black mb-4 text-neutral-900">
                Trusted by 1000+ Clients
              </h2>
              <div className="flex items-center justify-center gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 text-amber-500 fill-amber-500"
                  />
                ))}
                <span className="text-3xl font-bold text-neutral-900 ml-3">
                  4.9/5
                </span>
              </div>
              <p className="text-xl text-neutral-600">
                Based on Google Reviews
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {reviews.map((review, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-50 border-2 border-neutral-200 rounded-3xl p-6 hover:border-amber-500 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-amber-500 fill-amber-500"
                      />
                    ))}
                  </div>
                  <p className="text-neutral-700 mb-4 leading-relaxed text-lg">
                    "{review.text}"
                  </p>
                  <p className="font-bold text-neutral-900">{review.name}</p>
                </div>
              ))}
            </div>

            <div className="bg-linear-to-br from-neutral-900 to-neutral-800 rounded-3xl p-8 md:p-12 text-white text-center">
              <h3 className="text-3xl md:text-4xl font-black mb-4">
                Ready to Experience Royal Treatment?
              </h3>
              <p className="text-xl text-neutral-300 mb-8 max-w-2xl mx-auto">
                Join hundreds of satisfied clients who trust us with their
                grooming needs
              </p>
              <WhatsAppButton text="Book Your Appointment" />
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {activeSection === "contact" && (
        <section className="py-16 md:py-24 bg-linear-to-b from-neutral-50 to-white">
          <div className="max-w-6xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-black mb-4 text-neutral-900">
                Visit Us Today
              </h2>
              <p className="text-xl text-neutral-600">
                Walk-ins welcome or book ahead for guaranteed service
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white border-2 border-neutral-200 rounded-3xl p-8 hover:border-amber-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-linear-to-br from-amber-500 to-amber-600 p-3 rounded-2xl">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl mb-2 text-neutral-900">
                        Location
                      </h3>
                      <p className="text-neutral-600 leading-relaxed">
                        Dubai Silicon Oasis
                        <br />
                        Near DSO Metro Station
                        <br />
                        Dubai, UAE
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-neutral-200 rounded-3xl p-8 hover:border-amber-500 hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-linear-to-br from-green-500 to-green-600 p-3 rounded-2xl">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl mb-2 text-neutral-900">
                        Contact
                      </h3>
                      <a
                        href="tel:+971501234567"
                        className="text-amber-600 hover:text-amber-700 font-bold text-lg block mb-2"
                      >
                        +971 50 123 4567
                      </a>
                      <p className="text-neutral-600">Available 9 AM - 10 PM</p>
                    </div>
                  </div>
                </div>

                <div className="bg-linear-to-br from-amber-500 to-amber-600 rounded-3xl p-8 text-white shadow-xl">
                  <div className="flex items-start gap-4">
                    <div className="bg-white/20 p-3 rounded-2xl">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-black text-xl mb-3">Working Hours</h3>
                      <div className="space-y-2 text-white/90">
                        <div className="flex gap-3 justify-between">
                          <span>Saturday - Thursday</span>
                          <span className="font-bold">9:00 AM - 10:00 PM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Friday</span>
                          <span className="font-bold">2:00 PM - 10:00 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <WhatsAppButton text="📱 Book via WhatsApp" />
                  <a
                    href="tel:+971501234567"
                    className="w-full bg-linear-to-r from-neutral-900 to-neutral-800 text-white hover:from-neutral-800 hover:to-neutral-700 font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    📞 Call Now
                  </a>
                </div>
              </div>

              <div className="h-full min-h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28875.93424857778!2d55.37826!3d25.117854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f651a88874c89%3A0x72509f092d877ea3!2sDubai%20Silicon%20Oasis!5e0!3m2!1sen!2sae!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Royal Cut Salon Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="bg-linear-to-br from-amber-500 to-amber-600 p-2 rounded-lg">
                <Scissors className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-black text-xl block">
                  Royal Cut Salon
                </span>
                <span className="text-sm text-amber-500">
                  Premium Grooming in Dubai
                </span>
              </div>
            </div>

            <div className="flex gap-6 text-neutral-400">
              <a href="#" className="hover:text-amber-500 transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-amber-500 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>

          <div className="border-t border-neutral-800 mt-8 pt-8 text-center text-neutral-500">
            <p>© 2024 Royal Cut Salon Dubai. All rights reserved.</p>
            <p className="mt-2 text-sm">Website designed for excellence</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <WhatsAppButton fixed={true} />
    </div>
  );
};

export default RoyalCutSalon;
