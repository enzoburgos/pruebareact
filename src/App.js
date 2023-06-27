import './App.css';

function App() {
  //todo js

  let saludo= 'hola bienvenidos a mi web 3.0'
  
  function hacerclick(params) {
    console.log('usted hizo click')  
  }

  return (
    //jsx
    <div>{saludo}

    <button onClick={hacerclick}>hace click</button>
    </div>
  );
}

export default App;
