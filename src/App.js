import logo from './logo.svg';
import './App.css';
import NaveBar from './components/NaveBar';
import Home from './pages/Home';
import News from './pages/News';
import Contact from './pages/Contact';
import About from './pages/About';
import BotomBar from './components/BotomBar';

function App() {
  return (
    <div>
      <NaveBar/>
      <Home/>
      <News/>
      <Contact/>
      <About/>
      <BotomBar/>

    </div>
  );
}

export default App;
