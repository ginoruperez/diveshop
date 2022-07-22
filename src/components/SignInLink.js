import { useState } from 'react';

import SignIn from './SignIn'
import Products from './Products';


function SignInLink() {
  const [token, setToken] = useState();
  const [isAdmin, setAdmin] = useState();

  console.log('isadmin before '+isAdmin);
  console.log('token before ' + token);
  
  if(!token) {
    return <SignIn setToken={setToken} setAdmin={setAdmin} />
  }

  console.log('isAdmin value is'+isAdmin);
  
  
  
  return (
   
   <div>
       
        
       {
         token && <Products isAdmin={isAdmin} />
       
       }



    </div> 
    
  );
}

export default SignInLink;