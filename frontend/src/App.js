import Navbar from './components/Navbar';
import Home from './components/Home';
import Designs from './components/Designs';
import Contact from './components/Contact';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Designs />
      <Contact />
      <Login />
    </div>
  );
}

export default App;
