import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/router'


const LogoutUser = () => {
    const router = useRouter()

    useEffect(() => {

        localStorage.removeItem("jwt")

      
        router.push("/")
      
    }, [])
    



  return (
    <div>


    <h4 className='text-center text-dark' style={{color:"black",fontWeight:"bolder",fontSize:50,marginTop:300}}>Logging Out</h4>


    </div>
  )
}

export default LogoutUser