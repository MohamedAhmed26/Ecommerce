

let btn = document.querySelectorAll('.add-cart');

let products = [];


btn.forEach( item => {
    item.addEventListener("click", (eo) =>{
        let img = eo.target.parentElement.getElementsByTagName("img")[0].src;
        let title = eo.target.parentElement.getElementsByTagName("h2")[0].innerText;
        let price = Number(eo.target.parentElement.querySelectorAll(".new")[0].innerText.replace("$",""));
        localStorage.clear();
        products.push({img,title,price});
        localStorage.setItem('products',JSON.stringify(products));
        eo.target.remove()
    })

});
