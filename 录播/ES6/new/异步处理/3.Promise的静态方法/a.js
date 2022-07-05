
const pro1 = Promise.any([Promise.resolve(5),Promise.resolve(2),Promise.reject(35)]);
setTimeout( () =>{
    console.log(pro1);
},1000)
pro1.then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})

const pro2 = Promise.all([Promise.resolve(4),Promise.reject(2),Promise.resolve(3),Promise.reject(5)]);
setTimeout( () =>{
    console.log(pro2);
},1000)
pro2.then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})