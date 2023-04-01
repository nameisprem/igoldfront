import initDB from "../../../helper/initDB";
import PackageInvoice from "../../../modal/Invoice/PackageInvoice";
import PackageRecord from "../../../modal/Record/PackageRecord";
import Package from "../../../modal/Package";

initDB()

export default async (req, res) => {

    const { userId } = req.body;

    let List = {
        Avalible_Package: [],
        Locked_Packages: [],
        Repurchase_Package: [],
        Already_Activated: []
    }

    const Find_All_Packages = await Package.find().lean().exec();

    const Checking_If_User_Already_Have_Package = await PackageInvoice.find({ RecordOwner: userId }).select("_id").lean().exec();

    if (Checking_If_User_Already_Have_Package.length == 0) {

        Find_All_Packages.map((hit, index) => {

            if (index == 0) {
                List.Avalible_Package.push(hit)
            } else {
                List.Locked_Packages.push(hit)
            }
        })

        return res.json(List)
    }

    await Promise.all(Find_All_Packages.map(async (hit, index) => {

        const Find_Package_Invoices = await PackageInvoice.find({ RecordOwner: userId }).sort({ _id: -1 })
        const Find_Current_Active_Package = await PackageRecord.find({ RecordOwner: userId })

        if (Find_Current_Active_Package.some(e => e.PackageName === hit.PackageName)) {
            List.Already_Activated.push(hit)
        } else if (Find_Package_Invoices.some(e => e.PackageName === hit.PackageName)) {
            List.Repurchase_Package.push(hit)
        } else if (Find_Package_Invoices.some(e => Number(e.PackageName.replace("PACKAGE ", "")) + 1 === Number(hit.PackageName.replace("PACKAGE ", "")))) {
            List.Avalible_Package.push(hit)
        } else {
            List.Locked_Packages.push(hit)
        }

    }));

    res.json(List)
}