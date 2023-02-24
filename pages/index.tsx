import { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Image from "next/image";
import Link from "next/link"

export default function Home({ tests }: { tests: any }) {
  return (
    <>
      <div className="bg-slate-300  h-screen">
        <div className="flex pl-10 h-2/3 lg:w-full w-2/3">
          <div className="flex items-center rounded-sm">
            <Image
              src={"/../public/abstractFrameHome.jpg"}
              alt="home iamge"
              width={500}
              height={500}
            />
          </div>
          <div className="flex justify-end">
            <h1 className="text-6xl font-bold flex justify-center items-center m-10 hover:bg-slate-300">
              Steven&#39;s framing service
            </h1>
            <p className="text-lg">Welcome to our website</p>
          </div>
        </div>
      </div>
    </>
  );
}
