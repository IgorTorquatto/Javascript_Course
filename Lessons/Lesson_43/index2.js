function sum (x,y){
    if (typeof x !== 'number' || typeof y !== 'number' ){
        throw new Error ('x e y precisam ser números')
    }
  return x + y
}

try {
    console.log(sum('1',3));
    console.log(1,3);
}catch(e){
   // console.log(e);
   console.log('Tivemos um problema.');
}