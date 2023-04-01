import React, { useState,useEffect } from 'react';
import { Button, Card, Form, ListGroup, ListGroupItem, Row, Col, Tabs, Tab, Collapse, Modal, Alert } from 'react-bootstrap';
import PageHeader from '../../../shared/layout-components/pageheader/PageHeader';
import Link from 'next/link'
import axios from 'axios';

const CardsDesign = () => {
  const [datas, setDatas] = useState("")

  //Basic Cards

  const defaultCard = [
    { id: "1", class: "text-primary bg-primary-transparent card-transparent", class1: "Primary" },
    { id: "2", class: "text-secondary bg-secondary-transparent card-transparent", class1: "Secondary" },
    { id: "3", class: "text-success bg-success-transparent card-transparent", class1: "Success" },
    { id: "4", class: "text-danger bg-danger-transparent card-transparent", class1: "Danger" },
    { id: "5", class: "text-info bg-info-transparent card-transparent", class1: "Info" },
    { id: "6", class: "text-warning bg-warning-transparent card-transparent", class1: "Warning" },
  ]

  //backround color Card

  const backroundcolorCard = [

    { id: "1", class: "text-white bg-primary", class1: "Primary" },
    { id: "2", class: "text-white bg-secondary", class1: "Secondary" },
    { id: "3", class: "text-white bg-success", class1: "Success" },
    { id: "4", class: "text-white bg-danger", class1: "Danger" },
    { id: "5", class: "text-white bg-info", class1: "Info" },
    { id: "6", class: "text-white bg-warning", class1: "Warning" },
  ]

  // CONTACT CARD 01
  const [contactExpanded1, setcontactExpanded1] = useState(true);

  const contactHandleExpandClick = () => {
    setcontactExpanded1(!contactExpanded1);
  };
  const [contactShow1, setcontactShow1] = useState(true);

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
  };
  const [statusShow, setstatusShow] = useState(true);

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


  const data = [
    {datas:1},
    {datas:2},
    {datas:3},
    {datas:4},
    {datas:5},
    {datas:6},
    {datas:7},
    {datas:8}
  ]




  useEffect(() => {

    const getData = localStorage.getItem("jwt")
    const parseData = JSON.parse(getData)
    
  try {

    axios.post("/api/Package/PackageHistory",{
      id:parseData.UserData._id
    })
    .then((acc)=>{
      console.log(acc.data)
      setDatas(acc.data)
    })
    .catch((err)=>{
      console.log(err)
    })
    
  } catch (error) {
    console.log(error)
  }
   
    
  }, [])
  


  return (
    <div >
    <PageHeader titles="My Packages" active="Cards" items={['Apps']} />
    
    
   
    <Row>

      {
       datas&& datas.map((hit)=>{
          return <Col key={hit.datas} md={12} xl={12}>
          <Card>
            <Card.Body>
              <Card.Title style={{fontWeight:"bold",fontSize:25}} className='pb-2'>{hit.PackageName}</Card.Title>
              {/* <Card.Text >Some quick example text to build on the card title and make up the bulk of the cards content.</Card.Text> */}
              <Link style={{fontWeight:"bold"}} href="#" class="card-link">Max : {hit.MaxDays} Days</Link> 
              <Link style={{fontWeight:"bold"}} href="#" class="card-link">{hit.PackagePurchasedOn}</Link> 
              <Link style={{fontWeight:"bold"}} href="#" class="card-link">Type : {hit.Type}</Link>
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
