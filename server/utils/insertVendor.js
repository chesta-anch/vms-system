const fetch = require('node-fetch');

const vendors = [
  {
    "contactEmail": "classplus@gmail.com",
    "businessName": "Classplus",
    "businessType": "EdTech",
    "yearsInOperation": 13,
    "securityCertifications": [],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Chennai"
  },
  {
    "contactEmail": "paytm@gmail.com",
    "businessName": "Paytm",
    "businessType": "HealthTech",
    "yearsInOperation": 7,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 0,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "razorpay@gmail.com",
    "businessName": "Razorpay",
    "businessType": "Mobility",
    "yearsInOperation": 12,
    "securityCertifications": [],
    "complianceStatus": "partial",
    "pastIncidents": 3,
    "location": "Delhi"
  },
  {
    "contactEmail": "upgrad@gmail.com",
    "businessName": "Upgrad",
    "businessType": "Retail",
    "yearsInOperation": 4,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 5,
    "location": "Bangalore"
  },
  {
    "contactEmail": "1mg@gmail.com",
    "businessName": "1Mg",
    "businessType": "EdTech",
    "yearsInOperation": 5,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 3,
    "location": "Noida"
  },
  {
    "contactEmail": "bigbasket@gmail.com",
    "businessName": "Bigbasket",
    "businessType": "Logistics",
    "yearsInOperation": 9,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 2,
    "location": "Pune"
  },
  {
    "contactEmail": "unacademy@gmail.com",
    "businessName": "Unacademy",
    "businessType": "Mobility",
    "yearsInOperation": 3,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 4,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "ola@gmail.com",
    "businessName": "Ola",
    "businessType": "E-Commerce",
    "yearsInOperation": 1,
    "securityCertifications": [],
    "complianceStatus": "non-compliant",
    "pastIncidents": 3,
    "location": "Mumbai"
  },
  {
    "contactEmail": "cred@gmail.com",
    "businessName": "Cred",
    "businessType": "Mobility",
    "yearsInOperation": 8,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Mumbai"
  },
  {
    "contactEmail": "citymall@gmail.com",
    "businessName": "Citymall",
    "businessType": "E-Commerce",
    "yearsInOperation": 13,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 0,
    "location": "Chennai"
  },
  {
    "contactEmail": "grofers@gmail.com",
    "businessName": "Grofers",
    "businessType": "FinTech",
    "yearsInOperation": 10,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 0,
    "location": "Noida"
  },
  {
    "contactEmail": "jumbotail@gmail.com",
    "businessName": "Jumbotail",
    "businessType": "SaaS",
    "yearsInOperation": 15,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 5,
    "location": "Bangalore"
  },
  {
    "contactEmail": "inmobi@gmail.com",
    "businessName": "Inmobi",
    "businessType": "EdTech",
    "yearsInOperation": 13,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 5,
    "location": "Bangalore"
  },
  {
    "contactEmail": "dunzo@gmail.com",
    "businessName": "Dunzo",
    "businessType": "EdTech",
    "yearsInOperation": 11,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 0,
    "location": "Chennai"
  },
  {
    "contactEmail": "cashfree@gmail.com",
    "businessName": "Cashfree",
    "businessType": "E-Commerce",
    "yearsInOperation": 5,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 2,
    "location": "Mumbai"
  },
  {
    "contactEmail": "medibuddy@gmail.com",
    "businessName": "Medibuddy",
    "businessType": "Mobility",
    "yearsInOperation": 14,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 2,
    "location": "Noida"
  },
  {
    "contactEmail": "capitalfloat@gmail.com",
    "businessName": "Capitalfloat",
    "businessType": "EdTech",
    "yearsInOperation": 3,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 4,
    "location": "Pune"
  },
  {
    "contactEmail": "cars24@gmail.com",
    "businessName": "Cars24",
    "businessType": "Mobility",
    "yearsInOperation": 13,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 5,
    "location": "Mumbai"
  },
  {
    "contactEmail": "skillmatics@gmail.com",
    "businessName": "Skillmatics",
    "businessType": "Mobility",
    "yearsInOperation": 6,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 1,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "rapido@gmail.com",
    "businessName": "Rapido",
    "businessType": "Retail",
    "yearsInOperation": 15,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 0,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "yourstory@gmail.com",
    "businessName": "Yourstory",
    "businessType": "E-Commerce",
    "yearsInOperation": 9,
    "securityCertifications": [],
    "complianceStatus": "non-compliant",
    "pastIncidents": 1,
    "location": "Noida"
  },
  {
    "contactEmail": "kodo@gmail.com",
    "businessName": "Kodo",
    "businessType": "Insurance",
    "yearsInOperation": 14,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 3,
    "location": "Chennai"
  },
  {
    "contactEmail": "locus.sh@gmail.com",
    "businessName": "Locus Sh",
    "businessType": "Logistics",
    "yearsInOperation": 4,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 4,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "kreditbee@gmail.com",
    "businessName": "Kreditbee",
    "businessType": "HealthTech",
    "yearsInOperation": 10,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Bangalore"
  },
  {
    "contactEmail": "flipkart@gmail.com",
    "businessName": "Flipkart",
    "businessType": "HealthTech",
    "yearsInOperation": 13,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 4,
    "location": "Chennai"
  },
  {
    "contactEmail": "mobikwik@gmail.com",
    "businessName": "Mobikwik",
    "businessType": "Retail",
    "yearsInOperation": 12,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 1,
    "location": "Chennai"
  },
  {
    "contactEmail": "jaikisan@gmail.com",
    "businessName": "Jaikisan",
    "businessType": "Retail",
    "yearsInOperation": 5,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 1,
    "location": "Chennai"
  },
  {
    "contactEmail": "infra.market@gmail.com",
    "businessName": "Infra Market",
    "businessType": "Retail",
    "yearsInOperation": 3,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 0,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "northernarc@gmail.com",
    "businessName": "Northernarc",
    "businessType": "SaaS",
    "yearsInOperation": 14,
    "securityCertifications": [],
    "complianceStatus": "compliant",
    "pastIncidents": 4,
    "location": "Pune"
  },
  {
    "contactEmail": "toppr@gmail.com",
    "businessName": "Toppr",
    "businessType": "HealthTech",
    "yearsInOperation": 3,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 4,
    "location": "Mumbai"
  },
  {
    "contactEmail": "zoomcar@gmail.com",
    "businessName": "Zoomcar",
    "businessType": "E-Commerce",
    "yearsInOperation": 3,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 5,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "snapdeal@gmail.com",
    "businessName": "Snapdeal",
    "businessType": "E-Commerce",
    "yearsInOperation": 2,
    "securityCertifications": [],
    "complianceStatus": "compliant",
    "pastIncidents": 0,
    "location": "Chennai"
  },
  {
    "contactEmail": "cardekho@gmail.com",
    "businessName": "Cardekho",
    "businessType": "EdTech",
    "yearsInOperation": 1,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 5,
    "location": "Pune"
  },
  {
    "contactEmail": "kooapp@gmail.com",
    "businessName": "Kooapp",
    "businessType": "Retail",
    "yearsInOperation": 13,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 4,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "exotel@gmail.com",
    "businessName": "Exotel",
    "businessType": "SaaS",
    "yearsInOperation": 8,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 0,
    "location": "Delhi"
  },
  {
    "contactEmail": "cartrade@gmail.com",
    "businessName": "Cartrade",
    "businessType": "EdTech",
    "yearsInOperation": 4,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 5,
    "location": "Pune"
  },
  {
    "contactEmail": "incred@gmail.com",
    "businessName": "Incred",
    "businessType": "Logistics",
    "yearsInOperation": 11,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 3,
    "location": "Delhi"
  },
  {
    "contactEmail": "pepperfry@gmail.com",
    "businessName": "Pepperfry",
    "businessType": "Mobility",
    "yearsInOperation": 9,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 0,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "themancompany@gmail.com",
    "businessName": "Themancompany",
    "businessType": "HealthTech",
    "yearsInOperation": 2,
    "securityCertifications": [],
    "complianceStatus": "compliant",
    "pastIncidents": 0,
    "location": "Noida"
  },
  {
    "contactEmail": "agnikul@gmail.com",
    "businessName": "Agnikul",
    "businessType": "FinTech",
    "yearsInOperation": 7,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 4,
    "location": "Chennai"
  },
  {
    "contactEmail": "plum@gmail.com",
    "businessName": "Plum",
    "businessType": "FinTech",
    "yearsInOperation": 11,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 3,
    "location": "Mumbai"
  },
  {
    "contactEmail": "peesafe@gmail.com",
    "businessName": "Peesafe",
    "businessType": "FinTech",
    "yearsInOperation": 12,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 5,
    "location": "Bangalore"
  },
  {
    "contactEmail": "nykaa@gmail.com",
    "businessName": "Nykaa",
    "businessType": "SaaS",
    "yearsInOperation": 12,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 1,
    "location": "Pune"
  },
  {
    "contactEmail": "nobroker@gmail.com",
    "businessName": "Nobroker",
    "businessType": "Entertainment",
    "yearsInOperation": 1,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 1,
    "location": "Mumbai"
  },
  {
    "contactEmail": "ofbusiness@gmail.com",
    "businessName": "Ofbusiness",
    "businessType": "E-Commerce",
    "yearsInOperation": 3,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 0,
    "location": "Noida"
  },
  {
    "contactEmail": "leadschool@gmail.com",
    "businessName": "Leadschool",
    "businessType": "E-Commerce",
    "yearsInOperation": 5,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 3,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "convosight@gmail.com",
    "businessName": "Convosight",
    "businessType": "SaaS",
    "yearsInOperation": 14,
    "securityCertifications": [],
    "complianceStatus": "partial",
    "pastIncidents": 5,
    "location": "Noida"
  },
  {
    "contactEmail": "livspace@gmail.com",
    "businessName": "Livspace",
    "businessType": "Entertainment",
    "yearsInOperation": 12,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 5,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "spinny@gmail.com",
    "businessName": "Spinny",
    "businessType": "EdTech",
    "yearsInOperation": 6,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 0,
    "location": "Chennai"
  },
  {
    "contactEmail": "synapsica@gmail.com",
    "businessName": "Synapsica",
    "businessType": "Entertainment",
    "yearsInOperation": 9,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 1,
    "location": "Mumbai"
  },
  {
    "contactEmail": "masaischool@gmail.com",
    "businessName": "Masaischool",
    "businessType": "E-Commerce",
    "yearsInOperation": 6,
    "securityCertifications": [],
    "complianceStatus": "compliant",
    "pastIncidents": 3,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "wysa@gmail.com",
    "businessName": "Wysa",
    "businessType": "Logistics",
    "yearsInOperation": 6,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Delhi"
  },
  {
    "contactEmail": "atherenergy@gmail.com",
    "businessName": "Atherenergy",
    "businessType": "SaaS",
    "yearsInOperation": 10,
    "securityCertifications": [],
    "complianceStatus": "non-compliant",
    "pastIncidents": 3,
    "location": "Bangalore"
  },
  {
    "contactEmail": "trell@gmail.com",
    "businessName": "Trell",
    "businessType": "Retail",
    "yearsInOperation": 15,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 5,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "yellowmessenger@gmail.com",
    "businessName": "Yellowmessenger",
    "businessType": "HealthTech",
    "yearsInOperation": 10,
    "securityCertifications": [],
    "complianceStatus": "compliant",
    "pastIncidents": 1,
    "location": "Noida"
  },
  {
    "contactEmail": "mamaearth@gmail.com",
    "businessName": "Mamaearth",
    "businessType": "Insurance",
    "yearsInOperation": 14,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 4,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "bimaplan@gmail.com",
    "businessName": "Bimaplan",
    "businessType": "SaaS",
    "yearsInOperation": 6,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Noida"
  },
  {
    "contactEmail": "urbanladder@gmail.com",
    "businessName": "Urbanladder",
    "businessType": "E-Commerce",
    "yearsInOperation": 11,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 5,
    "location": "Pune"
  },
  {
    "contactEmail": "purplle@gmail.com",
    "businessName": "Purplle",
    "businessType": "Logistics",
    "yearsInOperation": 7,
    "securityCertifications": [],
    "complianceStatus": "partial",
    "pastIncidents": 4,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "mymoneymantra@gmail.com",
    "businessName": "Mymoneymantra",
    "businessType": "HealthTech",
    "yearsInOperation": 1,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 4,
    "location": "Noida"
  },
  {
    "contactEmail": "wakefit@gmail.com",
    "businessName": "Wakefit",
    "businessType": "FinTech",
    "yearsInOperation": 5,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 5,
    "location": "Delhi"
  },
  {
    "contactEmail": "freshtohome@gmail.com",
    "businessName": "Freshtohome",
    "businessType": "Retail",
    "yearsInOperation": 10,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 1,
    "location": "Chennai"
  },
  {
    "contactEmail": "doubtnut@gmail.com",
    "businessName": "Doubtnut",
    "businessType": "Insurance",
    "yearsInOperation": 11,
    "securityCertifications": [],
    "complianceStatus": "partial",
    "pastIncidents": 5,
    "location": "Mumbai"
  },
  {
    "contactEmail": "smallcase@gmail.com",
    "businessName": "Smallcase",
    "businessType": "E-Commerce",
    "yearsInOperation": 13,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 5,
    "location": "Chennai"
  },
  {
    "contactEmail": "zomato@gmail.com",
    "businessName": "Zomato",
    "businessType": "E-Commerce",
    "yearsInOperation": 2,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 5,
    "location": "Chennai"
  },
  {
    "contactEmail": "sugarcosmetics@gmail.com",
    "businessName": "Sugarcosmetics",
    "businessType": "Insurance",
    "yearsInOperation": 6,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 4,
    "location": "Bangalore"
  },
  {
    "contactEmail": "chingari@gmail.com",
    "businessName": "Chingari",
    "businessType": "Entertainment",
    "yearsInOperation": 12,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 4,
    "location": "Bangalore"
  },
  {
    "contactEmail": "fisdom@gmail.com",
    "businessName": "Fisdom",
    "businessType": "Retail",
    "yearsInOperation": 7,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 3,
    "location": "Bangalore"
  },
  {
    "contactEmail": "ayefinance@gmail.com",
    "businessName": "Ayefinance",
    "businessType": "Insurance",
    "yearsInOperation": 14,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 1,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "rivigo@gmail.com",
    "businessName": "Rivigo",
    "businessType": "Logistics",
    "yearsInOperation": 12,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 3,
    "location": "Delhi"
  },
  {
    "contactEmail": "farmart@gmail.com",
    "businessName": "Farmart",
    "businessType": "E-Commerce",
    "yearsInOperation": 11,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 4,
    "location": "Delhi"
  },
  {
    "contactEmail": "mfine@gmail.com",
    "businessName": "Mfine",
    "businessType": "Entertainment",
    "yearsInOperation": 10,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 4,
    "location": "Chennai"
  },
  {
    "contactEmail": "lendingkart@gmail.com",
    "businessName": "Lendingkart",
    "businessType": "Retail",
    "yearsInOperation": 3,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 2,
    "location": "Delhi"
  },
  {
    "contactEmail": "chqbook@gmail.com",
    "businessName": "Chqbook",
    "businessType": "Mobility",
    "yearsInOperation": 4,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 3,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "ecomexpress@gmail.com",
    "businessName": "Ecomexpress",
    "businessType": "EdTech",
    "yearsInOperation": 8,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 5,
    "location": "Noida"
  },
  {
    "contactEmail": "bharatpe@gmail.com",
    "businessName": "Bharatpe",
    "businessType": "Insurance",
    "yearsInOperation": 3,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 5,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "shiprocket@gmail.com",
    "businessName": "Shiprocket",
    "businessType": "E-Commerce",
    "yearsInOperation": 5,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 4,
    "location": "Noida"
  },
  {
    "contactEmail": "leadsquared@gmail.com",
    "businessName": "Leadsquared",
    "businessType": "Entertainment",
    "yearsInOperation": 1,
    "securityCertifications": [],
    "complianceStatus": "compliant",
    "pastIncidents": 4,
    "location": "Chennai"
  },
  {
    "contactEmail": "quikr@gmail.com",
    "businessName": "Quikr",
    "businessType": "HealthTech",
    "yearsInOperation": 3,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 5,
    "location": "Noida"
  },
  {
    "contactEmail": "quizizz@gmail.com",
    "businessName": "Quizizz",
    "businessType": "FinTech",
    "yearsInOperation": 13,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 2,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "pristyncare@gmail.com",
    "businessName": "Pristyncare",
    "businessType": "HealthTech",
    "yearsInOperation": 10,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 2,
    "location": "Pune"
  },
  {
    "contactEmail": "polygon(previouslymaticnetwork)@gmail.com",
    "businessName": "Polygonpreviouslymaticnetwork",
    "businessType": "HealthTech",
    "yearsInOperation": 10,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 3,
    "location": "Bangalore"
  },
  {
    "contactEmail": "playshifu@gmail.com",
    "businessName": "Playshifu",
    "businessType": "Logistics",
    "yearsInOperation": 12,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 3,
    "location": "Chennai"
  },
  {
    "contactEmail": "lavainternationallimited@gmail.com",
    "businessName": "Lavainternationallimited",
    "businessType": "HealthTech",
    "yearsInOperation": 15,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 0,
    "location": "Noida"
  },
  {
    "contactEmail": "docsapp@gmail.com",
    "businessName": "Docsapp",
    "businessType": "HealthTech",
    "yearsInOperation": 11,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 3,
    "location": "Mumbai"
  },
  {
    "contactEmail": "furlenco@gmail.com",
    "businessName": "Furlenco",
    "businessType": "FinTech",
    "yearsInOperation": 11,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 3,
    "location": "Delhi"
  },
  {
    "contactEmail": "bombayshavingcompany@gmail.com",
    "businessName": "Bombayshavingcompany",
    "businessType": "Insurance",
    "yearsInOperation": 8,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 2,
    "location": "Chennai"
  },
  {
    "contactEmail": "treebohotels@gmail.com",
    "businessName": "Treebohotels",
    "businessType": "EdTech",
    "yearsInOperation": 4,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 3,
    "location": "Chennai"
  },
  {
    "contactEmail": "jiosaavn@gmail.com",
    "businessName": "Jiosaavn",
    "businessType": "E-Commerce",
    "yearsInOperation": 12,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 4,
    "location": "Chennai"
  },
  {
    "contactEmail": "nearbuy@gmail.com",
    "businessName": "Nearbuy",
    "businessType": "HealthTech",
    "yearsInOperation": 5,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 0,
    "location": "Chennai"
  },
  {
    "contactEmail": "porteamedical@gmail.com",
    "businessName": "Porteamedical",
    "businessType": "FinTech",
    "yearsInOperation": 3,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 0,
    "location": "Pune"
  },
  {
    "contactEmail": "stashfin@gmail.com",
    "businessName": "Stashfin",
    "businessType": "Logistics",
    "yearsInOperation": 8,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 4,
    "location": "Noida"
  },
  {
    "contactEmail": "healthifyme@gmail.com",
    "businessName": "Healthifyme",
    "businessType": "E-Commerce",
    "yearsInOperation": 12,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 1,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "quicksell@gmail.com",
    "businessName": "Quicksell",
    "businessType": "Mobility",
    "yearsInOperation": 12,
    "securityCertifications": [],
    "complianceStatus": "compliant",
    "pastIncidents": 5,
    "location": "Delhi"
  },
  {
    "contactEmail": "mswipetechnologies@gmail.com",
    "businessName": "Mswipetechnologies",
    "businessType": "Retail",
    "yearsInOperation": 6,
    "securityCertifications": [],
    "complianceStatus": "non-compliant",
    "pastIncidents": 3,
    "location": "Bangalore"
  },
  {
    "contactEmail": "virohan@gmail.com",
    "businessName": "Virohan",
    "businessType": "Insurance",
    "yearsInOperation": 9,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 2,
    "location": "Noida"
  },
  {
    "contactEmail": "netmeds@gmail.com",
    "businessName": "Netmeds",
    "businessType": "Retail",
    "yearsInOperation": 5,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 5,
    "location": "Delhi"
  },
  {
    "contactEmail": "xyxxapparels@gmail.com",
    "businessName": "Xyxxapparels",
    "businessType": "Entertainment",
    "yearsInOperation": 4,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 5,
    "location": "Noida"
  },
  {
    "contactEmail": "airmeet@gmail.com",
    "businessName": "Airmeet",
    "businessType": "SaaS",
    "yearsInOperation": 3,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 0,
    "location": "Chennai"
  },
  {
    "contactEmail": "bookmyshow@gmail.com",
    "businessName": "Bookmyshow",
    "businessType": "Logistics",
    "yearsInOperation": 15,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Noida"
  },
  {
    "contactEmail": "awignenterprises@gmail.com",
    "businessName": "Awignenterprises",
    "businessType": "EdTech",
    "yearsInOperation": 5,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 2,
    "location": "Delhi"
  },
  {
    "contactEmail": "ixigo@gmail.com",
    "businessName": "Ixigo",
    "businessType": "FinTech",
    "yearsInOperation": 7,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Pune"
  },
  {
    "contactEmail": "chaipoint@gmail.com",
    "businessName": "Chaipoint",
    "businessType": "Logistics",
    "yearsInOperation": 7,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 1,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "availfinance@gmail.com",
    "businessName": "Availfinance",
    "businessType": "Logistics",
    "yearsInOperation": 1,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 3,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "glowroad@gmail.com",
    "businessName": "Glowroad",
    "businessType": "SaaS",
    "yearsInOperation": 4,
    "securityCertifications": [],
    "complianceStatus": "non-compliant",
    "pastIncidents": 3,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "homelane@gmail.com",
    "businessName": "Homelane",
    "businessType": "Retail",
    "yearsInOperation": 6,
    "securityCertifications": [],
    "complianceStatus": "partial",
    "pastIncidents": 3,
    "location": "Mumbai"
  },
  {
    "contactEmail": "rentomojo@gmail.com",
    "businessName": "Rentomojo",
    "businessType": "Entertainment",
    "yearsInOperation": 14,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 2,
    "location": "Chennai"
  },
  {
    "contactEmail": "sbilife@gmail.com",
    "businessName": "Sbilife",
    "businessType": "FinTech",
    "yearsInOperation": 13,
    "securityCertifications": [],
    "complianceStatus": "partial",
    "pastIncidents": 3,
    "location": "Bangalore"
  },
  {
    "contactEmail": "verseinnovation@gmail.com",
    "businessName": "Verseinnovation",
    "businessType": "Logistics",
    "yearsInOperation": 7,
    "securityCertifications": [],
    "complianceStatus": "non-compliant",
    "pastIncidents": 2,
    "location": "Bangalore"
  },
  {
    "contactEmail": "coindcx@gmail.com",
    "businessName": "Coindcx",
    "businessType": "Entertainment",
    "yearsInOperation": 7,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 2,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "bankbazaar.com@gmail.com",
    "businessName": "Bankbazaar Com",
    "businessType": "Insurance",
    "yearsInOperation": 6,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 3,
    "location": "Delhi"
  },
  {
    "contactEmail": "happay@gmail.com",
    "businessName": "Happay",
    "businessType": "Retail",
    "yearsInOperation": 3,
    "securityCertifications": [],
    "complianceStatus": "partial",
    "pastIncidents": 1,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "goodera@gmail.com",
    "businessName": "Goodera",
    "businessType": "Entertainment",
    "yearsInOperation": 8,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 2,
    "location": "Bangalore"
  },
  {
    "contactEmail": "simpl@gmail.com",
    "businessName": "Simpl",
    "businessType": "Logistics",
    "yearsInOperation": 13,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 5,
    "location": "Pune"
  },
  {
    "contactEmail": "shopclues@gmail.com",
    "businessName": "Shopclues",
    "businessType": "HealthTech",
    "yearsInOperation": 7,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 1,
    "location": "Noida"
  },
  {
    "contactEmail": "aknamed@gmail.com",
    "businessName": "Aknamed",
    "businessType": "SaaS",
    "yearsInOperation": 4,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 5,
    "location": "Mumbai"
  },
  {
    "contactEmail": "box8@gmail.com",
    "businessName": "Box8",
    "businessType": "Insurance",
    "yearsInOperation": 10,
    "securityCertifications": [],
    "complianceStatus": "non-compliant",
    "pastIncidents": 0,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "cashkaro@gmail.com",
    "businessName": "Cashkaro",
    "businessType": "Mobility",
    "yearsInOperation": 2,
    "securityCertifications": [],
    "complianceStatus": "non-compliant",
    "pastIncidents": 4,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "loconav@gmail.com",
    "businessName": "Loconav",
    "businessType": "E-Commerce",
    "yearsInOperation": 3,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 0,
    "location": "Delhi"
  },
  {
    "contactEmail": "avataar.me@gmail.com",
    "businessName": "Avataar Me",
    "businessType": "Entertainment",
    "yearsInOperation": 6,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 2,
    "location": "Delhi"
  },
  {
    "contactEmail": "sleepycat@gmail.com",
    "businessName": "Sleepycat",
    "businessType": "EdTech",
    "yearsInOperation": 8,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 2,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "indwealth@gmail.com",
    "businessName": "Indwealth",
    "businessType": "SaaS",
    "yearsInOperation": 5,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 3,
    "location": "Noida"
  },
  {
    "contactEmail": "kissht@gmail.com",
    "businessName": "Kissht",
    "businessType": "Retail",
    "yearsInOperation": 7,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 1,
    "location": "Noida"
  },
  {
    "contactEmail": "medgenome@gmail.com",
    "businessName": "Medgenome",
    "businessType": "SaaS",
    "yearsInOperation": 8,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 3,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "loadshare@gmail.com",
    "businessName": "Loadshare",
    "businessType": "E-Commerce",
    "yearsInOperation": 7,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 2,
    "location": "Delhi"
  },
  {
    "contactEmail": "gradeup@gmail.com",
    "businessName": "Gradeup",
    "businessType": "Mobility",
    "yearsInOperation": 8,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 0,
    "location": "Mumbai"
  },
  {
    "contactEmail": "healthkart@gmail.com",
    "businessName": "Healthkart",
    "businessType": "Logistics",
    "yearsInOperation": 14,
    "securityCertifications": [],
    "complianceStatus": "partial",
    "pastIncidents": 4,
    "location": "Bangalore"
  },
  {
    "contactEmail": "saveo@gmail.com",
    "businessName": "Saveo",
    "businessType": "Retail",
    "yearsInOperation": 5,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 3,
    "location": "Noida"
  },
  {
    "contactEmail": "coverfoxinsurance@gmail.com",
    "businessName": "Coverfoxinsurance",
    "businessType": "EdTech",
    "yearsInOperation": 1,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 4,
    "location": "Delhi"
  },
  {
    "contactEmail": "earlysalary@gmail.com",
    "businessName": "Earlysalary",
    "businessType": "Insurance",
    "yearsInOperation": 6,
    "securityCertifications": [],
    "complianceStatus": "partial",
    "pastIncidents": 0,
    "location": "Delhi"
  },
  {
    "contactEmail": "planetspark@gmail.com",
    "businessName": "Planetspark",
    "businessType": "FinTech",
    "yearsInOperation": 15,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 4,
    "location": "Bangalore"
  },
  {
    "contactEmail": "limeroad@gmail.com",
    "businessName": "Limeroad",
    "businessType": "SaaS",
    "yearsInOperation": 4,
    "securityCertifications": [],
    "complianceStatus": "compliant",
    "pastIncidents": 3,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "freighttiger@gmail.com",
    "businessName": "Freighttiger",
    "businessType": "SaaS",
    "yearsInOperation": 9,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 2,
    "location": "Delhi"
  },
  {
    "contactEmail": "unlu@gmail.com",
    "businessName": "Unlu",
    "businessType": "E-Commerce",
    "yearsInOperation": 1,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 0,
    "location": "Mumbai"
  },
  {
    "contactEmail": "interviewbit@gmail.com",
    "businessName": "Interviewbit",
    "businessType": "Mobility",
    "yearsInOperation": 2,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 0,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "oyerickshaw@gmail.com",
    "businessName": "Oyerickshaw",
    "businessType": "Mobility",
    "yearsInOperation": 10,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 0,
    "location": "Mumbai"
  },
  {
    "contactEmail": "ambergroup@gmail.com",
    "businessName": "Ambergroup",
    "businessType": "E-Commerce",
    "yearsInOperation": 14,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 4,
    "location": "Noida"
  },
  {
    "contactEmail": "starhealthandalliedinsurance@gmail.com",
    "businessName": "Starhealthandalliedinsurance",
    "businessType": "HealthTech",
    "yearsInOperation": 2,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 1,
    "location": "Pune"
  },
  {
    "contactEmail": "unbxd@gmail.com",
    "businessName": "Unbxd",
    "businessType": "Retail",
    "yearsInOperation": 10,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Delhi"
  },
  {
    "contactEmail": "lido@gmail.com",
    "businessName": "Lido",
    "businessType": "FinTech",
    "yearsInOperation": 5,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 5,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "cashify@gmail.com",
    "businessName": "Cashify",
    "businessType": "E-Commerce",
    "yearsInOperation": 8,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 4,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "revv@gmail.com",
    "businessName": "Revv",
    "businessType": "E-Commerce",
    "yearsInOperation": 7,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 3,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "hungerbox@gmail.com",
    "businessName": "Hungerbox",
    "businessType": "FinTech",
    "yearsInOperation": 8,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 3,
    "location": "Pune"
  },
  {
    "contactEmail": "oyo@gmail.com",
    "businessName": "Oyo",
    "businessType": "Insurance",
    "yearsInOperation": 6,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 1,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "medplus@gmail.com",
    "businessName": "Medplus",
    "businessType": "EdTech",
    "yearsInOperation": 5,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Mumbai"
  },
  {
    "contactEmail": "piggyride@gmail.com",
    "businessName": "Piggyride",
    "businessType": "EdTech",
    "yearsInOperation": 14,
    "securityCertifications": [],
    "complianceStatus": "non-compliant",
    "pastIncidents": 3,
    "location": "Mumbai"
  },
  {
    "contactEmail": "sharechat@gmail.com",
    "businessName": "Sharechat",
    "businessType": "Entertainment",
    "yearsInOperation": 10,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 1,
    "location": "Bangalore"
  },
  {
    "contactEmail": "phablecare@gmail.com",
    "businessName": "Phablecare",
    "businessType": "FinTech",
    "yearsInOperation": 4,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 1,
    "location": "Noida"
  },
  {
    "contactEmail": "testbook.com@gmail.com",
    "businessName": "Testbook Com",
    "businessType": "Retail",
    "yearsInOperation": 7,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 0,
    "location": "Chennai"
  },
  {
    "contactEmail": "billdesk@gmail.com",
    "businessName": "Billdesk",
    "businessType": "HealthTech",
    "yearsInOperation": 4,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 4,
    "location": "Bangalore"
  },
  {
    "contactEmail": "signzy@gmail.com",
    "businessName": "Signzy",
    "businessType": "FinTech",
    "yearsInOperation": 13,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 4,
    "location": "Delhi"
  },
  {
    "contactEmail": "rawpressery@gmail.com",
    "businessName": "Rawpressery",
    "businessType": "FinTech",
    "yearsInOperation": 2,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 1,
    "location": "Noida"
  },
  {
    "contactEmail": "webengage@gmail.com",
    "businessName": "Webengage",
    "businessType": "Mobility",
    "yearsInOperation": 6,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Chennai"
  },
  {
    "contactEmail": "chumbak@gmail.com",
    "businessName": "Chumbak",
    "businessType": "Insurance",
    "yearsInOperation": 4,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 1,
    "location": "Chennai"
  },
  {
    "contactEmail": "damensch@gmail.com",
    "businessName": "Damensch",
    "businessType": "SaaS",
    "yearsInOperation": 11,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Pune"
  },
  {
    "contactEmail": "instantpay@gmail.com",
    "businessName": "Instantpay",
    "businessType": "E-Commerce",
    "yearsInOperation": 5,
    "securityCertifications": [],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Mumbai"
  },
  {
    "contactEmail": "fyle@gmail.com",
    "businessName": "Fyle",
    "businessType": "Insurance",
    "yearsInOperation": 1,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 4,
    "location": "Noida"
  },
  {
    "contactEmail": "trulymadly.com@gmail.com",
    "businessName": "Trulymadly Com",
    "businessType": "FinTech",
    "yearsInOperation": 6,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 3,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "freshmenu@gmail.com",
    "businessName": "Freshmenu",
    "businessType": "HealthTech",
    "yearsInOperation": 9,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 2,
    "location": "Mumbai"
  },
  {
    "contactEmail": "nodwingaming@gmail.com",
    "businessName": "Nodwingaming",
    "businessType": "HealthTech",
    "yearsInOperation": 3,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 2,
    "location": "Chennai"
  },
  {
    "contactEmail": "kinaracapital@gmail.com",
    "businessName": "Kinaracapital",
    "businessType": "SaaS",
    "yearsInOperation": 7,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 5,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "niki@gmail.com",
    "businessName": "Niki",
    "businessType": "Retail",
    "yearsInOperation": 4,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 4,
    "location": "Pune"
  },
  {
    "contactEmail": "neogrowth@gmail.com",
    "businessName": "Neogrowth",
    "businessType": "Entertainment",
    "yearsInOperation": 7,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 3,
    "location": "Noida"
  },
  {
    "contactEmail": "paytmmall@gmail.com",
    "businessName": "Paytmmall",
    "businessType": "Entertainment",
    "yearsInOperation": 10,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Delhi"
  },
  {
    "contactEmail": "setu@gmail.com",
    "businessName": "Setu",
    "businessType": "E-Commerce",
    "yearsInOperation": 11,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "bluetokaicoffeeroasters@gmail.com",
    "businessName": "Bluetokaicoffeeroasters",
    "businessType": "Entertainment",
    "yearsInOperation": 11,
    "securityCertifications": [],
    "complianceStatus": "compliant",
    "pastIncidents": 1,
    "location": "Pune"
  },
  {
    "contactEmail": "clovia@gmail.com",
    "businessName": "Clovia",
    "businessType": "Mobility",
    "yearsInOperation": 6,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 2,
    "location": "Noida"
  },
  {
    "contactEmail": "scripbox@gmail.com",
    "businessName": "Scripbox",
    "businessType": "Entertainment",
    "yearsInOperation": 12,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 5,
    "location": "Bangalore"
  },
  {
    "contactEmail": "epigamia@gmail.com",
    "businessName": "Epigamia",
    "businessType": "FinTech",
    "yearsInOperation": 8,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Gurgaon"
  },
  {
    "contactEmail": "mcaffeine@gmail.com",
    "businessName": "Mcaffeine",
    "businessType": "HealthTech",
    "yearsInOperation": 1,
    "securityCertifications": [
      "PCI DSS"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 1,
    "location": "Mumbai"
  },
  {
    "contactEmail": "tvf@gmail.com",
    "businessName": "Tvf",
    "businessType": "SaaS",
    "yearsInOperation": 11,
    "securityCertifications": [
      "ISO 27001"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 5,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "wowskinscienceindialtd@gmail.com",
    "businessName": "Wowskinscienceindialtd",
    "businessType": "FinTech",
    "yearsInOperation": 10,
    "securityCertifications": [],
    "complianceStatus": "non-compliant",
    "pastIncidents": 2,
    "location": "Pune"
  },
  {
    "contactEmail": "ezetap@gmail.com",
    "businessName": "Ezetap",
    "businessType": "FinTech",
    "yearsInOperation": 2,
    "securityCertifications": [],
    "complianceStatus": "non-compliant",
    "pastIncidents": 1,
    "location": "Delhi"
  },
  {
    "contactEmail": "financepeer@gmail.com",
    "businessName": "Financepeer",
    "businessType": "Logistics",
    "yearsInOperation": 5,
    "securityCertifications": [],
    "complianceStatus": "compliant",
    "pastIncidents": 1,
    "location": "Chennai"
  },
  {
    "contactEmail": "girnarsoft@gmail.com",
    "businessName": "Girnarsoft",
    "businessType": "FinTech",
    "yearsInOperation": 4,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "partial",
    "pastIncidents": 2,
    "location": "Delhi"
  },
  {
    "contactEmail": "meesho@gmail.com",
    "businessName": "Meesho",
    "businessType": "SaaS",
    "yearsInOperation": 9,
    "securityCertifications": [
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 4,
    "location": "Bangalore"
  },
  {
    "contactEmail": "udaan@gmail.com",
    "businessName": "Udaan",
    "businessType": "EdTech",
    "yearsInOperation": 6,
    "securityCertifications": [
      "ISO 27001",
      "SOC 2"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 4,
    "location": "Noida"
  },
  {
    "contactEmail": "zolve@gmail.com",
    "businessName": "Zolve",
    "businessType": "HealthTech",
    "yearsInOperation": 11,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "non-compliant",
    "pastIncidents": 1,
    "location": "Chennai"
  },
  {
    "contactEmail": "credflow@gmail.com",
    "businessName": "Credflow",
    "businessType": "HealthTech",
    "yearsInOperation": 12,
    "securityCertifications": [
      "HIPAA"
    ],
    "complianceStatus": "compliant",
    "pastIncidents": 4,
    "location": "Hyderabad"
  },
  {
    "contactEmail": "halaplaytechnologies@gmail.com",
    "businessName": "Halaplaytechnologies",
    "businessType": "HealthTech",
    "yearsInOperation": 13,
    "securityCertifications": [],
    "complianceStatus": "compliant",
    "pastIncidents": 0,
    "location": "Hyderabad"
  }
];

async function uploadVendors() {
  try {
    const res = await fetch("http://localhost:5000/api/admin/upsert-vendors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(vendors)
    });

    const data = await res.json();
    console.log(JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Bulk vendor upload failed:", err.message);
  }
}

uploadVendors();
