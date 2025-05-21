// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');

// Load environment variables
//dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://admin:admin@cluster0.n9e9vmk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('✅ MongoDB connected'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// MODELS
const User = require('./models/userSchema');
const VendorProfile = require('./models/vendorProfileSchema');

// ==================== AUTH ROUTES ==================== //

// Signup
app.post('/api/auth/signup', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ message: 'User already exists' });

    const newUser = await User.create({ name, email, password, role });

    res.status(201).json({
      message: 'Signup successful',
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role
      }
    });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

//upsert-user
app.post('/api/admin/upsert-user', async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await User.findOneAndUpdate(
      { email },
      { name, password: hashedPassword, role },
      { new: true, upsert: true, setDefaultsOnInsert: true }
    );

    res.status(200).json({
      message: 'User upserted successfully',
      user: {
        id: updatedUser._id,
        name: updatedUser.name,
        email: updatedUser.email,
        role: updatedUser.role
      }
    });
  } catch (err) {
    console.error('Upsert error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    res.status(200).json({
      message: 'Login successful',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ==================== VENDOR ONBOARDING ROUTES ==================== //

// Vendor onboarding route
app.post('/api/vendoronboard', async (req, res) => {
  try {
    const {
      businessName,
      businessType,
      yearsInOperation,
      securityCertifications,
      complianceStatus,
      pastIncidents,
      location,
      contactEmail
    } = req.body;

    if (!contactEmail) {
      return res.status(400).json({ message: 'Contact email is required' });
    }

    // Compute risk score
    let riskScore = 0;
    riskScore += Math.max(0, 50 - Number(yearsInOperation));
    riskScore += Math.min(Number(pastIncidents), 10) * 3;

    if (complianceStatus === 'non-compliant') riskScore += 20;
    else if (complianceStatus === 'partial') riskScore += 10;

    if (Array.isArray(securityCertifications)) {
      riskScore -= securityCertifications.length * 2;
    }

    if (riskScore < 0) riskScore = 0;
    if (riskScore > 100) riskScore = 100;

    let riskCategory = 'Low';
    if (riskScore >= 30 && riskScore < 60) riskCategory = 'Medium';
    else if (riskScore >= 60) riskCategory = 'High';

    const existingProfile = await VendorProfile.findOne({ contactEmail });

    const update = {
      businessName,
      businessType,
      yearsInOperation,
      securityCertifications,
      complianceStatus,
      pastIncidents,
      location,
      contactEmail,
      riskScore,
      riskCategory,
    };

    if (existingProfile && existingProfile.status === 'rejected') {
      update.status = 'pending'; // Reset to pending on resubmission
    }

    const profile = await VendorProfile.findOneAndUpdate(
      { contactEmail },
      update,
      { new: true, upsert: true }
    );

    res.status(200).json({ message: 'Profile updated', profile });
  } catch (err) {
    console.error('Error in vendor onboarding:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get vendor profiles by optional status
app.get('/api/vendorprofiles', async (req, res) => {
  try {
    const { email, status } = req.query;

    if (email) {
      const profile = await VendorProfile.findOne({ contactEmail: email });
      if (!profile) return res.status(404).json({ message: 'Vendor profile not found' });
      return res.status(200).json(profile);
    }

    if (status) {
      const profiles = await VendorProfile.find({ status });
      return res.status(200).json(profiles);
    }

    const allProfiles = await VendorProfile.find();
    res.status(200).json(allProfiles);
  } catch (err) {
    console.error('Error fetching profiles:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

// ==================== ADMIN ROUTES ==================== //

/* Get all users (admin only) */
app.get('/api/admin/users', async (req, res) => {
  try {
    const users = await User.find(); // Get all users
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

/* Get all vendors (admin only) */
app.get('/api/admin/vendors', async (req, res) => {
  try {
    const vendors = await VendorProfile.find(); // Get all vendor profiles
    res.status(200).json(vendors);
  } catch (err) {
    console.error('Error fetching vendors:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


// Update vendor status (admin only)
app.put('/api/vendorprofiles/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!['approved', 'rejected', 'pending'].includes(status)) {
      return res.status(400).json({ message: 'Invalid status value' });
    }

    const updated = await VendorProfile.findByIdAndUpdate(id, { status }, { new: true });
    if (!updated) return res.status(404).json({ message: 'Vendor not found' });

    res.status(200).json({ message: 'Status updated', vendor: updated });
  } catch (err) {
    console.error('Error updating status:', err);
    res.status(500).json({ message: 'Server error' });
  }
});

//bulk vendor-onboarding
// Bulk vendor onboarding
app.post('/api/admin/upsert-vendors', async (req, res) => {
  try {
    const vendors = req.body;

    if (!Array.isArray(vendors) || vendors.length === 0) {
      return res.status(400).json({ message: 'Vendors data must be a non-empty array' });
    }

    const results = [];

    for (const vendor of vendors) {
      const {
        businessName,
        businessType,
        yearsInOperation,
        securityCertifications,
        complianceStatus,
        pastIncidents,
        location,
        contactEmail
      } = vendor;

      if (!contactEmail) {
        results.push({ contactEmail, status: 'error', message: 'Missing contactEmail' });
        continue;
      }

      // Risk calculation
      let riskScore = 0;
      riskScore += Math.max(0, 50 - Number(yearsInOperation));
      riskScore += Math.min(Number(pastIncidents), 10) * 3;

      if (complianceStatus === 'non-compliant') riskScore += 20;
      else if (complianceStatus === 'partial') riskScore += 10;

      if (Array.isArray(securityCertifications)) {
        riskScore -= securityCertifications.length * 2;
      }

      riskScore = Math.max(0, Math.min(100, riskScore));

      let riskCategory = 'Low';
      if (riskScore >= 30 && riskScore < 60) riskCategory = 'Medium';
      else if (riskScore >= 60) riskCategory = 'High';

      const existingProfile = await VendorProfile.findOne({ contactEmail });

      const update = {
        businessName,
        businessType,
        yearsInOperation,
        securityCertifications,
        complianceStatus,
        pastIncidents,
        location,
        contactEmail,
        riskScore,
        riskCategory,
      };

      if (existingProfile && existingProfile.status === 'rejected') {
        update.status = 'pending';
      }

      const saved = await VendorProfile.findOneAndUpdate(
        { contactEmail },
        update,
        { new: true, upsert: true }
      );

      results.push({ contactEmail, status: 'success', profile: saved });
    }

    res.status(200).json({ message: 'Bulk vendor upsert completed', results });
  } catch (err) {
    console.error('Bulk vendor upsert error:', err);
    res.status(500).json({ message: 'Server error' });
  }
});


// ==================== START SERVER ==================== //
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
