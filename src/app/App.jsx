import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import './App.css';
import CardSimpleBuy from '../components/Card-Simple-Buy/CardSimpleBuy';

function App() {
  return (
    <>
      <h1 className='tittle-h1-white'>All Components</h1>

      <main>  
       
       <div className='flex-div'>
          <Link to={'/cards'}><button className='btn-large-pink'>Cards</button></Link>
       </div>
        

      </main>
    </>
  );
}

export default App;
