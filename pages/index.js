import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { Form, Alert, InputGroup, Button } from 'react-bootstrap';
import styles from '@/styles/Home.module.scss'
import { Password } from '../shared/data/Authenticatepage/DataAuthentication';
import { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import UpdateWallet from '@/components/Authentication/UpdateWallet'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let navigate = useRouter();

  // if (navigate.isReady) {
    
  //   let getUserData = localStorage.getItem("jwt")
    
  //   if (getUserData) {
  //     navigate.push(`/components/dashboard/dashboard/`);
      
  //   }

  // }

  
  const [err, setError] = useState("");
  const [data, setData] = useState({
    "email": "adminnextjs@gmail.com",
    "password": "1234567890",
  })


 



  const { email, password } = data;
  const [isLoading, setIsLoading] = useState(false)
  const [connectedToMetamask, setConnectedToMetamask] = useState(false)
  const [userWalletId, setUserWalletId] = useState("")
  const [showUpdateWallet, setShowUpdateWallet] = useState(false)

  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
    setError("");
  }
  const routeChange = () => {
    let path = `/components/dashboard/dashboard/`;
    navigate.push(path);
  }


  // useEffect(() => {
  //   if (document.querySelector(".app")) {
  //     document.querySelector(".app").classList.add("dark-mode");
  //     let DarkHeader = document.querySelector("#myonoffswitch8")
  //     DarkHeader.checked = true;
  //     let DarkMenu = document.querySelector("#myonoffswitch5")
  //     DarkMenu.checked = true;
  //     let DarkMenu1 = document.querySelector("#myonoffswitch2")
  //     DarkMenu1.checked = true;
  //   }
  // }, [])



  const Proceed = () =>{

    try {

      axios.post("/api/Authentication/Login", {
        WalletAddress: userWalletId
      })
        .then((acc) => {
          setIsLoading(false)
          console.log(acc.data)
          localStorage.setItem("jwt",JSON.stringify(acc.data))
          if (acc.data.Already_Have_Account) {
            toast.success('Hey User Welcome', {
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
          } else {
            setShowUpdateWallet(true)

            toast.info('Please Update Your Upperline', {
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



  const Login = (e) => {



    if (window.ethereum) {

      window.ethereum.request({ method: 'eth_requestAccounts' })
        .then(res => {
          // Return the address of the wallet
          setConnectedToMetamask(true)
          console.log(res)
          setUserWalletId(res[0])


          toast.success('Connected To Metamask', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          setIsLoading(false)

        })


    } else {
      setIsLoading(false)

      // alert("install metamask extension!!")

      toast.warn('Install Metamask Extension!!', {
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
    // console.log(data);
    // if (data.email == "adminnextjs@gmail.com" && data.password == "1234567890"){
    //   routeChange()
    // }
    // else{
    //   setError("The Auction details did not Match")
    //   setData({
    //     "email": "adminnextjs@gmail.com",
    //    "password": "1234567890",
    //    })
    // }






  }


{/* <>

<UpdateWallet/>



</> */}



  return (

    <>
    {

      showUpdateWallet ? 
      <UpdateWallet/>



      :


    <>
      <ToastContainer />
      <div>
        <div className='login-img'>
          <div className="page">
            {/* <!-- CONTAINER OPEN --> */}
            <div className="container-login100">
              <div className="wrap-login100 p-6">
            <div className="col-login mx-auto">
              <div className="text-center">
                <img style={{width:100,height:100}} src={"../../../assets/maillogo.png"} className="header-brand-img" alt="" />
              </div>
            </div>
                <form className="login100-form validate-form">
                  <span className="login100-form-title pb-5">Connect With Metamask</span>
                  <div>
                        <>
                        {
                          isLoading ? 
                          <div className="container-login100-form-btn">
                            <Button style={{backgroundColor:"gray"}} className="login100-form-btn btn-secondary">
                              Loading...
                            </Button>
                          </div>

                          :

                          userWalletId ? 

                          <div className="container-login100-form-btn">
                            <Button onClick={()=>{setIsLoading(true),Proceed()}} style={{fontWeight:"bold"}} className="login100-form-btn btn-primary">
                             {userWalletId.slice(0,5)}...{userWalletId.slice(-5)}
                            </Button>
                          </div>

                          :



                          <div className="container-login100-form-btn">
                            <Button onClick={()=>{setIsLoading(true),Login()}} className="login100-form-btn btn-primary">
                              Connect Now
                            </Button>
                          </div>
                        }
                        </>




                    {/* <div className="text-center pt-3">
                            <p className="text-dark mb-0">Not a member? <Link href={`/components/authentication/register/`}>
                            Sign UP
                        </Link></p>
                          </div>
                      <div className="text-center pt-3">
                      
                      </div>
                      <label className="login-social-icon"><span>Login with Social</span></label>
                      <div className="d-flex justify-content-center">
                        <Link href="#">
                          <div className="social-login me-4 text-center">
                            <i className="fa fa-google"></i>
                          </div>
                        </Link>
                        <Link href="#">
                          <div className="social-login me-4 text-center">
                            <i className="fa fa-facebook"></i>
                          </div>
                        </Link>
                        <Link href="#">
                          <div className="social-login text-center">
                            <i className="fa fa-twitter"></i>
                          </div>
                        </Link>
                        
                      </div> */}

                  </div>
                </form>
              </div>
            </div>
            {/* // <!-- CONTAINER CLOSED --> */}
          </div>
        </div>
      </div >
    </>

    }

    
    
    </>
  )
}
