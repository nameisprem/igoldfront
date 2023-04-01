import React, { useState, useEffect } from 'react';
import Link from 'next/link'
import PageHeader from '../../layout-components/pageheader/PageHeader';
import { Card, Col, OverlayTrigger, ProgressBar, Row, Tooltip, Table, Tab, Nav } from 'react-bootstrap';
import { AllProduct, Worldmap, Shipped, Pending, Cancelled, SalesAnalytics, RecentOrder, TotalUser, TotalProfit, TotalExpenses, TotalCost } from './DashBoardData';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Dashboard = () => {

  const [datas, setDatas] = useState("")
  const [userWalletAddress, setUserWalletAddress] = useState("")
  const [userSponserCode, setUserSponserCode] = useState("")
  const [uplineForUser, setUplineForUser] = useState("")



  useEffect(() => {

    const FetchData = localStorage.getItem("jwt")
    const ParseData = JSON.parse(FetchData)
    setUserWalletAddress(ParseData.UserData.WalletAddress)
    setUserSponserCode(ParseData.UserData.SponserCode)
    setUplineForUser(ParseData.UserData.UpperlineUser)
    

    try {

      axios.post("/api/FrontData/DashboardData", {
        id: ParseData.UserData._id
      })
        .then((acc) => {
          setDatas(acc.data[0])
          
          
        })
        .catch((err) => {
          
        })



    } catch (error) {
      
    }

  }, [])


  function handleCopy(text) {
    navigator.clipboard.writeText(text);

    toast.success('Copied', {
      position: "top-right",
      autoClose: 1000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }


  return (

    <div >
      <ToastContainer />

      <PageHeader titles="Dashboard" active="Dashboard" items={['Home']} />

      <h3 style={{cursor:"copy",marginTop:-15}} onClick={()=>handleCopy(userSponserCode?userSponserCode:"")} className='text-center mb-5'>My UserID : {userSponserCode?userSponserCode:""}</h3>
      <h3 style={{cursor:"copy"}} onClick={()=>handleCopy(userWalletAddress?userWalletAddress:"")} className='text-center mb-5'>Refer : {userWalletAddress?userWalletAddress:""}</h3>
      <h3 style={{cursor:"copy",marginTop:-15}} onClick={()=>handleCopy(uplineForUser?uplineForUser:"")} className='text-center mb-5'>Upline : {uplineForUser?uplineForUser:""}</h3>

      {
        datas &&
        <>
          <Row className="row-cards">


          <Col sm={6} md={6} lg={6} xl={3}>
              <Card>
                <Card.Header className="pb-0 border-bottom-0">
                  <Card.Title>Daily Income</Card.Title>
                  <div className="card-options">

                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <h3 className="d-inline-block mb-2">{Number(datas.TotalDailyIncome).toFixed(2)}</h3>
                  <ProgressBar className="h-2 mt-2 mb-2" variant="success" now={50} />
                  <div className="float-start">
                    <div className="mt-2">
                      <i className="fa fa-caret-down text-success"></i>
                      <span className='mx-1'>0</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
         

            <Col sm={6} md={6} lg={6} xl={3}>
              <Card>
                <Card.Header className="pb-0 border-bottom-0">
                  <Card.Title>Level Income</Card.Title>
                  <div className="card-options">

                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <h3 className="d-inline-block mb-2">{Number(datas.TotalLevelIncome).toFixed(2)}</h3>
                  <ProgressBar className="h-2 mt-2 mb-2" variant="success" now={50} />
                  <div className="float-start">
                    <div className="mt-2">
                      <i className="fa fa-caret-down text-success"></i>
                      <span className='mx-1'>0</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} md={6} lg={6} xl={3}>
              <Card>
                <Card.Header className="pb-0 border-bottom-0">
                  <Card.Title>Royalty Income</Card.Title>
                  <div className="card-options">

                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <h3 className="d-inline-block mb-2">{Number(datas.TotalRoyaltyIncome).toFixed(2)}</h3>
                  <ProgressBar className="progress h-2 mt-2 mb-2" variant="warning" now={70} />
                  <div className="float-start">
                    <div className="mt-2">
                      <i className="fa fa-caret-up text-warning"></i>
                      <span className='mx-1'>0</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>


            <Col sm={6} md={6} lg={6} xl={3}>
              <Card>
                <Card.Header className="pb-0 border-bottom-0">
                  <Card.Title>Total Income</Card.Title>
                  <div className="card-options">

                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <h3 className="d-inline-block mb-2">{Number(datas.TotalRoyaltyIncome)+Number(datas.TotalDailyIncome)+Number(datas.TotalLevelIncome)}.00</h3>
                  <ProgressBar className="progress h-2 mt-2 mb-2" variant="warning" now={70} />
                  <div className="float-start">
                    <div className="mt-2">
                      <i className="fa fa-caret-up text-warning"></i>
                      <span className='mx-1'>0</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="row-cards">
            <Col sm={6} md={6} lg={6} xl={3}>
              <Card>
                <Card.Header className="pb-0 border-bottom-0">
                  <Card.Title>My Directs</Card.Title>
                  <div className="card-options">

                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <h3 className="d-inline-block mb-2">{Number(datas.MyDirectNo).toFixed(2)}</h3>
                  <ProgressBar className="h-2 mt-2 mb-2" variant="primary" now={50} />
                  <div className="float-start">
                    <div className="mt-2">
                      <i className="fa fa-caret-up text-success"></i>
                      <span className='mx-1'>0</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} md={6} lg={6} xl={3}>
              <Card>
                <Card.Header className="pb-0 border-bottom-0">
                  <Card.Title>Direct Business</Card.Title>
                  <div className="card-options">

                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <h3 className="d-inline-block mb-2">{Number(datas.MyDirectsTotalBusiness).toFixed(2)}</h3>
                  <ProgressBar className="h-2 mt-2 mb-2" variant="primary" now={50} />
                  <div className="float-start">
                    <div className="mt-2">
                      <i className="fa fa-caret-up text-success"></i>
                      <span className='mx-1'>0</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} md={6} lg={6} xl={3}>
              <Card>
                <Card.Header className="pb-0 border-bottom-0">
                  <Card.Title>Level Caping</Card.Title>
                  <div className="card-options">

                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <h3 className="d-inline-block mb-2">{Number(datas.LevelCaping).toFixed(2)}</h3>
                  <ProgressBar className="progress h-2 mt-2 mb-2" variant="warning" now={70} />
                  <div className="float-start">
                    <div className="mt-2">
                      <i className="fa fa-caret-up text-warning"></i>
                      <span className='mx-1'>0</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col sm={6} md={6} lg={6} xl={3}>
              <Card>
                <Card.Header className="pb-0 border-bottom-0">
                  <Card.Title>Available Balance</Card.Title>
                  <div className="card-options">

                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <h3 className="d-inline-block mb-2">0.00</h3>
                  <ProgressBar className="progress h-2 mt-2 mb-2" variant="danger" now={50} />
                  <div className="float-start">
                    <div className="mt-2">
                      <i className="fa fa-caret-down text-danger"></i>
                      <span className='mx-1'>15% decrease</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

          

          </Row>

          <Row className="row-cards">

            

            <Col sm={6} md={6} lg={6} xl={3}>
              <Card>
                <Card.Header className="pb-0 border-bottom-0">
                  <Card.Title>Withdraw</Card.Title>
                  <div className="card-options">

                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <h3 className="d-inline-block mb-2">{Number(datas.TotalWithdrawal).toFixed(2)}</h3>
                  <ProgressBar className="progress h-2 mt-2 mb-2" variant="danger" now={50} />
                  <div className="float-start">
                    <div className="mt-2">
                      <i className="fa fa-caret-down text-danger"></i>
                      <span className='mx-1'>15% decrease</span>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>

          </Row>
        </>

      }



    </div>
  )
};


export default Dashboard;
