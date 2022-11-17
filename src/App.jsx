import './App.css';
import './stylesheets/mediaquerys.css'
import Testimony from './components/testimony.jsx';

function App() {
  return (
    <div className="App">
      <div className="App__container">
        <h1 className='App__container--title'>This is what our students say about us</h1>

        <Testimony 
        img='KyloRen'
        name='Kylo Ren'
        country='Argentina'
        job='Sith'
        company='The New Order'
        testimony='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium repellendus veritatis laborum doloribus quos magni iure adipisci? Necessitatibus vel maiores officia expedita ipsam vero quas labore odio ipsa illo!' />

        <Testimony 
        img='Stormtrooper'
        name='Stormtrooper #9182'
        country='Japan'
        job='Stormtrooper Iniciate'
        company='The New Order'
        testimony='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium repellendus veritatis laborum doloribus quos magni iure adipisci? Necessitatibus vel maiores officia expedita ipsam vero quas labore odio ipsa illo!' />

        <Testimony 
        img='Spaceship'
        name='Spaceship'
        country='The Space'
        job='Spaceship'
        company='The New Order'
        testimony='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo praesentium repellendus veritatis laborum doloribus quos magni iure adipisci? Necessitatibus vel maiores officia expedita ipsam vero quas labore odio ipsa illo!' />
      </div>
    </div>
  );
}

export default App;
