import initDB from "../../../helper/initDB"
import User from "../../../modal/User"
import ShortRecord from "../../../modal/ShortRecord"

initDB()


/*

@userId => String 

@newWalletAddress => String

*/

export default async (req, res) => {

    const { userId,newWalletAddress } = req.body;

    // Checking if all parameters are provided by the user or not

    if (!userId || !newWalletAddress) {
        return res.status(500).json({message:"Please Provide All Parameters"})
    }

    // Updating user Upperline wallet Address

    User.updateOne({ _id: userId }, { UpperlineUser: newWalletAddress }).exec();

    // Updating Short Record

   let FindShortRecord = await ShortRecord.findOne({RecordOwner:userId})

   let List = []

   let findUser = await User.findOne({WalletAddress:newWalletAddress})
   
   while (findUser !== null) {
        List.push({id:findUser._id})
        findUser = await User.findOne({WalletAddress:findUser.UpperlineUser})
   }

    await ShortRecord.findByIdAndUpdate({_id:FindShortRecord._id},{MyAllUpperlines:List.length > 0 ?List :{id:"0xf0a1e5037149d70aedc3cf6e88a452b39d57ec9b"}})

   /*

    ! CREATING DIRECT TEAM SHORT RECORD FOR UPPERLINE USER

   */

        let Find_User = await User.findOne({WalletAddress:newWalletAddress}).select("_id").lean().exec()

        let Find_Shortrecord = await ShortRecord.findOne({RecordOwner:Find_User._id}).select("_id MyDirectNo").lean().exec()

        let Calculated_Number = Number(Find_Shortrecord.MyDirectNo) + 1

        await ShortRecord.findByIdAndUpdate({_id:Find_Shortrecord._id},{MyDirectNo:Calculated_Number})

    res.json("Update Wallet Address")
}