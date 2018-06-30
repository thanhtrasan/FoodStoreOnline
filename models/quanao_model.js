var db=require('../fn/db.js');

module.exports.add_product=function(req,res){
res.end();
};
module.exports.shop=function (req, res)
{
    var query="select * from quanao where soluong >0";
    
    db.load(query).then(
        
        rows=>{

            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };

            res.render('shop',vm);
        })
};

module.exports.shop_hoodie=function (req, res) {

    var query="select * from quanao where maquanao like '%HD%'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            res.render('shop',vm);
        })
};

module.exports.shop_jacket=function (req, res) {

    var query="select * from quanao where maquanao like '%JK%'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            res.render('shop',vm);
        })
};

module.exports.shop_tshirt= function (req, res) {

    var query="select * from quanao where maquanao like '%TS%'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            res.render('shop',vm);
        })
};

module.exports.shop_somi=function (req, res) {

    var query="select * from quanao where maquanao like '%SM%'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            res.render('shop',vm);
        })
};

module.exports.shop_jean=function (req, res) {

    var query="select * from quanao where maquanao like '%QJ%'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            res.render('shop',vm);
        })
};

module.exports.shop_shot=function (req, res) {

    var query="select * from quanao where maquanao like '%QS%'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            res.render('shop',vm);
        })
};

module.exports.shop_thun=function (req, res) {

    var query="select * from quanao where maquanao like '%QT%'";
    db.load(query).then(
        rows=>{
            var vm={
                ttsp:rows,
                isLogin: req.session.isLogin,
                user: req.session.user
            };
            res.render('shop',vm);
        })
};

module.exports.product_detail=function (req, res) {
    var query="select * from quanao where maquanao = N'"+req.query.maquanao+"'";

    db.load(query).then(
        row=>{
          db.load("select * from quanao where loai= N'"+row[0].loai+"' limit 1, 8")
              .then((kq)=>
              {
                  var vm= {
                      ttsp: row[0],
                      isLogin: req.session.isLogin,
                      user: req.session.user,
                      lienquan: kq
                  };
                      res.render('product-detail',vm);

              })
        });
};

// tim theo size
module.exports.timsize=(req,res)=>
{
    db.load("select * from quanao where size like N'"+req.query.size+"'")
        .then((kq)=>
        {
            var vm={
                ttsp:kq,
                isLogin: req.session.isLogin,
                user: req.session.user
            };

            res.render('shop',vm);

        })
}

// tim theo nsx
module.exports.timnsx=(req,res)=>
{
    db.load("select * from quanao where nsx like N'"+req.query.nsx+"'")
        .then((kq)=>
        {
            var vm={
                ttsp:kq,
                isLogin: req.session.isLogin,
                user: req.session.user
            };

            res.render('shop',vm);

        })
}
// tim theo ten
module.exports.timten=(req,res)=>
{
    db.load("select * from quanao where ten like N'%"+req.body.search+"%'")
        .then((kq)=>
        {
            var vm={
                ttsp:kq,
                isLogin: req.session.isLogin,
                user: req.session.user
            };

            res.render('shop',vm);

        })
}