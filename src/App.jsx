import React from 'react';

import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';

function App() {
  return (
    <div className="App">
      
      <NavBar/>

      <ItemListContainer msj="¡Bienvenido a Coder Hogar!" />

    </div>
  );
}

export default App;