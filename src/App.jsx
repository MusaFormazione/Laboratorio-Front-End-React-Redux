import {useState, createContext} from 'react';
import Header from './components/Header';
import Countries from './components/Countries';
import CountryDetails from './components/CountryDetails';

import './App.css';

function App() {
  let [countryCode, setCountryCode] = useState('it');
  
  function handleSetCountries(country) {
    setCountries([
      ...countries,
      country
    ])
  }
  
  return (
    <>
      <h1 className='p-4'>My favorite countries</h1>
      <Header />
      <div className='flex mt-4'>
        <Countries setCountryCode={setCountryCode}/>
        <CountryDetails countryCode={countryCode}/>
      </div>
    </>
  )
}

export default App
