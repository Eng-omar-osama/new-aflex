
let fav1 = document.getElementsByClassName('fav')[0];
let fav2 = document.getElementsByClassName('fav')[1];
let fav3 = document.getElementsByClassName('fav')[2];
let fav4 = document.getElementsByClassName('fav')[3];
let storagefav1 = document.getElementsByClassName('storagefav')[0];
let storagefav2 = document.getElementsByClassName('storagefav')[1];
let storagefav3 = document.getElementsByClassName('storagefav')[2];
let storagefav4 = document.getElementsByClassName('storagefav')[3];
let openedit = document.getElementById('btn');
let closeedit = document.getElementById('submit');
openedit.onclick=function(){
    fav1.removeAttribute("readonly");
    fav1.style.outline='2px solid var(--main-color)';
    fav2.removeAttribute("readonly");
    fav2.style.outline='2px solid var(--main-color)';
    fav3.removeAttribute("readonly");
    fav3.style.outline='2px solid var(--main-color)';
    fav4.removeAttribute("readonly");
    fav4.style.outline='2px solid var(--main-color)';
    closeedit.classList.remove('hide');
    openedit.classList.add('hide');
}
closeedit.onclick=function(){
    fav1.setAttribute("readonly");
    fav1.style.outline='none';
    fav2.setAttribute("readonly");
    fav2.style.outline='none';
    fav3.setAttribute("readonly");
    fav3.style.outline='none';
    fav4.setAttribute("readonly");
    fav4.style.outline='none';
    closeedit.classList.add('hide');
    openedit.classList.remove('hide');
}

if(localStorage.length>0)
{
    fav1.value=localStorage.fav1;
    fav2.value=localStorage.fav2;
    fav3.value=localStorage.fav3;
    fav4.value=localStorage.fav4;
    storagefav1.innerHTML=localStorage.storagefav1;
    storagefav2.innerHTML=localStorage.storagefav2;
    storagefav3.innerHTML=localStorage.storagefav3;
    storagefav4.innerHTML=localStorage.storagefav4;
}

fav1.onkeyup=function(){
    localStorage.setItem('fav1',fav1.value)
    localStorage.setItem('storagefav1',fav1.value)
}
fav2.onkeyup=function(){
    localStorage.setItem('fav2',fav2.value)
    localStorage.setItem('storagefav2',fav2.value)
}
fav3.onkeyup=function(){
    localStorage.setItem('fav3',fav3.value)
    localStorage.setItem('storagefav3',fav3.value)
}
fav4.onkeyup=function(){
    localStorage.setItem('fav4',fav4.value)
    localStorage.setItem('storagefav4',fav4.value)
}
