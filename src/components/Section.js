
import React from 'react';

const Section = () => {
    const cardData = [
        {
            name: "M.G. Siegler",
            cal: "500ish",
            title: "The Too-Slick Apple Event",
            time: "Sep 14 · 7 min read",
            img:"./assets/images/person1.jpg",
        },
        {
            name: "Juntao Qiu",
            cal: "ITNEXT",
            title: "Why Web UI Development Is So Hard?",
            time: "Sep 14 · 7 min read",
            img:"./assets/images/person2.jpg",
        },
        {
            name: "The Useful Tech",
            cal: "Mac O’Clock",
            title: "I Tried the New AirPods Pro Features, and I Absolutely Love It",
            time: "Sep 14 · 7 min read",
            img:"./assets/images/person3.jpg",
        },
        {
            name: "Will Lockett",
            cal: "Predict",
            title: "Tesla Should Be Worried About Toyota",
            time: "Sep 14 · 7 min read",
            img:"./assets/images/person4.avif",
        },
        {
            name: "Bryn Bodayle",
            cal: "The Airbnb Tech Blog",
            title: "Unlocking SwiftUI at Airbnb, and I Absolutely Love It",
            time: "Sep 14 · 7 min read",
            img:"./assets/images/person5.jpg",
        },
        {
            name: "Katie Cooper",
            cal: "UX Collective",
            title: "Color for brand designers working with product teams",
            time: "Sep 14 · 7 min read",
            img:"./assets/images/person6.jpeg",
        },
    ];

    return (
        <div className="container  position-relative mt-5">
            <div className="row  row-cols-1 row-cols-md-2 row-cols-lg-3  g-4">
                {cardData.map((card) => (
                    <div className="col ">
                        {/* <div className="card"> */}

                        <div className="card-body">

                            <h4 className=" card-title Link section" style={{ fontSize: "13px" }}>
                                <span><img className='rounded rounded-5' src={card.img} height="30px" width="30px" alt='' /> </span>
                                <b className='ms-2'>{card.name} </b>
                                <span className="text-muted">in</span>
                                <b> {card.cal}</b>
                            </h4>
                            <h2 className=" card-title Link section mt-2" style={{ fontSize: "16px" }}>
                                <b>{card.title}</b>
                            </h2>
                            <p
                                style={{ fontSize: "13px", color: "#6B6B6B" }}
                                className=" card-text Link lh-lg mt-1"
                            >
                                {card.time}
                            </p>

                            {/* <h5 className="card-title">{card}</h5>
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.description}</p> */}
                        </div>
                    </div>
                    //   </div>
                ))}
            </div>
            <hr className='d-block d-md-none d-lg-none d-xl-none d-xxl-none mt-5'/>
        </div>
    );
};

export default Section;
