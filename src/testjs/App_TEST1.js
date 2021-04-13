import React from 'react'

function Food( dish ){
  return <div>
          <h1>{dish.name}</h1>
          <h2>{dish.image}</h2>
        </div>
}
const foodILike = [
  {
    name : 'kimchi1',
    image : 'kimchiurl1'
  },
  {
    name : 'kimchi2',
    image : 'kimchiurl2'
  },
  {
    name : 'kimchi3',
    image : 'kimchiurl3'
  },
];

function App() {
  return (
    <div>
      { 
        foodILike.map( dish =>(
          <Food  
            name={dish.name} 
            image={dish.image}
          />
        ) 
      )};
    </div>
  );
}

export default App;

