
const  wrapper = document.querySelector(".wrapper")


const API_URL = "https://dummyjson.com/products"
async function fetchProduct(api){
    let response =  await fetch (`${api}`)
        response
            .json()
            .then((res)=> createCard(res))
            .catch((err)=> console.log(err))
            


}

fetchProduct(API_URL)

function createCard(data){
    data.forEach((product)=> {
        console.log(product);
    })
} 