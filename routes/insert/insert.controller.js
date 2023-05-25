exports.insert = (req,res,next)=>{
    // res.render('result',{title:'B'});
    console.log(req.body);
    res.json({ok:true})
}