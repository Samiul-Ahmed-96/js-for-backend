const myProducts  = new Promise((resolved,rejected)=>{
    products = [
        {
            name : "Potato"
        }
    ];
    if(products.length > 0){
        resolved("Products Found");
    }else{
        rejected("Products not found")
    }
})

// myProducts
// .then(res=> console.log(res)) 
// .catch(err=> console.log(err))


async function getProducts(){
    try {
        const res = await myProducts;
        console.log(res)
      
    } catch (error) {
        console.error(error) 
    }
}

getProducts();

// const promise = new Promise((resolved,rejected)=>{
//     setTimeout(()=>{
//         resolved("Complete")
//     },1000)
// })

// async function getData(){
//     const res = await promise;
//     console.log(res);
// }
// getData();


