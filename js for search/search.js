var films=["Batman","Baby driver","Fight club","Godzilla","Hereditary","John wick","Joker","Knives out","Little miss sunshine","Mad max","Me and earl and the dying girl","Shawshank redemption","Sixth sense","Taxi driver","The prestige","Wall.E"];
var link_films=["film1","film2","film3","film4","film5","film6","film7","film8","film9","film10","film11","film12","film13","film14","film15","film16"];
let film1=document.getElementById('film1');
let film2=document.getElementById('film2');
let film3=document.getElementById('film3');
let film4=document.getElementById('film4');
let film5=document.getElementById('film5');
let film6=document.getElementById('film6');
let film7=document.getElementById('film7');
let film8=document.getElementById('film8');
let film9=document.getElementById('film9');
let film10=document.getElementById('film10');
let film11=document.getElementById('film11');
let film12=document.getElementById('film12');
let film13=document.getElementById('film13');
let film14=document.getElementById('film14');
let film15=document.getElementById('film15');
let film16=document.getElementById('film16');
let not_found=document.getElementById('not_found');
not_found.style.display='none';


function searchFilm(term) 
    {
        for(var i=0;i<films.length;i++)
        {
            if(films[i].toLowerCase().includes(term.toLowerCase()) == true )
            {
                document.getElementById(link_films[i]).style.display='block';
            }
            else 
            {
                document.getElementById(link_films[i]).style.display='none';
            }
            if( (i==(films.length-1)) && (film1.style.display=='none') && (film2.style.display=='none' )&& (film3.style.display=='none') && (film14.style.display=='none') && (film5.style.display=='none') && (film6.style.display=='none' )&& (film7.style.display=='none') && (film8.style.display=='none') && (film9.style.display=='none') && (film10.style.display=='none') && (film11.style.display=='none') && (film12.style.display=='none') && (film13.style.display=='none') && (film14.style.display=='none') && (film15.style.display=='none') && (film16.style.display=='none'))
            {
                not_found.style.display='block';
            }
            else 
            {
                not_found.style.display='none';
            }
        }
    }

var r = document.querySelector(':root'); 
// Create a function for setting a variable value
function myFunction_set1() {
    var rs = getComputedStyle(r);
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--main-color', '#dca523');
    r.style.setProperty('--main-color-more-dark2', '#a07512');
    r.style.setProperty('--main-color-more-dark1', '#684d0f');
    r.style.setProperty('--second-color', '#ffffff1a');
    r.style.setProperty('--background-color', '#0f0a05');
    r.style.setProperty('--second-text-color', '#fff');
    r.style.setProperty('--important-red', '#b50a0a');
}
function myFunction_set2() {
    var rs = getComputedStyle(r);
    // Set the value of variable --blue to another value (in this case "lightblue")
    r.style.setProperty('--main-color', '#FFFFFF');
    r.style.setProperty('--main-color-more-dark2', '#333');
    r.style.setProperty('--main-color-more-dark1', '#000000');
    r.style.setProperty('--second-color', '#053933');
    r.style.setProperty('--background-color', '#181D25');
    r.style.setProperty('--second-text-color', '#333');
    r.style.setProperty('--important-red', 'green');
}
    
