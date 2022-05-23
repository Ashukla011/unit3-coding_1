//store the products array in localstorage as "products"


document.querySelector("#products").addEventListener("submit",myfucntion)


let product=JSON.parse(localStorage.getItem("products"))||[]
function myfucntion(){
    event.preventDefault()
    // console.log("avnish")

    let arr=[]

    let obj={
        type:document.querySelector("#type").value,
        desc:document.querySelector("#Desc").vlaue,
        price:document.querySelector("#price").value,
        image:document.querySelector("#image").value,
    }

    arr.push(obj)
    localStorage.setItem("products",JSON.stringify(arr))
    document.querySelector("#type").value=null
   document.querySelector("#Desc").vlaue=null
    document.querySelector("#price").value=null
  document.querySelector("#image").value=null
}


