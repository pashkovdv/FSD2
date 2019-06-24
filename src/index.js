import {config} from './modules/config';
import AppService from './modules/app_service';
import './modules/header.component';
import './css/style.css';

console.log('Config key:', config.key);

const service = new AppService('Hello world');
service.log();

let x=1122;
let g = v => console.log(v);

console.log(g(x))