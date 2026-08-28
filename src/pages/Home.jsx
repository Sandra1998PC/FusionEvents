import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import FeaturedEvents from "../components/FeaturedEvents";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";

function Home() {

  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="min-h-screen bg-slate-950">

      <Navbar />

      <section id="Home" className="scroll-mt-20">
        <HeroSection />
      </section>

      <section id="Categories" className="scroll-mt-20">
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </section>

      <section id="Events" className="scroll-mt-20">
        <FeaturedEvents />
      </section>

      <Testimonial />

      <section id="Contact" className="scroll-mt-20">
        <Footer />
      </section>

    </div>
  );
}

export default Home;