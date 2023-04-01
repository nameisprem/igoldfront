import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, ProgressBar } from 'react-bootstrap';
import PageHeader from '../../../shared/layout-components/pageheader/PageHeader';


const ThirdReward = () => {

  const [datas, setDatas] = useState("")
  const [dashData, setDashData] = useState("")

  

  useEffect(() => {

    const getData = localStorage.getItem("jwt")
    const parseData = JSON.parse(getData)

    console.log(parseData.UserData._id)

    try {

      axios.post("/api/FrontData/RoyaltyIncome", {
        id: parseData.UserData._id
      })
        .then((acc) => {
          console.log(acc.data)
          setDatas(acc.data)
        })
        .catch((err) => {
          console.log(err)
        })


    } catch (error) {
      console.log(error)
    }


    

  }, [])

  useEffect(() => {
    const getData = localStorage.getItem("jwt")
    const parseData = JSON.parse(getData)
    console.log(parseData)
    try {
      axios.post("/api/FrontData/Royalty3BoxData", {
        ids: parseData.UserData._id
      })
        .then((acc) => {
          console.log(acc.data)
          setDashData(acc.data)

          console.log(acc.data.RewardPerMember)
        })
        .catch((err) => {
          console.log(err)
        })

    } catch (error) {
      console.log(error)
    }



  }, [])





  return (
    <div >
      <PageHeader titles="Royalty Income" active="Table" items={['Tables']} />

      {
        dashData ?
          <Row className="row-cards">
            <Col sm={6} md={6} lg={6} xl={3}>
              <Card>
                <Card.Header className="pb-0 border-bottom-0">
                  <Card.Title>Clubname</Card.Title>
                  <div className="card-options">

                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <h3 className="d-inline-block mb-2">{dashData.ClubName}</h3>
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
                  <Card.Title>Members Achieve</Card.Title>
                  <div className="card-options">

                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <h3 className="d-inline-block mb-2">{dashData.MembersAchieve}</h3>
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
                  <Card.Title>Reward Per Member</Card.Title>
                  <div className="card-options">

                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <h3 className="d-inline-block mb-2">{dashData.RewardPerMember}</h3>
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
                  <Card.Title>Company Joining</Card.Title>
                  <div className="card-options">

                  </div>
                </Card.Header>
                <Card.Body className="pt-0">
                  <h3 className="d-inline-block mb-2">{dashData.CompanyBusiness}</h3>
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

          :

          <></>
      }







      <Row>
        <Col xl={12}>
          <Card>

            <Card.Body>

              <div className="table-responsive">
                <Table className="text-nowrap text-md-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>S.N.</th>
                      {/* <th>Record Owner</th> */}
                      <th>Reward</th>
                      <th>Company Joinings</th>
                      <th>Income</th>
                      <th>Achieved Members</th>
                      <th>Club Royality</th>
                      <th>Club</th>
                    </tr>
                  </thead>
                  <tbody>


                    {
                      datas && datas.map((hit, index) => {
                        return <tr key={hit._id}>
                          <td>{index + 1}</td>
                          {/* <td>{hit.RecordOwner}</td> */}
                          <td>{hit.GotReward}</td>
                          <td>{hit.CompanyJoinings}</td>
                          <td>{hit.IncomePerId}</td>
                          <td>{hit.AchievedMembers}</td>
                          <td>{hit.ClubRoyality}</td>
                          <td>{hit.Club}</td>
                        </tr>
                      })
                    }




                  </tbody>
                </Table>

              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>

    </div>
  )
};
ThirdReward.layout = "Contentlayout"
export default ThirdReward;
