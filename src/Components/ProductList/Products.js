import ProductDetails from "./ProductsDetails"


let style = {
    fontWeight: "bold",
    fontSize: 20,
}


function Products(props) {

    return (<li className="list-group-item" style={{backgroundColor: props.isAvailable === true ? 'white' : '#999'}}>
        <div className="media align-items-lg-center flex-column flex-lg-row px-3 py-2 d-flex justify-content-between">
            <div className="media-body order-2 order-lg-1">
                <h5 className="mt-0 font-weight-bold mb-2" style={style}>{props.name}</h5>
                <p className="font-italic text-muted mb-0 small">{props.description}</p>

                <ProductDetails price={props.price} isAvailable={props.isAvailable}/>
            </div>
            <img src={(props.imageUrl)} alt="Generic placeholder image" width="200" className="ml-lg-5 order-1 order-lg-2" />
        </div>
    </li>)     
}

export default Products;