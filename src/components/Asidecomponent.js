import React from "react";
import { Link } from "react-router-dom";
import { Icon } from '@iconify/react';

const Asidecomponent = () => {
    const component2 = [
        {
            name: "Kelli Huggins",
            in: "in",
            sidehead: "The Belladonna Comedy.",
            title: "The Weird Sister’s Guide for How Not to Officiate Your Brother’s Wedding."
        },
        {
            name: "Andrew Anderson",
            in: "",
            sidehead: "",
            title: "Arguing about facts doesn’t work — why Politics should be like Couples Therapy"
        },
        {
            name: "William Sidnam",
            in: "in",
            sidehead: "Full Frame",
            title: "The Torn Posters in the Paris Metro (October 2023)"
        }
    ]

    const colordata = [
        {
            des: "New writer FAQ"
        },
        {
            des: "Expert writing advice"
        },
        {
            des: "Grow your readership"
        }
    ]

    const links = [
        {
            linkname: "Help",
            linkurl: "https://help.medium.com/hc/en-us?source=home---two_column_layout_sidebar----------------------------------"
        },
        {
            linkname: "Status",
            linkurl: "https://medium.statuspage.io/?source=home---two_column_layout_sidebar----------------------------------"
        },
        {
            linkname: "Writers",
            linkurl: "https://medium.com/creator-tools?source=home---two_column_layout_sidebar----------------------------------"
        },
        {
            linkname: "Blog",
            linkurl: "https://blog.medium.com"
        },
        {
            linkname: "Careers",
            linkurl: "https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e"
        },
        {
            linkname: "Privacy",
            linkurl: "https://policy.medium.com/medium-privacy-policy-f03bf92035c9"
        },
        {
            linkname: "Terms",
            linkurl: "https://policy.medium.com/medium-terms-of-service-9db0094a1e0f"
        },
        {
            linkname: "About",
            linkurl: ""
        },
       
        {
            linkname: "Teams",
            linkurl: ""
        }
    ]

    return (
        <div>
            <h2 className='section link' style={{ fontSize: "18px" }}>Staff Picks</h2>
            <div className='row mt-3'>

                {component2.map((matter) => (
                    <div className='col-xxl-12 col-lg-12  mb-1'>
                        <div className='row'>
                            <div className='row'>
                                <div className=' col-xxl-2 col-lg-3'>
                                    <img className='img-thumbnail border border-0' src='./assets/images/logos.png' height={40} width={40} alt='medium logo' />
                                </div>
                                <div className='col-xxl-10 col-lg-9'>
                                    <p className='Link section mt-1' style={{ fontSize: "12px" }}><b>{matter.name}</b><span style={{ color: "#6B6B6B" }}>{matter.in}</span> <span style={{ color: "#242424" }}><b style={{ fontSize: "11px" }}>{matter.sidehead}</b></span><span style={{ color: "#6B6B6B" }}></span></p>
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-xxl-12'>
                                <h2 className='section Link' style={{ fontSize: "14px" }}><b>{matter.title}</b></h2>
                            </div>
                        </div>

                    </div>

                ))}
                <p><Link to="https://medium.com/?tag=javascript" className="text-success text-decoration-none section" style={{ fontSize: "13px" }}>See the full list</Link></p>
            </div>

            <div className="row rounded-1 mt-3" style={{ backgroundColor: "#c4e2ff" }}>
                <div className="row ">
                    <div className="col-xxl-11 col-lg-10 mt-4">
                        <h2 className="section Link" style={{ fontSize: "16px" }}><b>Writing on Medium</b></h2>
                    </div>
                    <div className="col-xxl-1 col-lg-2"><Icon icon="iconoir:cancel" color="#6b6b6b" width="20" height="20" /></div>

                </div>


                <div className="row mt-3">

                    {colordata.map((infor) => (
                        <div className="col-xxl-12 mb-2">
                            <h2 className="section Link" style={{ fontSize: "15px" }}><strong>{infor.des}</strong></h2>
                        </div>
                    ))}


                </div>

                <div className="row mt-3">
                    <div className="col-xxl-12 mb-4">
                        <button className="border border-0 rounded-5 px-2 py-1" style={{ backgroundColor: "#242424", color: "#ffffff" }}>Start writing</button>
                    </div>
                </div>

            </div>

            <div className="row mt-4">
                <div className="col-xxl-12 ms-xxl-5 ms-lg-5 px-xxl-5">
                    <img className="ms-xxl-3 ms-lg-3" src='./assets/images/logos.png' alt="imagelogo" height={50} width={50} /><Icon icon="ph:plus-thin" width="19" height="19" /><Icon icon="devicon:twitter" color="#6b6b6b" width="21" height="20" />
                </div>
                <div className="col-xxl-12 ms-xxl-1 ms-lg-1 px-xxl-5 mt-2 text-center">
                    <p className="section Link">Discover Medium writers you already follow on Twitter.</p>
                </div>

                <button className="border border-dark rounded-5 mt-1 bg-white">
                    <div className="row ">
                        <div className="col-lg-2 ">
                            <Icon icon="devicon:twitter" className="" color="#6b6b6b" width="21" height="20" />
                        </div>
                        <div className="col-lg-10 text-center ">
                            <p className="section Link ">Connect to Twitter</p>
                        </div>
                    </div>
                </button>

                <div className="row mt-3">
                    <div className="col-xxl-12 text-center ms-xxl-3 ms-lg-3">
                        <Link to='https://medium.com' className=" Link" style={{ fontSize: "14px", color: "#6B6B6B" }}>Maybe Later</Link>
                    </div>

                </div>

            </div>

            <div className="row mt-5    ">
                <div className="col-xxl-12">
                    <h2 className="section Link" style={{ fontSize: "14px" }}><b>Reading list</b></h2>
                </div>
                <div className="col-xxl-12 col-lg-12">
                    <p className="Link " style={{ color: "#6B6B6B", fontSize: "14px" }}>Click the<span><Icon icon="tabler:bookmark-plus" style={{ cursor: 'pointer' }} color="#6b6b6b" width="20" height="20" /></span> on any story to easily add it to your reading list or a custom list that you can share.</p>
                </div>

            </div>

            <div className="row">

{links.map((tab)=>(
    <div className="col-xxl-2 col-lg-3 ">
    <Link className="Link text-decoration-none" to={tab.linkurl} style={{ fontSize: "11px", color: "#6B6B6B" }}>{tab.linkname}</Link>
</div>

))}


                
                {/* <div className="col-xxl-2">
                    <Link className="Link text-decoration-none" to='' style={{ fontSize: "11px", color: "#6B6B6B" }}>Status</Link>
                </div>
                <div className="col-xxl-2">
                    <Link className="Link text-decoration-none" to='' style={{ fontSize: "11px", color: "#6B6B6B" }}>Writers</Link>
                </div>
                <div className="col-xxl-2">
                    <Link className="Link text-decoration-none" to='' style={{ fontSize: "11px", color: "#6B6B6B" }}>Blog</Link>
                </div>
                <div className="col-xxl-2">
                    <Link className="Link text-decoration-none" to='' style={{ fontSize: "11px", color: "#6B6B6B" }}>Careers</Link>
                </div>
                <div className="col-xxl-2">
                    <Link className="Link text-decoration-none" to='' style={{ fontSize: "11px", color: "#6B6B6B" }}>Privacy</Link>
                </div>
                <div className="col-xxl-2">
                    <Link className="Link text-decoration-none" to='' style={{ fontSize: "11px", color: "#6B6B6B" }}>Term</Link>
                </div> */}

            </div>


        </div>
    )
}

export default Asidecomponent;