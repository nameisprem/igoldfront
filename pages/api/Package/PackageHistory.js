import initDB from "../../../helper/initDB";
import PackageInvoice from "../../../modal/Invoice/PackageInvoice";


initDB()

export default async(req,res)=>{

    const {id} = req.body;

    const Find_Data = await PackageInvoice.find({RecordOwner:id}).lean().exec();

   return res.json(Find_Data)

}