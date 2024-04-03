// using promiss

const asyncHandler = (fn)=>()=>{

}







// step by step process of the below function
// const asynchandler = ()=>{}
// const asyncHandler = (func)=> ()=>{}
// const asynchandler = (func) => async()=>{}

// rapped this function in try and catch block
// const asyncHandler = (fn) => async (req, res, next) => {
//    try {

//     await fn(req, res, next)
    
//    } catch (error) {
//      res.status(err.code || 500).json({
//       success: false,
//       message: err.message
//     })
//    }
// }