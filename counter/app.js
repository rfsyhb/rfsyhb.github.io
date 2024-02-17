// set initial count
let count = 0;

// value dan buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn"); // ! Menjadikan Array NodeList

btns.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList; 
        if (styles.contains('decrease')){
            count--;
        } else if (styles.contains('reset')){
            count = 0;
        } else {
            count++;
        }
        value.textContent = count;
    })
})