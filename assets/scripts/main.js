
// import { search } from './data.js';
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
        // search();
    });
    pasteBtn.addEventListener("click", function () { 
        navigator.clipboard.readText().then(function(clipboardData) {
                inputSearch.value = clipboardData;
            }).catch(function(err) {
                console.error('Unable to read clipboard data', err);
            });
    });
});
