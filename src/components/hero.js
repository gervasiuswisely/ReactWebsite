import { Carousel } from 'react-bootstrap';
import hero1 from '../assets/carousel/1.jpg';
import hero2 from '../assets/carousel/2.jpg';
import hero3 from '../assets/carousel/3.jpg';
const Hero = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={hero1} alt="first slide" />
        <Carousel.Caption>
          <h3>First shoes</h3>
          <p>Nike Air Force </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hero2} alt="second slide" />
        <Carousel.Caption>
          <h3>Second Shoes</h3>
          <p>Ultra Boost</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={hero3} alt="thirdslide" />
        <Carousel.Caption>
          <h3>Third shoes</h3>
          <p>Air Jordan</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};
export default Hero;
