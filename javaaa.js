let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountain3');
let mountains4 = document.getElementById('mountain4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat');
let moonpie = document.getElementById('.moonpie');
window.onscroll = function(){
    let value = scrolly;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px'
    river5.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    moonpie.style.fontsize = value + 'px';
if(scrollY >= 70){
    moonpie.style.fontsize = 70 + 'px';
    moonpie.style.position = 'fixed';
    if(scrollY >= 478){
        moonpie.style.display = 'none';
    }else{
        moonpie.style.display = 'block';
    }
    if(scrollY >= 127){
        document.querySelector('.main').style.background ='linear-gradient(#376281,#10001f);'
    }else{
        document.querySelector('.main').style.background ='linear-gradient(#460356,#1f0542);'
    }
}

}