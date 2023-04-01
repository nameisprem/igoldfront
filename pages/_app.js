import '@/styles/globals.scss'
import Contentlayout from '../shared/layout-components/layout/content-layout'
import Landingpagelayout from '../shared/layout-components/layout/landingpage-layout'
import Switcherlayout from '../shared/layout-components/layout/switcher-layout'
import Authenticationlayout from '../shared/layout-components/layout/authentication-layout'
import {useEffect} from "react"
import { useRouter } from 'next/router'




const layouts = {
  Contentlayout: Contentlayout,
  Landingpagelayout: Landingpagelayout,
  Switcherlayout: Switcherlayout,
  Authenticationlayout: Authenticationlayout,
};
export default function App({ Component, pageProps }) {
  const router = useRouter()


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


  useEffect(() => {

    const getData = localStorage.getItem("jwt")
    if (!getData) {
      router.push("/")
    }
  
  
   
  }, [router.isReady])
  








  const Layout = layouts[Component.layout] || ((pageProps) => <Component>{pageProps}</Component>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
