

let data=JSON.parse(localStorage.getItem("products"))


data.map(function(el,index){
 let div=document.createElement("div")
    let type=document.createElement("p")
    type.innerText=el.type;

    let desc=document.createElement("p")
    desc.innerTexte=el.Desc;

    let price=document.createElement("p")
    price.innerText=el.price;

    let image=document.createElement("img")
    image.src=el.image;

    let btn=document.createElement("button")
    btn.innerText="Remove_products"
    btn.addEventListener("click",function(){
     removeItem(el,index)
     })

div.append(image,type,price,desc,btn)
document.getElementById("all_products").append(div)

      
function removeItem(el,index){

     data.splice(index,1);
     
     localStorage.setItem("Products", JSON.stringify(data));
     window.location.reload();

     
     }


})

