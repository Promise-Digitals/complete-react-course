import ProductForm from "./ProductForm";
import { useState } from "react";

function CreateProduct(props){
    let [showForm, updateShowForm] = useState(false)
    function onCreateProduct(product){
        console.log(product)
        props.createProduct(product)
    }

    function onCreateNewProduct(){
        updateShowForm(true)
    }

    function onProductSubmitOrCancel(){
        updateShowForm(false)
    }

    return (
        <div style={{ backgroundColor: 'white', padding: '10px 20px', borderRadius: 5 }}>
            {!showForm && <button onClick={onCreateNewProduct} className="btn btn-primary">Create Product</button>}
            {showForm && <ProductForm createProduct={onCreateProduct} onCancel={onProductSubmitOrCancel}></ProductForm>}
        </div>
    )
}

export default CreateProduct;