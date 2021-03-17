import React, { Component } from 'react'
import Navbar from "./component/Navbar";
import ProductList from "./component/ProductList";
import Detail from "./component/Details"
import Cart from "./component/cart/Cart"
import Default  from "./component/Default"
import { Route, Switch } from 'react-router';
import  Modal from './component/Modal'
import Footer from './component/Footer';
//import { Modal } from 'bootstrap';
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={ProductList}/>
          <Route path="/details" component={Detail}/>
          <Route path="/cart" component={Cart}/>
          <Route  component={Default}/>
        </Switch>
        <Footer/>
       
        <Modal/>



      </React.Fragment>
    )
  }
}
