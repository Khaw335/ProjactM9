import React from "react";
import { useHistory, useParams } from "react-router";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateproduct } from "../actions";
import swal from 'sweetalert';

function Admin_Update({ products }) {
    const { id } = useParams()

    const dispatch = useDispatch()
    const history = useHistory()

    const onUpdate = (id) => {
        let name = document.getElementById('name').value
        let description = document.getElementById('description').value
        let price = document.getElementById('price').value
        let rating = document.getElementById('rating').selected
        let imageURL = document.getElementById('imageURL').value
        let quantity = document.getElementById('quantity').value
        dispatch(updateproduct(id,name,description,price,rating,imageURL,quantity))
        swal("Update Success",'', "success");
        history.push('/')
    }

  return (
    <div>
        <h2 style={{margin:35+'px'}}>Update Product</h2>
        <div class="container" style={{backgroundColor:'#444941',borderRadius:10+'px',border:1+'px '+'hidden '+ 'black',padding:45+'px'}}>
            <div className="d-flex flex-column flex-wrap justify-content-around">
                <div className="p-2">
                    <Link to="/">
                        <button className="btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="#5F7A61" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
                                <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1z"/>
                            </svg>
                        </button>
                    </Link>
                </div>
                <div className="p-2">
                    <div class="form-group">
                        <label className="text-white" for="name"><b>Product Name , Current : {products[id].name}</b></label>
                        <input type="text" class="form-control" id="name" placeholder="Enter Product Name"/>
                    </div>
                </div>
                <div className="p-2">
                    <div class="form-group">
                        <label className="text-white" for="description"><b>Product Description , Current : {products[id].description}</b></label>
                        <input type="text" class="form-control" id="description" placeholder="Enter Product Description"/>
                    </div>
                </div>
                <div className="p-2">
                    <div class="form-group">
                        <label className="text-white" for="price"><b>Product Price , Current : {products[id].price} THB</b></label>
                        <input type="text" class="form-control" id="price" placeholder="Enter Product Price"/>
                    </div>
                </div>
                <div className="p-2">
                    <div class="form-group">
                        <label for="rating" className="text-white"><b>Product Rating , Current : {products[id].rating}</b></label>
                        <select id="rating" class="form-control">
                            <option selected>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    
                </div>
                <div className="p-2">
                    <div class="form-group">
                        <label className="text-white" for="imageURL"><b>Product imageURL , Current : {products[id].imageURL}</b></label>
                        <input type="text" class="form-control" id="imageURL" placeholder="Enter Product imageURL"/>
                    </div>
                </div>
                <div className="p-2">
                    <div class="form-group">
                        <label className="text-white" for="quantity"><b>Product Quantity , Current : {products[id].quantity}</b></label>
                        <input type="text" class="form-control" id="quantity" placeholder="Enter Product quantity"/>
                    </div>
                </div>
                <div className="p-2">
                    <button className="btn" onClick={()=>{onUpdate(id)}} style={{backgroundColor:'#5F7A61',color:'white'}}>
                    <b>Update</b>
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
}

Admin_Update.propTypes = {
    products: PropTypes.array.isRequired
};

export default Admin_Update;
