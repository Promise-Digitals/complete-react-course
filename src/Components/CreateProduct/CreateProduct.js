import ProductForm from "./ProductForm";

function CreateProduct(){
    return (
        <div className="row">
            <div className="col-lg-8 mx-auto" style={{backgroundColor: 'white', padding: '10px 20px', marginBottom: '20px', borderRadius: '10px'}}>
                <ProductForm></ProductForm>
            </div>
        </div>
    )
}

export default CreateProduct;