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
