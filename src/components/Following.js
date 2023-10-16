import React from 'react';
import { connect } from 'react-redux';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { getAllData } from '../redux/Api/Api'
import { setData,setSelectedAboutCard  } from '../redux/Actions/Action'
import Asidecomponent from './Asidecomponent';
import { useNavigate } from 'react-router-dom'


const Card2 = ({
    data,
    error,
    selectedDataId,
    setData,
    setError,
    setSelectedDataId,
    setSelectedAboutCard
}) => {

    useEffect(() => {
        getData();

    }, []);


    const getData = async () => {
        try {
            const students = await getAllData();
            console.log('data has been received', students)
            setData(students);
            console.log('iam student data', students)
        } catch (error) {
            console.error('An error occurred:', error);

        }
    };

    useEffect(() => {
        console.log('Updated data prop:', data);
    }, [data]);

    const navigate = useNavigate();

    const handleCardClick = (aboutcard) => {
        console.log("icnscnnc", aboutcard);
      
        // Store the selected card data in localStorage
        localStorage.setItem('selectedAboutCard', JSON.stringify(aboutcard));
       
      
        // Use the push method to navigate to the detail page with the aboutcard data
        navigate(`/aboutcard`);
      };

    // const handleCardClick = (aboutcard) => {

    //     localStorage.setItem('selectedAboutCard', JSON.stringify(aboutcard));
    //     navigate(`/aboutcard/${aboutcard[0].Title}`);
    //   };

   

  

    return (
        <div>

            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-12 col-xxl-9 col-xl-9 col-lg-9'>
                        {data &&
                            data.map((user, index) => {
                                 console.log('hiscnsicnc',user.aboutcard)
                                 console.log(user.status,"i am foryou")
                                 if(user.status=='following'){
                                //  console.log('hiscnsicnc',user.aboutcard.index)
                                return (

                                    <div class="card border border-0" key={index}
                                   
                                    onClick={() => handleCardClick(user.aboutcard)}
                                    >
                                        
                                        <div className='row '>
                                            <div className='col-md-12  col-12 col-lg-12'>
                                                <div class="card-body">
                                                    <div className='row g-md-5 g-3'>
                                                        <div className='col-md-8 col-8'>
                                                            <div className='row'>
                                                                <div className='col-md-12 '>
                                                                    <div className='row'>
                                                                        <div className='col-md-2 col-lg-2 col-xxl-1  d-none d-md-block'>
                                                                            <img className='img-thumbnail border border-0' src='./assets/images/logos.png' height={40} width={40} alt='medium logo' />
                                                                        </div>
                                                                        <div className='col-md-10 col-lg-10 col-xxl-11 col-12'>
                                                                            <p className='Link section mt-2 mt-xxl-1 mt-xl-1 mt-lg-2' style={{ fontSize: "14px" }}>{user.pname} <span>·</span> <span  style={{ color: "#6B6B6B" }}>{user.date}</span> <span><Icon icon="ph:star-four-fill" color="yellow" width="24" height="24" /></span > <span className='d-none d-md-auto' style={{ color: "#6B6B6B" }}>{user.membership}</span></p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-md-12 '>
                                                                    <h2 className='section Link' style={{ fontSize: "18px" }}><b>{user.title}</b></h2>
                                                                    <p className='section special d-none d-md-block d-lg-block d-xl-block d-xxl-block' style={{ fontSize: "16px", cursor: 'pointer' }}>{user.description}</p>
                                                                </div>
                                                            </div>
                                                            <div className='row'>
                                                                <div className='col-md-6 '>
                                                                    <button className='border-0 rounded-5 px-3 py-1 button section' style={{ fontSize: "13px", cursor: 'pointer' }}>{user.button}</button>
                                                                    <span className='ms-lg-4 Link' style={{ fontSize: "13px", color: "#6B6B6B" }}>{user.time}</span>

                                                                </div>
                                                                <div className='col-md-2 '></div>
                                                                <div className='col-md-4   mt-2 mt-md-auto ms-2 ms-md-auto'>
                                                                    <Icon icon="tabler:bookmark-plus" style={{ cursor: 'pointer' }} color="#6b6b6b" width="24" height="24" />
                                                                    <Icon icon="zondicons:minus-outline" style={{ cursor: 'pointer' }} color="#6b6b6b" className='ms-3' width="22" height="22" />
                                                                    <Icon icon="pepicons-pencil:dots-x" style={{ cursor: 'pointer' }} color="#6b6b6b" className='ms-3' width="24" height="24" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className='col-md-3  col-4'>
                                                            <img className='mt-3 img-thumbnail border border-0' style={{ cursor: 'pointer' }} src={user.imgurl} height={112} width={112} alt='' />
                                                        </div>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>

                                    </div>
                                   )}
                            })
                        }
                    </div>
                    {/* side bar column */}

                    <div className='mb-3 mt-2 border border-0 col-xxl-3 col-lg-3 d-none d-lg-block d-xl-block d-xxl-block'>
                       <Asidecomponent />
                    </div>

                </div>

            </div>
        </div>

    );
};


// ... mapStateToProps and mapDispatchToProps ...
const mapStateToProps = (state) => ({

    data: state.Reducer1.data,
    selectedAboutCard: state.Reducer1.selectedAboutCard
    
});

const mapDispatchToProps = {
    setData,
    setSelectedAboutCard,

};


export default connect(mapStateToProps, mapDispatchToProps)(Card2);

