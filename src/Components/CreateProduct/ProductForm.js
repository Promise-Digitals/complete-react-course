import React,{ useState } from "react"


function ProductForm(props){

    // let pName = '';


    let [pName, updateName] = useState('');
    let [pPrice, updatePrice] = useState('');
    let [pDescription, updateDescription] = useState('');
    let [pAvailable, updateAvailability] = useState('');
    let [pImageUrl, updateImageUrl] = useState('');
    let [pStock, updateStock] = useState('');


    // MULTIPLE STATE APPROACH
    // let [userInput, updateUserInput] = useState({
    //     pName: '',
    //     pPrice: '',
    //     pDescription: '',
    //     pAvailable: '',
    //     pImageUrl: ''
    // });

    function nameInputHandler(event){
        updateName(event.target.value)

        // pName = event.target.value;

        // updateUserInput({
        //     ...userInput,
        //     pName: event.target.value
        // })

        // updateUserInput((prevState) => {
        //     return{...prevState, pName:event.target.value}
        // })
    }

    function priceInputHandler(event){
        updatePrice(event.target.value)

        // updateUserInput({
        //     ...userInput,
        //     pPrice: event.target.value
        // })
    }

    function descriptionInputHandler(event){
        updateDescription(event.target.value)

        // updateUserInput({
        //     ...userInput,
        //     pDescription: event.target.value
        // })
    }

    function availabilityInputHandler(event){
        updateAvailability(event.target.checked)

        // updateUserInput({
        //     ...userInput,
        //     pAvailable: event.target.value
        // })
    }

    function imageInputHandler(event){
        updateImageUrl(event.target.value)

        // updateUserInput({
        //     ...userInput,
        //     pImageUrl: event.target.value
        // })
    }

    function stockInputHandler(event){
        updateStock(event.target.value)
    }

    function createProductEventHandler(event){
        event.preventDefault();

        let Product = {
            pName: pName, 
            desc: pDescription,
            isAvailable: Boolean(pAvailable),
            image: pImageUrl,
            price: Number(pPrice),
            stock: Boolean(pAvailable) == true ? Number(pStock) : '0'
        }


        // resetting the form on submission
        updateName('');
        updatePrice('');
        updateDescription('');
        // empty string returns false when converted to boolean value
        updateAvailability('');
        updateImageUrl('');

        // console.log(product);
        props.createProduct(Product);
        props.onCancel();
    }

    return(
        <form className="row g-3" onSubmit={createProductEventHandler}>
        <div className="col-md-6">
            <label for="name">Product Name</label>
            <input type="text" 
                    className="form-control" 
                    id="name" 
                    value={pName}
                    placeholder="Product Name"
                    onChange={nameInputHandler}/>
        </div>
        <div className="col-md-6">
            <label for="price">Product Price</label>
            <input type="number" 
                    min="0.01" step="0.01" 
                    className="form-control"
                    value={pPrice}
                    id="price" 
                    placeholder="Product Price" 
                    onChange={priceInputHandler}/>
        </div>

        <div className="form-group">
            <label for="description">Product Description</label>
            <input type="text" 
                    className="form-control" 
                    id="description" 
                    value={pDescription}
                    placeholder="Product Description" 
                    onChange={descriptionInputHandler}/>
        </div>

        <div class="form-check form-switch">
            <input class="form-check-input" type="checkbox" role="switch" id="isAvailable" checked={pAvailable} onChange={availabilityInputHandler}/>
            <label class="form-check-label" for="isAvailable">Is product available in stock?</label>
        </div>

        <div className="form-group">
            <label for="stock">Stock Quantity</label>
            <input type="number" 
                    className="form-control" 
                    style={{width: '80px'}}
                    min={1}
                    id="stock" 
                    value={pStock}
                    onChange={stockInputHandler}/>
        </div>

        <div className="form-group">
            <label for="select-image">Select product image</label>
            <input type="file" className="form-control" id="select-image" value={pImageUrl} onChange={imageInputHandler}/>
        </div>
        

        <button type="submit" className="btn btn-primary">Add Product</button>
        <button type="button" className="btn btn-dark" onClick={props.onCancel}>Cancel</button>
    </form>
    );
}

export default ProductForm