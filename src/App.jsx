import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Private from './pages/Private';
import proctectedroutes from './compenets/protectedroutes';
import { useEffect,useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';


function App() {
  const[user,setuser]= useState(null);
  const[isfetching,setisfetching]=useState(true)

    useEffect(()=>{
      const unsubcribe= onAuthStateChanged(auth,(user)=>{
        if (user){
          setuser(user)
          setisfetching(false)
          return
        }
        setuser(null)
        setisfetching(false)
      } )
      return()=>unsubcribe()
    },[])
    if(isfetching){
      return
      <h1>loading......</h1>
    }
  return (
    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Home />} />
        <Route path='/private' element={<proctectedroutes user={user}>
          <Private/>
        </proctectedroutes> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
