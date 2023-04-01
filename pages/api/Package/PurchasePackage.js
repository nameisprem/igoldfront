import initDB from "../../../helper/initDB";
import Package from "../../../modal/Package";
import User from "../../../modal/User";
import PackageInvoice from "../../../modal/Invoice/PackageInvoice";
import PackageRecord from "../../../modal/Record/PackageRecord";
import ShortRecord from "../../../modal/ShortRecord";
import TransactionRecipt from "../../../modal/TransactionRecord/TransactionRecipt";

initDB()

export default async (req, res) => {

    const { packageId, userId } = req.body;

    if (!packageId || !userId) {
        return res.status(404).json("Please Provide All Parameters")
    }

    let Dates = new Date() // Getting Date

    // Finding Package 
    const FindPackageDetails = await Package.findById(packageId)
    // Finding User
    const FindUserDetails = await User.findById(userId)
    // Finding Last Package History
    const GetUpperlineId = await User.findOne({ WalletAddress: FindUserDetails.UpperlineUser }).lean()
    const FindLastPackage = await PackageInvoice.find({ RecordOwner: userId ,PackagePrice:FindPackageDetails.PackagePrice}).lean()

    if (FindLastPackage.length > 0) {

        // Creating Package Invoice Here


        const PurchasePackage = await PackageInvoice.create({

            RecordOwner: FindUserDetails._id,
            OwnerUsername: FindUserDetails.Name,
            OwnerUpperline: GetUpperlineId ? GetUpperlineId._id : "null",
            OwnerSponsorId: FindUserDetails.SponserCode,
            PackageName: FindPackageDetails.PackageName,
            PackagePrice: FindPackageDetails.PackagePrice,
            DailyReward: FindPackageDetails.DailyReward,
            MaxDays: "200",
            PackagePurchasedOn: Dates,
            PackageExpireOn: Dates,
            TotalEarnedFromThisPackage: 0,
            TotalLeftEarningsFromThisPackage: 0,
            Type: "Repurchased"

        })

        // Creating Package Recoord Here
        const PurchaseRecord = await PackageRecord.create({

            RecordOwner: FindUserDetails._id,
            OwnerUsername: FindUserDetails.Name,
            OwnerSponsorId: FindUserDetails.SponserCode,
            PackageName: FindPackageDetails.PackageName,
            PackagePrice: FindPackageDetails.PackagePrice,
            DailyReward: FindPackageDetails.DailyReward,
            MaxDays: "200",
            PackagePurchasedOn: Dates,
            PackageExpireOn: Dates,
            TotalEarnedFromThisPackage: 0,
            TotalLeftEarningsFromThisPackage: 0,
            Type: "Repurchased",
            OwnerUpperline: GetUpperlineId ? GetUpperlineId._id : "null",

        })

        await TransactionRecipt.create({
            RecordOwner:FindUserDetails._id,
            TransactionFrom:FindUserDetails.Name,
            TransactionTo:"Admin",
            Amount:Number(FindPackageDetails.PackagePrice),
            Remark:`User Purchased ${FindPackageDetails.PackageName} Of ${FindPackageDetails.PackagePrice}$ On ${new Date()}`,
            Method:"DEPOSITED",
            TransactionType:"Purchased Package"

        })





        /*
        ! HERE GOING TO CREATE SHORT RECORD FOR UPPERLINE DIRECT BUSINESS
        */

        let Upperline_Of_This_User = FindUserDetails.UpperlineUser

        let FindUser = await User.findOne({ WalletAddress: Upperline_Of_This_User })




        if (FindUser) {

            let Fetch_User_ShortRecord = await ShortRecord.findOne({ RecordOwner: FindUser._id })

            let Old_Record = Fetch_User_ShortRecord.MyDirectsTotalBusiness

            let Calculate_It = Number(Old_Record) + Number(FindPackageDetails.PackagePrice)



            await ShortRecord.findByIdAndUpdate({ _id: Fetch_User_ShortRecord._id }, { MyDirectsTotalBusiness: Calculate_It })

        }



        /*
       ! HERE GOING TO CREATE SHORT RECORD FOR PURCHASED PACKAGE
       */

        const Get_Short_Rec = await ShortRecord.findOne({ RecordOwner: FindUserDetails._id })



        let List = Get_Short_Rec.MyActivePackages


        List.push(Number(FindPackageDetails.PackagePrice))


        let updtae = await ShortRecord.findByIdAndUpdate({ _id: Get_Short_Rec._id }, { MyActivePackages: List })






        return res.json("Package Repurchased")

    } else {

        // Creating Package Invoice Here
        const PurchasePackage = await PackageInvoice.create({

            RecordOwner: FindUserDetails._id,
            OwnerUsername: FindUserDetails.Name,
            OwnerSponsorId: FindUserDetails.SponserCode,
            OwnerUpperline: GetUpperlineId ? GetUpperlineId._id : "null",
            PackageName: FindPackageDetails.PackageName,
            PackagePrice: FindPackageDetails.PackagePrice,
            DailyReward: FindPackageDetails.DailyReward,
            MaxDays: "200",
            PackagePurchasedOn: Dates,
            PackageExpireOn: Dates,
            TotalEarnedFromThisPackage: 0,
            TotalLeftEarningsFromThisPackage: 0,
            Type: "Basic"

        })


        // Creating Package Recoord Here
        const PurchaseRecord = await PackageRecord.create({

            RecordOwner: FindUserDetails._id,
            OwnerUsername: FindUserDetails.Name,
            OwnerSponsorId: FindUserDetails.SponserCode,
            PackageName: FindPackageDetails.PackageName,
            PackagePrice: FindPackageDetails.PackagePrice,
            DailyReward: FindPackageDetails.DailyReward,
            MaxDays: "200",
            PackagePurchasedOn: Dates,
            PackageExpireOn: Dates,
            TotalEarnedFromThisPackage: 0,
            TotalLeftEarningsFromThisPackage: 0,
            Type: "Basic",
            OwnerUpperline: GetUpperlineId ? GetUpperlineId._id : "null",

        })

        await TransactionRecipt.create({
            RecordOwner:FindUserDetails._id,
            TransactionFrom:FindUserDetails.Name,
            TransactionTo:"Admin",
            Amount:Number(FindPackageDetails.PackagePrice),
            Remark:`User Purchased ${FindPackageDetails.PackageName} Of ${FindPackageDetails.PackagePrice}$ On ${new Date()}`,
            Method:"DEPOSITED",
            TransactionType:"Purchased Package"

        })



        /*
        ! HERE GOING TO CREATE SHORT RECORD FOR UPPERLINE DIRECT BUSINESS
        */

        let Upperline_Of_This_User = FindUserDetails.UpperlineUser

        let FindUser = await User.findOne({ WalletAddress: Upperline_Of_This_User })




        if (FindUser) {

            let Fetch_User_ShortRecord = await ShortRecord.findOne({ RecordOwner: FindUser._id })

            let Old_Record = Fetch_User_ShortRecord.MyDirectsTotalBusiness

            let Calculate_It = Number(Old_Record) + Number(FindPackageDetails.PackagePrice)



            await ShortRecord.findByIdAndUpdate({ _id: Fetch_User_ShortRecord._id }, { MyDirectsTotalBusiness: Calculate_It })

        }



        /*
       ! HERE GOING TO CREATE SHORT RECORD FOR PURCHASED PACKAGE
       */

        const Get_Short_Rec = await ShortRecord.findOne({ RecordOwner: FindUserDetails._id })



        let List = Get_Short_Rec.MyActivePackages


        List.push(Number(FindPackageDetails.PackagePrice))


        let updtae = await ShortRecord.findByIdAndUpdate({ _id: Get_Short_Rec._id }, { MyActivePackages: List })







        return res.json("Package Purchased")

    }




}