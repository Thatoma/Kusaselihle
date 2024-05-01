"use client";

import Link from "next/link";

import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

import ModalVideo from "react-modal-video";

const Video = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative z-10 py-16 md:py-20 lg:py-14">
      <div className="container">

        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[800px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Iron Ore and Manganese
                </h1>
                <p className="mb-12 text-base !leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
                  The "Griqualand West Super Group" is developed in the recently delineated Northern Cape and Northwest Provinces in South Africa to the south and west,
                  it extends into the southernmost parts of Botswana to the north {`(Beukes, 1986).`}
                  The western limits of the Transvaal Super group in the above area coincide
                  with the western margin of the Kaapvaal craton, which is defined by a sharp tectonic contact with the Kheis Province (Thomas
                  et ai. 1994a, b). <br /> <br />
                  The Kheis Province represents the easternmost tectonic "block of the wider
                  Namaqualand Metamorphic Province and has undergone a complex tectonometamorphic history involving
                  an early orogenic event as well as subsequent structural rejuvenation related to the Kibaran tectono-magmatic
                  event {`(Thomas ET ai. 1994b).`}
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Video;
