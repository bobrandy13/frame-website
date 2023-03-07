import { useEffect, useState } from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import Image from "next/image";
import Link from "next/link"
import image1 from "../public/image1.png"
import image2 from "../public/image2.png"
import image3 from "../public/image3.png"
import image4 from "../public/image4.png"
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function Home({ tests }: { tests: any }) {
  return (
    <>
      <div className="bg-slate-300 h-screen flex items-center justify-center">
        <div className="w-4/5">
          <CarouselProvider
            naturalSlideWidth={100}
            naturalSlideHeight={50}
            totalSlides={4}
          >
            <Slider>
              <Slide index={0}>
                <Image src={image1} alt="image 1" fill />
              </Slide>
              <Slide index={1}>
                <Image src={image2} alt="image 2" fill />
              </Slide>
              <Slide index={2}>
                <Image src={image3} alt="image 3" fill />
              </Slide>
              <Slide index={3}>
                <Image src={image4} alt="image 4" fill />
              </Slide>
            </Slider>
            <ButtonBack>Back</ButtonBack>
            <ButtonNext>Next</ButtonNext>
          </CarouselProvider>
        </div>
      </div>
    </>
  );
}
