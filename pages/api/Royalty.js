import initDB from "../../helper/initDB";
import ShortRecord from "../../modal/ShortRecord";
import PackageRecord from "../../modal/Record/PackageRecord";

initDB()

export default async (req, res) => {
        
    /*
        CLUBNAME	
        BUSINESSTARGET	
        MYBUSINESS	
        STATUS
    */

    let List = []
    let Investment = []

    const { userId } = req.body;

    const Find_Short_Record = await ShortRecord.findOne({ RecordOwner: userId })
    const Find_Invested_Amount = await PackageRecord.find({ RecordOwner: userId })

    Find_Invested_Amount.map((hit) => {
        return Investment.push(Number(hit.PackagePrice))
    })

    

    if (Investment.length == 0) {
        
        var PackageAmount = 0
    }else{
        
        var PackageAmount = Math.max(...Investment)
    }
    
    let This_User_Direct_Business = Number(Find_Short_Record.MyDirectsTotalBusiness)
    
    

    if (This_User_Direct_Business >= 5000 && This_User_Direct_Business < 10000) {

        if (PackageAmount == 50 || This_User_Direct_Business > 0 && This_User_Direct_Business <  10000) {
            
            List.push(
            {
                CLUBNAME: "50$ CLUB",
                BUSINESSTARGET: "5000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Eligible"
            },
            {
                CLUBNAME: "100$ CLUB",
                BUSINESSTARGET: "10000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            },
            {
                CLUBNAME: "150$ CLUB",
                BUSINESSTARGET: "15000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            },
            {
                CLUBNAME: "200$ CLUB",
                BUSINESSTARGET: "20000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            }
            )

        } else if (PackageAmount == 100 || This_User_Direct_Business >= 10000 && This_User_Direct_Business <=  10000) {

            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )



        } else if (PackageAmount == 150 || This_User_Direct_Business > 10000 && This_User_Direct_Business <=  15000) {

            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )



        } else if (PackageAmount == 200 || This_User_Direct_Business > 20000 && This_User_Direct_Business <=  20000) {

            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )

        }else{
            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )
        }

    } else if (This_User_Direct_Business >= 10000 && This_User_Direct_Business < 15000) {

        if (PackageAmount == 50 || This_User_Direct_Business > 0 && This_User_Direct_Business <  5000) {

            List.push(
            {
                CLUBNAME: "50$ CLUB",
                BUSINESSTARGET: "5000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Eligible"
            },
            {
                CLUBNAME: "100$ CLUB",
                BUSINESSTARGET: "10000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            },
            {
                CLUBNAME: "150$ CLUB",
                BUSINESSTARGET: "15000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            },
            {
                CLUBNAME: "200$ CLUB",
                BUSINESSTARGET: "20000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            }
            )

        } else if (PackageAmount == 100 || This_User_Direct_Business > 5000 && This_User_Direct_Business <  10000) {

            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )



        } else if (PackageAmount == 150 || This_User_Direct_Business > 10000 && This_User_Direct_Business <  15000) {

            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )



        } else if (PackageAmount == 200 || This_User_Direct_Business > 20000 && This_User_Direct_Business <=  20000) {

            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )

        }else{
            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )
        }

    } else if (This_User_Direct_Business >= 15000 && This_User_Direct_Business < 20000) {

        if (PackageAmount == 50 || This_User_Direct_Business > 0 && This_User_Direct_Business <=  5000) {

            List.push(
            {
                CLUBNAME: "50$ CLUB",
                BUSINESSTARGET: "5000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Eligible"
            },
            {
                CLUBNAME: "100$ CLUB",
                BUSINESSTARGET: "10000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            },
            {
                CLUBNAME: "150$ CLUB",
                BUSINESSTARGET: "15000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            },
            {
                CLUBNAME: "200$ CLUB",
                BUSINESSTARGET: "20000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            }
            )

        } else if (PackageAmount == 100 || This_User_Direct_Business > 5000 && This_User_Direct_Business <=  10000) {

            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )



        } else if (PackageAmount == 150 || This_User_Direct_Business > 10000 && This_User_Direct_Business <=  15000) {

            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )



        } else if (PackageAmount == 200 || This_User_Direct_Business > 20000 && This_User_Direct_Business <=  20000) {

            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )

        }else{
            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )
        }

    } else if (This_User_Direct_Business >= 20000) {

        if (PackageAmount == 50 || This_User_Direct_Business > 0 && This_User_Direct_Business <=  5000) {

            List.push(
            {
                CLUBNAME: "50$ CLUB",
                BUSINESSTARGET: "5000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Eligible"
            },
            {
                CLUBNAME: "100$ CLUB",
                BUSINESSTARGET: "10000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            },
            {
                CLUBNAME: "150$ CLUB",
                BUSINESSTARGET: "15000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            },
            {
                CLUBNAME: "200$ CLUB",
                BUSINESSTARGET: "20000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            }
            )

        } else if (PackageAmount == 100 || This_User_Direct_Business > 5000 && This_User_Direct_Business <=  10000) {

            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )



        } else if (PackageAmount == 150 || This_User_Direct_Business > 10000 && This_User_Direct_Business <=  15000) {

            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )



        } else if (PackageAmount == 200 || This_User_Direct_Business > 20000 && This_User_Direct_Business <=  20000) {

            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Eligible"
                }
                )

        }else{
            List.push(
                {
                    CLUBNAME: "50$ CLUB",
                    BUSINESSTARGET: "5000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "100$ CLUB",
                    BUSINESSTARGET: "10000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "150$ CLUB",
                    BUSINESSTARGET: "15000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                },
                {
                    CLUBNAME: "200$ CLUB",
                    BUSINESSTARGET: "20000",
                    MYBUSINESS: This_User_Direct_Business,
                    STATUS: "Not Eligible"
                }
                )
        }

    }else{

        List.push(
            {
                CLUBNAME: "50$ CLUB",
                BUSINESSTARGET: "5000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            },
            {
                CLUBNAME: "100$ CLUB",
                BUSINESSTARGET: "10000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            },
            {
                CLUBNAME: "150$ CLUB",
                BUSINESSTARGET: "15000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            },
            {
                CLUBNAME: "200$ CLUB",
                BUSINESSTARGET: "20000",
                MYBUSINESS: This_User_Direct_Business,
                STATUS: "Not Eligible"
            }
            )

    }

    res.json(List)

}