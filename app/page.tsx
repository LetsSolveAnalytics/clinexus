"use client"

import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';
import Link from 'next/link';
import infoCards from './libs/InfoCards';
// import pricingCards from './libs/PricingCards';
import { CheckCheck, LucideIcon } from 'lucide-react';
import { ReactElement } from 'react';


export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: '100%', y: '100%' });

  useEffect(() => {
    function handleMouseMove(event: { clientX: any; clientY: any; }) {
      setMousePosition({
        x: `${event.clientX}px`,
        y: `${event.clientY}px`
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='min-h-screen w-full relative'>
      <Navbar />
      <main className='flex flex-col items-center justify-center'>
        <header id="home" className="flex flex-col-reverse md:flex-row w-full h-screen max-w-7xl items-center justify-center p-8 relative overflow-x-hidden"
          style={{
            background: `radial-gradient(200px circle at ${mousePosition.x} ${mousePosition.y}, rgba(255, 255, 255, 0.6), transparent 40%)`
          }}
        >
          <div className='w-full h-2/4 md:h-full md:w-2/5 flex flex-col justify-center items-center md:items-start gap-8'>
            <div className='flex flex-col gap-2'>
              <h1 className='text-4xl text-white font-black md:text-8xl'>Clinexus</h1>
              <h2 className='text-md text-white md:text-2xl'>The nexus of amplified access and equitable care.</h2>
            </div>
            <p className='max-w-md text-white text-sm md:text-base text-zinc-500'>A unified solution to streamline tedious documentation and repetitive workload with data-driven optimization</p>
            <div className='w-full flex items-center justify-center md:justify-start gap-4'>
            <Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#contactus">
              <button className='w-48 h-12 text-sm border-white-rounded-lg sm:text-base rounded bg-black text-white hover:bg-fuchsia-700 hover:text-white transition-colors rounded-full border '>Contact us</button> 
            </Link>
            </div>
          </div>

          <div className='w-full h-2/4 md:h-full md:w-3/5 flex items-center justify-center relative -z-10'>
            <Spline className="bg-black" scene='https://prod.spline.design/8glM91b9bsfBLBim/scene.splinecode' />
          </div>
        </header>

        <section id="about" className="h-fit min-h-screen w-full flex relative items-center justify-center p-8"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x} ${mousePosition.y}, rgba(255, 255, 255, 0.6), transparent 40%)`
          }}
        >
          <div className='absolute -z-10 h-full w-full overflow-hidden'>
            <Image src="/whirl.svg" fill className="absolute object-cover w-full overflow-visible sm:rotate-90" alt="Background Whirl" />
          </div>
          <div className="w-full h-full flex items-center justify-center flex-col gap-8 max-w-7xl">
            <h3 className='text-4xl  text-white md:text-5xl font-bold'>No More Time Wasted!</h3>
            <div className="w-full  text-white grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-1 gap-4 justify-between relative">
              {infoCards.map((infoCard) => {
                return (
                  <InfoCard key={infoCard.id} Icon={infoCard.icon} title={infoCard.title}>
                    <p className="text-sm  text-white sm:text-base text-center md:text-left">{infoCard.bodyText}</p>
                  </InfoCard>
                )
              })}
            </div>
          </div>
        </section>

        <section id="contactus" className="h-fit text-white min-h-screen w-full flex flex-col items-center justify-center gap-8 p-8"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x} ${mousePosition.y}, rgba(255, 255, 255, 0.6), transparent 40%)`
          }}
        >
          <h4 className="text-4xl text-white md:text-5xl font-bold">Contact us</h4>
          <div className='w-400 h-80 rounded flex flex-col justify-around items-center p-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>

          <Image src="/fuzel.jpg" width={200} height={200} className=" object-cover overflow-visible" alt="Fuzel image" />
          <h4 className="text-xl text-white md:text-xl font-bold">Gmail: fuzelahamed1999@gmail.com</h4>
          </div>       
          <div className='grid  text-white grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-2 items-center h-fit w-full max-w-3xl gap-8'>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

interface IInfoCardProps {
  title: string;
  Icon: LucideIcon;
  children: ReactElement<any, any>;
}

function InfoCard({ title, Icon, children }: IInfoCardProps) {
  return (
    <div className='w-full h-80 rounded flex flex-col justify-around items-center p-8 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20'>
      <div className="p-4 bg-fuchsia-700 rounded-full">
        <Icon />
      </div>
      <div>
        <h3 className='text-lg font-bold sm:text-xl'>{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
}

interface IPricingCardProps {
  title: string;
  benefits: string[]
  oneliner: string;
}

function Navbar() {
  return (
    <div className='w-full text-white h-16 backdrop-filter backdrop-blur-xl bg-opacity-20 border-b flex items-center justify-center'>
      <div className='max-w-7xl w-full flex items-center justify-between p-4'>
        <h6 className='font-bold'>Clinexus</h6>
        
        <ul className='flex gap-8'>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#home">Home</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#about">About</Link></li>
          <li><Link className='hover:text-fuchsia-500 transition-colors text-xs sm:text-base' href="#contactus">Contact Us</Link></li>
        </ul>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-white-900 text-white w-full py-4 text-center">
      <div className="bg-primary">
        <section className="max-w-[1400px] mx-auto text-white">
          <div className="grid md:grid-cols-3 py-5">
            <div className="py-8 px-4">
              <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3">
                Clinexus
              </h1>
              <p className="text-gray-400 text-left">
                Subscribe to our{" "}
                <span className="text-white font-bold">newsletter</span> for the
                monthly news updates.
              </p>
              <br />
              <div className="flex items-center h-10">
                <input
                  className="py-1 px-3 w-full h-[100%] inline-block focus:outline-none focus:border-sky-500 focus:ring-2 focus:ring-sky-500 bg-gray-800 border-gray-200 border-2"
                  type="text"
                  placeholder="Email"
                />
                <button className="bg-white hover:bg-white-200/75 h-full inline-block py-2 px-6 text-black">
                  Ok
                </button>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
              <div className="">
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Important Links
                  </h1>
                  <ul className={`flex flex-col gap-3 `}>
                    <li className="cursor-pointer hover:text-fuchsia-500">Home</li>
                    <li className="cursor-pointer hover:text-fuchsia-500">About</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-6">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    Links
                  </h1>
                  <ul className="flex flex-col gap-3 ">
                    <li className="cursor-pointer text-left hover:text-fuchsia-500">Home</li>
                    <li className="cursor-pointer text-left hover:text-fuchsia-500">About</li>
                  </ul>
                </div>
              </div>
              <div className="">
                <div className="py-8 px-4">
                  <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">
                    More Links
                  </h1>
                  <ul className="flex flex-col gap-3 ">
                    <li className="cursor-pointer text-left hover:text-fuchsia-500">Privacy</li>
                    <li className="cursor-pointer text-left hover:text-fuchsia-500">Terms & Conditions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <p>&copy; 2024 Clinexus. All rights reserved.</p>
    </footer>
  );
}
