const form = document.querySelector('form')

form.addEventListener('submit', function(e) {
    e.preventDefault()

    const heightValue = document.querySelector('#height').value
    const weightValue = document.querySelector('#weight').value
    const results = document.querySelector('#results')
    const results1 = document.querySelector('#results1')

    
    if (heightValue === '' || heightValue < 0 || isNaN(heightValue) || !/^\d+$/.test(heightValue)) {
        results.innerHTML = `please give a valid height ${heightValue}`;
    }

    
    else if (weightValue === '' || weightValue < 0 || isNaN(weightValue) || !/^\d+$/.test(weightValue)) {
        results.innerHTML = `please give a valid weight ${weightValue}`;
    }

   
    else {
        const height = parseInt(heightValue)
        const weight = parseInt(weightValue)
        const bmi = (weight / ((height * height) / 10000)).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`;

        if (bmi < 18.6) {
            results1.innerHTML = "Under Weight";
        }
        else if (bmi >= 18.6 && bmi <= 24.9) {
            results1.innerHTML = "Normal Range";
        }
        else {
            results1.innerHTML = "Overweight";
        }
    }
})
