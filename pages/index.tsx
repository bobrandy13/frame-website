import 'pure-react-carousel/dist/react-carousel.es.css';
export default function Home({ tests }: { tests: any }) {
  return (
    <>
      <div className="bg-slate-300">
        <div className="bg-slate-300 h-screen flex items-center justify-center">
          <h1 className="text-3xl font-bold text-center">
            C&S Art and Framing Service
          </h1>
          {/* <div className="w-4/5"> */}
            {/* <CarouselProvider
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
            </CarouselProvider> */}
          {/* </div> */}
        </div>
      </div>
    </>
  );
}
