// import { search_ } from "./data.js";
import { search, search_ } from "./processingData.js";

document.addEventListener("DOMContentLoaded", () => {
    const openFill = document.querySelector(".filter");
    const closeFill = document.querySelector(".close_fill");
    const fillbox = document.querySelector(".box_fill");
    openFill.addEventListener("click", () => {
        fillbox.classList.add("active");
    });
    closeFill.addEventListener("click", () => {
        fillbox.classList.remove("active");
    });


    const inputSearch = document.querySelector(".input_search");
    const clearInputBtn = document.querySelector(".clear_input");
    const pasteBtn = document.querySelector(".paste");
    clearInputBtn.addEventListener("click", function() {
        inputSearch.value = "";
    });
    pasteBtn.addEventListener("click", function () { 
        navigator.clipboard.readText().then(function(clipboardData) {
                inputSearch.value = clipboardData;
            }).catch(function(err) {
                console.error('Unable to read clipboard data', err);
            });
    });

    inputSearch.addEventListener("input", () => {
        search_();
    });

    const fillLand = document.getElementById('fill_land')
    const fillGender = document.getElementById('fill_gender')
    fillLand.addEventListener('change', () => {
        search();
    });
    fillGender.addEventListener('change', () => {
        search();
    });
});




document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) {
        e.preventDefault();
    }
});
document.addEventListener("keydown", function(e) {
    if (e.ctrlKey && e.keyCode === 85) {
        e.preventDefault();
    }
});
