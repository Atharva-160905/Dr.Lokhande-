/**
 * Centralized Clinic Configuration
 * 
 * Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic
 * Sinhagad Road, Pune, Maharashtra, India
 * 
 * NOTE FOR CLINIC / DOCTORS:
 * All contact details, timings, qualifications, and procedure offerings
 * can be updated in this single configuration file.
 */

export interface DoctorInfo {
  id: string;
  name: string;
  slug: string;
  title: string;
  specialtyName: string;
  specialtySlug: string;
  department: "dermatology" | "orthopaedics";
  qualifications: string[];
  designation: string;
  image: string;
  imageAlt: string;
  shortBio: string;
  fullBio: string[];
  areasOfExpertise: string[];
  conditionsTreated: string[];
  procedures: string[];
  whatsAppMessage: string;
}

export interface SpecialtyInfo {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  themeColor: "skin" | "ortho" | "clinic";
  leadDoctor: {
    name: string;
    title: string;
    slug: string;
  };
  summary: string;
  detailedOverview: string;
  image: string;
  imageAlt: string;
  categories: {
    title: string;
    description: string;
    items: string[];
  }[];
  whatsAppMessage: string;
}

export const clinicConfig = {
  name: "Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic",
  shortName: "Dr. Lokhande’s Clinic",
  tagline: "Specialist Care for Skin, Hair, Bones & Joints",
  description:
    "Specialist medical consultation in Dermatology, Trichology, Orthopaedic Surgery, Arthroscopy, and Joint Care by Dr. Rutuja Lokhande and Dr. Vijayanand Lokhande in Sinhagad Road, Pune.",
  
  // Temporary demo contact info (clearly labeled for easy replacement before production)
  address: {
    street: "Third Floor, Office 305, Monte Rosa",
    landmark: "Hingne Khurd, Sinhagad Road",
    area: "Sinhagad Road",
    city: "Pune",
    state: "Maharashtra",
    postalCode: "411051",
    country: "India",
    fullAddress: "Third Floor, Office 305, Monte Rosa, Hingne Khurd, Sinhagad Road, Pune 411051, Maharashtra, India",
    // Note: Coordinates can be linked to exact Google Maps place link
    mapsUrl: "https://maps.google.com/?q=Sinhagad+Road+Pune+411051",
    embedMapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.0537443152206!2d73.82424577595393!3d18.48119007038144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf9d24ff95b9%3A0x6b9d8800b73c988a!2sSinhgad%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  },

  contact: {
    phoneDisplay: "+91 90757 93361",
    phoneCallable: "+919075793361",
    whatsappNumber: "919075793361",
    whatsappDisplay: "+91 90757 93361",
    email: "contact@drlokhandeclinic.com", // placeholder
  },

  timings: {
    days: "Monday – Saturday",
    morning: "9:00 AM – 1:00 PM",
    evening: "5:00 PM – 8:00 PM",
    sunday: "Closed / By Prior Appointment",
    summary: "Mon – Sat: 9:00 AM – 1:00 PM & 5:00 PM – 8:00 PM",
  },

  defaultWhatsAppMessage:
    "Hello, I would like to enquire about booking a consultation at Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic.",

  // External verified links
  externalLinks: {
    googleReviews: "https://maps.google.com/?q=Dr+Lokhande+Skin+and+Orthopaedic+Clinic+Sinhagad+Road+Pune",
    practoProfile: "https://www.practo.com/pune/clinic/dr-lokhande-s-clinic-sinhagad-road",
  },

  doctors: {
    vijayanand: {
      id: "dr-vijayanand-lokhande",
      name: "Dr. Vijayanand Lokhande",
      slug: "dr-vijayanand-lokhande",
      title: "Consultant Orthopedic Surgeon",
      specialtyName: "Orthopaedics & Joint Surgery",
      specialtySlug: "orthopaedics",
      department: "orthopaedics",
      qualifications: [
        "MBBS",
        "MS Orthopaedics",
        "DNB",
        "FASM",
        "FJRS",
        "SICOT Fellow",
        "AO Trauma Fellow",
      ],
      designation: "Consultant Orthopaedic & Joint Replacement Surgeon",
      image: "/images/doctors/dr-vijayanand.jpg",
      imageAlt: "Dr. Vijayanand Lokhande - Consultant Orthopedic Surgeon",
      shortBio:
        "Specialist orthopaedic surgeon focusing on joint preservation, arthroscopy, joint replacement, sports injury management, fracture care, and musculoskeletal rehabilitation.",
      fullBio: [
        "Dr. Vijayanand Lokhande is a Consultant Orthopaedic Surgeon serving patients in Sinhagad Road, Pune. His clinical practice encompasses complex fracture management, joint preservation, knee and hip replacement, arthroscopic interventions, and sports injury recovery.",
        "With advanced fellowship training including FASM, FJRS, SICOT Fellowship, and AO Trauma Fellowship, he emphasizes accurate clinical assessment, evidence-guided decision making, and tailored surgical or conservative rehabilitation pathways.",
        "His approach prioritizes joint longevity, pain relief, and restoring functional mobility for active daily living and athletic performance.",
      ],
      areasOfExpertise: [
        "Knee & Hip Joint Preservation",
        "Primary & Revision Joint Replacement",
        "Arthroscopic Surgery (Knee & Shoulder)",
        "ACL, PCL & Meniscal Injury Management",
        "Complex Fracture & Trauma Care",
        "Sports Injury Rehabilitation",
        "Degenerative Joint & Arthritis Management",
        "Spine & Musculoskeletal Pain Evaluation",
      ],
      conditionsTreated: [
        "Osteoarthritis of Knee & Hip",
        "Ligament Tears (ACL, PCL, MCL)",
        "Meniscal Tears & Cartilage Damage",
        "Shoulder Impingement & Rotator Cuff Disorders",
        "Acute & Complex Bone Fractures",
        "Dislocations & Joint Sprains",
        "Tendinitis, Bursitis & Synovitis",
        "Chronic Back Pain & Sciatica",
        "Neck Stiffness & Cervical Spondylosis",
        "Post-traumatic Joint Stiffness",
      ],
      procedures: [
        "Total & Partial Knee Replacement",
        "Total Hip Replacement",
        "Knee Arthroscopy & ACL Reconstruction",
        "Meniscal Repair & Debridement",
        "Fracture Reduction & Internal Fixation",
        "Intra-articular Injections & Viscosupplementation",
        "Casting, Splinting & Orthopaedic Trauma Care",
        "Pre- & Post-Operative Rehabilitation Coordination",
      ],
      whatsAppMessage:
        "Hello, I would like to schedule an orthopaedic consultation with Dr. Vijayanand Lokhande.",
    } as DoctorInfo,

    rutuja: {
      id: "dr-rutuja-lokhande",
      name: "Dr. Rutuja Lokhande",
      slug: "dr-rutuja-lokhande",
      title: "Consultant Dermatologist & Trichologist",
      specialtyName: "Dermatology, Trichology & Cosmetology",
      specialtySlug: "dermatology",
      department: "dermatology",
      qualifications: ["MBBS", "DDVL", "DNB"],
      designation: "Consultant Dermatologist, Trichologist & Cosmetologist",
      image: "/images/doctors/dr-rutuja.jpg",
      imageAlt: "Dr. Rutuja Lokhande - Consultant Dermatologist & Trichologist",
      shortBio:
        "Specialist dermatologist and trichologist providing medical and procedural care for clinical dermatology, hair loss, scalp disorders, acne, pigmentation, and aesthetic dermatology.",
      fullBio: [
        "Dr. Rutuja Lokhande is a Consultant Dermatologist & Trichologist with qualifications in MBBS, DDVL, and DNB, practicing in Sinhagad Road, Pune.",
        "Her clinical focus spans clinical dermatology for acute and chronic skin disorders, trichology for pattern hair loss and scalp conditions, pediatric skin concerns, and evidence-based aesthetic procedures.",
        "She believes in structured medical diagnosis, ethical treatment planning without unnecessary interventions, and educating patients on healthy skincare and scalp management routines.",
      ],
      areasOfExpertise: [
        "Clinical Dermatology & Skin Diseases",
        "Trichology & Hair Loss Diagnostics",
        "Acne & Acne Scar Management",
        "Pigmentation & Melasma Treatment",
        "Eczema, Psoriasis & Allergy Management",
        "Medical Chemical Peels",
        "Dermatologic Minor Procedures",
        "Pediatric & Geriatric Dermatology",
      ],
      conditionsTreated: [
        "Acne Vulgaris & Post-Acne Scarring",
        "Melasma, Hyperpigmentation & Sun Damage",
        "Telogen Effluvium & Androgenetic Alopecia (Hair Fall)",
        "Alopecia Areata & Scalp Infections / Dandruff",
        "Atopic Dermatitis & Contact Eczema",
        "Psoriasis & Lichen Planus",
        "Fungal, Bacterial & Viral Skin Infections",
        "Urticaria & Skin Allergies",
        "Warts, Moles, Skin Tags & Corns",
        "Nail Dystrophy & Ingrowing Toenails",
      ],
      procedures: [
        "Medical Chemical Peels (Salicylic, Glycolic, Mandelic)",
        "Radiofrequency / Electrocautery for Skin Tags & Warts",
        "Comedone Extraction & Acne Treatment Protocols",
        "Intralesional Injections (Alopecia / Keloids)",
        "Scalp PRP / Growth Factor Support Therapies",
        "Hydrafacial & Medi-Facial Protocols",
        "Micro-needling for Acne Scars & Skin Texture",
        "Cryotherapy & Minor Dermatological Surgeries",
      ],
      whatsAppMessage:
        "Hello, I would like to schedule a dermatology consultation with Dr. Rutuja Lokhande.",
    } as DoctorInfo,
  },

  specialties: {
    dermatology: {
      id: "dermatology",
      name: "Dermatology & Trichology",
      slug: "dermatology",
      tagline: "Medical diagnosis and procedural care for skin, hair, and scalp concerns.",
      themeColor: "skin",
      leadDoctor: {
        name: "Dr. Rutuja Lokhande",
        title: "Consultant Dermatologist & Trichologist (MBBS, DDVL, DNB)",
        slug: "dr-rutuja-lokhande",
      },
      summary:
        "Comprehensive clinical dermatology, hair loss diagnostics, chronic skin condition management, and dermatological procedures in Sinhagad Road, Pune.",
      detailedOverview:
        "Our dermatology department offers specialized care for acute and chronic skin conditions, scalp and hair disorders, and safe procedural treatments. Led by Dr. Rutuja Lokhande, treatment plans are tailored to individual medical history, skin type, and lifestyle factors.",
      image: "/images/specialties/dermatology.jpg",
      imageAlt: "Dermatological clinical examination and skin consultation",
      categories: [
        {
          title: "Skin Diseases & Clinical Dermatology",
          description: "Accurate diagnosis and evidence-based medical treatment for common and complex dermatological conditions.",
          items: [
            "Acne vulgaris, cystic acne, and post-acne pigmentation",
            "Melasma, sun damage, and uneven pigmentation",
            "Eczema, atopic dermatitis, and contact dermatitis",
            "Psoriasis, lichen planus, and chronic scaly rashes",
            "Bacterial, viral, and fungal skin infections (Tinea / Ringworm)",
            "Urticaria (hives), skin allergies, and drug rashes",
            "Vitiligo and depigmentation disorders",
          ],
        },
        {
          title: "Hair Loss & Scalp Health (Trichology)",
          description: "Targeted investigation and medical management for hair thinning, shedding, and scalp inflammation.",
          items: [
            "Pattern hair loss (Androgenetic Alopecia) in men and women",
            "Diffuse hair shedding (Telogen Effluvium)",
            "Patchy hair loss (Alopecia Areata)",
            "Chronic dandruff (Seborrheic Dermatitis) and scalp itch",
            "Scalp folliculitis and fungal scalp infections",
          ],
        },
        {
          title: "Nail Care & Minor Dermatologic Procedures",
          description: "Clinical evaluation and minor procedural interventions performed under sterile clinical standards.",
          items: [
            "Nail fungal infections and nail dystrophy management",
            "Radiofrequency removal of skin tags, warts, and DPNDs",
            "Corn and callus excision",
            "Medical chemical peeling for acne and pigmentation",
            "Intralesional therapy for keloids and hypertrophic scars",
          ],
        },
      ],
      whatsAppMessage:
        "Hello, I would like to book a dermatology consultation at Dr. Lokhande’s Clinic.",
    } as SpecialtyInfo,

    orthopaedics: {
      id: "orthopaedics",
      name: "Orthopaedic Surgery & Joint Care",
      slug: "orthopaedics",
      tagline: "Specialist diagnosis, surgical expertise, and rehabilitation for bone and joint health.",
      themeColor: "ortho",
      leadDoctor: {
        name: "Dr. Vijayanand Lokhande",
        title: "Consultant Orthopedic Surgeon (MBBS, MS Ortho, DNB, FASM, FJRS)",
        slug: "dr-vijayanand-lokhande",
      },
      summary:
        "Specialist management of knee and hip arthritis, arthroscopic ligament reconstruction, trauma care, fracture management, and sports injury recovery.",
      detailedOverview:
        "The orthopaedics department provides structured clinical evaluation, advanced imaging assessment, and clear treatment pathways for bone, joint, and ligament disorders. Dr. Vijayanand Lokhande brings fellowship-trained expertise in joint replacement, sports arthroscopy, and trauma surgery.",
      image: "/images/specialties/orthopaedics.jpg",
      imageAlt: "Orthopaedic joint consultation and knee examination",
      categories: [
        {
          title: "Joint Replacement & Arthritis Care",
          description: "Preservation strategies and modern surgical replacement for degenerated joints.",
          items: [
            "Knee osteoarthritis evaluation and staged management",
            "Total Knee Replacement (TKR) and Partial Knee Replacement",
            "Total Hip Replacement (THR) for avascular necrosis and arthritis",
            "Joint preservation therapies and viscosupplementation injections",
            "Post-surgical recovery monitoring and mobility rehabilitation",
          ],
        },
        {
          title: "Sports Medicine & Arthroscopy",
          description: "Minimally invasive keyhole surgery and structured return-to-activity protocols.",
          items: [
            "ACL (Anterior Cruciate Ligament) tear reconstruction",
            "PCL and multi-ligament knee injury management",
            "Meniscus tear repair and partial meniscectomy",
            "Shoulder instability, dislocation, and rotator cuff care",
            "Sports-related sprains, strains, and tendinopathies",
          ],
        },
        {
          title: "Trauma, Fractures & Musculoskeletal Pain",
          description: "Prompt diagnosis and precise management for acute bone injuries and chronic pain.",
          items: [
            "Upper and lower limb fracture reduction and fixation",
            "Post-traumatic bone healing evaluation and cast application",
            "Chronic lower back pain, sciatica, and lumbar disc evaluation",
            "Neck stiffness and cervical spine musculoskeletal strain",
            "Tendonitis, bursitis, and heel pain (Plantar Fasciitis)",
          ],
        },
      ],
      whatsAppMessage:
        "Hello, I would like to book an orthopaedic consultation at Dr. Lokhande’s Clinic.",
    } as SpecialtyInfo,

    physiotherapy: {
      id: "physiotherapy",
      name: "Physiotherapy & Rehabilitation",
      slug: "physiotherapy",
      tagline: "Restoring mobility, strength, and functional movement through guided physical rehabilitation.",
      themeColor: "clinic",
      leadDoctor: {
        name: "Dr. Lokhande’s Clinic Medical Team",
        title: "Integrated Musculoskeletal Rehabilitation Support",
        slug: "dr-vijayanand-lokhande",
      },
      summary:
        "Physiotherapy and targeted rehabilitation support integrated with orthopaedic care for post-operative recovery, injury healing, and mobility improvement.",
      detailedOverview:
        "Physical rehabilitation plays an essential role in recovery following fractures, joint replacements, sports injuries, and chronic musculoskeletal pain. Our clinic coordinates structured rehabilitation pathways to ensure safe, progressive return to full movement.",
      image: "/images/specialties/physiotherapy.jpg",
      imageAlt: "Guided physical rehabilitation and mobility exercise",
      categories: [
        {
          title: "Post-Surgical Rehabilitation",
          description: "Structured recovery protocols following joint replacement and arthroscopic procedures.",
          items: [
            "Phase-wise mobility protocols after knee and hip replacement",
            "Range-of-motion recovery after ACL and meniscus surgery",
            "Gait training, balance re-education, and safe weight bearing",
            "Preventative swelling and stiffness control",
          ],
        },
        {
          title: "Orthopaedic Injury & Pain Management",
          description: "Targeted exercise therapy to alleviate chronic pain and strengthen supporting musculature.",
          items: [
            "Core stability and postural reconditioning for back pain",
            "Cervical spine mobilization and scapular stabilization",
            "Strengthening for knee osteoarthritis and patellar tracking",
            "Rotator cuff strengthening and frozen shoulder mobilization",
          ],
        },
        {
          title: "Sports & Functional Recovery",
          description: "Conditioning regimens designed to safely return individuals to sports and active daily routines.",
          items: [
            "Agility, proprioception, and dynamic stability drills",
            "Graduated return-to-sport testing and injury prevention guidance",
            "Soft tissue mobilization and flexibility training",
          ],
        },
      ],
      whatsAppMessage:
        "Hello, I would like to enquire about physiotherapy and rehabilitation support at Dr. Lokhande’s Clinic.",
    } as SpecialtyInfo,
  },

  seo: {
    siteUrl: "https://drlokhandeclinic.com", // Base URL for metadata and canonicals
    defaultTitle: "Dr. Lokhande’s Skin & Orthopaedic Speciality Clinic | Sinhagad Road, Pune",
    titleTemplate: "%s | Dr. Lokhande’s Speciality Clinic Pune",
    description:
      "Consult experienced specialists in Dermatology (Dr. Rutuja Lokhande) and Orthopaedic Surgery (Dr. Vijayanand Lokhande) in Sinhagad Road, Pune. Specialist care for skin, hair, bones, and joints.",
    keywords: [
      "dermatologist in Sinhagad Road",
      "skin doctor in Sinhagad Road Pune",
      "orthopedic doctor in Sinhagad Road",
      "orthopedic surgeon in Pune",
      "knee replacement surgeon Sinhagad Road",
      "skin clinic Sinhagad Road",
      "hair loss treatment Sinhagad Road Pune",
      "Dr Rutuja Lokhande dermatologist",
      "Dr Vijayanand Lokhande orthopaedic surgeon",
      "joint replacement clinic Sinhagad Road Pune",
      "Hingne Khurd clinic Pune",
    ],
  },
};

/**
 * Helper to generate pre-filled WhatsApp link
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const message = customMessage || clinicConfig.defaultWhatsAppMessage;
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${clinicConfig.contact.whatsappNumber}?text=${encoded}`;
}
