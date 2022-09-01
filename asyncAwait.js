// const myProducts  = new Promise((resolved,rejected)=>{
//     products = [];
//     if(products.length > 1){
//         resolved("Products Found");
//     }else{
//         rejected("Products not found")
//     }
// })

// myProducts
// .then(res=> console.log(res))
// .catch(err=> console.log(err))


// async function getProducts(){
//     const res =  await myProducts;
//     console.log("From Async :",res);
// }

// getProducts();

const promise = new Promise((resolved,rejected)=>{
    setTimeout(()=>{
        resolved("Complete")
    },1000)
})

async function getData(){
    const res = await promise;
    console.log(res);
}
getData();