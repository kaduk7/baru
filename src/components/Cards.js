import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>What We Offer?</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Hizratech bersedia untuk merancang, menguji dan mengimplementasikan aplikasi perangkat lunak baru atau program sesuai dengan kebutuhan klien.'
              label='System Development'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Hizratech siap untuk melayani klien dalam rangka pemenuhan kebutuhan pelayanan baik di bidang jasa, layanan maupun administratif.'
              label='Layanan Publik'
              path='/services'
            />
            <CardItem
              src='images/img-3.jpg'
              text='Hizratech juga menjual berbagai jenis barang perangkat lunak dan keras.'
              label='Jual Beli Perangkat Lunak dan Keras'
              path='/services'
            />
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

export default Cards;
