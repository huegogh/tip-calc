let total = document.getElementById('total');
let slider = document.getElementById('tipSlider');
let percentageDisplay = document.getElementById('sliderValue');
let tipTotal = document.getElementById('tipTotal');
let grandTotal = document.getElementById('grandTotal');


slider.addEventListener('input', updateTotals);
total.addEventListener('input', updateTotals);

function updateTotals() {
    percentageDisplay.innerText = slider.value + '%';
    tipTotal.innerText = `Tip: $${((slider.value * parseFloat(total.value)) / 100).toFixed(2)}`;
    grandTotal.innerText = `Grand Total: $${(parseFloat(total.value) + (slider.value * parseFloat(total.value) / 100)).toFixed(2)}`;

}

updateTotals();