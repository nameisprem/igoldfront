import initDB from "../../../helper/initDB";
import RoyaltyReward from "../../../modal/Incomes/RoyaltyReward"

initDB()

export default async (req, res) => {

    const { id } = req.body;

    const FindData = await RoyaltyReward.find({ RecordOwner: id })

    res.json(FindData)
}