const mongoose = require('mongoose');

const vendorProfileSchema = new mongoose.Schema({
  businessName: String,
  businessType: String,
  yearsInOperation: Number,
  securityCertifications: [String],
  complianceStatus: String,
  pastIncidents: Number,
  location: String,
  contactEmail: { type: String, required: true, unique: true },
  riskScore: Number,
  riskCategory: String,
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('VendorProfile', vendorProfileSchema);


// const mongoose = require('mongoose');

// const vendorProfileSchema = new mongoose.Schema({
//   vendorName: { type: String, required: true },
//   businessName: { type: String, default: null },
//   businessType: { type: String, required: true, default: 'Not specified' },
//   yearsInOperation: { type: Number, required: true, default: 0 },
//   securityCertifications: {
//     type: [String],
//     required: true,
//     default: ['Not provided']
//   },
//   complianceStatus: { type: String, required: true, default: 'Pending' },
//   pastIncidents: { type: Number, required: true, default: 0 },
//   location: { type: String, required: true, default: 'Unknown' },
//   contactEmail: { type: String, required: true },
//   riskScore: { type: Number, default: null },
//   riskCategory: { type: String, default: null }
// });

// module.exports = mongoose.model('VendorProfile', vendorProfileSchema);
