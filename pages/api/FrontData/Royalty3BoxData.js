import initDB from "../../../helper/initDB"
import PackageInvoice from "../../../modal/Invoice/PackageInvoice"
import PackageRecord from "../../../modal/Record/PackageRecord"
import RoyaltyBonusEligible from "../../../modal/RoyaltyBonusEligible"
import RoyaltyReward from "../../../modal/Incomes/RoyaltyReward"
import ShortRecord from "../../../modal/ShortRecord"

initDB()

export default async(req,res)=>{

    const {ids} = req.body;

    let Invested_Amount = []
    let Invested_Amount2 = 0

    const Find_Direct_Business_Count = await ShortRecord.findOne({RecordOwner:ids}).select("MyDirectsTotalBusiness").lean()

    const Find_User_Purchased_Packages = await PackageRecord.find({RecordOwner:ids}).select("PackagePrice").lean().exec()
    
    

    const TwoMinutesAgo = new Date(Date.now() - 240 * 60 * 1000); // 5 Minutes Delay

    Find_User_Purchased_Packages.map((hit)=>{
        return Invested_Amount.push(Number(hit.PackagePrice))
    })
    
    let num = 0
    
    let Largest_Package_Amount = Math.max(...Invested_Amount.map(Number))

    //CHECKING REWARD PER PERSONS

    var This_User_Direct_Business = Number(Find_Direct_Business_Count.MyDirectsTotalBusiness)
    var PackageAmount = Largest_Package_Amount

    var Reward_Per_Person = 0
    var Club_Name = ""

    // if (Largest_Package_Amount == 50 || Number(Find_Direct_Business_Count.MyDirectsTotalBusiness) <= 5000 ) {
    //     Reward_Per_Person = 2
    //     Club_Name= "CLUB 50"
    // }else if (Largest_Package_Amount == 100 || Number(Find_Direct_Business_Count.MyDirectsTotalBusiness) <= 10000 ) {
    //     Reward_Per_Person = 4
    //     Club_Name= "CLUB 100"
    // }else if (Largest_Package_Amount == 150 || Number(Find_Direct_Business_Count.MyDirectsTotalBusiness) <= 15000 ) {
    //     Reward_Per_Person = 6
    //     Club_Name= "CLUB 150"
    // }else if (Largest_Package_Amount == 200 || Number(Find_Direct_Business_Count.MyDirectsTotalBusiness) <= 20000 ) {
    //     Reward_Per_Person = 8
    //     Club_Name= "CLUB 200"
    // }



    if (This_User_Direct_Business >= 5000 && This_User_Direct_Business < 10000) {

        if (PackageAmount == 50 || This_User_Direct_Business > 0 && This_User_Direct_Business <  10000) {
            
            Reward_Per_Person = 2
            Club_Name= "CLUB 50"

        } else if (PackageAmount == 100 || This_User_Direct_Business >= 10000 && This_User_Direct_Business <=  10000) {

            Reward_Per_Person = 2
            Club_Name= "CLUB 50"

        } else if (PackageAmount == 150 || This_User_Direct_Business > 10000 && This_User_Direct_Business <=  15000) {

            Reward_Per_Person = 2
            Club_Name= "CLUB 50"


        } else if (PackageAmount == 200 || This_User_Direct_Business > 20000 && This_User_Direct_Business <=  20000) {
            Reward_Per_Person = 2
            Club_Name= "CLUB 50"
        }else{
            Reward_Per_Person = 0
            Club_Name= "No Any Club"
        }

    } else if (This_User_Direct_Business >= 10000 && This_User_Direct_Business < 15000) {

        if (PackageAmount == 50 || This_User_Direct_Business > 0 && This_User_Direct_Business <  5000) {

            Reward_Per_Person = 2
            Club_Name= "CLUB 50"

        } else if (PackageAmount == 100 || This_User_Direct_Business > 5000 && This_User_Direct_Business <  10000) {

            Reward_Per_Person = 4
            Club_Name= "CLUB 100"



        } else if (PackageAmount == 150 || This_User_Direct_Business > 10000 && This_User_Direct_Business <  15000) {

            Reward_Per_Person = 4
            Club_Name= "CLUB 100"



        } else if (PackageAmount == 200 || This_User_Direct_Business > 20000 && This_User_Direct_Business <=  20000) {

            Reward_Per_Person = 4
            Club_Name= "CLUB 100"

        }else{
            Reward_Per_Person = 0
            Club_Name= "No Any Club"
        }

    } else if (This_User_Direct_Business >= 15000 && This_User_Direct_Business < 20000) {

        if (PackageAmount == 50 || This_User_Direct_Business > 0 && This_User_Direct_Business <=  5000) {

            Reward_Per_Person = 2
            Club_Name= "CLUB 50"

        } else if (PackageAmount == 100 || This_User_Direct_Business > 5000 && This_User_Direct_Business <=  10000) {

            Reward_Per_Person = 4
            Club_Name= "CLUB 100"



        } else if (PackageAmount == 150 || This_User_Direct_Business > 10000 && This_User_Direct_Business <=  15000) {

            Reward_Per_Person = 6
            Club_Name= "CLUB 150"



        } else if (PackageAmount == 200 || This_User_Direct_Business > 20000 && This_User_Direct_Business <=  20000) {

            Reward_Per_Person = 6
            Club_Name= "CLUB 150"

        }else{
            Reward_Per_Person = 0
            Club_Name= "No Any Club"
        }

    } else if (This_User_Direct_Business >= 20000) {

        if (PackageAmount == 50 || This_User_Direct_Business > 0 && This_User_Direct_Business <=  5000) {

            Reward_Per_Person = 2
            Club_Name= "CLUB 50"

        } else if (PackageAmount == 100 || This_User_Direct_Business > 5000 && This_User_Direct_Business <=  10000) {

            Reward_Per_Person = 4
            Club_Name= "CLUB 100"



        } else if (PackageAmount == 150 || This_User_Direct_Business > 10000 && This_User_Direct_Business <=  15000) {

            Reward_Per_Person = 6
            Club_Name= "CLUB 150"



        } else if (PackageAmount == 200 || This_User_Direct_Business > 20000 && This_User_Direct_Business <=  20000) {

            Reward_Per_Person = 8
            Club_Name= "CLUB 200"

        }else{
            Reward_Per_Person = 0
            Club_Name= "No Any Club"
        }

    }else{

        Reward_Per_Person = 0
        Club_Name= "No Any Club"

    }



    const Find_User_Purchased_Packages_Today = await PackageRecord.find({PackagePrice:Club_Name.replace("CLUB ",""),createdAt: { $gt: TwoMinutesAgo }}).select("_id").lean().exec()
    const Find_User_Purchased_Packages_Global = await PackageRecord.find({PackagePrice:Largest_Package_Amount}).select("_id").lean().exec()


    const fiveMinutesAgo = new Date(Date.now() - 240 * 60 * 1000); // for 5 minutes

    const Find_Package_According_To_Package = await PackageInvoice.find({createdAt: { $gt: fiveMinutesAgo },PackagePrice:Largest_Package_Amount}).select("PackagePrice").lean().exec();
    
    Find_Package_According_To_Package.map((hit)=>{
        num = num + 1
        return Invested_Amount2 = Invested_Amount2 + Number(hit.PackagePrice)
    })

    const Find_Achived_Member1 = await RoyaltyReward.find({Club:`${Largest_Package_Amount}$ Club`,createdAt: { $gt: fiveMinutesAgo }}).select().lean().exec();

    console.log(Find_Achived_Member1)

    // const keys = Object.keys(Find_Achived_Member1);
    
    res.json({
        ClubName:Club_Name,
        MembersAchieve:Find_Achived_Member1 ? Find_Achived_Member1.length : 0,
        RewardPerMember:Reward_Per_Person,
        CompanyBusiness:Find_User_Purchased_Packages_Today ? Find_User_Purchased_Packages_Today.length : 0
    })
}