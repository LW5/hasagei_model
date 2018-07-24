const { addDD,chaxun } = require("../dao/data/dingdan_Dao.js")

  module.exports.addDD = async (data) => {
    return await addDD(data) 
  }

  module.exports.chaxun = async (data1) => {
    return await chaxun(data1) 
    
  }
