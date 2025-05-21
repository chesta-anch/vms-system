const express = require('express');
const router = express.Router();
const VendorProfile = require('./models/vendorProfile');

// Utility to calculate risk
function calculateRiskScore(profile) {
  let score = 0;

  // Example logic:
  if (profile.yearsInOperation >= 5) score += 20;
  if (profile.complianceStatus?.toLowerCase() === 'compliant') score += 30;
  if (!profile.pastIncidents || profile.pastIncidents.toLowerCase() === 'none') score += 30;
  if ((profile.securityCertifications || []).length > 0) score += 20;

  return Math.min(score, 100);
}

function getRiskCategory(score) {
  if (score >= 75) return 'Low';
  if (score >= 40) return 'Medium';
  return 'High';
}

// POST or UPDATE onboarding info
router.post('/', async (req, res) => {
  try {
    const profileData = req.body;

    // Calculate risk
    const score = calculateRiskScore(profileData);
    const category = getRiskCategory(score);
    profileData.riskScore = score;
    profileData.riskCategory = category;

    // Upsert profile based on email
    const updatedProfile = await VendorProfile.findOneAndUpdate(
      { contactEmail: profileData.contactEmail },
      profileData,
      { new: true, upsert: true }
    );

    res.status(200).json(updatedProfile);
  } catch (err) {
    console.error('Error saving vendor profile:', err);
    res.status(500).json({ error: 'Failed to save profile' });
  }
});

module.exports = router;
