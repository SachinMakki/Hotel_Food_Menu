let ProductArray=[
    {
        id:"1",
        tittle:"Coffee",
        price:12
    },
    {
        id:"2",
        tittle:"Tea",
        price:12
    },
    {
        id:"3",
        tittle:"Idli",
        price:30
    },
    {
        id:"4",
        tittle:"Palav",
        price:35
    }

];

function getProductData(id){
    let ProductData = ProductArray.find(product => product.id === id);

    if(ProductData === undefined){
        console.log("Product data does not exist for ID: "+id);
    }
    return ProductData;
}

export { ProductArray, getProductData};