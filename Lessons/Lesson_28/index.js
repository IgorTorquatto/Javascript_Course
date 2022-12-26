const data = new Date()  // miliseconds
console.log(data.toDateString()); //now

const data2 = new Date(2019,3,20,15,14,27)  //determineted 20/04/2019 15:14:27  (mandatory year and day)
console.log(data2);    

const data3 = new Date('2019-04-20  20:20:59')
console.log(data3);

console.log('Day',data.getDate());
console.log('Month',data.getMonth());
console.log('Year',data.getFullYear());
console.log('Hour',data.getHours());
console.log('Minute',data.getMinutes());
console.log('Seconds',data.getSeconds());
console.log('Ms',data.getMilliseconds());
console.log('Day of week',data.getDay());