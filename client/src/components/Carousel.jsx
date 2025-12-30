import { useEffect, useState } from "react";

const banners = [
    {
        title: "Budget Store",
        subtitle: "Get extra up to 50% off",
        desc: "On everyday essentials",
        image: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/GW/Uber/Nov/Nov_New_3000x1200._CB542180708_.jpg",
    },
    {
        title: "Amazon Pay ICICI Bank",
        subtitle: "5% Unlimited Cashback",
        desc: "On all Amazon purchases",
        image: "https://images-eu.ssl-images-amazon.com/images/G/31/OHL_Events/img24/HSS/Dec24/3000x1200_PC2._CB540801550_.jpg",
    },
    {
        title: "Top Deals on Electronics",
        subtitle: "Up to 60% off",
        desc: "Limited time offers",
        image: "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/SVD/Dec/Makeup_PCn._CB540861816_.jpg",
    },
    {
        title: "Electronics Carnival",
        subtitle: "Minimum 40% off",
        desc: "Men | Women | Kids",
        image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg",
    },
];


const Carousel = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % banners.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="carousel-wrapper">
            <div
                className="carousel-track"
                style={{ transform: `translateX(-${index * 100}%)` }}
            >
                {banners.map((item, i) => (
                    <div className="carousel-slide" key={i}>
                        <img src={item.image} alt={item.title} />

                        <div className="carousel-content">
                            <h1>{item.title}</h1>
                            <h3>{item.subtitle}</h3>
                            <p>{item.desc}</p>
                            <span className="shop-now">Shop now</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Carousel;
