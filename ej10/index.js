import { suma, multiplica } from './modulos/controller.js'
import chalk from 'chalk';


const mult = multiplica(suma(1,2), suma(4,5))
console.log(mult);
console.log(chalk.green(mult));