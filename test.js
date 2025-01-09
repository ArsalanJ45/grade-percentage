let form = document.querySelector('form');

let allTest = document.querySelector('#allTest')
let correct = document.querySelector('#correct')
let incorrect = document.querySelector('#incorrect')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Convert input values to numbers
    let allTestValue = parseFloat(allTest.value);
    let correctValue = parseFloat(correct.value);
    let incorrectValue = parseFloat(incorrect.value);

    // Check if conversion was successful
    if (isNaN(allTestValue) || isNaN(correctValue) || isNaN(incorrectValue)) {
        window.alert("لطفا همه فیلد هارا پر کنید !");
        return;
    }

    // Proceed with the calculation
    let percentage = ((3 * correctValue - incorrectValue) / (allTestValue * 3)) * 100;
    if(correctValue + incorrectValue > allTestValue){
        window.alert("مجموع سوالات درست و نادرست بزرگتر از مجموع سوالات هست!")
    }
    else{
        form.nextElementSibling.innerHTML = `${percentage.toFixed(2)}%`;
        form.nextElementSibling.style.display = "block";
    }
    
});
