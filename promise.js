//Promise have 3 state 
//pending , resolved , rejected

const myPromise = new Promise((resolved,rejected)=>{
    const user = {
        name:'RICK'
    };
    if(!user){
        rejected("User not found");
    }else{
        resolved("User exist")
    }
})

myPromise
.then(res=>console.log(res))
.catch(err => console.log(err))