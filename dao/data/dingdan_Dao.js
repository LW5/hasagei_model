const mongoose = require("mongoose")

//增加订单
module.exports.addDD = async (data) => {
    // console.log(data)
    const date=await mongoose
    .model('dingdan')
    .create(data)
}

// 查询订单
module.exports.chaxun = async (data1) => {
  
  const data2 = await mongoose
  .model("dingdan")
  .find()
  // console.log(data2)
  data1=data2
  // console.log(data1)
  return data1
}