const todomodel = require('../model/todomodel');

exports.createtodolist async ((res,req) => {
    try {
    const todo = await todo.find();
    
    res.status.json((201) {
    success:true,
    data:user
})
} catch(err){
    res.staus((501) {
    success:false,
    message:err.message
    });
}
}

exports.viewalltodolist async ((res,req) => {
   try{
    const title = title => {res,req},
    const description = description => {req.body}
   const todo = await todo.save();

   res.status.json((201) {
    success:true,
    data:user
   
})
} catch(err){
    res.staus((501) {
    success:false,
    message:err.message
});
}
}

