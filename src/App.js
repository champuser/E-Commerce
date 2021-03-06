import React from 'react';
import {Switch,Route } from 'react-router-dom';
import { connect } from 'react-redux';

import './App.css';

import HomePage from './Pages/homepage/homepage.component';
import ShopPage from './Pages/homepage/shop/shop.component';
import SignInAndSignUp from './Pages/sign-in-and-sign-up/sign-in-and-sign-up.commponent';
import Header from './Components/header/header.component';
import {auth , createUserProfileDocument } from './firebase/firebase.utils';    
import { setCurrentUser } from './redux//user/user.actions';


class App extends React.Component {

  // hold the state of the user

  // constructor(){
  //   super();
    
  //   this.state = {
  //     currentUser:null
  //   };
  // }


  unsubscribeFromAuth = null;

  componentDidMount(){

    const { setCurrentUser } = this.props;
    
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      // this.setState({ currentUser : user});
      // console.log(user);

      //createUserProfileDocument(user);

      // storing user data in App

      if(userAuth){

        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot)  => {

          // this.setState({
          //   currentUser:{
          //     id:snapShot.id,
          //     ...snapShot.data()
          //   }
          // })

          // use mapDispatchToProps 

          setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          });

        });

      }
      // else{

      //   // this.setState({currentUser:userAuth});

      // }

      setCurrentUser(userAuth);



    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }


  render(){
    return (
      <div>
   
         <Header  />
   
         <Switch>
         <Route exact path='/' component={HomePage} />
         <Route path='/shop' component={ShopPage}/>
         <Route path='/signin' component={SignInAndSignUp}/>
   
         </Switch>
   
        
   
      </div>
     );

  }
  
}


const mapDispatchToProps = dispatch => ({

  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
