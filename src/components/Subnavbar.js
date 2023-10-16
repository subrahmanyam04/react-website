import React from 'react';


import { Icon } from '@iconify/react';
import Foryou from './Foryou';
import Card2 from './Following';
import Coding from './Coding';
import Javascript from './Javascript';

const Subnavbar = () =>{
    return (

        <div >
<div className='container'>

<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item " role="presentation">
    <button class="nav-link link-secondary border-0 " 
    id="home-tab"
     data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" 
     aria-controls="home" 
     aria-selected="true"><Icon icon="ph:plus-thin" width="19" height="19" /></button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link  link-secondary active border-0 "  id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false" >  For you</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link link-secondary border-0" id="messages-tab" data-bs-toggle="tab" data-bs-target="#messages" type="button" role="tab" aria-controls="messages" aria-selected="false"> Following</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link link-secondary border-0" id="settings-tab" data-bs-toggle="tab" data-bs-target="#settings" type="button" role="tab" aria-controls="settings" aria-selected="false"> Coding</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link link-secondary border-0" id="java-tab" data-bs-toggle="tab" data-bs-target="#java" type="button" role="tab" aria-controls="java" aria-selected="false"> JavaScript </button>
  </li>
</ul>


<div class="tab-content ">
  <div class="tab-pane  show " id="home" role="tabpanel" aria-labelledby="home-tab"></div>
  <div class="tab-pane show active " id="profile" role="tabpanel" aria-labelledby="profile-tab" > <Foryou /></div>
  <div class="tab-pane show" id="messages" role="tabpanel" aria-labelledby="messages-tab"> <Card2 /> </div>
  <div class="tab-pane show" id="settings" role="tabpanel" aria-labelledby="settings-tab"><Coding/></div>
  <div class="tab-pane show" id="java" role="tabpanel" aria-labelledby="java-tab"><Javascript/></div>
</div>
            
</div>

            
        </div>

    );
}
export default Subnavbar;