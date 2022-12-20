function convert_sum( number1,number2){
    number1 = parseInt(number1)
    number2 = parseInt(number2)
    result = number1 + number2
    return result
}

num1 = window.prompt("Enter a integer number: ")
num2 = window.prompt("Enter another integer number: ")
result = convert_sum(num1,num2)
window.alert(`Result: ${result}`)