import Head from 'next/head'
import Image from 'next/image'
import type { NextPage } from 'next'
import Header from '../components/Header'
import styles from '../styles/Home.module.css'
import Hero from '../components/Hero';

 const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Head>
        <title>Calin Portfolio</title>
      </Head>
      
      <Header />

       {/* Hero */}
      <section id='hero' className='snap-center'>
        <Hero />
      </section>
      {/* About */}

      {/* Experience */}

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}

export default Home;

