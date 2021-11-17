import React from "react";
import { Link } from "react-router-dom";
import Itemcart from './Items/Itemcart'
import PropTypes from 'prop-types';

function Cart({ products }) {
  let totalprice = 0
  if(products!=null){
    for(let i = 0;i<products.length;i++){
      totalprice += products[i].price*products[i].quantity
    }
  }else{
    totalprice = 0
  }
  return (
    <div>
      <h2 style={{margin:35+'px'}}>My cart</h2>
      <div class="container" style={{backgroundColor:'#444941',borderRadius:10+'px',border:1+'px '+'hidden '+ 'black',padding:45+'px'}}>
      <div className="d-flex flex-row flex-wrap justify-content-around">

      {products.length>0 ? (
        products.map((data)=>(
          <Itemcart key={data.id} item={data}/>
        ))
      ):(<h3 className="font-weight-normal text-white">No items in cart</h3>)}
      </div>
      </div>
      <nav className="navbar fixed-bottom navbar-dark" style={{backgroundColor:'#444941'}}>
        <div className="d-flex flex-row col-12 justify-content-end">
          <div className="p-2 my-auto text-white">Total : {totalprice}</div>
          <div className="p-2 my-auto float-right">
            <Link to={`/payment`}>
              <button type="button" className="btn" style={{backgroundColor:'#5F7A61',color:'white'}}>
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

Cart.propTypes = {
  products: PropTypes.array.isRequired
};

export default Cart

