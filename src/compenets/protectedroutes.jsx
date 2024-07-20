import React from "react"
import { Navigate } from "react-router-dom"

const proctectedroutes=({Children,user})=>{
    return user ? Children:<navigate to ='/'></navigate>
}
export default proctectedroutes