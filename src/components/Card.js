import React from 'react';

const CardList = () => {

    const button = [
        {
            des: "Programing",
        },
        {
            des: "Data Science",
        }, {
            des: "Technology",
        },
        {
            des: "Self Improvement",
        },
        {
            des: "Relationships",
        },
        {
            des: "Writings",
        },
        {
            des: "Machine Learming",
        },
        {
            des: "Productivity",
        },
        {
            des: "Politics",
        },
    ]





    const data = [
        {
            name: "Jonathan Lethem",
            title: "Be Kind, Be Kind, Be Kind",
            descrip: "Henry James, Mr. Rogers, and the Long Middle",
            time: "7 min read ·",
            year: "Sep 14",
            button: "Henry James",
            img: "./assets/images/image1.png",

        },
        {
            name: "Jonathan Lethem",
            title: "Be Kind, Be Kind, Be Kind",
            descrip: "Henry James, Mr. Rogers, and the Long Middle",
            time: "7 min read ·",
            year: "Sep 14",
            button: "Henry James",
            img: "./assets/images/person6.jpeg",

        },
        {
            name: "Jonathan Lethem",
            title: "Be Kind, Be Kind, Be Kind",
            descrip: "Henry James, Mr. Rogers, and the Long Middle",
            time: "7 min read ·",
            year: "Sep 14",
            button: "Henry James",
            img: "./assets/images/man1.jpeg",

        },
        {
            name: "Jonathan Lethem",
            title: "Be Kind, Be Kind, Be Kind",
            descrip: "Henry James, Mr. Rogers, and the Long Middle",
            time: "7 min read ·",
            year: "Sep 14",
            button: "Henry James",
            img: "./assets/images/man2.jpeg",

        },
        {
            name: "Jonathan Lethem",
            title: "Be Kind, Be Kind, Be Kind",
            descrip: "Henry James, Mr. Rogers, and the Long Middle",
            time: "7 min read ·",
            year: "Sep 14",
            button: "Henry James",
            img: "./assets/images/man3.jpeg",

        },
        {
            name: "Jonathan Lethem",
            title: "Be Kind, Be Kind, Be Kind",
            descrip: "Henry James, Mr. Rogers, and the Long Middle",
            time: "7 min read ·",
            year: "Sep 14",
            button: "Henry James",
            img: "./assets/images/man4.jpeg",

        },
        {
            name: "Jonathan Lethem",
            title: "Be Kind, Be Kind, Be Kind",
            descrip: "Henry James, Mr. Rogers, and the Long Middle",
            time: "7 min read ·",
            year: "Sep 14",
            button: "Henry James",
            img: "./assets/images/man5.jpeg",

        },
        {
            name: "Jonathan Lethem",
            title: "Be Kind, Be Kind, Be Kind",
            descrip: "Henry James, Mr. Rogers, and the Long Middle",
            time: "7 min read ·",
            year: "Sep 14",
            button: "Henry James",
            img: "./assets/images/man6.jpeg",

        },
        {
            name: "Jonathan Lethem",
            title: "Be Kind, Be Kind, Be Kind",
            descrip: "Henry James, Mr. Rogers, and the Long Middle",
            time: "7 min read ·",
            year: "Sep 14",
            button: "Henry James",
            img: "./assets/images/man7.jpeg",

        },
        {
            name: "Jonathan Lethem",
            title: "Be Kind, Be Kind, Be Kind",
            descrip: "Henry James, Mr. Rogers, and the Long Middle",
            time: "7 min read ·",
            year: "Sep 14",
            button: "Henry James",
            img: "./assets/images/man8.jpeg",

        },
        {
            name: "Jonathan Lethem",
            title: "Be Kind, Be Kind, Be Kind",
            descrip: "Henry James, Mr. Rogers, and the Long Middle",
            time: "7 min read ·",
            year: "Sep 14",
            button: "Henry James",
            img: "./assets/images/man9.jpeg",

        },
    ]


    return (
        <div className='container mt-md-5 mt-lg-5 mt-xxl-5 mt-xl-5 mt-1 '>
            <div className='row g-3 g-lg-5 g-xl-5 g-xxl-5'>
                <div className='col-md-11 col-xxl-7 col-xl-7 col-lg-7 col-12'>
                    {data.map((datas) => (


                        <div className='row mt-5'>

                            <div className='col-md-9 col-10'>
                                {/* first matter */}
                                <div className='row'>
                                    <div className='col-md-1 col-2'>
                                    <img className='rounded rounded-5' src={datas.img} height="30px" width="30px" alt='' />
                                    </div>
                                    <div className='col-md-10 col-9 '>
                                        <h4 className="Link section mt-1" style={{ fontSize: "13px" }}>{datas.name}</h4>

                                    </div>
                                </div>

                                {/* second matter */}

                                <div className='row mt-1'>
                                    <h2 className=" card-title Link section " style={{ fontSize: "16px" }}><b> {datas.title}</b></h2>
                                </div>

                                {/* third matter */}

                                <div className='row mt-2'>
                                    <h3 className="Link " style={{ fontSize: "16px", color: "#6B6B6B" }}>{datas.descrip}</h3>
                                </div>

                                {/* fourth matter */}

                                <div className='row '>
                                    <div className='col-md-4 col-7 mt-1' >
                                        <p style={{ fontSize: "12px", color: "#6B6B6B" }}
                                            className="  Link ">{datas.year} <span>·</span> {datas.time}</p>
                                    </div>
                                    <div className='col-md-3 gx-1  col-5'><button style={{ fontSize: "13px", color: "#6B6B6B" }}
                                        className="border border-light rounded-5 button Link " muted>{datas.button}</button></div>
                                </div>

                            </div>

                            <div className='col-md-3 col-12'>
                                <img src={datas.img} alt='' width='100%' height='100%' />
                            </div>

                        </div>








                    ))
                    }
                </div>


                {/* <div className=''> */}
                <div className='col-lg-5 col-md-12 col-12 ' >
                    <h2 className='Link mt-5 ' style={{ fontSize: "16px", color: "#242424" }}><b>Discover more of what matters to you</b></h2>
                    <div className='row gx-lg-1 gy-lg-2 px-lg-2 gx-md-5 gy-md-3 gy-3' >

                        {button.map((buttons) => (

                            <div className='col-lg-4 col-md-2 col-5' >
                                <button style={{ fontSize: "14px", color: "#242424", padding: "8px 16px" }}
                                    className="border border-light rounded-5 button Link " muted>{buttons.des}</button>
                            </div>
                        ))
                        }
                        {/* 
                        <div className='col-md-4'>
                        <button style={{ fontSize: "14px", color: "#242424", padding: "8px 16px" }}
                            className="border border-light rounded-5 button Link " muted>{buttons.des}</button>
                        </div>
                        <div className='col-md-4'>
                        <button style={{ fontSize: "14px", color: "#242424", padding: "8px 16px" }}
                            className="border border-light rounded-5 button Link " muted>Data Science</button>
                        </div>
                        <div className='col-md-4'>
                        <button style={{ fontSize: "14px", color: "#242424", padding: "8px 16px" }}
                            className="border border-light rounded-5 button Link " muted>Technology</button>
                        </div> */}

                    </div>
                    </div>


                </div>

            </div>

        // </div>
    );
};

export default CardList;