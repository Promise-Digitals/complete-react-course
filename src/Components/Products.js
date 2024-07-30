let productCount = 0;
let imageUrl = require("../Images/fresh-milk.png");

function displayFormattedProductCount(){
    return productCount > 0 ? productCount : 'zero';
}

let style = {
    fontWeight: "bold",
    'font-size': 20,
}

function Products() {
    return (<ul className="list-group shadow">
        <li className="list-group-item">
            <div className="media align-items-lg-center flex-column flex-lg-row px-3 py-2 d-flex justify-content-between">
                <div className="media-body order-2 order-lg-1">
                    <h5 className="mt-0 font-weight-bold mb-2" style={style}>Fresh Milk</h5>
                    <p className="font-italic text-muted mb-0 small">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.</p>
                    <h6 className="font-weight-bold my-2">$120.00</h6>
                    <div className="d-flex align-items-center justify-content-start mt-5">
                        <button className="btn btn-primary">-</button>
                        <span className="mx-2" style={{color: '#555', 'font-weight': '500', fontFamily: 'sans-serif'}}>{displayFormattedProductCount()}</span>
                        <button className="btn btn-primary">+</button>
                    </div>
                </div>
                <img src={imageUrl} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2" />
            </div>
        </li>
    </ul>)
}

export default Products;