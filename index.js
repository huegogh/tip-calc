let total = document.getElementById('total');
let slider = document.getElementById('tipSlider');
let percentageDisplay = document.getElementById('sliderValue');
let tipTotal = document.getElementById('tipTotal');
let grandTotal = document.getElementById('grandTotal');

total.innerText = 20.00;

slider.addEventListener( 'input', () => {
    percentageDisplay.innerText = slider.value;
    grandTotal.innerText = (slider.value * total.value) / 100.00;
})