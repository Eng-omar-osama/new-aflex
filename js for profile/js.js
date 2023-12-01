let edit = document.getElementById('btn');
let closebtn = document.getElementById('submit');
let a = document.getElementsByClassName('edit')[0];
let b = document.getElementsByClassName('edit')[1];
let c = document.getElementsByClassName('edit')[2];
let d = document.getElementsByClassName('edit')[3];
let arr1=[a,b,c,d];
let storagefav1 = document.getElementsByClassName('storagefav')[0];
let storagefav2 = document.getElementsByClassName('storagefav')[1];
let storagefav3 = document.getElementsByClassName('storagefav')[2];
let storagefav4 = document.getElementsByClassName('storagefav')[3];
storagefav1.innerHTML=localStorage.storagefav1;
storagefav2.innerHTML=localStorage.storagefav2;
storagefav3.innerHTML=localStorage.storagefav3;
storagefav4.innerHTML=localStorage.storagefav4;
edit.onclick=function(){
    a.style.outline='2px solid var(--main-color)';
    b.removeAttribute("readonly");
    b.style.outline='2px solid var(--main-color)';
    c.style.outline='2px solid var(--main-color)';
    d.removeAttribute("readonly");
    d.style.outline='2px solid var(--main-color)';
    closebtn.classList.remove('hide');
    edit.classList.add('hide');
}
for(let i=0 ;i<arr1.length;i++){
    closebtn.onclick=function(){
        arr1[i].setAttribute("readonly");
        arr1[i].style.outline='none';
        closebtn.classList.add('hide');
        edit.classList.remove('hide');
        }
    }
let id=document.getElementById('id');
let name=document.getElementById('name');
let email=document.getElementById('email');
let number=document.getElementById('number');

if(localStorage.length>0)
{
    id.value=localStorage.id;
    email.value=localStorage.email;
    number.value=localStorage.number;
}
id.onkeyup=function(){
    localStorage.setItem('id',id.value)
}
email.onkeyup=function(){
    localStorage.setItem('email',email.value)
}
number.onkeyup=function(){
    localStorage.setItem('number',number.value)
}
