import { signOut } from "firebase/auth"
import { auth } from "../firebase"


function Private() {
  const handlesignout=()=>{
    signOut(auth)
    .then(()=>alert("sign out succefully"))
  .catch(error=>{
    console.log(error)
    alert(error.message)
  })

  }
 

    return (
      <div style={{display:"flex", justifyContent:"center", flexDirection:"column", alignContent:"center"}}>
        <h1 style={{marginBottom:"20px"}}>Private page</h1>
        <button onClick={handlesignout}>sign out</button>
      </div>
    )
  }
  
  export default Private