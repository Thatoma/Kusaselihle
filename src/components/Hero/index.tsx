'use client'
import Link from "next/link";
import PayConSlider from "@/components/carousel/Slider";

const mainCarouselData = [{
  id: 1,
  title: "Kusaselihle Trading Enterprises",
  subTitle: "Cornerstones of Success",
  imgUrl: `/images/slider111.jpg`,
  description: ` A fast growing entity with a variety of offering in the
  market including but not limited to minerals such as
  Gold, Copper, Coal, Chrome, Lithium Concentrate,
  Sulphur, Andalusite, Oil and gas${`(Petroleum)`}.`,
  buttonText: "Shop Now",
  buttonLink: "#"
},
{
  id: 2,
  title: "Kusaselihle Trading Enterprises",
  subTitle: "Unlock Maximum Value",
  imgUrl: `/images/slider2.jpg`,
  description: `Best services with discounts and reliable benefits.Use of well-known brands when it comes to various transportation, civil, building and mining projects.Client satisfaction and transparent business within the services rendered.`,
  buttonText: "Shop Now",
  buttonLink: "#"
}];

const Hero = () => {
  return (
    <>
    
    <section
        id="home"
        className="relative z-10 overflow-hidden bg-white pb-0 pt-[90px] dark:bg-gray-dark md:pb-[0px] md:pt-[100px] xl:pb-[0px] xl:pt-[110px] 2xl:pb-[0px] 2xl:pt-[110px]"
      >
          <PayConSlider mainCarouselData={mainCarouselData}/>
           
      </section>
    </>
  );
};

export default Hero;
