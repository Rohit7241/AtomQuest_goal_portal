import CheckinWindow from "../models/CheckinWindow.js";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler.js";

const getActiveWindow=asyncHandler(async(req,res)=>{
    const today=new Date()
    const activeWindow=await CheckinWindow.findOne({
        is_active:true,
        opens_on:{$lte:today},//opens_on<=today
        closes_on:{$gte:today}//closes_on>=today
    })
    if(!activeWindow){
    return res.status(200).json(
        new ApiResponse(200,null,"No active check-in window right now")
    )
}
return res.status(200).json(
    new ApiResponse(200,activeWindow,"active window found")
)
})

const submitCheckin=asyncHandler(async(req,res)=>{
    const 
})


