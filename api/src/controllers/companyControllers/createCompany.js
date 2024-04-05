const { Company } = require('../../models/index');

const createCompany = async (data) => {
  try {
    const newCompany = await Company.create(data)
    return newCompany;
  } catch (error) {
    console.log({mensaje_de_error: error});
  }
}

module.exports = { createCompany }