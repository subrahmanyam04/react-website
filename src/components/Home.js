import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Section from "../components/Section";
import CardList from "../components/Card";

const Home = () =>{
    return(
        <div>
            <Header />  
            
            <Banner />
            <Section/>
            <CardList/>
        </div>
    )
}

export default Home;