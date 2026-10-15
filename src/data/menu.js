
export const salonInfo = {
  name: "Silk & Soft",
  fullName: "Silk & Soft Beauty Salon",
  city: "Kanpur",
  tagline: "Your Beauty, Your Signature.",
  whatsappNumber: "", // Add salon WhatsApp number later
};

export const categories = [
  { id: "threading", name: "Threading", subtitle: "Everyday beauty essentials" },
  { id: "cleanup", name: "Clean-up", subtitle: "Refresh your skin" },
  { id: "peeloff", name: "Wax / Peel Off", subtitle: "Precise facial hair removal" },
  { id: "normalwax", name: "Normal Wax", subtitle: "Smooth skin essentials" },
  { id: "ricawax", name: "Rica Wax", subtitle: "Premium waxing services" },
  { id: "treatment", name: "Skin Treatments", subtitle: "Targeted skin care" },
  { id: "bleach", name: "Bleach", subtitle: "Beauty and skin essentials" },
  { id: "dtan", name: "D-Tan", subtitle: "Refresh your skin" },
  { id: "partymakeup", name: "Party Makeup", subtitle: "Looks for every occasion" },
  { id: "bridalmakeup", name: "Bridal Makeup", subtitle: "Your special-day look" },
  { id: "body", name: "Body Services", subtitle: "Relax and rejuvenate" },
  { id: "prebridal", name: "Pre-Bridal Package", subtitle: "Your complete bridal preparation" },
  { id: "haircut", name: "Hair Cut", subtitle: "Find your signature style" },
  { id: "hair", name: "Hair Services", subtitle: "Care, style and transformation" },
  { id: "hydra", name: "Hydra Facial", subtitle: "Your skin, refreshed" },
];

export const services = [
  // THREADING
  { id: 1, category: "threading", name: "Threading", price: "₹20" },
  { id: 2, category: "threading", name: "01 - FULL", price: "₹20 + ₹20 + ₹20" },

  // CLEAN-UP
  { id: 3, category: "cleanup", name: "Normal Clean-up", price: "₹250" },
  { id: 4, category: "cleanup", name: "Glow Clean-up", price: "₹400" },
  { id: 5, category: "cleanup", name: "Premium Clean-up", price: "₹600" },

  // WAX / PEEL OFF
  { id: 6, category: "peeloff", name: "Full Face", price: "₹350" },
  { id: 7, category: "peeloff", name: "Upper Lip", price: "₹70" },
  { id: 8, category: "peeloff", name: "Eye Brow", price: "₹70" },
  { id: 9, category: "peeloff", name: "Half Chin", price: "₹70" },

  // NORMAL WAX
  { id: 10, category: "normalwax", name: "Arm with Under Arms", price: "₹300" },
  { id: 11, category: "normalwax", name: "Half Leg", price: "₹350" },
  { id: 12, category: "normalwax", name: "Full Leg", price: "₹600" },
  { id: 13, category: "normalwax", name: "Full Body", price: "₹1,500" },

  // RICA WAX
  { id: 14, category: "ricawax", name: "Arms with Under Arms", price: "₹450" },
  { id: 15, category: "ricawax", name: "Full Leg", price: "₹800" },
  { id: 16, category: "ricawax", name: "Full Body", price: "₹2,000" },

  // TREATMENTS
  { id: 17, category: "treatment", name: "Anti Aging", price: "₹2,000" },
  { id: 18, category: "treatment", name: "Anti Pigmentation", price: "₹2,000" },
  { id: 19, category: "treatment", name: "Anti Acne", price: "₹2,000" },
  { id: 20, category: "treatment", name: "Sensitive Skin Treatment", price: "₹2,000" },

  // BLEACH
  { id: 21, category: "bleach", name: "OXY LIFE", price: "₹250" },
  { id: 22, category: "bleach", name: "Oxygel Bleach", price: "₹350" },
  { id: 23, category: "bleach", name: "Fruit Bleach", price: "₹250" },

  // D-TAN
  { id: 24, category: "dtan", name: "OZONE", price: "₹250" },
  { id: 25, category: "dtan", name: "RAGA", price: "₹350" },
  { id: 26, category: "dtan", name: "O3", price: "₹450" },

  // PARTY MAKEUP
  { id: 27, category: "partymakeup", name: "Normal Party Makeup", price: "₹1,500" },
  { id: 28, category: "partymakeup", name: "Premium Makeup", price: "₹1,800" },
  { id: 29, category: "partymakeup", name: "HD Party Makeup", price: "₹2,000" },
  { id: 30, category: "partymakeup", name: "Mehndi / Haldi Makeup", price: "₹3,000" },
  { id: 31, category: "partymakeup", name: "Engagement Makeup", price: "₹5,000" },
  { id: 32, category: "partymakeup", name: "Premium Engagement Makeup", price: "₹6,000" },
  { id: 33, category: "partymakeup", name: "Reception Makeup", price: "₹7,000" },
  { id: 34, category: "partymakeup", name: "Reception Premium Makeup", price: "₹8,000" },

  // BRIDAL MAKEUP
  { id: 35, category: "bridalmakeup", name: "Regular Bridal Makeup", price: "₹10,000" },
  { id: 36, category: "bridalmakeup", name: "HD Makeup", price: "₹15,000" },
  { id: 37, category: "bridalmakeup", name: "Ultra HD Makeup", price: "₹20,000" },

  // BODY SERVICES
  { id: 38, category: "body", name: "Full Body Massage", price: "₹2,000" },
  { id: 39, category: "body", name: "Full Body Polishing", price: "₹2,500" },
  { id: 40, category: "body", name: "Full Body Oxying", price: "₹2,000" },

  // PRE-BRIDAL PACKAGE
  {
    id: 41,
    category: "prebridal",
    name: "Pre-Bridal Services Package",
    price: "₹6,000",
    note: "Includes the following services",
    details: [
      "C/F/U Threading",
      "Full Body Bleach / D-Tan",
      "Full Body Waxing",
      "Full Body Polishing",
      "1 Clean-up",
      "1 Facial",
    ],
  },

  // HAIR CUT
  { id: 42, category: "haircut", name: "One Length", price: "₹100" },
  { id: 43, category: "haircut", name: "U/V Shape", price: "₹120" },
  { id: 44, category: "haircut", name: "Split End", price: "₹150" },
  { id: 45, category: "haircut", name: "Forward Graduation", price: "₹350" },
  { id: 46, category: "haircut", name: "Square Layer Haircut", price: "₹500" },
  { id: 47, category: "haircut", name: "Natural Inversion", price: "₹500" },
  { id: 48, category: "haircut", name: "Inversion", price: "₹650" },

  // HAIR SERVICES
  { id: 49, category: "hair", name: "Shampoo and Conditioner", price: "₹200" },
  { id: 50, category: "hair", name: "Deep Conditioning", price: "₹450" },
  { id: 51, category: "hair", name: "Blow Dry", price: "₹250" },
  { id: 52, category: "hair", name: "Straight SPA", price: "₹650 onwards" },
  { id: 53, category: "hair", name: "Local SPA", price: "₹1,200 onwards" },
  { id: 54, category: "hair", name: "Korean SPA", price: "₹1,500 onwards" },
  { id: 55, category: "hair", name: "Protein SPA", price: "₹1,500 onwards" },
  { id: 56, category: "hair", name: "Matrix SPA", price: "₹1,200 onwards" },
  { id: 57, category: "hair", name: "Silk Therapy SPA", price: "₹2,000 onwards" },
  { id: 58, category: "hair", name: "Anti Hair Fall Treatment", price: "₹1,500" },
  { id: 59, category: "hair", name: "Anti Dandruff Treatment", price: "₹1,500" },
  { id: 60, category: "hair", name: "Smoothing", price: "₹4,500" },
  { id: 61, category: "hair", name: "Keratin", price: "₹3,500" },
  { id: 62, category: "hair", name: "Botox Treatment", price: "₹4,000" },
  { id: 63, category: "hair", name: "Global Colour", price: "₹2,000" },
  { id: 64, category: "hair", name: "Root Touch Up", price: "₹500 - ₹800" },
  { id: 65, category: "hair", name: "Rebonding", price: "₹3,500" },
  { id: 66, category: "hair", name: "Highlight Per Streaks", price: "₹250" },
  { id: 67, category: "hair", name: "Global Highlights", price: "₹3,500 onwards" },
  { id: 68, category: "hair", name: "Hair Styling", price: "₹500" },
  { id: 69, category: "hair", name: "Hot Oil Massage", price: "₹450" },

  // HYDRA
  { id: 70, category: "hydra", name: "Basic Hydra", price: "₹1,500" },
  { id: 71, category: "hydra", name: "Premium Hydra", price: "₹2,000" },
];
