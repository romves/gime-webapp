import Footer from '@/layouts/Footer'
import Artikel from '@/layouts/Home/Artikel'
import Hero from '@/layouts/Home/Hero'
import Section2 from '@/layouts/Home/Section2'
import Section3 from '@/layouts/Home/Section3'
import Section4 from '@/layouts/Home/Section4'
import Navbar from '@/layouts/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Artikel />
      <Footer />
    </>
  )
}
