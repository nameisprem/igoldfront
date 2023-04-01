import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Table, Form } from 'react-bootstrap';
import PageHeader from '../../../shared/layout-components/pageheader/PageHeader';
import Select from 'react-select';



const DailyIncome = () => {

  const [datas, setDatas] = useState("")
  const [selectedLevel, setSelectedLevel] = useState("LEVEL 1")

  useEffect(() => {
    Get_Data("null")
  }, [])

  const Get_Data = (pack) => {

    const getData = localStorage.getItem("jwt")
    const parseData = JSON.parse(getData)

    try {

      axios.post("/api/FrontData/DailyIncome", {
        id: parseData.UserData._id,
        PackageNum: pack
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

  }
  
  const LevelNumber = [

    { value: "50", label: "50$" },
    { value: "100", label: "100$" },
    { value: "150", label: "150$" },
    { value: "200", label: "200$" },
  ]

  const handleSelectChange = (selectedOption) => {
    setSelectedLevel(selectedOption.value);
    Get_Data(selectedOption.value)
  }


  return (
    <div >
      <PageHeader titles="Daily Income" active="Table" items={['Tables']} />

      <div className="dropdown">
        <Form.Group>
          <Row>
            <Col md={4} className="mb-2"></Col>
            <Col md={4} className="mb-2"></Col>
            <Col md={4} className="mb-2">
              <Select onChange={handleSelectChange} classNamePrefix="Select" options={LevelNumber} placeholder='Select Level' />
            </Col>
          </Row>
        </Form.Group>
      </div>


      <Row>
        <Col xl={12}>
          <Card>

            <Card.Body>

              <div className="table-responsive">
                <Table className="text-nowrap text-md-nowrap mb-0">
                  <thead>
                    <tr>
                      <th>S.N.</th>
                      <th>Owner</th>
                      <th>Staked Package</th>
                      <th>Coin Earned</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      datas && datas.map((hit, index) => {
                        var dats = new Date(hit.createdAt)

                        console.log(dats)
                        return <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{hit.RecordOwner}</td>
                          <td>{hit.StakedPackage}$</td>
                          <td>{hit.CoinEarned}</td>
                          <td>{dats.toString()}</td>
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
DailyIncome.layout = "Contentlayout"
export default DailyIncome;
