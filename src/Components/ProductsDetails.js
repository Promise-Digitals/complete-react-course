let productCount = 0;

function displayFormattedProductCount(){
    return productCount > 0 ? productCount : 'zero';
}



function ProductDetails(props){

    let badgeClass = 'badge ';
    badgeClass += props.isAvailable ? 'bg-success' : 'bg-danger';


    return(
        <div>
            <h6 className="font-weight-bold my-2">${props.price}</h6>
                <div className="d-flex align-items-center justify-content-start mt-5 mb-2">
                    <button className="btn btn-primary">-</button>
                    <span className="mx-2" style={{color: '#555', 'font-weight': '500', fontFamily: 'sans-serif'}}>{displayFormattedProductCount()}</span>
                    <button className="btn btn-primary">+</button>
                </div>
                <span className={badgeClass}>{props.isAvailable ? 'Available' : 'Unavailable'}</span>
        </div>
    )
}

export default ProductDetails;