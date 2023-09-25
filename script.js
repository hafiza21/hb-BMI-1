function calculateBMI(){
  
    firstName = prompt("what is your first name?")
    weight = prompt("what is your weight? (kg)")
    height = prompt("what is your height(metres)")
    bmi = weight / height ** 2
    console.log(firstName)
    console.log(weight)
    console.log(height)
    alert(firstName + ', your bmi is ' + bmi +'!')
    
  }