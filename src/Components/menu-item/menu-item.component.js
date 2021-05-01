import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.styles.scss';


const MenuItem = ({ title ,imageUrl,size,history,linkUrl,match}) =>{
    return(
        <div   className={`${size} menu-item`} onClick={()=> history.push(`${match.url}${linkUrl}`)}>
        <div  className='background-image' 
          style={{
          // jsx div has property to take an object

             backgroundImage: `url(${imageUrl})`
          // using javascript template here
          // if url change then the css will also change
        }

        }
        />
      <div className='content'>
         <h1  className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>

    );
    
}

export default withRouter(MenuItem);