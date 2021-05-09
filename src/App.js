import React from 'react';
import {Switch,Route } from 'react-router-dom';
import './App.css';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/homepage/shop/shop.component';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.commponent';
import Header from './Components/header/header.component';
import {auth } from './firebase/firebase.utils';    



class App extends React.Component {

  // hold the state of the user

  constructor(){
    super();
    
    this.state = {
      currentUser:null
    };
  }


  unsubscribeFromAuth = null;

  componentDidMount(){
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser : user});
      console.log(user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
   
         <Header currentUser={this.state.currentUser} />
   
         <Switch>
         <Route exact path='/' component={HomePage} />
         <Route path='/shop' component={ShopPage}/>
         <Route path='/signin' component={SignInAndSignUp}/>
   
         </Switch>
   
        
   
      </div>
     );

  }
  
}

export default App;
