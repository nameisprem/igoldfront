import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Row, Col, Card, Table } from 'react-bootstrap';
import PageHeader from '../../../shared/layout-components/pageheader/PageHeader';


const RoyaltyStatus = () => {


  

  const [datas, setDatas] = useState("")


  useEffect(() => {

    const getData = localStorage.getItem("jwt")
    const parseData = JSON.parse(getData)

    console.log(parseData.UserData._id)

    try {

      axios.post("/api/Royalty",{
        userId:parseData.UserData._id
      })
      .then((acc)=>{
        console.log("below is responce ==> ")
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
    <PageHeader titles="Royalty Status" active="Table" items={['Tables']} />


    <Row>
      <Col xl={12}>
        <Card>
        
          <Card.Body>
           
            <div className="table-responsive">
              <Table className="text-nowrap text-md-nowrap mb-0">
                <thead>
                  <tr>
                    <th>S.N.</th>
                    <th>Club Name</th>
                    <th>Business Target</th>
                    <th>My Business</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>


                {
                  datas && datas.map((hit,index)=>{
                    return <tr key={hit._id}>
                    <td>{index+1}</td>
                    <td>{hit.CLUBNAME}</td>
                    <td>{hit.BUSINESSTARGET}</td>
                    <td>{hit.MYBUSINESS}</td>
                    <td>{hit.STATUS}</td>
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
  RoyaltyStatus.layout = "Contentlayout"
export default RoyaltyStatus;
