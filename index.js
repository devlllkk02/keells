/*var BG_IMGS = ['Images/Home_1_BG.jpg','Images/Home_2_BG.jpg','Images/Home_3_BG.jpg']
var img = document.getElementsByClassName('home')[0]
var i =0
console.log(img)





function BG_CHANGER(){
    for(var i =0 ; i<BG_IMGS.length;i++){
        img.style.backgroundImage = "url('"+BG_IMGS[i]+"')";
        setInterval(BG_CHANGER(),1000)
    }    
}


function BG_CHANGER(){
    img.style.backgroundImage = "url('"+BG_IMGS[i]+"')";
    if(i<BG_IMGS.length-1){
        i++
    }else{
        i=0
    }

    setTimeout("BG_CHANGER()",5000)
}

//window.onload =BG_CHANGER;*/