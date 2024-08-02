import { useState } from 'react';
import Button from './Button';


function ProductDetails(props){

    let badgeClass = 'badge ';
    badgeClass += props.isAvailable ? 'bg-success' : 'bg-danger';


    let [productCount, updateCount] = useState(0);

    function displayFormattedProductCount(){
        return productCount > 0 ? productCount : 'zero';
    }

    let incrementProductCount = function(){
        // productCount++;
        // console.log(productCount)
        updateCount(++productCount)
    }
    
    let decrementProductCount = function(){
        // productCount--;
        // console.log(productCount)
        updateCount(--productCount)
    }

    return(
        <div>
            <h6 className="font-weight-bold my-2">${props.price}</h6>
                <div className="d-flex align-items-center justify-content-start mt-5 mb-2">
                    <Button eventHandler={decrementProductCount}>-</Button>
                    <span className="mx-2" style={{color: '#555', fontWeight: '500', fontFamily: 'sans-serif'}}>{displayFormattedProductCount()}</span>
                    <Button eventHandler={incrementProductCount}>+</Button>
                </div>
                <span className={badgeClass}>{props.isAvailable ? 'Available' : 'Unavailable'}</span>
        </div>
    )
}

export default ProductDetails;