exports.main = (req,res,next)=>{
    res.render('index',{title:'D'});
    console.log(req.session)
}