import React from "react";
import BannerImg from "/img/upscbg.jpg";
import { GrTime } from "react-icons/gr";
import { GrBook } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiTreeGrowth } from "react-icons/gi";

import Slider from 'react-slick';
import Img1 from "/img/upscbg.jpg";
import Img2 from "/img/upscbg.jpg";
import Img3 from "/img/upscbg.jpg";
import Img4 from "/img/upscbg.jpg";


const TestimonialData = [
  {
    id: 1,
    name: "LIDKAR",
    text: "Seashore Technologies, led a groundbreaking digitalization initiative for the Leather Industries Department of Karnataka. Their strategic approach streamlined intricate processes, fostering efficiency and paving the way for a department that is not only agile but also technologically advanced.",
    // img: "../../assets/testimonials/lidkar.jpg",
    img: Img1,
  },
  {
    id: 2,
    name: "BWSSB",
    text: "We innovatively deployed a state-of-the-art water monitoring system for BWSSB, optimizing usage and ensuring sustainable practices through advanced technology. Seashore Technologies' commitment drives impactful solutions for resource efficiency.",
    // img: "https://th.bing.com/th/id/OIP.xcoqd_iCN2Blog07fO16aAAAAA?rs=1&pid=ImgDetMain",
    img: Img2,
  },
  {
    id: 3,
    name: "Renewable Energy Ventures",
    text: "Ventured into the import and export of windmills, a significant stride towards contributing to renewable energy resources. Project approved by KIADB, showcasing Seashore Technologies' commitment to sustainable and innovative solutions.",
    img: Img3,
  },
  {
    id: 4,
    name: "ST Department of Karnataka",
    text: "In our commitment to transparency and efficiency, Seashore Technologies developed a state-of-the-art web portal for the ST Department of Karnataka. This platform stands as a testament to their dedication to providing seamless online application benefits.",
    img: Img4,
  },
];

// sign-up= prelims-mains
export function SignUp() {
  return (
    <><div className="py-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Our regular guidance includes
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            "Empower Your Skills with Us."
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            asperiores modi Sit asperiores modi
          </p>
        </div>
      </div>
    </div><>

        <section className="m-8 mt-1 flex">
          <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
            <div className="container">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
                {/* image section */}
                <div data-aos="zoom-in">
                  <img
                    src={BannerImg}
                    alt=""
                    className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover" />
                </div>

                {/* text details section */}
                <div className="flex flex-col justify-center gap-6 sm:pt-0">
                  <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
                    "Empower Your Skills with Us."
                  </h1>
                  <p
                    data-aos="fade-up"
                    className="text-sm text-gray-500 tracking-wide leading-5"
                  >
                    Seashore Technology's Corporate Training blends precision and scalability, offering engaging online sessions with tailored content.
                    With effortless accessibility and progress monitoring tools, empower your workforce for customized and impactful skill development.
                  </p>
                  <div className="flex flex-col gap-4">
                    <div data-aos="fade-up" className="flex items-center gap-4">
                      <GrTime className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                      <p>Personalized Events</p>
                    </div>
                    <div data-aos="fade-up" className="flex items-center gap-4">
                      <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                      <p>Customized Initiatives</p>
                    </div>
                    <div data-aos="fade-up" className="flex items-center gap-4">
                      <GrBook className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                      <p>Tailored programs</p>
                    </div>
                    <div data-aos="fade-up" className="flex items-center gap-4">
                      <GiTreeGrowth className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                      <p>Individualized Career Forums</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="py-10 mb-10">
          <div className="container">
            {/* header section */}
            <div className="text-center mb-10 max-w-[600px] mx-auto">
              <p data-aos="fade-up" className="text-sm text-primary">
                Our regular guidance includes
              </p>
              <h1 data-aos="fade-up" className="text-3xl font-bold">
                "Empower Your Skills with Us."
              </h1>
              <p data-aos="fade-up" className="text-xs text-gray-400">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                asperiores modi Sit asperiores modi
              </p>
            </div>

            {/* Testimonial cards */}
            {/* <div data-aos="zoom-in">
      <Slider {...settings}>
        {TestimonialData.map((data) => (
          <div className="my-6">
            <div
              key={data.id}
              className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
            >
              <div className="mb-4">
                <img
                  src={data.img}
                  alt=""
                  className="rounded-full w-20 h-20" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="space-y-3">
                  <p className="text-xs text-gray-500">{data.text}</p>
                  <h1 className="text-xl font-bold text-black/80 dark:text-light">
                    {data.name}
                  </h1>
                </div>
              </div>
              <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                ,,
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </div> */}
          </div>
        </div>
      </></>
  );
}

export default SignUp;
