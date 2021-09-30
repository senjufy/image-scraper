import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const ImgSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img
            className="w-full object-cover h-96 block mx-auto relative transform hover:border-purple-600 transition duration-500 hover:scale-105"
            src="https://images.unsplash.com/photo-1597434002293-fc9bb06371d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80"
            alt=""
          />
          <h1 className="absolute ml-10 font-bold text-white text-4xl -mt-20">
            𝘺𝘰𝘶𝘳 𝘰𝘯𝘦 𝘴𝘵𝘰𝘱 𝘧𝘰𝘳 𝘧𝘳𝘦𝘦 𝘪𝘮𝘢𝘨𝘦𝘴
          </h1>
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img
            className="w-full object-cover h-96 block mx-auto relative transform hover:border-purple-600 transition duration-500 hover:scale-105"
            src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1074&q=80"
            alt=""
          />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img
            className="w-full object-cover h-96 block mx-auto relative transform hover:border-purple-600 transition duration-500 hover:scale-105"
            src="https://images.unsplash.com/photo-1531357849429-cb2342edff87?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1228&q=80"
            alt=""
          />
        </a>
      </Wrap>

      <Wrap>
        <a>
          <img
            className="w-full object-cover h-96 block mx-auto relative transform hover:border-purple-600 transition duration-500 hover:scale-105"
            src="https://images.unsplash.com/photo-1596905738125-a6b51b1bdbb6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2083&q=80"
            alt=""
          />
        </a>
      </Wrap>
    </Carousel>
  );
};

const Carousel = styled(Slider)`
  & > button {
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover {
      opacity: 1;
      transition: opacity 0.2s ease 0s;
    }
  }

  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  li.slick-active button:before {
    color: white;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-prev {
    left: -75px;
  }

  .slick-next {
    right: -75px;
  }
`;

const Wrap = styled.div`
  cursor: pointer;
  position: relative;

  a {
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;

    &:hover {
      padding: 0;
      border: 2px solid rgba(106, 53, 156, 0.8);
    }
  }
`;

export default ImgSlider;
