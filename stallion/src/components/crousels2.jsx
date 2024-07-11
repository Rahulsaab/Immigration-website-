import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

const CarouselComponent = () => {
    const settings = {
        infinite: true,
        speed: 600,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const slidesData = [
        { title: 'Singapore Packages', image: 'pexels-v-h-1454055-2804038.jpg', link: '/singapore' },
        { title: 'Thailand Packages', image: 'pexels-flodahm-1074442.jpg', link: '/thailand' },
        { title: 'Japan Packages', image: 'pexels-ryutaro-5745029.jpg', link: '/japan' },
        { title: 'Dubai Packages', image: 'pexels-pixabay-162031.jpg', link: '/dubai' },
        { title: 'Europe Packages', image: 'pexels-alexazabache-3879071.jpg', link: '/europe' },
        { title: 'Bali Packages', image: 'pexels-aronvisuals-1694621.jpg', link: '/bali' },
    ];

    return (
        <div className="carousel-container">
            <Slider {...settings}>
                {slidesData.map((slide, index) => (
                    <div key={index} className="carousel-slide">
                        <div className="card">
                            <div 
                                className="card-front"
                                style={{ backgroundImage: `url(${slide.image})` }}
                            >
                                <h3 style={{fontSize:"1.2rem" , fontWeight:"bolder",paddingBottom:"1rem" , textShadow:"1px 1px 10px #000, 1px 1px 10px #ccc"}}>{slide.title}</h3>
                            </div>
                            <div className="card-back">
                                <div 
                                    className="background-image"
                                    style={{ backgroundImage: `url(${slide.image})` }}
                                ></div>
                                <div className="content">
                                    <Link to={slide.link}>
                                        <button style={{backgroundColor:"#b78628", borderRadius:"20px"}}>Know More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default CarouselComponent;
