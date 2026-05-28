"use client";

import { Montserrat } from "next/font/google";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from "swiper/modules";
const mont = Montserrat({ subsets: ["latin"] });

const Hero = () => {
  const items = [
    {
      img: "/image.jpg",
      eyebrow: "If it isn't documented, it didn't happen.",
      title: "SECURE YOUR TRANSACTIONS WITH CONFIDENCE",
      desc: "Our certified notaries ensure the legitimacy and authenticity of your important documents.",
    },
    {
      img: "https://images.pexels.com/photos/7841477/pexels-photo-7841477.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "BONDED | LICENSED | INSURED",
      desc: "Experience a faster, smoother, and more convenient way to get your documents notarized.",
    },
    {
      img: "https://images.pexels.com/photos/3184416/pexels-photo-3184416.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "COMPLETE NOTARY SERVICES 24 Hours A DAY",
      desc: "Our certified notaries guide you through the process, ensuring your documents meet all legal requirements.",
    },
  ];
  return (
    <>
      <Swiper slidesPerView={1} spaceBetween={0} loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      modules={[Parallax, Autoplay]}
    //   speed={300}
      parallax={true}>
        {items.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <div
                className="bg-cover bg-bottom bg-no-repeat relative  md:pt-20 h-screen  flex items-center md:justify-center"
                style={{ backgroundImage: `url(${item.img})` }}
                
              >
                <div className="absolute h-full w-full bg-black/50"></div>
                <div className="text-white md:text-center z-10 md:max-w-screen-xl space-y-4 p-5 absolute top-1/2 -translate-y-1/3">
                  {item.eyebrow && (
                    <p
                      className={`!italic text-sm md:text-lg text-white ${mont.className}`}
                      data-swiper-parallax="-300"
                    >
                      &ldquo;{item.eyebrow}&rdquo;
                    </p>
                  )}
                  <h1 className={`text-3xl md:text-6xl font-bold ${mont.className}`} data-swiper-parallax="-500">
                    {item.title}
                  </h1>
                  <p className="text-lg md:text-2xl md:px-10" data-swiper-parallax="-400">{item.desc}</p>
                  <Link href="#contactus" data-swiper-parallax="-400">
                    <Button variant={'secondary'} className="mt-4" data-swiper-parallax="-400">Contact Us</Button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Hero;
