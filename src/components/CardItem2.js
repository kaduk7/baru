import React from 'react';
import { Link } from 'react-router-dom';

function CardItem2(props) {
  return (
    <>
      <li className='cards__item2'>
        <Link className='cards__item2__link' to={props.path}>
         
          <h3 className='cards__item2__text'>{props.text}</h3>
          
          {/* <div className='cards__item__info'>
            
          </div> */}
        </Link>
      </li>
    </>
  );
}

export default CardItem2;
