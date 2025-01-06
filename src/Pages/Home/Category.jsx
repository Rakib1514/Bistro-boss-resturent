import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import SectionTitle from "../../components/SectionTitle";

const Category = () => {
  return (
    <div>
      <SectionTitle subHeading={"From 11.00am to 10.00pm" } heading={'Order Online'}/>
      <Swiper
      slidesPerView={4}
      spaceBetween={30}
      centeredSlides={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper mb-24 select-none"
    >
      <SwiperSlide>
        <img src="https://i.ibb.co.com/5TCZgf9/slide1.jpg" alt="" />
        <h3
          className="md:text-3xl text-xl uppercase text-center -translate-y-8 md:-translate-y-16 text-white"
          style={{ textShadow: "2px 2px 5px black" }}
        >
          Salad&apos;s
        </h3>
      </SwiperSlide>
      <SwiperSlide >
        <img src="https://i.ibb.co.com/x3pbf5B/slide2.jpg" alt="" />
        <h3
          className="md:text-3xl text-xl uppercase text-center -translate-y-8 md:-translate-y-16 text-white"
          style={{ textShadow: "2px 2px 5px black" }}
        >
          Pizza&apos;s
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co.com/16PxjMD/slide3.jpg" alt="" />
        <h3
          className="md:text-3xl text-xl uppercase text-center -translate-y-8 md:-translate-y-16 text-white"
          style={{ textShadow: "2px 2px 5px black" }}
        >
          Soup&apos;s
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co.com/Z25G19V/slide4.jpg" alt="" />
        <h3
          className="md:text-3xl text-xl uppercase text-center -translate-y-8 md:-translate-y-16 text-white"
          style={{ textShadow: "2px 2px 5px black" }}
        >
          Dessert&apos;s
        </h3>
      </SwiperSlide>
      <SwiperSlide>
        <img src="https://i.ibb.co.com/6Hpnptz/slide5.jpg" alt="" />
        <h3
          className="md:text-3xl text-xl uppercase text-center -translate-y-8 md:-translate-y-16 text-white"
          style={{ textShadow: "2px 2px 5px black" }}
        >
          Salad&apos;s
        </h3>
      </SwiperSlide>
    </Swiper>
    </div>
  );
};

export default Category;
