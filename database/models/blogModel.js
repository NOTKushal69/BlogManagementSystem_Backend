const blog=(sequelize,DataTypes)=>{
const bloog=sequelize.define("Blog",{

// middle ware yaha xa hai



blogTitle:{
  type:DataTypes.STRING,
  allowNull:false
},
blogAuther:{
  type:DataTypes.STRING,
  allowNull:false
},
blogDescription:{
  type:DataTypes.TEXT,
  allowNull:false
},
blogExcerpt :{
type:DataTypes.TEXT,
  allowNull:true,
  defaultValue:'hi',
}
})

return bloog;
}

module.exports=blog;