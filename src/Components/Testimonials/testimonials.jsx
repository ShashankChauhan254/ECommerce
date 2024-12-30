import React from 'react';
import Slider from 'react-slick';

const TestimonialsData = [
    {
        id: 1,
        name: "Manisha Bharadwaj",
        title: "lorem ipsum dolor sit amet consectetur adipiscing elit nullam vel eros sit amet arcu vestibulum accumsan in in leo etiam non elit dui",
        img: "https://picsum.photos/101/101",
    },
    {
        id: 2,
        name: "Shashank Chauhan",
        title: "lorem ipsum dolor sit amet consectetur adipiscing elit nullam vel eros sit amet arcu vestibulum accumsan in in leo etiam non elit dui",
        img: "https://picsum.photos/102/102",
    },
    {
        id: 3,
        name: "Ashish Dochania",
        title: "lorem ipsum dolor sit amet consectetur adipiscing elit nullam vel eros sit amet arcu vestibulum accumsan in in leo etiam non elit dui",
        img: "https://picsum.photos/103/103",
    },
    {
        id: 4,
        name: "Sanket Mahajan",
        title: "lorem ipsum dolor sit amet consectetur adipiscing elit nullam vel eros sit amet arcu vestibulum accumsan in in leo etiam non elit dui",
        img: "https://picsum.photos/104/104",
    },
    {
        id: 5,
        name: "TheMarsionX",
        title: "lorem ipsum dolor sit amet consectetur adipiscing elit nullam vel eros sit amet arcu vestibulum accumsan in in leo etiam non elit dui",
        img: "https://picsum.photos/105/105",
    }
]

const Testimonials = () => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "liner",
        PauseOnHover: true,
        pauseOnFocus: true,
        Responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="py-10 mb-10">
            <div className="container">
                <div className="text-center mb-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">What out customers are saying</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Testimonials</h1>
                    <p data-aos="fade-up" className="text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.</p>
                </div>
                <div data-aos="zoom-in" className="relative">
                    <Slider {...settings}>
                        {TestimonialsData.map((data) => (
                            <div className="my-6">
                                <div key={data.id} className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-slate-600 bg-primary/10 relative">
                                    <div className="mb-4">
                                        <img src={data.img} alt="" className="rounded-full w-20 h-20" />
                                    </div>
                                    <div className="flex flex-col items-center gap-4">
                                        <div className="space-y-[3px]">
                                            <p className="text-xs dark:text-slate-300 text-gray-500">{data.text}</p>
                                            <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">{data.name}</h1>
                                        </div>
                                    </div>
                                    <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;