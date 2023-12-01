var r = document.querySelector(':root');
if (localStorage.mode == "light") {
    window.onload = function fun1() {

        // Set the value of variable --blue to another value (in this case "lightblue")

        r.style.setProperty('--main-color', '#dca523');
        r.style.setProperty('--main-color-more-dark2', '#a07512');
        r.style.setProperty('--main-color-more-dark1', '#684d0f');
        r.style.setProperty('--second-color', '#ffffff1a');
        r.style.setProperty('--background-color', '#0f0a05');
        r.style.setProperty('--second-text-color', '#fff');

    }
}



// Create a function for setting a variable value

else if (localStorage.mode == "dark") {
    window.onload = function fun2() {

        // Set the value of variable --blue to another value (in this case "lightblue")
        r.style.setProperty('--main-color', '#320E3E');
        r.style.setProperty('--main-color-more-dark2', '#24082e');
        r.style.setProperty('--main-color-more-dark1', '#190420');
        r.style.setProperty('--second-color', '#CD03E3');
        r.style.setProperty('--background-color', '#444');
        r.style.setProperty('--second-text-color', '#333');
    }
}