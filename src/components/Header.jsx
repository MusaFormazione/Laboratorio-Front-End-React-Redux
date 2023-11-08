import { useState, useReducer, useContext } from "react"
import { useAdmin, useAdminDispatch } from "../UserContext"
import { addCountry } from "../features/countriesSlice";
import { useDispatch } from "react-redux";

export default function Header() {
  const adminInfo = useAdmin();
  const adminDispatch = useAdminDispatch();

  const initialFormState = {
    country: '',
    code: '',
    rating: '',
  }

  const formReducer = (state, action) => {
    switch(action.type) {
      case('UPDATE_TEXT_FIELD'):
        return {
          ...state,
          [action.payload.field]: action.payload.value
        }
    }
  }

  const [formState, dispatchForm] = useReducer(formReducer, initialFormState)
  
  function handleInputChange(e) {
    dispatchForm({
      type: 'UPDATE_TEXT_FIELD',
      payload: {
        field: e.target.name,
        value: e.target.value
      }
    })
  }

  function handleAdmin(actionType) {
    adminDispatch({
      type: actionType
    })
  }

  const reduxDispatch = useDispatch();
  
  function addCountryDispatch() {
    // console.log(formState)
    reduxDispatch(addCountry(formState))
  }
  
  return(
    <div>
      {!adminInfo.isLogged ? 
        <button onClick={() => handleAdmin('login')}>Login</button> :
        <button onClick={() => handleAdmin('logout')}>Logout</button>
      }

      <div className="bg-slate-950 p-4 flex gap-4 justify-center items-center flex-wrap">
        <div className="flex gap-2">
          <label htmlFor="country">Country</label>
          <input type="text" id="country" name="country" value={formState.country} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="flex gap-2">
          <label htmlFor="code">Code</label>
          <input type="text" id="code" name="code" value={formState.code} onChange={(e) => handleInputChange(e)} />
        </div>
        <div className="flex gap-2">
          <label htmlFor="rating">Rating</label>
          <input type="text" id="rating" name="rating" value={formState.rating} onChange={(e) => handleInputChange(e)} />
        </div>
        <div>
          <button onClick={() => addCountryDispatch()}>Add country</button>
        </div>
      </div>
    </div>
  )
}