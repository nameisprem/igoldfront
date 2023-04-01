import initDB from "../../../helper/initDB";
import DailyReward from "../../../modal/Incomes/DailyReward"

initDB()

export default async (req, res) => {

    const { id ,PackageNum} = req.body;


    if (PackageNum == "null") {
        var FindData = await DailyReward.find({ RecordOwner: id })
    }else{
        var FindData = await DailyReward.find({ RecordOwner: id,StakedPackage:PackageNum })
    }


    res.json(FindData)
}