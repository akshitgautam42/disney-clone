import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick";

const ImgSlider = (props) =>{
        let settings={
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow:1,
            slidesToScroll:1,
            autoplay: true,
        };
    return (

        <div>
            <Carousel {...settings}>
                <div>
                    <h3>1</h3>
                </div>
                <div>
                    <h3>2</h3>
                </div>
                <div>
                    <h3>3</h3>
                </div>
            </Carousel>
        </div>
    )
};

const Carousel= styled(Slider)`
    margin-top:20px;

    & > button{
        opacity: 0;
        height: 100%;
        width: 5vw;
        z-index: 1;
    }
    & :hover {
        opacity:1;
        transition: opacity 0.2x  ease 0s;
    }
    ul li button{
        &:before {
            font-size: 10px;
            color: rgb(150 ,150 ,171);
        }
    }
    li.slick-active button:before {
        color: white;
    }
`;

export default ImgSlider;