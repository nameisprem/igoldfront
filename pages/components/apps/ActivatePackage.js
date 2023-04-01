import React, { useState, useEffect } from 'react';
import { Button, Card, Form, ListGroup, ListGroupItem, Row, Col, Tabs, Tab, Collapse, Modal, Alert } from 'react-bootstrap';
import PageHeader from '../../../shared/layout-components/pageheader/PageHeader';
import Link from 'next/link'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router'

const CardsDesign = () => {
  const router = useRouter()


  // CONTACT CARD 01
  const [contactExpanded1, setcontactExpanded1] = useState(true);

  const [contactShow1, setcontactShow1] = useState(true);
  const [getPackagePrice, setGetPackagePrice] = useState(0)
  const [isLoading, setIsLoading] = useState("")

  // CONTACT CARD 2

  const [cardExpanded2, setcardExpanded2] = useState(true);

  const cardHandleExpandClick2 = () => {
    setcardExpanded2(!cardExpanded2);
  };
  const [contactShow2, setcontactShow2] = useState(true);

  // CONTACT CARD 3

  const [cardExpanded3, setcardExpanded3] = useState(true);

  const cardHandleExpandClick3 = () => {
    setcardExpanded3(!cardExpanded3);
  };

  const [cardShow3, setcardShow3] = useState(true);

  // CONTACT CARD 4

  const [cardExpanded4, setcardExpanded4] = useState(true);

  const cardHandleExpandClick4 = () => {
    setcardExpanded4(!cardExpanded4);
  };
  const [cardShow4, setcardShow4] = useState(true);

  //Basic Card

  const [BasicExpanded, setBasicExpanded] = useState(true);

  const BasicHandleExpandClick = () => {
    setBasicExpanded(!BasicExpanded);
  };
  const [Basicshow, setBasicshow] = useState(true);


  // Basic color card-header

  const [ColorExpanded, setColorExpanded] = useState(true);

  const ColorHandleExpandClick = () => {
    setColorExpanded(!ColorExpanded);
  };
  const [Colorshow, setColorshow] = useState(true);


  // Basic color card-footer

  const [FooterExpanded, setFooterExpanded] = useState(true);

  const FooterHandleExpandClick = () => {
    setFooterExpanded(!FooterExpanded);
  };
  const [Footershow, setFootershow] = useState(true);


  // Card with success alert

  const [successExpanded, setsuccessExpanded] = useState(true);

  const successHandleExpandClick = () => {
    setsuccessExpanded(!successExpanded);
  };
  const [successshow, setsuccessShow] = useState(true);

  // Card with danger alert

  const [dangerExpanded, setdangerExpanded] = useState(true);

  const dangerHandleExpandClick = () => {
    setdangerExpanded(!dangerExpanded);
  };
  const [dangershow, setdangerShow] = useState(true);


  // Initial collapsed card

  const [InitialExpanded, setInitialExpanded] = useState(false);

  const InitialHandleExpandClick = () => {
    setInitialExpanded(!InitialExpanded);
  };
  const [Initialshow, setInitialShow] = useState(true);

  //Card with switch

  const [modaltoggle, setmodaltoggle] = useState(true);



  // Card With List

  const [ListExpanded, setListExpanded] = useState(true);

  const ListHandleExpandClick = () => {
    setListExpanded(!ListExpanded);
  };
  const [Listshow, setListShow] = useState(true);

  // Sample card

  const [SampleExpanded, setSampleExpanded] = useState(true);

  const sampleHandleExpandClick = () => {
    setSampleExpanded(!SampleExpanded);
  };

  const [sampleShow, setsampleShow] = useState(true);

  // card-with image

  const [ImageExpanded, setImageExpanded] = useState(true);

  const ImageHandleExpandClick = () => {
    setImageExpanded(!ImageExpanded);
  };
  const [ImageShow, setImageShow] = useState(true);

  // Card blue

  const [cardExpanded, setcardExpanded] = useState(true);

  const cardHandleExpandClick = () => {
    setcardExpanded(!cardExpanded);
  };
  const [cardShow, setcardShow] = useState(true);


  // Card status on left side

  const [statusExpanded, setstatusExpanded] = useState(true);

  const statusHandleExpandClick = () => {
    setstatusExpanded(!statusExpanded);
  }

  const [datas, setDatas] = useState("")

  //Fullscreen

  const [screenExpanded, setscreenExpanded] = useState(true);
  let [fullScreen, setFullscreen] = useState("true");
  const [fullscreenshow, setfullscreenShow] = useState(false);

  const fullscreenmodalClose = () => setfullscreenShow(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setfullscreenShow(true);
  }

  const FullscreenhandleExpandClick = () => {
    setscreenExpanded(!screenExpanded);
  };
  const [shows, setShows] = useState(true);

  const getDatass = () => {


    let getDatas = localStorage.getItem("jwt")
    let parsedData = JSON.parse(getDatas)



    try {

      axios.post("/api/Package/ShowAvaliblePackage", {
        // userId:"6412cede2211b09f54bb7857"
        userId: parsedData.UserData._id
      })
        .then((acc) => {

          setDatas(acc.data)
        })
        .catch((err) => {
          alert("something went wrong")
        })


    } catch (error) {

    }



  }

  useEffect(() => {
    getDatass()
  }, [])



  const PurchasePackage = (packageId) => {

    let getData = localStorage.getItem("jwt")
    let parseIt = JSON.parse(getData)



    try {

      axios.post("/api/Package/PurchasePackage", {
        packageId: packageId,
        userId: parseIt.UserData
      })
        .then((acc) => {


          toast.success('Package Purchased', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });


          getDatass()



        }).catch((err) => {

        })


    } catch (error) {

    }





  }


  return (
    <div >

      <PageHeader titles="Activate Package" active="Cards" items={['Apps']} />

      <ToastContainer />

      <Row>
        {
          datas && datas.Repurchase_Package.map((hit, index) => {
            return <Col key={index} md={6} xl={4}>
              <Card>
                <Card.Body>
                  <Card.Title style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", borderBottomColor: "black", borderBottomWidth: 2, borderBottomStyle: "solid" }} className='pb-2'>{hit.PackageName.toUpperCase()}</Card.Title>


                  <Card.Title style={{ fontSize: 40, fontWeight: "bolder", textAlign: "center", color: "#8277FC", marginTop: -10 }} className='pb-2'>${hit.PackagePrice}</Card.Title>


                  <Card.Title style={{ fontSize: 15, fontWeight: "bolder", textAlign: "center", color: "black", marginTop: -25 }} className='pb-2'>Daily : {hit.DailyReward}%</Card.Title>

                  <div style={{ textAlign: "center" }}>
                    {
                      isLoading == hit.PackageName ? 

                      <div style={{ fontWeight: "bolder", cursor: "no-drop", backgroundColor: "gray", color: "white", padding: 10, borderRadius: 10, width: "100%" }} class="card-link">Please Wait...</div>
                

                      :

                      <div onClick={() => {setIsLoading(hit.PackageName),PurchasePackage(hit._id)}} style={{ fontWeight: "bolder", cursor: "pointer", backgroundColor: "yellow", color: "black", padding: 10, borderRadius: 10, width: "100%" }} class="card-link">Re-Activate</div>
                      
                    }
                    </div>
                </Card.Body>
              </Card>
            </Col>
          })
        }

        {
          datas && datas.Already_Activated.map((hit, index) => {
            return <Col key={index} md={6} xl={4}>
              <Card>
                <Card.Body>
                  <Card.Title style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", borderBottomColor: "black", borderBottomWidth: 2, borderBottomStyle: "solid" }} className='pb-2'>{hit.PackageName.toUpperCase()}</Card.Title>


                  <Card.Title style={{ fontSize: 40, fontWeight: "bolder", textAlign: "center", color: "#8277FC", marginTop: -10 }} className='pb-2'>${hit.PackagePrice}</Card.Title>


                  <Card.Title style={{ fontSize: 15, fontWeight: "bolder", textAlign: "center", color: "black", marginTop: -25 }} className='pb-2'>Daily : {hit.DailyReward}%</Card.Title>

                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: "bolder", cursor: "no-drop", backgroundColor: "green", color: "white", padding: 10, borderRadius: 10, width: "100%" }} class="card-link">Activated</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          })
        }

        {
          datas && datas.Avalible_Package.map((hit, index) => {
            return <Col key={index} md={6} xl={4}>
              <Card>
                <Card.Body>
                  <Card.Title style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", borderBottomColor: "black", borderBottomWidth: 2, borderBottomStyle: "solid" }} className='pb-2'>{hit.PackageName.toUpperCase()}</Card.Title>


                  <Card.Title style={{ fontSize: 40, fontWeight: "bolder", textAlign: "center", color: "#8277FC", marginTop: -10 }} className='pb-2'>${hit.PackagePrice}</Card.Title>


                  <Card.Title style={{ fontSize: 15, fontWeight: "bolder", textAlign: "center", color: "black", marginTop: -25 }} className='pb-2'>Daily : {hit.DailyReward}%</Card.Title>

                  <div style={{ textAlign: "center" }}>
                    {
                      hit.PackageName == isLoading ? 

                      <div style={{ fontWeight: "bolder", cursor: "no-drop", backgroundColor: "gray", color: "white", padding: 10, borderRadius: 10, width: "100%" }} class="card-link">Please Wait...</div>

                      :

                      <div onClick={() => {setIsLoading(hit.PackageName),PurchasePackage(hit._id)}} style={{ fontWeight: "bolder", cursor: "pointer", backgroundColor: "#8277FC", color: "white", padding: 10, borderRadius: 10, width: "100%" }} class="card-link">Activate Now</div>

                    }
                  </div>
                </Card.Body>
              </Card>
            </Col>
          })
        }





        {
          datas && datas.Locked_Packages.map((hit, index) => {
            return <Col key={index} md={6} xl={4}>
              <Card>
                <Card.Body>
                  <Card.Title style={{ fontSize: 30, fontWeight: "bold", textAlign: "center", borderBottomColor: "black", borderBottomWidth: 2, borderBottomStyle: "solid" }} className='pb-2'>{hit.PackageName.toUpperCase()}</Card.Title>


                  <Card.Title style={{ fontSize: 40, fontWeight: "bolder", textAlign: "center", color: "#8277FC", marginTop: -10 }} className='pb-2'>${hit.PackagePrice}</Card.Title>


                  <Card.Title style={{ fontSize: 15, fontWeight: "bolder", textAlign: "center", color: "black", marginTop: -25 }} className='pb-2'>Daily : {hit.DailyReward}%</Card.Title>

                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontWeight: "bolder", cursor: "no-drop", backgroundColor: "gray", color: "white", padding: 10, borderRadius: 10, width: "100%" }} class="card-link">Locked</div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          })
        }









      </Row>



    </div>
  )
};
CardsDesign.layout = "Contentlayout"
export default CardsDesign;
