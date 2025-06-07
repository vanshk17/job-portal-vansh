import React from 'react'
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import JobListing from '../components/JobListing';
import AppDownload from '../components/AppDownload';
import Footer from '../components/Footer';


const Home=()=> {
  return (
    <div
    className="relative min-h-screen bg-cover bg-center"
    style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1556740738-b6a63e27c4df')`,
    }}
  >
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0"></div>
  
    {/* Content Layer */}
    <div className="relative z-10">
      <Navbar />
      <Hero />
      <JobListing />
      <AppDownload />
      <Footer />
    </div>
  </div>
  )
}  

export default Home