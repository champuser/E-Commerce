import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';                           // connect is higher order component that takes an argument and return new souped component

import {ReactComponent as Logo} from '../../assets/crown.svg'; 
import { auth } from '../../firebase/firebase.utils';

import './header.styles.scss';


const Header = ( { currentUser } ) =>{
    return(
        <div className='header'>
            <Link className='logo-container' to='/' >
                <Logo className='logo' />
            </Link>
            <div className='options'>
              <Link className='option' to='/shop'>
                  SHOP
              </Link>
              <Link className='option' to='/shop'>
                  CONTACT
              </Link>
              {
                  currentUser ?
                  <div className='option' onClick={() => auth.signOut()}> SIGN OUT</div>

                  :
                  <Link className='option' to='/signin'> SIGN IN</Link>
              }
              
            </div>
        </div>
    );
}


// name of mapStateToProps could be anything but it is standard to redux


const mapStateToProps = state => ({
    // state is the top level root-reducer
    currentUser:state.user.currentUser

})

export default connect(mapStateToProps)(Header);