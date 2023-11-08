import { useEffect, useState } from "react";

const countriesUrl = 'https://restcountries.com/v3.1/';

// export default function CountryDetails({countryCode}) {
export default function CountryDetails({countryCode}) {
  let [country, setCountry] = useState('');
  
  // useEffect(() => {
  //   fetch(`${countriesUrl}/alpha/${countryCode}`)
  //     .then(res => res.json())
  //     .then(country => {
  //       setCountry(country[0])
  //     })
  // },[countryCode]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  
  useEffect(() => {
    async function fetchCountry() {
      // Imposto isLoading a true per mostrare il caricamento in corso
      setIsLoading(true);
      try {
        let res = await fetch(`${countriesUrl}/alpha/${countryCode}`);
        // Se la fetch non va a buon fine, lancio un errore
        if(!res.ok) {
          throw new Error('Fetch failed!')
        }
        const resData = await res.json();
        setCountry(resData[0])
      } catch(error) {
        // Imposto un errore da mostrare nella UI
        setError(error.message)
      }
      // Finita la fetch, tolgo il loader
      setIsLoading(false);
    }
    fetchCountry();
  }, [countryCode])
  
  let countryDetails = ''
  
  if(isLoading) {
    countryDetails = <p>Loading ...</p>
  }

  if(error) {
    countryDetails = <p>Something went wrong: {error}</p>
  }
  
  if(country) {
    countryDetails = (
      <div className="w-3/4 text-center">
        <h2 className="text-6xl">{country.name.common}</h2>
        <img className="mx-auto" src={country.flags.png} alt="" />
        <h2 className="text-4xl">Capital: {country.capital[0]}</h2>
        <p>Region: {country.region}</p>
        <p>Pop: {country.population}</p>
      </div>
    )
  }
  
  return(
    <>
      {countryDetails}
    </>
  )
}