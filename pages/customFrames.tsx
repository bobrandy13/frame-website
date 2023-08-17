import React, { useEffect, useState } from "react";
import room from "../public/room.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import Link from "next/link";

function CustomframesPage() {
  const [windowWidth, setWidth] = useState<Number>(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(typeof window.innerWidth);
      setWidth(window.innerWidth);
    }
  }, [windowWidth]);
  return (
    <>
      {/* <div className="w-full h-screen flex flex-col justify-center items-center bg-slate-200">
        <h1 className="text-6xl relative -top-20 text-center  text-black">
          We can make custom frames for you
        </h1>
        <h1 className="text-3xl font-titles relative -top-10 dark:text-white">
          Contact Us, and we can get you a quote.{" "}
        </h1>
        <Link href="#contactUs">
          <div className="w-auto h-auto bg-white p-2 rounded">
            Contact Us Now.
          </div>
        </Link
      </div>
      <h1 className="text-3xl font-bold text-center pt-10 mt-2">
        Have a look at our samples
      </h1> */}
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Custom frames</h1>
            <p className="py-6">We can make custom picture frames for you.</p>
            <Link href="#contactUs" className="btn btn-primary">
              Contact Us now.
            </Link>
          </div>
        </div>
      </div>
      <div className="p-20">
        <Carousel dynamicHeight={true}>
          <div>
            <Image
              src="https://picsum.photos/2000/1000"
              alt="random generated image"
              width={1000}
              height={300}
            />
            <p>Image 1</p>
          </div>
          <div>
            <Image
              src={require("../public/abstractFrameHome.jpg")}
              alt="random generated image"
              width={1900}
              height={600}
            />

            <p>Image 2</p>
          </div>
          <div>
            <Image
              src="https://picsum.photos/2000/1000"
              alt="random generated image"
              width={1920}
              height={600}
            />
            <p>Image 1</p>
          </div>
        </Carousel>
      </div>
    </>
  );
}

export default CustomframesPage;
