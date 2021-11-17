import React from "react";
import Itemfavorite from './Items/Itemfavorite'
import PropTypes from 'prop-types';

function Favorite({products}) {
    return (
        <>
        <h2 style={{margin:35+'px'}}>My favorite</h2>
        <div class="container" style={{backgroundColor:"#444941",borderRadius:10+'px',border:1+'px '+'hidden '+ 'black',padding:45+'px'}}>
            <div class="d-flex flex-row flex-wrap justify-content-around">

            {products.length>0 ? (
                products.map((data)=>(
                <Itemfavorite key={data.id} item={data}/>
                ))
            ):(<h3 className="font-weight-normal text-white">No items in favorites</h3>)}
                
            </div>
        </div>
        </>
    );
}

Favorite.propTypes = {
    products: PropTypes.array.isRequired
};

export default Favorite;
