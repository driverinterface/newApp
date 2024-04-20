import { bindData, handleInput} from '.';
import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app')!,
});

const inputFunction = handleInput();
const handleInputFunction = bindData();


export default {
  app: app, 
  inputFunction: inputFunction,
  handleInputFunction: handleInputFunction
}
