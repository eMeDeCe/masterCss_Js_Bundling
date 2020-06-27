import './mystyles.scss';
import logoImg from './content/logoParcel.png';
const numberInstallModules = 7;
console.log(`Número de instalaciones realizadas ${numberInstallModules}`);

const img = document.createElement('img');
img.src = logoImg;

document.getElementById('imgContainer').appendChild(img);
