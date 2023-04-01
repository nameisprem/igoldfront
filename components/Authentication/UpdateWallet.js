import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Form, Alert, InputGroup, Button } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'

const inter = Inter({ subsets: ['latin'] })

export default function UpdateWallet() {
  const [err, setError] = useState("");
  const [data, setData] = useState({
    "email": "adminnextjs@gmail.com",
    "password": "1234567890",
  })
  const [email, setEmail] = useState("")

  const [connectedToMetamask, setConnectedToMetamask] = useState(false)
  const [userWalletId, setUserWalletId] = useState("")
  const [isLoading, setIsLoading] = useState(false)


  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setError("");
  }
  let navigate = useRouter();
  const routeChange = () => {
    let path = `/components/dashboard/dashboard/`;
    navigate.push(path);
  }


  // useEffect(()=>{
  //   if(document.querySelector(".app")){
  //       document.querySelector(".app").classList.add("dark-mode");
  //       let DarkHeader = document.querySelector("#myonoffswitch8")
  //       DarkHeader.checked = true;
  //       let DarkMenu = document.querySelector("#myonoffswitch5")
  //       DarkMenu.checked = true;
  //       let DarkMenu1 = document.querySelector("#myonoffswitch2")
  //       DarkMenu1.checked = true;
  //   }
  // },[])


  const updateUpperlineUser = () =>{


    setIsLoading(true)

    let getUserData = localStorage.getItem("jwt")
    let parseIt = JSON.parse(getUserData)

    console.log(parseIt.UserData._id)
    console.log(email)

    
    try {

      axios.post("/api/Authentication/UpdateWalletAddress", {
        userId:parseIt.UserData._id,
        newWalletAddress: email
      })
        .then((acc) => {
          setIsLoading(false)
          console.log(acc.data)

          toast.success('Upperline Added', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });


          routeChange()
        })
        .catch((err) => {
          setIsLoading(false)
          toast.error('Something Went Wrong. Please Try Again.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(err)
        })

    } catch (error) {

      setIsLoading(false)
      toast.error('Something Went Wrong', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

    }







  }



  return (
    <>
      <ToastContainer />
      <div>
        <div className='login-img'>
          <div className="page">
            {/* <!-- CONTAINER OPEN --> */}
            <div className="col-login mx-auto mt-7">
              <div className="text-center">
                <img style={{width:100,height:100}} src={"../../../assets/maillogo.png"} className="header-brand-img" alt="" />
              </div>
            </div>
            <div className="container-login100">
              <div className="wrap-login100 p-6">
                <form className="login100-form validate-form">
                  <span className="login100-form-title pb-5">Connect With Metamask</span>
                  <Form.Group className="text-start form-group" controlId="formEmail">
                            <Form.Label>Upperline User</Form.Label>
                            <Form.Control
                              className="form-control"
                              placeholder='e.g. 0xF0a1E5037149D70aedC3cf6E88...'                              
                              type='text'
                              value={email}
                              onChange={(e)=>{setEmail(e.target.value)}}
                              required
                            />

                            <div className="container-login100-form-btn">
                              <Button onClick={updateUpperlineUser} className="login100-form-btn btn-primary">
                                Update Upperline User
                              </Button>
                            </div>



                          </Form.Group>
                </form>


                <h6 style={{cursor:"pointer"}} onClick={()=>routeChange()} className='text-dark text-center'>SKIP</h6>
              </div>
            </div>
            {/* // <!-- CONTAINER CLOSED --> */}
          </div>
        </div>
      </div >
    </>
  )
}
