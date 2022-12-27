for (let i = 0; i <= 10 ; i+=5){
    console.log(i)
}     //Like C

for (let i = 0 ; i<=10; i++){
    const par = i % 2 === 0  // returns true
    console.log(i,par);
}

const fruits = ['apple', 'orange','banana']

for(let i =0 ; i < fruits.length; i++){
    console.log(`index ${i}`,fruits[i]);
}