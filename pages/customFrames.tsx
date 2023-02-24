import React, { useEffect, useState } from "react";
import room from "../public/room.jpg"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';

function CustomframesPage() {
  const [windowWidth, setWidth] = useState<Number>(0); 
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log(typeof window.innerWidth)
      setWidth(window.innerWidth)
    }
  }, [windowWidth])
  return ( 
    <>
      <div className='w-full h-screen flex justify-center items-center bg-slate-200'>
        <h1 className='text-5xl relative -top-20 text-black'>We can make custom frames for you!</h1>
      </div>
      <h1 className="text-3xl font-bold text-center pt-10 mt-2">Have a look at our samples</h1>
      <div className="p-20">
        <Carousel dynamicHeight={true} >
          <div>
            <Image src="https://picsum.photos/400/200" alt="random generated image" width={1000} height={300}/>
            <p>Image 1</p>
          </div>
          <div>
            <Image src={require("../public/abstractFrameHome.jpg")} alt="random generated image"width={1900} height={600}/>
            
            <p>Image 1</p>
          </div>
          <div>
            <Image src="https://picsum.photos/400/200" alt="random generated image"width={1920} height={600}/>
            <p>Image 1</p>
          </div>
        </Carousel>

      </div>
    </>
   );
}



export default CustomframesPage;