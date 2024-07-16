import mongoose from "mongoose"

const CompanyScheme = new mongoose.Schema(
  {
    company_name: {
      type: String,
      unique: true,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    industry: {
      type: String
    },
    company_description: {
      type: String
    },
    logo_url: {
      type: String
    },
    followers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    post_company: [{ type: mongoose.Schema.Types.ObjectId, ref: 'PostsCompany' }]
  },
  { strictPopulate: false }
)
export const Company = mongoose.model('Company', companySchema)
