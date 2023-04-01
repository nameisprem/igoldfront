import initDB from "../../../helper/initDB"
import ShortRecord from "../../../modal/ShortRecord"


initDB()

export default async(req,res)=>{

    const {id} = req.body;

    const FetchData = await ShortRecord.find({RecordOwner:id})

    res.json(FetchData)
}