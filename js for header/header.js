let btnOpen = document.getElementById('open'); 
let btnClose = document.getElementById('close');
let container = document.querySelector('#container');

btnClose.onclick=function(){
    container.classList.add('hide');
    btnClose.classList.add('hide');
    btnOpen.classList.remove('hide');
}
btnOpen.onclick=function(){
    container.classList.remove('hide');
    btnClose.classList.remove('hide');
    btnOpen.classList.add('hide');
}
