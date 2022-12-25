const hour = 23

if ( hour <= 11 ){
    console.log('Morning')
} 
else if ( hour > 11 && hour <= 17 ){
    console.log('Afternoon')
}
else if (hour>=18 && hour < 25){
    console.log('Night')
}
else {
    console.log('invalid')
}