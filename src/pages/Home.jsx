import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import Categories from '../components/Categories'
import FeaturedEvents from '../components/FeaturedEvents'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  return (
    <div>
      <div className="min-h-screen bg-slate-950">
        <Navbar />

        <HeroSection />
        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <FeaturedEvents />
        <Testimonial />
        <Footer />
      </div>
    </div>
  )
}

export default Home
