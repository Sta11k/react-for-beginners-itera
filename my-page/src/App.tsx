import React from 'react';
import info  from './info.json';
// import logo from './logo.svg';
import './App.css';

function App() {

  


  console.log(info.biography.workListeners);
  // const listWork = info.biography.workListeners((work, index) => 
  //   return (
  //     <li key={index}>{work}</li>
  //   )
  // );


  return (<div className="App">
      <header>
         <h1>{info.name}</h1>
      </header>
    
      <main>
        <section className='biography'>
          <h2>Biography</h2>
          <h3>education</h3>
          <p className='education' >{info.biography.education}</p>
          <h3>{info.biography.work}</h3>
          <ul>
          {info.biography.workListeners.map((work, index) => {
            return (
              <li  className='listen__item' key={index}>{work}</li>
            )
          })}
          </ul>
        <h3>contacts</h3>

        
        <ul className='contacts'>

          {info.biography.contacts.map((contact, index) => {
            return (
              <li key={index}>{contact}</li>
            )
          })}
        </ul>

     

        </section>  



      </main>
 
    </div>
  );
}

export default App;
