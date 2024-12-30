import React from 'react';
import Img1 from '../../assets/women/women1.jpg';
import Img2 from '../../assets/women/women2.jpg';
import Img3 from '../../assets/women/women3.jpg';
import Img4 from '../../assets/women/women4.jpg';
import {FaStar} from 'react-icons/fa6';

const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Women Ethnic",
        rating: 4.5,
        color: "Black",
        obDelay: "0",
    },
    {
        id: 2,
        img: Img2,
        title: "Women western",
        rating: 5,
        color: "White",
        obDelay: "200",
    },
    {
        id: 3,
        img: Img3,
        title: "Goggles",
        rating: 4.0,
        color: "Brown",
        obDelay: "400",
    },
    {
        id: 4,
        img: Img4,
        title: "Women Ethnic",
        rating: 4.7,
        color: "Yellow",
        obDelay: "600",
    },
    {
        id: 5,
        img: Img2,
        title: "Women Ethnic",
        rating: 4.9,
        color: "Black",
        obDelay: "800",
    }
]

const Products = () => {
    return (
        <div className="mt-14 mb-12">
            <div className="container">
                <div className="text-center mg-10 max-w-[600px] mx-auto">
                    <p data-aos="fade-up" className="text-sm text-primary">Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className="text-3xl font-bold">Products</h1>
                    <p data-aos="fade-up" className="text-xl text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, consequat nibh. Etiam non elit dui. Nullam vel eros sit amet arcu vestibulum accumsan in in leo.</p>
                </div> 
                <div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
                        {ProductsData.map((data) => (
                            <div data-aos="fade-up" data-aos-delay={data.obDelay} key={data.id} className="space-y-3">
                                <img src={data.img} alt="Cover Image" className="w-[105px] h-[250px] object-cover rounded-md" />
                                <div>
                                    <h3 className="font-semibold">{data.title}</h3>
                                    <p className="text-sm text-gray-600">{data.color}</p>
                                    <div className="flex items-center gap-1">
                                        <FaStar className="text-yellow-400" />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">View All Button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;