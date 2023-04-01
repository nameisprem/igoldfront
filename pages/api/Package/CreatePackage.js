import initDB from "../../../helper/initDB";
import Package from "../../../modal/Package";




initDB()

export default async (req, res) => {

    const { PackageName, PackagePrice, DailyReward, MaxDays } = req.body;

    const CreatePackage = await Package({

        PackageName,
        PackagePrice,
        DailyReward,
        MaxDays

    }).save()

    res.json(CreatePackage)
}