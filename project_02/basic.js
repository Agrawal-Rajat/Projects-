const form = document.querySelector("form")

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value)

    const weight = parseInt(document.querySelector('#weight').value)

    const result = document.querySelector("#results")

    if(height < 0 || height == '' || isNaN(height)){
        result.innerHTML = "Invalid input"
    }

    else if(weight < 0 || weight == '' || isNaN(weight)){
        result.innerHTML = "Invalid input"
    }
    else{
        const bmi = height * weight
        result.innerHTML = `Your Bmi is : ${bmi}`
    }
    
})