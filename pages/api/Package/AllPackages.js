import initDB from "../../../helper/initDB";
import Package from "../../../modal/Package";

initDB()

export default async(req,res)=>{

    const FindUserLastPackage = await Package.find().lean()
    
    res.json(FindUserLastPackage)

}