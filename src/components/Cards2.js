import React from 'react';
import './Cards.css';
import CardItem2 from './CardItem2';
import CardItem from './CardItem';

function Cards2() {
  return (
    <div className='cards'>
      <h1>HIZRATECH?</h1>


      <div className='cards__container'>
        {/* <div className='cards__wrapper'> */}
          <ul className='cards__items'>
            <CardItem2
              // src='images/img-9.jpg'
              text=' Hizratech adalah
              perusahaan yang
              bergerak dalam
              development system
              yang akan
              mewujudkan sistem
              digital anda.
              Hizratech juga
              menyediakan
              berbagai jasa layanan
              publik yang siap
              membantu klien yang
              berkaitan dengan
              teknologi.'
              // label='System Development'
              path='/services'
            />
<CardItem
              src='images/img-9.jpg'
              // text='Hizratech bersedia untuk merancang, menguji dan mengimplementasikan aplikasi perangkat lunak baru atau program sesuai dengan kebutuhan klien.'
              // label='System Development'
              path='/services'
            />
          </ul>

        {/* </div> */}
      </div>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            
            
          </ul>
          {/* <ul className='cards__items'>
            
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards2;
