import mongoose from "mongoose";

const Package = mongoose.Schema({

    PackageName: {
        type: String,
        required: true
    },
    PackagePrice: {
        type: String,
        required: true
    },
    DailyReward: {
        type: String,
        required: true
    },
    MaxDays: {
        type: String,
        required: true
    }

    
},
    {
        timestamps: true
    })
export default mongoose.models.Package || mongoose.model('Package', Package)
