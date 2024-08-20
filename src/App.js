import './App.css';
import { Router , Routes, Route } from 'react-router-dom';
import {Signup} from '../src/Component/sign-up'
import { SignIn } from './Component/sign-in';
import { MyRouter } from './Component/MyRouter';
function App() {
  return (
    <div className="App">
     <MyRouter/>
    </div>
  );
}

export default App;
