import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import SectionTitle from "@/components/Common/SectionTitle";

import SharePost from "@/components/Blog/SharePost";
import TagButton from "@/components/Blog/TagButton";
import Image from "next/image";

import { Metadata } from "next";


export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="Kusaselihle Trading Enterprises (Pty) Ltd."
      />
      <section id="about" className="py-16 md:py-2 lg:py-2">
        <div className="container">
          <SectionTitle
            title="About Us"
            paragraph=""
            center
          />
           <div className="mb-10 w-full overflow-hidden rounded">
              <div className="relative aspect-[80/20] w-full sm:aspect-[90/24]">
                <Image
                  src="/images/services/petroliumim.jpg"
                  alt="image"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          <div>
            <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
              Kusaselihle Trading Enterprises {`(Pty)`} Ltd is a fastgrowing entity with a variety of offering in the
              market including but not limited to minerals such as &nbsp;
              <strong className="text-primary dark:text-white">
                Gold, Copper, Coal, Chrome, Lithium Concentrate,
                Sulphur, Andalusite, Oil and gas{`(Petroleum)`}.
              </strong>
            </p>
            <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
              This growth needs to be matched with &nbsp;
              <span className="text-primary underline dark:text-white">
                better service
                delivery from enthusiastic mandates
              </span>
              &nbsp; who understand and matches needs of all clients to our company’s offerings.
            </p>
           
            <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">

              <div className="text-center">
                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Vision.
                </h3>
              </div>
              <p className="text-center text-base font-medium text-body-color">
                To enhance a business environment that is conducive to economic transformation and reliable services.
              </p>

              <span className="absolute left-0 top-0 z-[-1]">


                <svg
                  width="132"
                  height="109"
                  viewBox="0 0 132 109"
                  fill="#ce7e00"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                    fill="url(#paint0_linear_111:606)"
                  />
                  <path
                    opacity="0.5"
                    d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                    fill="url(#paint1_linear_111:606)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_111:606"
                      x1="94.7523"
                      y1="82.0246"
                      x2="8.40951"
                      y2="52.0609"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#ce7e00" stopOpacity="0.06" />
                      <stop
                        offset="1"
                        stopColor="#ce7e00"
                        stopOpacity="0"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_111:606"
                      x1="90.3206"
                      y1="58.4236"
                      x2="1.16149"
                      y2="50.8365"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#ce7e00" stopOpacity="0.06" />
                      <stop
                        offset="1"
                        stopColor="#ce7e00"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width="53"
                  height="30"
                  viewBox="0 0 53 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.8"
                    cx="37.5"
                    cy="37.5"
                    r="37.5"
                    fill="#ce7e00"
                  />
                  <mask
                    id="mask0_111:596"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="75"
                    height="75"
                  >
                    <circle
                      opacity="0.8"
                      cx="37.5"
                      cy="37.5"
                      r="37.5"
                      fill="#ce7e00"
                    />
                  </mask>
                  <g mask="url(#mask0_111:596)">
                    <circle
                      opacity="0.8"
                      cx="37.5"
                      cy="37.5"
                      r="37.5"
                      fill="url(#paint0_radial_111:596)"
                    />
                    <g opacity="0.8" filter="url(#filter0_f_111:596)">
                      <circle
                        cx="40.8089"
                        cy="19.853"
                        r="15.4412"
                        fill="#ce7e00"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_111:596"
                      x="4.36768"
                      y="-16.5881"
                      width="72.8823"
                      height="72.8823"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="10.5"
                        result="effect1_foregroundBlur_111:596"
                      />
                    </filter>
                    <radialGradient
                      id="paint0_radial_111:596"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                    >
                      <stop stopOpacity="0.47" />
                      <stop offset="1" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            </div>
            <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">

              <div className="text-center">
                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Mission.
                </h3>
              </div>
              <p className="text-center text-base font-medium text-body-color">
                To become one of the most trusted companies within the services rendered and products supplied.
              </p>

              <span className="absolute left-0 top-0 z-[-1]">


                <svg
                  width="132"
                  height="109"
                  viewBox="0 0 132 109"
                  fill="#ce7e00"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                    fill="url(#paint0_linear_111:606)"
                  />
                  <path
                    opacity="0.5"
                    d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                    fill="url(#paint1_linear_111:606)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_111:606"
                      x1="94.7523"
                      y1="82.0246"
                      x2="8.40951"
                      y2="52.0609"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#ce7e00" stopOpacity="0.06" />
                      <stop
                        offset="1"
                        stopColor="#ce7e00"
                        stopOpacity="0"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_111:606"
                      x1="90.3206"
                      y1="58.4236"
                      x2="1.16149"
                      y2="50.8365"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#ce7e00" stopOpacity="0.06" />
                      <stop
                        offset="1"
                        stopColor="#ce7e00"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width="53"
                  height="30"
                  viewBox="0 0 53 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.8"
                    cx="37.5"
                    cy="37.5"
                    r="37.5"
                    fill="#ce7e00"
                  />
                  <mask
                    id="mask0_111:596"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="75"
                    height="75"
                  >
                    <circle
                      opacity="0.8"
                      cx="37.5"
                      cy="37.5"
                      r="37.5"
                      fill="#ce7e00"
                    />
                  </mask>
                  <g mask="url(#mask0_111:596)">
                    <circle
                      opacity="0.8"
                      cx="37.5"
                      cy="37.5"
                      r="37.5"
                      fill="url(#paint0_radial_111:596)"
                    />
                    <g opacity="0.8" filter="url(#filter0_f_111:596)">
                      <circle
                        cx="40.8089"
                        cy="19.853"
                        r="15.4412"
                        fill="#ce7e00"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_111:596"
                      x="4.36768"
                      y="-16.5881"
                      width="72.8823"
                      height="72.8823"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="10.5"
                        result="effect1_foregroundBlur_111:596"
                      />
                    </filter>
                    <radialGradient
                      id="paint0_radial_111:596"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                    >
                      <stop stopOpacity="0.47" />
                      <stop offset="1" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
            </div>
         


            <div className="relative z-10 mb-10 overflow-hidden rounded-md bg-primary bg-opacity-10 p-8 md:p-9 lg:p-8 xl:p-9">
            <div className="text-center">
                <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Values.
                </h3>
              </div>
              <p className="text-center text-base font-medium text-body-color">
                • We value excellence, Trust, Respect and Mutual relationship. <br/>
                • Friendly communication and social responsibility to aspire quality services.
              </p>
              <span className="absolute left-0 top-0 z-[-1]">
                <svg
                  width="132"
                  height="109"
                  viewBox="0 0 132 109"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                    fill="url(#paint0_linear_111:606)"
                  />
                  <path
                    opacity="0.5"
                    d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                    fill="url(#paint1_linear_111:606)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_111:606"
                      x1="94.7523"
                      y1="82.0246"
                      x2="8.40951"
                      y2="52.0609"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.06" />
                      <stop
                        offset="1"
                        stopColor="white"
                        stopOpacity="0"
                      />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_111:606"
                      x1="90.3206"
                      y1="58.4236"
                      x2="1.16149"
                      y2="50.8365"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="white" stopOpacity="0.06" />
                      <stop
                        offset="1"
                        stopColor="white"
                        stopOpacity="0"
                      />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              <span className="absolute bottom-0 right-0 z-[-1]">
                <svg
                  width="53"
                  height="30"
                  viewBox="0 0 53 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    opacity="0.8"
                    cx="37.5"
                    cy="37.5"
                    r="37.5"
                    fill="#ce7e00"
                  />
                  <mask
                    id="mask0_111:596"
                    style={{ maskType: "alpha" }}
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="75"
                    height="75"
                  >
                    <circle
                      opacity="0.8"
                      cx="37.5"
                      cy="37.5"
                      r="37.5"
                      fill="#ce7e00"
                    />
                  </mask>
                  <g mask="url(#mask0_111:596)">
                    <circle
                      opacity="0.8"
                      cx="37.5"
                      cy="37.5"
                      r="37.5"
                      fill="url(#paint0_radial_111:596)"
                    />
                    <g opacity="0.8" filter="url(#filter0_f_111:596)">
                      <circle
                        cx="40.8089"
                        cy="19.853"
                        r="15.4412"
                        fill="white"
                      />
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_f_111:596"
                      x="4.36768"
                      y="-16.5881"
                      width="72.8823"
                      height="72.8823"
                      filterUnits="userSpaceOnUse"
                      colorInterpolationFilters="sRGB"
                    >
                      <feFlood
                        floodOpacity="0"
                        result="BackgroundImageFix"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <feGaussianBlur
                        stdDeviation="10.5"
                        result="effect1_foregroundBlur_111:596"
                      />
                    </filter>
                    <radialGradient
                      id="paint0_radial_111:596"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                    >
                      <stop stopOpacity="0.47" />
                      <stop offset="1" stopOpacity="0" />
                    </radialGradient>
                  </defs>
                </svg>
              </span>
              <br></br>
             
            </div>
            <div className="w-full px-4 lg:w-8/12">
            <h3 className="font-xl mb-10 font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-tight lg:text-xl lg:leading-tight xl:text-2xl xl:leading-tight">
                  Philosophy
                </h3>
              
                  <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
                  KUSASELIHLE TRADING ENTERPRISE commits to business excellence through dedication of:
                  </p>
                  <ul className="mb-10 list-inside list-disc text-body-color">
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Consistent quality services
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Consistent innovation
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    No substitute for quality.
                    </li>
                    <li className="mb-2 text-base font-medium text-body-color sm:text-lg lg:text-base xl:text-lg">
                    Use of knowledgeable suppliers to build trust and good relationship
                    </li>
                  </ul>
            </div>

           
          </div>
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">

          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
