var wrapperRight = document.getElementsByClassName("wrapper-right")[0] //Rename Them - wrapper right
var ButtonShop = document.getElementsByClassName('btn-click') //Rename Them - shoping btn
var foodIcons = document.getElementsByClassName('food-icons')
var foodHeadUL = document.getElementsByClassName("wrapper-left-header-nav")[0]
var foodHead = document.getElementsByClassName("wrapper-left-header-nav-ul-li")
var subMenu = document.getElementsByClassName("wrapper-left-sub-menu")[0]
var subMenuContent = subMenu.getElementsByClassName("sub-menu")

var Button_Remove = document.getElementsByClassName("cart-item-remove-button")
var Qunatity_Objects = document.getElementsByClassName("cart-item-quantity-object")
var Button_AddToCart = document.getElementsByClassName("item-addtocart")
var Button_Purchase = document.getElementsByClassName("cart-button-purchase")[0]

var Button_Delivery_Next = document.getElementsByClassName("delivery-next")[0]
var Button_Delivery_Back = document.getElementsByClassName("delivery-back")[0]
var Button_Delivery_Confirm = document.getElementsByClassName("delivery-confirm")[0]

var customer_details_body = document.getElementsByClassName("customer-details")[0]
var payment_details_body = document.getElementsByClassName("payment-details")[0]
var customer_details_footer = document.getElementsByClassName("delivery-wrapper-footer-left")[0]
var payment_details_footer = document.getElementsByClassName("delivery-wrapper-footer-right")[0]

var Cash_Radbtn = document.getElementsByClassName("cash")[0]
var Card_Radbtn = document.getElementsByClassName("card")[0]
var Cash_Body = document.getElementsByClassName("payment-description-cash")[0]
var Card_Body = document.getElementsByClassName("payment-description-card")[0]
var Card_Header_Main = document.getElementsByClassName("payment-description-card-header")[0]
var Card_Header = document.getElementsByClassName("payment-description-card-header-card")

var delivery_Total = document.getElementsByClassName("delivery-total")[0]
var delivery_Shipping = document.getElementsByClassName("delivery-shipping")[0]
var delivery_Net_Total = document.getElementsByClassName("delivery-nettotal")[0]
var shop_welcome = document.getElementsByClassName("shop-welcome")[0]

var Beverages = document.getElementById("beverages-link")
var Fruits = document.getElementById("fresh-link")

var Beverages_Content = document.getElementById("beverages")
var Fruits_Content = document.getElementById("fresh")

console.log(Beverages,Beverages_Content)

Beverages.addEventListener('click',()=>{
    shop_welcome.style.display = "none"
    Beverages_Content.style.display = "inline"
    
    //Beverages_Content.style.opacity = "1"

    Fruits_Content.style.display = "none"
    //Fruits_Content.style.opacity = "0"
}) 
Fruits.addEventListener('click',()=>{
    shop_welcome.style.display = "none"
    Fruits_Content.style.display = "inline"
   //Fruits_Content.style.opacity = "1"
    
    Beverages_Content.style.display = "none"
    //Beverages_Content.style.opacity = "0"
})

var toggleStatus = 0;
//console.log(Button_Delivery_Next)


//#region Sub Menu Mouse Over

for(var i =0; i<foodHead.length;i++){
    foodHead[i].addEventListener('mouseover',sub_menu_MO)
    foodHead[i].addEventListener('mouseleave',sub_menu_ML)
}
subMenu.addEventListener('mouseover',sub_menu_MO)
subMenu.addEventListener('mouseleave',sub_menu_ML)

foodHead[0].addEventListener('mouseover',()=>{
    for(var i = 0 ; i < subMenuContent.length;i++)
    {subMenuContent[i].style.flex="0";subMenuContent[i].style.opacity="0";}
    subMenuContent[0].style.flex="1";subMenuContent[0].style.opacity="1";})

foodHead[1].addEventListener('mouseover',()=>{
    for(var i = 0 ; i < subMenuContent.length;i++)
    {subMenuContent[i].style.flex="0"; subMenuContent[i].style.opacity="0";}
    subMenuContent[1].style.flex="1"; subMenuContent[1].style.opacity="1";})
    
foodHead[2].addEventListener('mouseover',()=>{
    for(var i = 0 ; i < subMenuContent.length;i++)
    {subMenuContent[i].style.flex="0";}
    subMenuContent[2].style.flex="1"; subMenuContent[2].style.opacity="1";})

foodHead[3].addEventListener('mouseover',()=>{
    for(var i = 0 ; i < subMenuContent.length;i++)
    {subMenuContent[i].style.flex="0"; subMenuContent[i].style.opacity="0";}
    subMenuContent[3].style.flex="1" ;subMenuContent[3].style.opacity="1";})

foodHead[4].addEventListener('mouseover',()=>{
    for(var i = 0 ; i < subMenuContent.length;i++)
    {subMenuContent[i].style.flex="0"; subMenuContent[i].style.opacity="0";}
    subMenuContent[4].style.flex="1";subMenuContent[4].style.opacity="1";})
    
foodHead[5].addEventListener('mouseover',()=>{
    for(var i = 0 ; i < subMenuContent.length;i++)
    {subMenuContent[i].style.flex="0"; subMenuContent[i].style.opacity="0";}
    subMenuContent[5].style.flex="1"; subMenuContent[5].style.opacity="1";})

foodHead[6].addEventListener('mouseover',()=>{
    for(var i = 0 ; i < subMenuContent.length;i++)
    {subMenuContent[i].style.flex="0"; subMenuContent[i].style.opacity="0";}
    subMenuContent[6].style.flex="1"; subMenuContent[6].style.opacity="1";})

foodHead[7].addEventListener('mouseover',()=>{
    for(var i = 0 ; i < subMenuContent.length;i++)
    {subMenuContent[i].style.flex="0"; subMenuContent[i].style.opacity="0";}
    subMenuContent[7].style.flex="1"; subMenuContent[7].style.opacity="1";})
    
foodHead[8].addEventListener('mouseover',()=>{
    for(var i = 0 ; i < subMenuContent.length;i++)
    {subMenuContent[i].style.flex="0"; subMenuContent[i].style.opacity="0";}
    subMenuContent[8].style.flex="1"; subMenuContent[8].style.opacity="1";})


function sub_menu_MO(event){
    var listItem = event.target;
    subMenu.style.flex= "2";
}

function sub_menu_ML(event){
    var listItem = event.target;
    subMenu.style.flex= "0";
}


ButtonShop[0].addEventListener('click',toggleMenu)

function toggleMenu(){
    if(toggleStatus==1){
        wrapperRight.style.flex="0";
        wrapperRight.style.opacity="0";
        
        for(var i = 0; i<foodIcons.length;i++){
            foodIcons[i].style.display = "inline-block";
            foodIcons[i].style.opacity = '1';
        }
        
        toggleStatus = 0;
    }
    else  { 
        for(var i = 0; i<foodIcons.length;i++){
            foodIcons[i].style.display = "none";
            foodIcons[i].style.opacity = '0';
        }
        wrapperRight.style.flex="2";
        wrapperRight.style.opacity="1";
        toggleStatus = 1;
}}
//#endregion


for(var i=0;i < Button_Remove.length;i++){
    Button_Remove[i].addEventListener('click',remove_cart_item);
}

for(var i=0;i < Qunatity_Objects.length;i++){
    Qunatity_Objects[i].addEventListener('change',quantity_changed)
}

for(var i=0;i < Button_AddToCart.length;i++){
    Button_AddToCart[i].addEventListener('click',addtocart)
}

Button_Purchase.addEventListener('click',add_to_checkout_clicked)

Button_Delivery_Next.addEventListener('click',delivery_next_clicked)

Button_Delivery_Back.addEventListener('click',delivery_back_clicked)

Cash_Radbtn.addEventListener('click',cash_radbtn_clicked)
Card_Radbtn.addEventListener('click',card_radbtn_clicked)







function remove_cart_item(event){
    var remove_btn_clicked = event.target;
    remove_btn_clicked.parentElement.parentElement.parentElement.remove();
    update_cart_total();
}

function addtocart(event){
    var btn_addtocart = event.target
    var shopitem = btn_addtocart.parentElement

    var title = shopitem.getElementsByClassName("item-name")[0].innerText
    var scale = shopitem.getElementsByClassName("item-scale")[0].innerText
    var price = shopitem.getElementsByClassName("item-price")[0].innerText
    var imgSrc = shopitem.getElementsByClassName("item-img")[0].src
    //console.log(scale)
    
    var value;
    var type;
    if(scale == "Per 100 g(s)"){
        value = "100g"
        type = "text"
    }else{
        value =1
        type = "number"
    }

    additemtocart(title,scale,value,type,price,imgSrc)
    update_cart_total();
 
}

function additemtocart(title,scale,value,type,price,imgSrc){
    var cart_row = document.createElement('div')
    var cart_items = document.getElementsByClassName("wrapper-right-main")[0]

    var cart_row_names = cart_items.getElementsByClassName("cart-item-name")

    for(var i=0;i < cart_row_names.length;i++){
        if(cart_row_names[i].innerText == title){
            alert("The Item Has Been Already Added To The Cart")
            return
        }
    }

    var cart_row_content = 
    `
    <div class="cart-item">
                        <div class="cart-item-img">
                            <img class="cart-item-img-object" src="${imgSrc}">
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-name"><p>${title}</p></div>
                            <div class="cart-item-scale"><p>${scale}</p></div>
                            <div class="cart-item-numbers">
                                <div class="cart-item-price"><p>${price}</p></div>
                            <div class="cart-item-quantity"><input class="cart-item-quantity-object"  type="${type}" value="${value}"></div>
                            <div class="cart-item-subtotal"><p>${price}</p></div>
                            </div>
                            <div class="cart-item-remove"><button class="cart-item-remove-button" type="button">Remove</button></div>
                        </div>
                    </div>
    
    `
    cart_row.innerHTML = cart_row_content
    
    cart_items.append(cart_row)
    cart_row.getElementsByClassName("cart-item-remove-button")[0].addEventListener('click',remove_cart_item)
    cart_row.getElementsByClassName("cart-item-quantity-object")[0].addEventListener('change',quantity_changed)
}




function update_cart_total(){
    var cart_items = document.getElementsByClassName("wrapper-right-main")[0]
    var cart_rows = cart_items.getElementsByClassName("cart-item")

    var total = 0

    //console.log(cart_rows)
    for(var i=0;i < cart_rows.length;i++){
        var cart_row = cart_rows[i]
        var price_element = cart_row.getElementsByClassName("cart-item-price")[0]
        var quantity_element = cart_row.getElementsByClassName("cart-item-quantity-object")[0]
        var subtotal_element = cart_row.getElementsByClassName("cart-item-subtotal")[0]
        var scale_element = cart_row.getElementsByClassName("cart-item-scale")[0]
        
        //console.log(scale_element)

        var price = parseFloat(price_element.innerText.replace('Rs ',''))
        var quantity = quantity_element.value.replace('g','')
        var scale = scale_element.innerText
        //console.log(scale)
        //console.log(price_element,price,quantity_element,quantity)

        if(scale == "Per 100 g(s)"){
            total = total + (price*quantity)/100
            
        }else{
            total = total + (price*quantity)
            
        }

    }
    total = (Math.round(total*100)/100).toFixed(2)
    document.getElementsByClassName("cart-total-price")[0].innerText = "Rs "+total;
}

function quantity_changed(event){
    var quantity_object = event.target
    var subtotal = 0

    var shopitem = quantity_object.parentElement.parentElement.parentElement
    var input_type = shopitem.getElementsByClassName("cart-item-scale")[0].innerText
    
    //console.log(shopitem,input_type)

    if(input_type=="Per 100 g(s)"){
        if(isNaN(quantity_object.value) || quantity_object.value <= 0){
            quantity_object.value=100 + "g";
        }else{
            quantity_object.value = quantity_object.value +"g";
        }
            
        
    }else{
        if(isNaN(quantity_object.value) || quantity_object.value <= 0){
            quantity_object.value=1;
        }
    }

    
    
    var cart_row = quantity_object.parentElement.parentElement.parentElement.parentElement

    var price_element = cart_row.getElementsByClassName("cart-item-price")[0]
    var quantity_element = cart_row.getElementsByClassName("cart-item-quantity-object")[0]
    var scale_element = cart_row.getElementsByClassName("cart-item-scale")[0]

    var price = parseFloat(price_element.innerText.replace('Rs ',''))
    var quantity = quantity_element.value.replace('g','')
    var scale = scale_element.innerText

    if(scale == "Per 100 g(s)"){
        
        subtotal= (price * quantity/100).toFixed(2)
    }else{
        subtotal= (price * quantity).toFixed(2)
    }

    cart_row.getElementsByClassName("cart-item-subtotal")[0].innerText = "Rs "+subtotal
    //console.log(price,quantity)

    update_cart_total()
}



function add_to_checkout_clicked(event){
    

    var cartItems = document.getElementsByClassName("wrapper-right-main")[0]
    var cart_rows = cartItems.getElementsByClassName("cart-item")
    var checkoutItems = document.getElementsByClassName("checkout-item-body")[0]
    var checkoutItems_rows = checkoutItems.getElementsByClassName("checkout-item-body-content")
    var checkoutItems_total = document.getElementsByClassName("checkout-item-body-footer-right-total")[0]
    var cartTotal = document.getElementsByClassName("cart-total-price")[0].innerText
    console.log(checkoutItems_total,cartTotal)
    var checkoutItems_rows_length = checkoutItems_rows.length

    //var length = cart_rows.length
    for(var i = 0; i < checkoutItems_rows_length;i++){
        checkoutItems_rows[0].remove()
    }
  
    for(var i=0;i < cart_rows.length;i++){
        var cart_row = cart_rows[i]

        var name = cart_row.getElementsByClassName("cart-item-name")[0].innerText
        var image = cart_row.getElementsByClassName("cart-item-img-object")[0].src
        var price = cart_row.getElementsByClassName("cart-item-price")[0].innerText
        var quantity = cart_row.getElementsByClassName("cart-item-quantity-object")[0].value
        var subtotal = cart_row.getElementsByClassName("cart-item-subtotal")[0].innerText
        var scale = cart_row.getElementsByClassName("cart-item-scale")[0].innerText


        if(quantity==1){
            quantity=quantity+" unit"
        }
            
        if(quantity>1){
            quantity=quantity+" units"
        }
        add_to_checkout_creation(image,name,price,quantity,subtotal)       
    } 
    checkoutItems_total.innerText =  cartTotal
    
}

function add_to_checkout_creation(image,name,price,quantity,subtotal){

    

    var checkout_container = document.getElementsByClassName("checkout-item-body")[0]
    var checkout_row = document.createElement('div')
    var checkout_row_content = 
    
    `
    <div class="checkout-item-body-content">
        <div class="checkout-item-body-description">
            <div class="checkout-item-body-description-img"><img src="${image}"></div>
            <div class="checkout-item-body-description-name"><p>${name}</p></div>
        </div>
        <div class="checkout-item-body-price">${price}</div>
        <div class="checkout-item-body-quantity">${quantity}</div>
        <div class="checkout-item-body-subtotal">${subtotal}</div>
    </div>
    `
    checkout_row.innerHTML = checkout_row_content
    checkout_container.append(checkout_row)

}

function delivery_next_clicked(){
    
    var total = parseFloat(document.getElementsByClassName("cart-total-price")[0].innerText.replace('Rs ',''))
    var shipping = 350.00
    var nettotal = total+shipping

    
    console.log(delivery_Total)
    delivery_Total.innerText = "Rs " + total.toFixed(2)
    delivery_Net_Total.innerText = "Rs "+ nettotal.toFixed(2)
    console.log(nettotal)


    payment_details_body.style.flex = "1"
    payment_details_footer.style.flex = "1"

    customer_details_body.style.flex = "0"
    customer_details_footer.style.flex = "0"
}

function delivery_back_clicked(){
    payment_details_body.style.flex = "0"
    payment_details_footer.style.flex = "0"

    customer_details_body.style.flex = "1"
    customer_details_footer.style.flex = "1"
}

function cash_radbtn_clicked(){
    Cash_Body.style.flex = "1"

    Card_Body.style.flex = "0"
    Card_Header_Main.style.visibility="hidden"

    for(var i=0 ; i< Card_Header.length;i++){
        Card_Header[i].style.display = "none"
    }
    
}

function card_radbtn_clicked(){
    Cash_Body.style.flex = "0"
    Card_Header_Main.style.visibility="visible"
    Card_Body.style.flex = "1"
    for(var i=0 ; i< Card_Header.length;i++){
        Card_Header[i].style.display = "flex"
    }
}