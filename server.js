const express= require ('express');
 const app = express();
app.set('view engine','ejs')
// app.set('views','application_views');
app.use(express.static(__dirname + '/public'));
 app.listen('3000');

//  app.use(express.static('application_views/css')); 
 console.log("server started")
const titles = [
    "Web design",
    "Development",
    "Apps Design",
    "Apps Development",
    "SEO",
    "Content Creating"
];
const cardsIcons =[
    "fas fa-desktop fa-3x",
    "fa fa-2x fa-laptop-code",
    "fab fa-4x fa-android",
    "fab fa-4x fa-apple",
    "fa fa-2x fa-search",
    "fa fa-2x fa-edit"
]
 app.get("/",(req,res)=>{
    //  res.write("inside home page")
    //  res.end();
    // var langes=["html","css","javaScript"]
    var langes=[]
     
    res.render('index',{cardsIcons,titles});
 });
