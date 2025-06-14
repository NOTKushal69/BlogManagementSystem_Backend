const {Sequelize,DataTypes}=require('sequelize');


const sequelize= new Sequelize("postgresql://postgres.gabdksebfqvmhxpyveoc:adminhahahehehuhu@aws-0-ap-southeast-1.pooler.supabase.com:6543/postgres")

sequelize.authenticate().
then(()=>{
console.log("Bhayo kanxa")
}).catch((e)=>{
  console.log("Bhayena kanxa",e)

})


 const db={};
 db.sequelize=sequelize;
 db.Sequelize=Sequelize;
 db.blogs=require("./models/blogModel")(sequelize,DataTypes);


 sequelize.sync({alter:true}).then(()=>{
  console.log("Migrate bhayo hai")
 }).catch(()=>{
  console.log("Error aayo hai")
 })

 module.exports=db;