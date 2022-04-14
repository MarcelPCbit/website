
const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
let colorTheme = "0";

function setTheme(theme) {
    if (theme == "dark") {        
        document.getElementsByTagName("html")[0].classList.add("dark");
        document.getElementById("darkmodeButton").classList.add("justify-end")
        document.getElementById("darkmodeIcon").innerHTML = "dark_mode";
        colorTheme = "dark";

    } else if (theme == "light") {
        document.getElementsByTagName("html")[0].classList.remove("dark");
        document.getElementById("darkmodeButton").classList.remove("justify-end")
        document.getElementById("darkmodeIcon").innerHTML = "light_mode";
        colorTheme = "light";

    } else {
        console.log("setTheme error")
    }
}

function switchColorTheme() {
    if (colorTheme == "light") {
        setTheme("dark")
    } else {        
        setTheme("light")
    }
}

window.onload = (event) => {
    if (userPrefersDark) {
        setTheme("dark");
    } else {
        colorTheme = "light";
    }
};