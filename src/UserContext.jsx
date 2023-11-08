import { createContext, useContext, useReducer } from "react";

let initialAdminState = {
  isLogged: false
}

const AdminContext = createContext(null);
const AdminDispatchContext = createContext(null);

export function AdminProvider({children}) {
  const [adminState, dispatch] = useReducer(
    adminReducer,
    initialAdminState
  );
  
  return (
    <AdminContext.Provider value={adminState}>
      <AdminDispatchContext.Provider value={dispatch}>
        {children}
      </AdminDispatchContext.Provider>
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  return useContext(AdminContext);
}
export function useAdminDispatch() {
  return useContext(AdminDispatchContext);
}

function adminReducer(adminState, action) {
  switch(action.type) {
    case 'login': {
      return {
        ...adminState,
        isLogged: true
      }
    }
    case 'logout': {
      return {
        ...adminState,
        isLogged: false
      }
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}