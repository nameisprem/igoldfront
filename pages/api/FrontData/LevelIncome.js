import initDB from "../../../helper/initDB";
import LevelReward from "../../../modal/Incomes/LevelReward"

initDB()

export default async (req, res) => {

    const { id,Level} = req.body;

    console.log(Level)

    const FindData = await LevelReward.find({ RecordOwner: id,LevelEarned:Level})

    res.json(FindData)
}