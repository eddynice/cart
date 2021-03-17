import React, { Component } from 'react'
import { ProductConsumer } from '../../Context'
import Cartcolumn from "./Cartcolumn"
import CartList from "./CartList"
import CartTotal from "./CartTotal"
import EmptyCart from "./EmptyCart"
import Title from "../Title"

export default class Cart extends Component {
    render() {
        return (
            <section>
            <ProductConsumer>
              {value=>{
                  const {cart} =value;
                  if (cart.length > 0){
                      return(
                          <React.Fragment>
                              <Title name="Your" title="Cart"/>
                             
                              <Cartcolumn/>
                              <CartList value={value}/>
                              <CartTotal value={value} history={this.props.history}/>
                          </React.Fragment>
                      );
                  }else{
                      return( <EmptyCart/> 

                      );
                  }
              }}

            </ProductConsumer>
         
        </section>
        )
    }
}
