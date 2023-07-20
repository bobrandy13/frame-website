import "pure-react-carousel/dist/react-carousel.es.css";
import bg from "public/background.jpg";
export default function Home({ tests }: { tests: any }) {
  return (
    <>
      <div className="bg-slate-300 dark:text-black">
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url('/background.jpg')`,
            width: "100%",
            height: "100%",
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-slate-300">
            <div className="max-w-md">
              <h1 className="mb-5 text-7xl font-bold">Welcome. </h1>
              <p className="mb-5 text-4xl">Steven&apos;s art and framing</p>
            </div>
          </div>
        </div>
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
    </>
  );
}
