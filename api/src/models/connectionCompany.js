import mongoose from "mongoose"

const ConnectionsCompanySchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  id_company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Company',
    required: true,
    unique: true
  }
})
export const conexCompany = mongoose.model('ConnCompany', ConnectionsCompanySchema)
