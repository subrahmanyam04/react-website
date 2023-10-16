import React from "react";
import { Icon } from '@iconify/react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
// import { useParams } from 'react-router-dom';

const MoreInformation = () => {
    const selectedAboutCard = JSON.parse(localStorage.getItem('selectedAboutCard'));
    // console.log("ibajbdnqujdwqd", selectedAboutCard[0].cards)

    // const { id } = useParams();
    
//   const selectedAboutCard = data.find((card) => card.id === parseInt(id));

    return (
        <div>
            {

                selectedAboutCard.map((information, index) => {

                    console.log('hiscnsicnc', index)



                    return (

                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 col-xxl-7 col-lg-9 border border-0 mx-auto">
                                    <div className="row mt-5">
                                        <div className="col-md-12">
                                            <h1 className="Link section" style={{ fontSize: "42px" }}><b>{information.Title}</b></h1>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-md-1">
                                            <img src={information.imglogo} className="rounded rounded-5" height={44} width={44} alt='' />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="row">
                                                <div className="col-md-12 mt-md-2">
                                                    <p className="section Link" style={{ fontSize: "16px" }}>{information.name} <span>·</span> <span className="Link" style={{ color: "#1A8917", fontSize: "16px" }}>Follow</span>
                                                    </p>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    {/* icon component */}
                                    <div className="row mt-3 mt-md-5">
                                        <div className="col-md-3  col-6">
                                            <div className="row">
                                                <div className="col-md-5 col-6">
                                                    <Icon icon="ph:hands-clapping-thin" color="#6b6b6b" width="20" height="20" />  <span className="Link" style={{ fontSize: "13px", color: "#6B6B6B" }}>463</span>
                                                </div>
                                                <div className="col-md-4 col-6">
                                                    <Icon icon="teenyicons:chat-outline" color="#6b6b6b" width="15" height="15" /> <span className="Link" style={{ fontSize: "13px", color: "#6B6B6B" }}>8</span>
                                                </div>

                                            </div>

                                        </div>
                                        <div className="col-md-5 col-1"> </div>
                                        <div className="col-md-4 col-4">
                                            <div className="row">
                                                <div className="col-md-3 col-3">
                                                    <Icon icon="material-symbols:bookmark-add-outline-sharp" color="#6b6b6b" width="24" height="24" />
                                                </div>
                                                <div className="col-md-3 col-3">
                                                    <Icon icon="ep:video-play" color="#6b6b6b" width="24" height="24" />
                                                </div>
                                                <div className="col-md-3 col-3">
                                                    <Icon icon="ph:export-thin" color="#6b6b6b" width="24" height="24" />
                                                </div>
                                                <div className="col-md-3 col-3">
                                                    <Icon icon="heroicons-outline:dots-horizontal" color="#6b6b6b" width="24" height="24" />
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="row mt-5">
                                        <div className="col-md-12">
                                            <img className="img-fluid" src={information.banner} height={400} width={750} alt='' />
                                        </div>

                                    </div>

                                    <div className="row mt-4">
                                        <div className="col-md-12">
                                            <p className="p1 lh-lg section" style={{ fontSize: "20px", fontWeight: "400px" }}>
                                                {information.p1}
                                            </p>
                                            <p className="p1 mt-4 lh-lg section" style={{ fontSize: "20px", fontWeight: "400px" }}>
                                                {information.p2}
                                            </p>
                                        </div>

                                    </div>

                                    {/* list information */}

                                    <div className="row mt-4">
                                        <div className="col-md-12">
                                            <h1>{information.subtitle}</h1>
                                            <p className="p1 lh-lg section" style={{ fontSize: "20px", fontWeight: "400px" }}>
                                                {information.subp1}
                                            </p>
                                            <p className="p1 mt-4 lh-lg section" style={{ fontSize: "20px", fontWeight: "400px" }}>
                                                {information.subp2}
                                            </p>

                                            <ul className="section Link list-group" >
                                                <li className="list-group">
                                                    <span style={{ fontSize: "20px" }}><b>{information.subhead1}</b></span>
                                                    <p className="p1 mt-4 lh-lg section" style={{ fontSize: "20px", fontWeight: "400px" }}>{information.head1p1}</p>
                                                    <p className="p1 mt-4 lh-lg section" style={{ fontSize: "20px", fontWeight: "400px" }}>
                                                        {information.head1p2}
                                                    </p>
                                                </li>
                                                <li className="list-group">
                                                    <span style={{ fontSize: "20px" }}><b>{information.subhead2}</b></span>
                                                    <p className="p1 mt-4 lh-lg section" style={{ fontSize: "20px", fontWeight: "400px" }}>
                                                        {information.head2p1}
                                                    </p>



                                                    <p className="p1 mt-4 lh-lg section" style={{ fontSize: "20px", fontWeight: "400px" }}>
                                                        {information.head2p2}
                                                    </p>

                                                </li>

                                            </ul>






                                        </div>

                                    </div>


                                    <hr />
                                    {/* card data */}







                                </div>

                            </div>

                        </div>




                    )

                })

            }


            <div className="container mb-5">

                <div className="col-md-12 col-xxl-7 col-lg-9 border border-0 mx-auto">
                    <div class="row row-cols-1 row-cols-md-2 g-5 ">
                        {selectedAboutCard[0].cards.map((card, index) => {
                            console.log("ijbcsjbna", index)
                            return (




                                <div class="col-md-5 mx-auto mb-5">
                                    <div class="card-group ">
                                        {/* <div className="card"> */}
                                        <img src={card.cardimg} class="card-img-top" height={162} width={342} alt="..." />
                                        <div class="card-body mt-1 mt-md-3">
                                            <h2 class="card-title Link section" style={{ fontSize: "20px" }}><b>{card.cardtitle}</b></h2>
                                            <p class="card-text lh-sm mt-1" style={{ fontSize: "16px", color: "#6B6B6B" }}>{card.cardbody}</p>
                                        </div>
                                        <div className="row  mt-2">
                                            <div className="col-md-12">
                                                <span style={{ fontSize: "13px", color: "#6B6B6B" }}> 6 min read</span><span> · </span ><span style={{ fontSize: "13px", color: "#6B6B6B" }}> Sep 1 </span >
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-4 col-3">
                                                <Icon icon="ph:hands-clapping-thin" color="#6b6b6b" width="20" height="20" /><span className="Link" style={{ fontSize: "13px", color: "#6B6B6B" }}>463</span>
                                            </div>
                                            <div className="col-md-4 col-2">
                                            <Icon icon="teenyicons:chat-outline" color="#6b6b6b" width="15" height="15" /> <span className="Link" style={{ fontSize: "13px", color: "#6B6B6B" }}>8</span>
                                            </div>
                                            <div className="d-md-none d-block col-2">

                                            </div>

                                            <div className="col-md-2 col-2">
                                                <Icon icon="ph:export-thin" color="#6b6b6b" width="24" height="24" />
                                            </div>
                                            <div className="col-md-2 col-2">
                                                <Icon icon="heroicons-outline:dots-horizontal" color="#6b6b6b" width="24" height="24" />
                                            </div>

                                        </div>

                                    </div>
                                </div>


                           





                            )
                        })}
                    </div>
                    <hr/>
                    <button class="btn border border-dark rounded rounded-5 p-2 mb-5 Link section" type="button">
                                  <Link to='/secondpage' className="text-decoration-none section Link" style={{fontSize:"14px"}}>

                                        See more recommendations
  
                                   </Link>
                                </button>
                </div>
            </div>
            <hr className="mt-5"/>   
        </div>
    )
}
const mapStateToProps = (state) => ({

    selectedAboutCard: state.Reducer1.selectedAboutCard,
    data: state.Reducer1.data,

});


export default connect(mapStateToProps)(MoreInformation);



// import React from "react";


// const MoreInformation = () =>{

//     const storedAboutCard = JSON.parse(localStorage.getItem('selectedAboutCard'));
//         console.log("ibajbdnqujdwqd",storedAboutCard)
//     return(
//         <div>
//             <h1>{storedAboutCard[0].Title}</h1>
//             <h1>{storedAboutCard[0].dam}</h1>
//         </div>
//     )
// }

// export default MoreInformation;