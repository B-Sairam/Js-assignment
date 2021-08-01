let stds = [
    {name :'sairam',gender:'male'},
    {name :'santhos',gender:'male'},
    {name :'abita',gender:'female'},
    {name :'snega',gender:'female'}
  ];
// -------------------------  task1-------------
let task1 = stds.map((val)=>{
    if(val.gender=='female'){
        return val.name
    }
}).filter((val)=>val)
console.log(task1)
//-----------------task 2-------------------------------
let task2 = stds.map(e=>{
    if(e.name.startsWith("s"))
    return e.name
}).filter(e=>e)
console.log(task2);
//-------------------task3------------------------
let task3 = stds.map(e=>{
    if(e.gender=='male')
    return e
}).filter(e=>e)
console.log(task3.length)
