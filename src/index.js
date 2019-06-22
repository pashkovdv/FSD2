import {config} from './modules/config';
import AppService from './modules/app_service';
import './modules/header.component';

console.log('Config key:', config.key);

const service = new AppService('Hello world');
service.log();

let x=11;
let g = v => console.log(v);
console.log(g(x))