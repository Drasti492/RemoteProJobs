// Sample job data (30 Kenyan-specific tasks, 5 per page, 6 pages total)
// This array contains job listings tailored for Kenyan professionals, focusing on remote and freelance opportunities
const jobsData = [
    {
        id: 1,
        title: "Design Simple Logo",
        company: "Nairobi Prints",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 2,000",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Canva", "Graphic Design", "Branding"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Design simple logos for small businesses like matatu companies or local shops in Nairobi using Canva.",
        responsibilities: [
            "Create a logo based on client brief (e.g., for a Nairobi salon)",
            "Use Canva templates to design in 1–2 hours",
            "Deliver PNG/JPG files via email or WhatsApp"
        ],
        requirements: [
            "Basic computer skills (learned at university)",
            "Access to free Canva account",
            "Ability to follow simple design briefs",
            "No prior design experience needed"
        ],
        benefits: [
            "Flexible hours (work evenings)",
            "M-Pesa payments",
            "Build portfolio for global clients",
            "Work from home or cyber café"
        ]
    },
    {
        id: 2,
        title: "Create Social Media Graphics",
        company: "Mombasa Digital",
        location: "Mombasa, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1,000",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Canva", "Social Media", "Marketing"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Design Instagram/Facebook posts for coastal businesses like hotels or tour agencies using Canva.",
        responsibilities: [
            "Design 1–2 social media posts with text/images",
            "Follow client’s branding (e.g., Mombasa colors)",
            "Deliver files via WhatsApp or email"
        ],
        requirements: [
            "Smartphone/laptop with internet",
            "Free Canva account",
            "Basic creativity from uni art classes"
        ],
        benefits: [
            "Quick payments via M-Pesa",
            "Work from anywhere in Kenya",
            "Learn social media marketing"
        ]
    },
    {
        id: 3,
        title: "Design Event Flyers",
        company: "Kisumu Events",
        location: "Kisumu, Kenya",
        type: "Freelance",
        salary: "KES 400 - 1,500",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Canva", "Events", "Graphic Design"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Create flyers for local events like church gatherings or harambees in Kisumu using Canva templates.",
        responsibilities: [
            "Design 1 flyer with event details",
            "Use vibrant Kenyan designs",
            "Deliver in 1 hour via email"
        ],
        requirements: [
            "Basic computer skills",
            "Free Canva account",
            "Ability to read event briefs"
        ],
        benefits: [
            "M-Pesa payments",
            "Support local community events",
            "Flexible hours"
        ]
    },
    {
        id: 4,
        title: "Basic Photo Editing",
        company: "Eldoret Media",
        location: "Eldoret, Kenya",
        type: "Freelance",
        salary: "KES 300 - 800",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["GIMP", "Photo Editing", "E-commerce"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Edit photos for local e-commerce shops like those on Kilimall, cropping or adding filters using GIMP.",
        responsibilities: [
            "Crop/resize 1–2 photos",
            "Apply basic filters (e.g., brighten)",
            "Deliver via WhatsApp"
        ],
        requirements: [
            "Free GIMP software",
            "Basic computer skills",
            "Smartphone/laptop with internet"
        ],
        benefits: [
            "Quick tasks (20 min)",
            "M-Pesa payments",
            "Learn photo editing skills"
        ]
    },
    {
        id: 5,
        title: "Create Poster for Market",
        company: "Nakuru Traders",
        location: "Nakuru, Kenya",
        type: "Freelance",
        salary: "KES 400 - 1,500",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Canva", "Marketing", "Local Business"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Design posters for Nakuru market stalls or small businesses to advertise products like farm produce.",
        responsibilities: [
            "Create 1 poster with product details",
            "Use Canva templates with Kenyan designs",
            "Deliver via email"
        ],
        requirements: [
            "Free Canva account",
            "Basic creativity",
            "Internet access"
        ],
        benefits: [
            "Support local traders",
            "M-Pesa payments",
            "Work from home"
        ]
    },
    {
        id: 6,
        title: "Solve Maths Calculations",
        company: "Nairobi Tutors",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1,500",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Math", "Tutoring", "KCSE"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Solve KCSE-level math problems (algebra, geometry) for online tutoring platforms.",
        responsibilities: [
            "Solve 5–10 math questions",
            "Show workings clearly",
            "Deliver via Google Docs"
        ],
        requirements: [
            "KCSE math knowledge",
            "Basic calculator",
            "Internet access"
        ],
        benefits: [
            "M-Pesa payments",
            "Flexible hours",
            "Help students"
        ]
    },
    {
        id: 7,
        title: "Geography Research Summary",
        company: "Kenyatta Uni Press",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 500 - 2,000",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Geography", "Research", "Writing"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Write 200–300 word summaries on Kenyan geography topics like Rift Valley or coastal erosion.",
        responsibilities: [
            "Research topic using Google",
            "Write 200-word summary",
            "Deliver via email"
        ],
        requirements: [
            "Basic research skills",
            "Google Docs access",
            "English/Swahili fluency"
        ],
        benefits: [
            "M-Pesa payments",
            "Learn Kenyan geography",
            "Flexible hours"
        ]
    },
    {
        id: 8,
        title: "Answer Short Geography Questions",
        company: "Mombasa Edu Hub",
        location: "Mombasa, Kenya",
        type: "Freelance",
        salary: "KES 300 - 800",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Geography", "Quizzes", "KCSE"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Answer 5–10 short geography questions (e.g., ‘Name Kenya’s lakes’).",
        responsibilities: [
            "Answer 5–10 questions",
            "Use simple sentences",
            "Deliver via WhatsApp"
        ],
        requirements: [
            "KCSE geography knowledge",
            "Internet access",
            "Smartphone/laptop"
        ],
        benefits: [
            "Quick tasks",
            "M-Pesa payments",
            "Support education"
        ]
    },
    {
        id: 9,
        title: "Summarize News Articles",
        company: "Daily Nation Freelance",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 400 - 1,500",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Writing", "Research", "News"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Summarize Kenyan news articles (e.g., from Nation or Standard) in 100–200 words.",
        responsibilities: [
            "Read 1 article",
            "Write 100-word summary",
            "Deliver via Google Docs"
        ],
        requirements: [
            "English fluency",
            "Access to news sites",
            "Basic writing skills"
        ],
        benefits: [
            "M-Pesa payments",
            "Stay updated on news",
            "Flexible hours"
        ]
    },
    {
        id: 10,
        title: "Create Study Notes",
        company: "Kisumu Tutors",
        location: "Kisumu, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1,200",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Education", "Notes", "KCSE"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Create bullet-point notes for KCSE subjects like history or biology.",
        responsibilities: [
            "Summarize 1 chapter",
            "Write 10–20 bullet points",
            "Deliver via email"
        ],
        requirements: [
            "KCSE knowledge",
            "Google Docs access",
            "Basic research skills"
        ],
        benefits: [
            "M-Pesa payments",
            "Help students",
            "Work from home"
        ]
    },
    {
        id: 11,
        title: "Write Short Blog Posts",
        company: "Safaricom Bloggers",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 500 - 2,000",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Writing", "Blogging", "Tourism"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Write 300-word blog posts on Kenyan topics like tourism or tech for local blogs.",
        responsibilities: [
            "Write 1 post on given topic",
            "Use simple English",
            "Deliver via Google Docs"
        ],
        requirements: [
            "English fluency",
            "Internet access",
            "Basic writing skills"
        ],
        benefits: [
            "M-Pesa payments",
            "Build writing portfolio",
            "Flexible hours"
        ]
    },
    {
        id: 12,
        title: "Product Descriptions",
        company: "Jumia Kenya",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 800",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Writing", "E-commerce", "Marketing"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Write 50–100 word descriptions for products on Kenyan e-commerce platforms like Jumia.",
        responsibilities: [
            "Write 1 description",
            "Highlight product features",
            "Deliver via email"
        ],
        requirements: [
            "English fluency",
            "Basic research skills",
            "Internet access"
        ],
        benefits: [
            "M-Pesa payments",
            "Quick tasks",
            "Learn e-commerce"
        ]
    },
    {
        id: 13,
        title: "Write Social Media Captions",
        company: "Mombasa Marketing",
        location: "Mombasa, Kenya",
        type: "Freelance",
        salary: "KES 300 - 700",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Social Media", "Writing", "Marketing"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Write 10–20 short captions for Kenyan businesses’ social media posts.",
        responsibilities: [
            "Write 10 captions",
            "Use engaging language",
            "Deliver via WhatsApp"
        ],
        requirements: [
            "Social media familiarity",
            "English/Swahili fluency",
            "Smartphone access"
        ],
        benefits: [
            "M-Pesa payments",
            "Quick tasks",
            "Learn marketing"
        ]
    },
    {
        id: 14,
        title: "Transcribe Short Audio",
        company: "Nairobi Podcasts",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1,200",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Transcription", "Audio", "Swahili"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Transcribe 5-min Kenyan podcast clips in English or Swahili.",
        responsibilities: [
            "Listen to 5-min audio",
            "Type transcript",
            "Deliver via Google Docs"
        ],
        requirements: [
            "Good listening skills",
            "Free Otter.ai account",
            "Internet access"
        ],
        benefits: [
            "M-Pesa payments",
            "Flexible hours",
            "Learn transcription"
        ]
    },
    {
        id: 15,
        title: "Rewrite Sentences",
        company: "Kisumu Writers",
        location: "Kisumu, Kenya",
        type: "Freelance",
        salary: "KES 300 - 800",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Writing", "Editing", "English"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Paraphrase 10–20 sentences for Kenyan educational content.",
        responsibilities: [
            "Rewrite 10 sentences",
            "Keep meaning clear",
            "Deliver via email"
        ],
        requirements: [
            "English fluency",
            "Basic writing skills",
            "Internet access"
        ],
        benefits: [
            "M-Pesa payments",
            "Quick tasks",
            "Improve writing skills"
        ]
    },
    {
        id: 16,
        title: "Data Entry",
        company: "Nairobi Data Solutions",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 800",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Data Entry", "Excel", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Enter data like customer names or sales into spreadsheets for Kenyan businesses.",
        responsibilities: [
            "Input 20–50 data points",
            "Use Google Sheets",
            "Deliver via email"
        ],
        requirements: [
            "Basic Excel skills",
            "Internet access",
            "Smartphone/laptop"
        ],
        benefits: [
            "M-Pesa payments",
            "Flexible hours",
            "Learn data skills"
        ]
    },
    {
        id: 17,
        title: "Organize Emails",
        company: "Mombasa Admin",
        location: "Mombasa, Kenya",
        type: "Freelance",
        salary: "KES 300 - 700",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Email", "Admin", "Organization"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Sort and label 20–50 emails for Kenyan startups using Gmail.",
        responsibilities: [
            "Sort 20 emails",
            "Label by category",
            "Report via WhatsApp"
        ],
        requirements: [
            "Gmail familiarity",
            "Basic organization skills",
            "Internet access"
        ],
        benefits: [
            "M-Pesa payments",
            "Quick tasks",
            "Learn admin skills"
        ]
    },
    {
        id: 18,
        title: "Fill Online Forms",
        company: "Eldoret Services",
        location: "Eldoret, Kenya",
        type: "Freelance",
        salary: "KES 300 - 600",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Forms", "Admin", "Data"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Fill 5–10 online forms for Kenyan businesses like loan applications.",
        responsibilities: [
            "Complete 5 forms",
            "Enter accurate data",
            "Deliver via email"
        ],
        requirements: [
            "Basic computer skills",
            "Internet access",
            "Attention to detail"
        ],
        benefits: [
            "M-Pesa payments",
            "Quick tasks",
            "Support local businesses"
        ]
    },
    {
        id: 19,
        title: "Schedule Social Media Posts",
        company: "Nakuru Digital",
        location: "Nakuru, Kenya",
        type: "Freelance",
        salary: "KES 300 - 700",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Social Media", "Scheduling", "Marketing"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Queue 5–10 social media posts for Kenyan brands using Buffer.",
        responsibilities: [
            "Schedule 5 posts",
            "Use client content",
            "Confirm via WhatsApp"
        ],
        requirements: [
            "Social media familiarity",
            "Free Buffer account",
            "Internet access"
        ],
        benefits: [
            "M-Pesa payments",
            "Learn marketing",
            "Flexible hours"
        ]
    },
    {
        id: 20,
        title: "List Contacts",
        company: "Nairobi Networks",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1,000",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Research", "Contacts", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Find 10–20 emails or phone numbers for Kenyan businesses online.",
        responsibilities: [
            "Research 10 contacts",
            "List in Google Sheets",
            "Deliver via email"
        ],
        requirements: [
            "Basic Google skills",
            "Internet access",
            "Smartphone/laptop"
        ],
        benefits: [
            "M-Pesa payments",
            "Quick tasks",
            "Learn research skills"
        ]
    },
    {
        id: 21,
        title: "Upload Blog Posts",
        company: "Kenya Bloggers",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1,200",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["WordPress", "Website", "Content"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Upload text/images to WordPress for Kenyan blogs like travel or tech sites.",
        responsibilities: [
            "Upload 1 blog post",
            "Add images and format",
            "Confirm via email"
        ],
        requirements: [
            "Basic computer skills",
            "Internet access",
            "Free WordPress trial"
        ],
        benefits: [
            "M-Pesa payments",
            "Learn website skills",
            "Flexible hours"
        ]
    },
    {
        id: 22,
        title: "Basic Website Testing",
        company: "Mombasa Tech",
        location: "Mombasa, Kenya",
        type: "Freelance",
        salary: "KES 300 - 800",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Website", "Testing", "QA"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Test Kenyan websites for broken links or errors by clicking through pages.",
        responsibilities: [
            "Test 5 pages",
            "Report issues",
            "Deliver via WhatsApp"
        ],
        requirements: [
            "Basic browsing skills",
            "Internet access",
            "Smartphone/laptop"
        ],
        benefits: [
            "M-Pesa payments",
            "Quick tasks",
            "Learn QA skills"
        ]
    },
    {
        id: 23,
        title: "Add Product Listings",
        company: "Kilimall Freelance",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1,000",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["E-commerce", "Website", "Data"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Add 5–10 products to Kenyan e-commerce sites like Kilimall.",
        responsibilities: [
            "Enter 5 product details",
            "Upload images",
            "Deliver via email"
        ],
        requirements: [
            "Basic computer skills",
            "Internet access",
            "Attention to detail"
        ],
        benefits: [
            "M-Pesa payments",
            "Support e-commerce",
            "Flexible hours"
        ]
    },
    {
        id: 24,
        title: "Update Website Text",
        company: "Eldoret Web",
        location: "Eldoret, Kenya",
        type: "Freelance",
        salary: "KES 300 - 800",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Website", "Editing", "Content"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Edit 100–200 words on Kenyan websites like NGO homepages.",
        responsibilities: [
            "Edit 1 section of text",
            "Ensure clarity",
            "Confirm via email"
        ],
        requirements: [
            "English fluency",
            "Internet access",
            "Basic editing skills"
        ],
        benefits: [
            "M-Pesa payments",
            "Quick tasks",
            "Learn web editing"
        ]
    },
    {
        id: 25,
        title: "Social Media Page Setup",
        company: "Nakuru Social",
        location: "Nakuru, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1,000",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Social Media", "Website", "Marketing"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Set up basic Facebook/Instagram pages for Kenyan businesses.",
        responsibilities: [
            "Create 1 page",
            "Add bio and logo",
            "Deliver via WhatsApp"
        ],
        requirements: [
            "Social media familiarity",
            "Internet access",
            "Smartphone/laptop"
        ],
        benefits: [
            "M-Pesa payments",
            "Learn marketing",
            "Flexible hours"
        ]
    },
    {
        id: 26,
        title: "Complete Online Surveys",
        company: "Kenya Surveys",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 500",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Surveys", "Microtasks", "Feedback"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Complete 5–10 short surveys on Kenyan products or services.",
        responsibilities: [
            "Answer 5 questions",
            "Provide honest feedback",
            "Submit via platform"
        ],
        requirements: [
            "Smartphone access",
            "Internet connection",
            "Basic English"
        ],
        benefits: [
            "M-Pesa payments",
            "Quick tasks",
            "No skills needed"
        ]
    },
    {
        id: 27,
        title: "Tag Images for AI",
        company: "Mombasa AI Hub",
        location: "Mombasa, Kenya",
        type: "Freelance",
        salary: "KES 300 - 700",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["AI", "Images", "Microtasks"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Label 20–50 images (e.g., ‘maize’ or ‘matatu’) for AI training.",
        responsibilities: [
            "Tag 20 images",
            "Follow guidelines",
            "Deliver via platform"
        ],
        requirements: [
            "Smartphone/laptop",
            "Internet access",
            "Attention to detail"
        ],
        benefits: [
            "M-Pesa payments",
            "Quick tasks",
            "Learn AI basics"
        ]
    },
    {
        id: 28,
        title: "Review Mobile Apps",
        company: "Nairobi Tech Reviews",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 800",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Apps", "Reviews", "Testing"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Write 50-word reviews for Kenyan apps after testing.",
        responsibilities: [
            "Test 1 app",
            "Write 50-word review",
            "Submit via email"
        ],
        requirements: [
            "Smartphone access",
            "Basic English",
            "Internet connection"
        ],
        benefits: [
            "M-Pesa payments",
            "Quick tasks",
            "Discover new apps"
        ]
    },
    {
        id: 29,
        title: "Categorize Market Data",
        company: "Kisumu Analytics",
        location: "Kisumu, Kenya",
        type: "Freelance",
        salary: "KES 300 - 700",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Data", "Microtasks", "Organization"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Sort 20–50 items (e.g., farm products) into categories for Kenyan markets.",
        responsibilities: [
            "Sort 20 items",
            "Use Google Sheets",
            "Deliver via email"
        ],
        requirements: [
            "Basic Excel skills",
            "Internet access",
            "Smartphone/laptop"
        ],
        benefits: [
            "M-Pesa payments",
            "Quick tasks",
            "Learn data skills"
        ]
    },
    {
        id: 30,
        title: "Add Video Subtitles",
        company: "Eldoret Media Hub",
        location: "Eldoret, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1,200",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Subtitles", "Video", "Swahili"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Add subtitles to 2–5 min Kenyan videos in English/Swahili.",
        responsibilities: [
            "Add subtitles to 1 video",
            "Use free tools",
            "Deliver via email"
        ],
        requirements: [
            "English/Swahili fluency",
            "Free Aegisub software",
            "Internet access"
        ],
        benefits: [
            "M-Pesa payments",
            "Flexible hours",
            "Learn video editing"
        ]
    }
];

// DOM Elements for job listings and UI components
const DOM = {
    jobsList: document.getElementById('jobs-list'),
    jobModal: document.getElementById('job-modal'),
    modalJobContent: document.getElementById('modal-job-content'),
    loginModal: document.getElementById('login-modal'),
    closeButtons: document.querySelectorAll('.close'),
    salaryRange: document.getElementById('salary-range'),
    salaryValue: document.getElementById('salary-value'),
    jobSearch: document.getElementById('job-search'),
    locationSearch: document.getElementById('location-search'),
    searchBtn: document.querySelector('.search-btn'),
    loginBtn: document.querySelector('.btn-outline'),
    postJobBtn: document.querySelector('.btn-primary'),
    sortSelect: document.getElementById('sort-by'),
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),
    paginationContainer: document.createElement('div')
};

// Initialize pagination container
DOM.paginationContainer.className = 'pagination';
if (DOM.jobsList) DOM.jobsList.after(DOM.paginationContainer);

// Pagination settings
const jobsPerPage = 5;
let currentPage = 1;
let currentFilteredJobs = [...jobsData]; // Cache filtered/sorted jobs

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    if (!DOM.jobsList) {
        console.error('Jobs list element not found');
        return;
    }
    renderJobs(getPaginatedJobs(jobsData));
    setupEventListeners();
    initRangeSlider();
    renderPagination(jobsData);
});

// Get jobs for the current page
const getPaginatedJobs = (jobs) => {
    const start = (currentPage - 1) * jobsPerPage;
    const end = start + jobsPerPage;
    return jobs.slice(start, end);
};

// Render job cards
const renderJobs = (jobs) => {
    if (!DOM.jobsList) {
        console.error('Jobs list element not found');
        return;
    }
    DOM.jobsList.innerHTML = '';
    document.getElementById('job-count').textContent = `(${currentFilteredJobs.length})`;

    if (jobs.length === 0) {
        DOM.jobsList.innerHTML = `
            <div class="no-results">
                <h3>No jobs found</h3>
                <p>Try adjusting your search criteria or filters.</p>
            </div>
        `;
        return;
    }

    jobs.forEach(job => {
        const jobCard = document.createElement('div');
        jobCard.className = 'job-card';
        jobCard.setAttribute('data-id', job.id);
        jobCard.innerHTML = `
            <img src="${job.logo || '/api/placeholder/60/60'}" alt="${job.company}" class="job-logo">
            <div class="job-info">
                <h3>${job.title}</h3>
                <div class="company-name">${job.company}</div>
                <div class="job-meta">
                    <div class="job-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${job.location}</span>
                    </div>
                    <div class="job-meta-item">
                        <i class="fas fa-briefcase"></i>
                        <span>${job.type}</span>
                    </div>
                    <div class="job-meta-item">
                        <i class="fas fa-signal"></i>
                        <span>${job.experience}</span>
                    </div>
                    <div class="job-meta-item">
                        <i class="fas fa-laptop-house"></i>
                        <span>${job.remote}</span>
                    </div>
                </div>
                <div class="job-tags">
                    ${job.tags.map(tag => `<span class="job-tag">${tag}</span>`).join('')}
                </div>
            </div>
            <div class="job-actions">
                <div class="salary">${job.salary}</div>
                <div class="job-date">${job.date}</div>
                <button class="btn btn-outline btn-sm apply-btn">Apply Now</button>
            </div>
        `;
        DOM.jobsList.appendChild(jobCard);
    });
};

// Render pagination buttons
const renderPagination = (filteredJobs = jobsData) => {
    currentFilteredJobs = filteredJobs;
    const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
    DOM.paginationContainer.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `pagination-btn ${i === currentPage ? 'active' : ''}`;
        btn.textContent = i;
        btn.addEventListener('click', () => {
            currentPage = i;
            document.querySelectorAll('.pagination-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderJobs(getPaginatedJobs(filteredJobs));
            window.scrollTo({ top: DOM.jobsList.offsetTop - 80, behavior: 'smooth' });
        });
        DOM.paginationContainer.appendChild(btn);
    }
};

// Initialize salary range slider
const initRangeSlider = () => {
    if (DOM.salaryRange && DOM.salaryValue) {
        DOM.salaryRange.min = 300;
        DOM.salaryRange.max = 2000;
        DOM.salaryRange.step = 100;
        DOM.salaryRange.value = 300;
        DOM.salaryValue.textContent = `KES ${parseInt(DOM.salaryRange.value).toLocaleString()}+`;

        DOM.salaryRange.addEventListener('input', () => {
            DOM.salaryValue.textContent = `KES ${parseInt(DOM.salaryRange.value).toLocaleString()}+`;
            filterJobs();
            currentPage = 1;
            renderPagination(currentFilteredJobs);
        });
    } else {
        console.warn('Salary range or value element not found');
    }
};

// Search jobs
const searchJobs = () => {
    const searchTerm = DOM.jobSearch.value.toLowerCase().trim();
    const locationTerm = DOM.locationSearch.value.toLowerCase().trim();

    const filteredJobs = jobsData.filter(job => {
        const matchesSearch =
            searchTerm === '' ||
            job.title.toLowerCase().includes(searchTerm) ||
            job.company.toLowerCase().includes(searchTerm) ||
            job.tags.some(tag => tag.toLowerCase().includes(searchTerm));

        const matchesLocation =
            locationTerm === '' ||
            job.location.toLowerCase().includes(locationTerm) ||
            (locationTerm.includes('remote') && job.remote.toLowerCase() === 'remote');

        return matchesSearch && matchesLocation;
    });

    currentPage = 1;
    renderJobs(getPaginatedJobs(filteredJobs));
    renderPagination(filteredJobs);
    document.getElementById('job-count').textContent = `(${filteredJobs.length})`;
};

// Filter jobs
const filterJobs = () => {
    const jobTypes = Array.from(document.querySelectorAll('input[name="job-type"]:checked'))
        .map(checkbox => checkbox.value.toLowerCase());
    const experiences = Array.from(document.querySelectorAll('input[name="experience"]:checked'))
        .map(checkbox => checkbox.value.toLowerCase());
    const remoteOptions = Array.from(document.querySelectorAll('input[name="remote"]:checked'))
        .map(checkbox => checkbox.value.toLowerCase());
    const minSalary = parseInt(DOM.salaryRange.value) || 300;

    const filteredJobs = jobsData.filter(job => {
        const matchesJobType = jobTypes.length === 0 || jobTypes.includes(job.type.toLowerCase());
        const matchesExperience = experiences.length === 0 || experiences.includes(job.experience.toLowerCase());
        const matchesRemote = remoteOptions.length === 0 || remoteOptions.includes(job.remote.toLowerCase());
        const salaryMatch = job.salary.match(/KES\s*(\d+)[^\d]*(\d+)?/);
        const jobMinSalary = parseInt(salaryMatch[1]) || 0;
        const jobMaxSalary = parseInt(salaryMatch[2]) || jobMinSalary;
        const matchesSalary = jobMaxSalary >= minSalary;

        return matchesJobType && matchesExperience && matchesRemote && matchesSalary;
    });

    currentPage = 1;
    renderJobs(getPaginatedJobs(filteredJobs));
    renderPagination(filteredJobs);
    document.getElementById('job-count').textContent = `(${filteredJobs.length})`;
};

// Sort jobs
const sortJobs = () => {
    const sortBy = DOM.sortSelect.value;
    let sortedJobs = [...jobsData];

    switch (sortBy) {
        case 'recent':
            sortedJobs.sort((a, b) => {
                const aTime = a.date.includes('day') ? parseInt(a.date) : 14;
                const bTime = b.date.includes('day') ? parseInt(b.date) : 14;
                return aTime - bTime;
            });
            break;
        case 'salary-high':
            sortedJobs.sort((a, b) => {
                const aMax = parseInt(a.salary.match(/KES\s*\d+[^\d]*(\d+)/)?.[1] || a.salary.match(/KES\s*(\d+)/)[1]);
                const bMax = parseInt(b.salary.match(/KES\s*\d+[^\d]*(\d+)/)?.[1] || b.salary.match(/KES\s*(\d+)/)[1]);
                return bMax - aMax;
            });
            break;
        case 'salary-low':
            sortedJobs.sort((a, b) => {
                const aMin = parseInt(a.salary.match(/KES\s*(\d+)/)[1]);
                const bMin = parseInt(b.salary.match(/KES\s*(\d+)/)[1]);
                return aMin - bMin;
            });
            break;
        default:
            break;
    }

    currentPage = 1;
    renderJobs(getPaginatedJobs(sortedJobs));
    renderPagination(sortedJobs);
    document.getElementById('job-count').textContent = `(${sortedJobs.length})`;
};

// Open job modal
const openJobModal = (job) => {
    if (!DOM.modalJobContent) {
        console.error('Modal content element not found');
        return;
    }

    DOM.modalJobContent.innerHTML = `
        <div class="job-modal-header">
            <img src="${job.logo || '/api/placeholder/60/60'}" alt="${job.company}" class="job-modal-logo">
            <div class="job-modal-title">
                <h2>${job.title}</h2>
                <div class="job-modal-company">${job.company}</div>
                <div class="job-meta">
                    <div class="job-meta-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${job.location}</span>
                    </div>
                    <div class="job-meta-item">
                        <i class="fas fa-briefcase"></i>
                        <span>${job.type}</span>
                    </div>
                    <div class="job-meta-item">
                        <i class="fas fa-signal"></i>
                        <span>${job.experience}</span>
                    </div>
                    <div class="job-meta-item">
                        <i class="fas fa-laptop-house"></i>
                        <span>${job.remote}</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="job-stats">
            <div class="job-stat-item">
                <h4>Salary Range</h4>
                <p>${job.salary}</p>
            </div>
            <div class="job-stat-item">
                <h4>Job Type</h4>
                <p>${job.type}</p>
            </div>
            <div class="job-stat-item">
                <h4>Experience Level</h4>
                <p>${job.experience}</p>
            </div>
            <div class="job-stat-item">
                <h4>Work Setting</h4>
                <p>${job.remote}</p>
            </div>
        </div>
        <div class="job-description">
            <h3>Job Description</h3>
            <p>${job.description}</p>
            <h3>Responsibilities</h3>
            <ul>
                ${job.responsibilities.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <h3>Requirements</h3>
            <ul>
                ${job.requirements.map(item => `<li>${item}</li>`).join('')}
            </ul>
            <h3>Benefits</h3>
            <ul>
                ${job.benefits.map(item => `<li>${item}</li>`).join('')}
            </ul>
        </div>
        <div class="job-modal-actions">
            <button class="btn btn-primary btn-lg">Apply Now</button>
            <button class="btn btn-outline">Save Job</button>
            <button class="btn btn-outline">Share</button>
        </div>
    `;

    DOM.jobModal.style.display = 'block';
};

// Clear filters
const clearFilters = () => {
    document.querySelectorAll('.checkbox-group input').forEach(checkbox => {
        checkbox.checked = false;
    });

    if (DOM.salaryRange && DOM.salaryValue) {
        DOM.salaryRange.value = DOM.salaryRange.min;
        DOM.salaryValue.textContent = `KES ${parseInt(DOM.salaryRange.min).toLocaleString()}+`;
    }

    DOM.jobSearch.value = '';
    DOM.locationSearch.value = '';
    DOM.sortSelect.value = 'relevance';
    currentPage = 1;

    currentFilteredJobs = [...jobsData];
    renderJobs(getPaginatedJobs(jobsData));
    renderPagination(jobsData);
    document.getElementById('job-count').textContent = `(${jobsData.length})`;
};

// Mock authentication check
const isLoggedIn = () => {
    return false; // Placeholder for real auth logic
};

// Hamburger menu toggle handler
const toggleNav = () => {
    if (!DOM.navToggle || !DOM.nav) {
        console.error('Nav toggle or nav element not found');
        return;
    }

    const isOpen = DOM.nav.classList.toggle('active');
    DOM.navToggle.innerHTML = isOpen
        ? '<i class="fas fa-times"></i>'
        : '<i class="fas fa-bars"></i>';
    document.body.style.overflow = isOpen ? 'hidden' : ''; // Prevent scrolling when open
    console.log('Nav toggled:', isOpen); // Debug
};

// Setup event listeners
const setupEventListeners = () => {
    // Hamburger menu
    if (DOM.navToggle && DOM.nav) {
        DOM.navToggle.addEventListener('click', toggleNav);
    } else {
        console.error('Nav toggle or nav element not found');
    }

    // Close menu when clicking nav links on mobile
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            document.querySelectorAll('nav a').forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            if (href === 'index.html') {
                clearFilters();
                DOM.jobSearch.value = '';
                DOM.locationSearch.value = '';
                DOM.sortSelect.value = 'relevance';
                currentPage = 1;
                currentFilteredJobs = [...jobsData];
                renderJobs(getPaginatedJobs(jobsData));
                renderPagination(jobsData);
                document.getElementById('job-count').textContent = `(${jobsData.length})`;
            } else {
                alert(`Navigating to ${href} would be implemented here.`);
            }

            if (DOM.nav.classList.contains('active')) {
                toggleNav(); // Close menu on link click
            }
        });
    });

    // Job card click
    DOM.jobsList.addEventListener('click', (e) => {
        const jobCard = e.target.closest('.job-card');
        if (jobCard) {
            const jobId = parseInt(jobCard.getAttribute('data-id'));
            const job = jobsData.find(job => job.id === jobId);
            if (job) {
                openJobModal(job);
            } else {
                console.error('Job not found for ID:', jobId);
            }
        }

        if (e.target.classList.contains('apply-btn')) {
            e.stopPropagation();
            alert('Application functionality would go here! Please submit via M-Pesa or platform.');
        }
    });

    // Close modals
    DOM.closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            DOM.jobModal.style.display = 'none';
            DOM.loginModal.style.display = 'none';
        });
    });

    // Click outside modals
    window.addEventListener('click', (e) => {
        if (e.target === DOM.jobModal) {
            DOM.jobModal.style.display = 'none';
        }
        if (e.target === DOM.loginModal) {
            DOM.loginModal.style.display = 'none';
        }
    });

    // Login button
    DOM.loginBtn.addEventListener('click', () => {
        DOM.loginModal.style.display = 'block';
    });

    // Post job button
    DOM.postJobBtn.addEventListener('click', () => {
        if (isLoggedIn()) {
            alert('Post job form would appear here!');
        } else {
            DOM.loginModal.style.display = 'block';
        }
    });

    // Search button
    DOM.searchBtn.addEventListener('click', searchJobs);

    // Search inputs Enter key
    DOM.jobSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchJobs();
    });
    DOM.locationSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') searchJobs();
    });

    // Filter checkboxes
    document.querySelectorAll('.checkbox-group input').forEach(checkbox => {
        checkbox.addEventListener('change', filterJobs);
    });

    // Sort select
    DOM.sortSelect.addEventListener('change', sortJobs);

    // Login form
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Login functionality would be implemented here.');
        DOM.loginModal.style.display = 'none';
    });

    // Switch to signup
    document.getElementById('switch-to-signup').addEventListener('click', (e) => {
        e.preventDefault();
        alert('Signup form would appear here.');
    });

    // Clear filters
    document.querySelector('.filters-panel .btn-block').addEventListener('click', clearFilters);
};
// upwork.js
document.addEventListener("DOMContentLoaded", () => {
    // Existing hamburger menu and other logic...

    // Profile icon and logout button visibility

    // Auth check and logout
    const profileIcon = document.querySelector(".profile-icon");
    const logoutBtn = document.querySelector(".logout-btn");
    const token = localStorage.getItem("authToken");

    if (!token) {
        window.location.href = "login.html";
    } else {
        if (profileIcon) profileIcon.style.display = "flex";
        if (logoutBtn) logoutBtn.style.display = "inline-flex";
    }

    if (logoutBtn) {
        logoutBtn.addEventListener("click", async () => {
            try {
                await fetch("https://remj82.onrender.com/api/auth/logout", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include"
                });
            } catch (err) {
                console.error("Logout error:", err);
            }
            localStorage.removeItem("authToken");
            localStorage.removeItem("userEmail");
            window.location.href = "../index.html"; // Changed to index.html
        });
    }
});