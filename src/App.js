import logo from './logo.svg';
import './App.css';
import recetas from './data/BDD-PEF.json'
import React from 'react';
import QueryC from './components/queryComponent';
import {useEffect, useState} from 'react';
import InputComponent from './components/inputComponent';
import ResultComponent from './components/resultComponent';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {

  function queryP(target, macro, macroId){
    console.log('query para '+macro+' = '+target);
    let inde;
    let index;
    let dif = target;
    for(let i = 0; i< recetas['recetas'].length; i++){
      let ind = Object.keys(recetas['recetas'][i])
      let contenido = parseFloat(recetas['recetas'][i][ind][macroId][macro])
      if(contenido > target){
        if((contenido-target)<dif){
          dif = (contenido-target)
          inde = ind;
          index = i;
        }
      }
      else{
        if((target-contenido)<dif){
          dif = (target-contenido)
          inde = ind;
          index = i;
        }
      }
    }
    let finish = recetas['recetas'][index][inde];
    setTitulo(inde);
    setReceta(finish);
    console.log(finish);
    console.log('done');
  }

  const[indice, setIndice] = useState(0);
  const[receta, setReceta] = useState({});
  const[titulo, setTitulo] = useState('')
  const[state, setState] = useState('start')

  useEffect(()=>{
    console.log(receta);
    console.log(titulo);
  }, [receta]);

  useEffect(()=>{
    console.log(state)
  }, [state]);

  const handleInput = (id) =>{
    switch(id){
      case 1:
        queryP(indice, 'proteina', 3);
        break;
      case 2:
        queryP(indice, 'calorias', 2);
        break;
      case 3:
        queryP(indice, 'grasa', 4);
        break;
      case 4:
        queryP(indice, 'carbs', 5);
        break;
      default:
        console.log('la caagastes man')
    }
    
  }

  return (
    <div className="bgd">
      
        {state === 'start' && ( 
        <QueryC setter={setIndice} handle={handleInput} trip={setState}/>
      )}
      {state === 'about'&& (
        <ResultComponent titulo={titulo} calorias={receta[2]['calorias']} proteina={receta[3]['proteina']} grasa={receta[4]['grasa']} carbs={receta[5]['carbs']} click={setState} ingredientes={receta[0]['ingredientes']} />
      )}
    </div>
  );
}

export default App;
