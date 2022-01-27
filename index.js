let saveEl = document.querySelector("#save-el")
let countEl = document.querySelector("#count-el")
let count = 0
document.querySelector("#increment-btn").onclick= increment
document.querySelector("#save-btn").onclick= save
function increment() {
    count += 1
    countEl.textContent = count
}


function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
}