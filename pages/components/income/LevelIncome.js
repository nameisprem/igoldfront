import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { Row, Col, Card, Table ,Form} from 'react-bootstrap';
import PageHeader from '../../../shared/layout-components/pageheader/PageHeader';
import Select from 'react-select';


const LevelIncome = () => {
  const [selectedLevel, setSelectedLevel] = useState("LEVEL 1")


  const [datas, setDatas] = useState("")
  
  const LevelNumber = [

    { value: "LEVEL 1", label: "LEVEL 1" },
    { value: "LEVEL 2", label: "LEVEL 2" },
    { value: "LEVEL 3", label: "LEVEL 3" },
    { value: "LEVEL 4", label: "LEVEL 4" },
    { value: "LEVEL 5", label: "LEVEL 5" },
    { value: "LEVEL 6", label: "LEVEL 6" },
    { value: "LEVEL 7", label: "LEVEL 7" },
    { value: "LEVEL 8", label: "LEVEL 8" },
    { value: "LEVEL 9", label: "LEVEL 9" },
    { value: "LEVEL 10", label: "LEVEL 10" },
    { value: "LEVEL 11", label: "LEVEL 11" },
    { value: "LEVEL 12", label: "LEVEL 12" },
    { value: "LEVEL 13", label: "LEVEL 13" },
    { value: "LEVEL 14", label: "LEVEL 14" },
    { value: "LEVEL 15", label: "LEVEL 15" },
    { value: "LEVEL 16", label: "LEVEL 16" },
    { value: "LEVEL 17", label: "LEVEL 17" },
    { value: "LEVEL 18", label: "LEVEL 18" },
    { value: "LEVEL 19", label: "LEVEL 19" },
    { value: "LEVEL 20", label: "LEVEL 20" },



  ]

  useEffect(() => {
    getDatas("LEVEL 1")
  }, [])
  
  
  const getDatas = (lev) =>{


    const getData = localStorage.getItem("jwt")
    const parseData = JSON.parse(getData)

    
    

    try {

      axios.post("/api/FrontData/LevelIncome",{
        id:parseData.UserData._id,
        Level:lev.replace("LEVEL ","")
      })
      .then((acc)=>{
        
        setDatas(acc.data)
      })
      .catch((err)=>{
        
      })

      
    } catch (error) {
      
    }
    




  }


  const handleSelectChange = (selectedOption) => {
  setSelectedLevel(selectedOption.value);
  getDatas(selectedOption.value)
  }



  
  return (
  <div >
    <PageHeader titles="Level Income" active="Table" items={['Tables']} />


    <div className="dropdown">
         <Form.Group>
           <Row>
             <Col md={4} className="mb-2"></Col>
             <Col md={4} className="mb-2"></Col>
             <Col md={4} className="mb-2">
               <Select onChange={handleSelectChange} classNamePrefix="Select" options={LevelNumber} placeholder='Select Level'/>
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
                    <th>RecordOwner</th>
                    <th>Level</th>
                    <th>Earned</th>
                    <th>Package</th>
                    <th>From</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    datas && datas.map((hit,index)=>{

                      var dats = new Date(hit.createdAt)
                      return <tr key={hit._id}>
                      <td>{index+1}</td>
                      <td>{hit.RecordOwner}</td>
                      <td>{hit.LevelEarned} Level</td>
                      <td>{hit.CoinEarned}</td>
                      <td>{hit.EarnedPackage}</td>
                      <td>{hit.RewardFrom}</td>
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
  LevelIncome.layout = "Contentlayout"
export default LevelIncome;
