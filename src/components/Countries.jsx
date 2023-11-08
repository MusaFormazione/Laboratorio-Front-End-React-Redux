import Country from "./Country";

import { useSelector } from 'react-redux';

export default function Countries({setCountryCode}) {
  const countries = useSelector(state => state.countries);
  
  let countriesList = countries.length > 0 ?
  countries.map(country => 
    <Country 
      setCountryCode={setCountryCode}
      country={country.country} 
      rating={country.rating} 
      code={country.code}
      key={country.code}
    />
  ) : 'Please add a country!';
    
  return(
    <div className="w-1/4 mx-6 bg-neutral-700">
      <h2 className="text-4xl">List</h2>
      <section>
        {countriesList}
      </section>
    </div>
  )
}