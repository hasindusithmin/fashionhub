import './App.css';
import { useEffect, useState } from 'react';

import User from './componets/User';



function App() {

  const [USERS,SETUSERS] = useState(null)


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=>{
         if (!res.ok) throw Error(res.statusText)
         return res.json()
      })
      .then((data)=>{
        SETUSERS(data)
      })
      .catch((err)=>{
        console.error(err.message);
      })
  },[])

  return (
    <div className='w3-content w3-panel'>

        <h1 className='w3-center w3-opacity'><b>CLIENTS</b></h1>
        {
          USERS &&
          USERS.map((USER)=><User key={USER['id']} username={USER['username']} name={USER['name']} email={USER['email']} website={USER['website']} />)
        }

    </div>
  );
}

export default App;
