// // ? This one is the example with Promise for async handler function. 

// const asyncHandler = (requestHandler) => {
//     (req, res, next) => {
//         Promise.resolve(requestHandler(req, res, next)).catch((err) => {
//             next(err);
//         });
//     };
// };


/* 
 ? The "asyncHandler" function is a variant of a common pattern used in Express.js middleware for handling asynchronous operations.
*/
// ! "asyncHandler" is a higher-order function that takes another function (func) as an argument and returns an asynchronous function

const asyncHandler = (func) => async () => {
    try {
        await func(req, res, next);
    } catch (error) {
        res.status(error.status).json({
            success: false,
            message: error.message
        })
    }
}

export {
    asyncHandler
}