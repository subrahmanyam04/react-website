import React from "react";
import Navbar from "../components/Navbar";
import MoreInformation from "../components/MoreInformation";
import Footer from "../components/Footer";
const AboutCardDetails = () => {
  return(
    <div>
        <Navbar />
        <MoreInformation />
        <Footer />
      </div>
  )
}

export default AboutCardDetails;




// import React from "react";

// import { connect } from 'react-redux';

// import { useParams } from 'react-router-dom'; 

// const MoreInformation =  ({ selectedAboutCard }) => {

//     console.log('this is a populate', selectedAboutCard)

//     console.log('this is aboutcard', selectedAboutCard[0].id)

    // const { id } = useParams(); // Get the id parameter from the URL
 

// if (!id) {
  // Handle the case where 'id' is not defined, e.g., redirect or display an error message.
  // console.error("No 'id' parameter found.");
  // Optionally, you can use useHistory to redirect to another page
  // const history = useHistory();
  // history.push('/error');
  // return null; // Or display an error message
// }

// Now you can safely use 'id' in your component

 

    // Find the corresponding aboutcard data based on the id

    // const aboutCardData = data.find((item) => item.aboutcard.id === id);

    // const aboutCardData = data.find((item) => item.aboutcard.id === id);

 

    // return (

    //   <div>

 

 

    //     {

    //       selectedAboutCard.map((information, index) => {

    //         console.log('hiscnsicnc', index)

 

    //         return (

 

    //           <div key={index}>

    //             <h1>{information.dam}</h1>

    //           </div>

    //         )

    //       })

    //     }

 

 

 

 

    //   </div>

 

 

 

 

 

  //   )

  // }

 

  // const mapStateToProps = (state) => ({

  //   selectedAboutCard: state.Reducer1.selectedAboutCard,

  // });

 

 

 

 

  // export default connect(mapStateToProps)(MoreInformation);

 

 