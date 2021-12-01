const tipAmountHTML = document.querySelector('.totalamount')
const totalHTML = document.querySelector('.total')

const signoMX = '$'
let bill = 142.55
let tip = 15
let personas = 5

let tipAmount = 0
let total = 0

tipAmount = bill * (tip / 100) / personas
total = bill / personas + tipAmount

tipAmountHTML.textContent = signoMX + tipAmount.toFixed(2)
totalHTML.textContent = signoMX + total.toFixed(2) 