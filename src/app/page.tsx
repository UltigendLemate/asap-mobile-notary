'use client';
import About from "@/components/About";
import Commonly from "@/components/Commonly";
import ContactUs from "@/components/ContactUs";
import Footer from "@/components/Footer";
import Heading from "@/components/Heading";
import Hero from "@/components/Hero";
import MoreServices from "@/components/MoreServices";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import ProcessServer from "@/components/ProcessServer";
import Promise from "@/components/Promise";
import RequestCallback from "@/components/RequestCallback";
import ServiceGuidelines from "@/components/ServiceGuidelines";
import Services from "@/components/Services";
import Sliderss from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import RequestDialog from "@/components/requestCallDialog";
import { Button } from "@/components/ui/button";
import WhyUs from "@/components/whyus";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import CountUp from "react-countup";


const mont = Montserrat({ subsets: ["latin"] });


export default function Home() {
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    // Set a timer to toggle the open state to true after 2 seconds (2000 milliseconds)
    const timer = setTimeout(() => {
      setOpen(true);
    }, 10000);

    // Cleanup the timer if the component unmounts before the timer completes
    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="app-scrollbar">
      <Navbar />
      <Hero/>
      <Services/>
      <MoreServices/>
      {/* <About /> */}
      {/* <Promise /> */}
      <ProcessServer/>
      <WhyUs />
      {/* <ServiceGuidelines /> */}
      {/* <Commonly /> */}
      <section className="py-16 px-4">
        <div className="container mx-auto md:text-center">
          <Heading title="Our Numbers Speak"/>

          <p className="text-lg md:text-xl mb-8">
            Serving Broward & Palm Beach County, we set the industry benchmark
            by offering affordable notary services right at your doorstep. Join
            the community of over 5000 satisfied clients who trust us.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-white text-center">
            <div className="text-purple-700 font-bold rounded-lg shadow-lg p-6">
            <CountUp end={2000} enableScrollSpy={true} useGrouping={false} suffix="+" className="text-4xl md:text-6xl  mb-2" />
              <p className="text-2xl md:text-xl">Satisfied Clients</p>
            </div>

            <div className="text-purple-700 font-bold rounded-lg shadow-lg p-6">
            <CountUp end={95} enableScrollSpy={true} suffix="%" className="text-4xl md:text-6xl  mb-2" />

              <p className="text-2xl md:text-xl">Repeat Customers</p>
            </div>

            <div className="text-purple-700 rounded-lg font-bold shadow-lg p-6">
            <CountUp end={2015} enableScrollSpy={true} useGrouping={false} className="text-4xl md:text-6xl  mb-2" />
              <p className="text-2xl md:text-xl">Industry Experience</p>
            </div>
          </div>
        </div>
      </section>
      <Pricing/>
      <Testimonials/>
      <Sliderss />
      <RequestCallback/>
      <RequestDialog open={open} setOpen={setOpen} />

      <ContactUs />
      <Footer/>
    </main>
  );
}
