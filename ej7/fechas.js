const fechaHoy = new Date(2022, 10, 25)
console.log(fechaHoy);

const born = new Date(1996,10, 26)
console.log(born);

const dateLate = fechaHoy > born
console.log(dateLate);

const diaBorn = born.getDay();
console.log(diaBorn);

const mesBorn = born.getMonth()+1;
console.log(mesBorn);

const anyoBorn = born.getFullYear();
console.log(anyoBorn);

