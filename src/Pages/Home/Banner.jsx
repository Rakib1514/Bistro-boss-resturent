import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const carouselImg = [
  "https://i.ibb.co.com/vJKqrd3/05.png",
  "https://i.ibb.co.com/XssQyx9/06.png",
  "https://i.ibb.co.com/ZGpPyp5/01.jpg",
  "https://i.ibb.co.com/316brpQ/02.jpg",
  "https://i.ibb.co.com/K67h5CL/03.png",
  "https://i.ibb.co.com/Ldc5g5C/04.jpg",
];

const Banner = () => {
  return (
    <Carousel autoPlay className="select-none ">
      {carouselImg.map((img, idx) => (
        <div key={idx}>
          <img src={img} />
        </div>
      ))}
    </Carousel>
  );
};

export default Banner;
