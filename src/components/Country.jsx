import { useAdmin } from "../UserContext";
import { useDispatch } from 'react-redux';
import { deleteCountry } from "../features/countriesSlice";

export default function Country({country, rating, code, setCountryCode}) {
  const adminInfo = useAdmin();
  const dispatch = useDispatch();

  function handleDelete(code) {
    dispatch(deleteCountry(code))
  }
  
  return(
    <article className="m-4 bg-sky-950 p-4">
      <h3>{country}</h3>
      <h3>Rating: {rating}</h3>
      <button onClick={() => setCountryCode(code)}>Details</button>
      {adminInfo.isLogged && <button onClick={() => handleDelete(code)}>Delete</button>}
    </article>
  )
}