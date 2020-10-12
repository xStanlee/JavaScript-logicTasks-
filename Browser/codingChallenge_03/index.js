// Import stylesheets && functions()
import './style.css';
/*import {removeShure, setCookie} from './functions.js';*/
import {AppStorage} from './class.js';

/* W/O express/node app. 
                        --> use cookies <--

const shureBtn = document.querySelector('button');
const cookieInfo = shureBtn.parentElement;

if(document.cookie !== '' && document.cookie.split('=')[1] === 'true'){
  removeShure(cookieInfo);
}
shureBtn.addEventListener('click', (e) => {
  const cookieShure = true;
  
  setCookie(cookieShure);
  removeShure(cookieInfo);
});
*/

/* W/O express/node app.
                        --> use localStorage <-- */
const localStorage = new AppStorage();

const shureBtn = document.querySelector('button');
const cookieInfo = shureBtn.parentElement;

if(!localStorage.get('SHURE_ACCEPTED') === false){
  cookieInfo.parentElement.removeChild(cookieInfo);
}
shureBtn.addEventListener('click', e => {
  e.preventDefault();
    
  localStorage.set('SHURE_ACCEPTED', true);
  cookieInfo.parentElement.removeChild(cookieInfo);
});
