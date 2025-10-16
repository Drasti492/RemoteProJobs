// Job data with varied types and experience levels for filter testing
const jobsData = [
    {
        id: 1,
        title: "Design Simple Logo",
        company: "Nairobi Prints",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 2000",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Canva", "Graphic Design", "Branding"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Design simple logos for small businesses like matatu companies or local shops in Nairobi using Canva.",
        responsibilities: ["Create a logo based on client brief", "Use Canva templates", "Deliver PNG/JPG files"],
        requirements: ["Basic computer skills", "Free Canva account", "No prior design experience needed"],
        benefits: ["Flexible hours", "M-Pesa payments", "Work from home"]
    },
    {
        id: 2,
        title: "Create Social Media Graphics",
        company: "Mombasa Digital",
        location: "Mombasa, Kenya",
        type: "Part-time",
        salary: "KES 300 - 1000",
        experience: "Mid Level",
        remote: "Hybrid",
        tags: ["Canva", "Social Media", "Marketing"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Design Instagram/Facebook posts for coastal businesses like hotels or tour agencies using Canva.",
        responsibilities: ["Design 1–2 social media posts", "Follow client’s branding", "Deliver via WhatsApp"],
        requirements: ["Smartphone/laptop with internet", "Free Canva account", "Basic creativity"],
        benefits: ["Quick M-Pesa payments", "Work from anywhere", "Learn marketing"]
    },
    {
        id: 3,
        title: "Software Developer",
        company: "Tech Nairobi",
        location: "Nairobi, Kenya",
        type: "Full-time",
        salary: "KES 500 - 2000",
        experience: "Senior Level",
        remote: "On-site",
        tags: ["JavaScript", "Python", "Web Development"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Develop web applications for Kenyan startups using modern frameworks.",
        responsibilities: ["Write clean code", "Collaborate with team", "Deploy applications"],
        requirements: ["3+ years coding experience", "Degree in Computer Science", "Git knowledge"],
        benefits: ["Competitive salary", "M-Pesa payments", "Career growth"]
    },
    {
        id: 4,
        title: "Basic Photo Editing",
        company: "Eldoret Media",
        location: "Eldoret, Kenya",
        type: "Contract",
        salary: "KES 300 - 800",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["GIMP", "Photo Editing", "E-commerce"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Edit photos for local e-commerce shops like those on Kilimall, cropping or adding filters using GIMP.",
        responsibilities: ["Crop/resize 1–2 photos", "Apply basic filters", "Deliver via WhatsApp"],
        requirements: ["Free GIMP software", "Basic computer skills", "Internet access"],
        benefits: ["Quick tasks", "M-Pesa payments", "Learn photo editing"]
    },
    {
        id: 5,
        title: "Create Poster for Market",
        company: "Nakuru Traders",
        location: "Nakuru, Kenya",
        type: "Freelance",
        salary: "KES 400 - 1500",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Canva", "Marketing", "Local Business"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Design posters for Nakuru market stalls or small businesses to advertise products like farm produce.",
        responsibilities: ["Create 1 poster", "Use Canva templates", "Deliver via email"],
        requirements: ["Free Canva account", "Basic creativity", "Internet access"],
        benefits: ["Support local traders", "M-Pesa payments", "Work from home"]
    },
    {
        id: 6,
        title: "Solve Maths Calculations",
        company: "Nairobi Tutors",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1500",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Math", "Tutoring", "KCSE"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Solve KCSE-level math problems (algebra, geometry) for online tutoring platforms.",
        responsibilities: ["Solve 5–10 math questions", "Show workings clearly", "Deliver via Google Docs"],
        requirements: ["KCSE math knowledge", "Basic calculator", "Internet access"],
        benefits: ["M-Pesa payments", "Flexible hours", "Help students"]
    },
    {
        id: 7,
        title: "Geography Research Summary",
        company: "Kenyatta Uni Press",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 500 - 2000",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Geography", "Research", "Writing"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Write 200–300 word summaries on Kenyan geography topics like Rift Valley or coastal erosion.",
        responsibilities: ["Research topic using Google", "Write 200-word summary", "Deliver via email"],
        requirements: ["Basic research skills", "Google Docs access", "English/Swahili fluency"],
        benefits: ["M-Pesa payments", "Learn Kenyan geography", "Flexible hours"]
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
        responsibilities: ["Answer 5–10 questions", "Use simple sentences", "Deliver via WhatsApp"],
        requirements: ["KCSE geography knowledge", "Internet access", "Smartphone/laptop"],
        benefits: ["Quick tasks", "M-Pesa payments", "Support education"]
    },
    {
        id: 9,
        title: "Summarize News Articles",
        company: "Daily Nation Freelance",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 400 - 1500",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Writing", "Research", "News"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Summarize Kenyan news articles (e.g., from Nation or Standard) in 100–200 words.",
        responsibilities: ["Read 1 article", "Write 100-word summary", "Deliver via Google Docs"],
        requirements: ["English fluency", "Access to news sites", "Basic writing skills"],
        benefits: ["M-Pesa payments", "Stay updated on news", "Flexible hours"]
    },
    {
        id: 10,
        title: "Create Study Notes",
        company: "Kisumu Tutors",
        location: "Kisumu, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1200",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Education", "Notes", "KCSE"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Create bullet-point notes for KCSE subjects like history or biology.",
        responsibilities: ["Summarize 1 chapter", "Write 10–20 bullet points", "Deliver via email"],
        requirements: ["KCSE knowledge", "Google Docs access", "Basic research skills"],
        benefits: ["M-Pesa payments", "Help students", "Work from home"]
    },
    {
        id: 11,
        title: "Write Short Blog Posts",
        company: "Safaricom Bloggers",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 500 - 2000",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Writing", "Blogging", "Tourism"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Write 300-word blog posts on Kenyan topics like tourism or tech for local blogs.",
        responsibilities: ["Write 1 post on given topic", "Use simple English", "Deliver via Google Docs"],
        requirements: ["English fluency", "Internet access", "Basic writing skills"],
        benefits: ["M-Pesa payments", "Build writing portfolio", "Flexible hours"]
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
        responsibilities: ["Write 1 description", "Highlight product features", "Deliver via email"],
        requirements: ["English fluency", "Basic research skills", "Internet access"],
        benefits: ["M-Pesa payments", "Quick tasks", "Learn e-commerce"]
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
        responsibilities: ["Write 10 captions", "Use engaging language", "Deliver via WhatsApp"],
        requirements: ["Social media familiarity", "English/Swahili fluency", "Smartphone access"],
        benefits: ["M-Pesa payments", "Quick tasks", "Learn marketing"]
    },
    {
        id: 14,
        title: "Transcribe Short Audio",
        company: "Nairobi Podcasts",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1200",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Transcription", "Audio", "Swahili"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Transcribe 5-min Kenyan podcast clips in English or Swahili.",
        responsibilities: ["Listen to 5-min audio", "Type transcript", "Deliver via Google Docs"],
        requirements: ["Good listening skills", "Free Otter.ai account", "Internet access"],
        benefits: ["M-Pesa payments", "Flexible hours", "Learn transcription"]
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
        responsibilities: ["Rewrite 10 sentences", "Keep meaning clear", "Deliver via email"],
        requirements: ["English fluency", "Basic writing skills", "Internet access"],
        benefits: ["M-Pesa payments", "Quick tasks", "Improve writing skills"]
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
        responsibilities: ["Input 20–50 data points", "Use Google Sheets", "Deliver via email"],
        requirements: ["Basic Excel skills", "Internet access", "Smartphone/laptop"],
        benefits: ["M-Pesa payments", "Flexible hours", "Learn data skills"]
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
        responsibilities: ["Sort 20 emails", "Label by category", "Report via WhatsApp"],
        requirements: ["Gmail familiarity", "Basic organization skills", "Internet access"],
        benefits: ["M-Pesa payments", "Quick tasks", "Learn admin skills"]
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
        responsibilities: ["Complete 5 forms", "Enter accurate data", "Deliver via email"],
        requirements: ["Basic computer skills", "Internet access", "Attention to detail"],
        benefits: ["M-Pesa payments", "Quick tasks", "Support local businesses"]
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
        responsibilities: ["Schedule 5 posts", "Use client content", "Confirm via WhatsApp"],
        requirements: ["Social media familiarity", "Free Buffer account", "Internet access"],
        benefits: ["M-Pesa payments", "Learn marketing", "Flexible hours"]
    },
    {
        id: 20,
        title: "List Contacts",
        company: "Nairobi Networks",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1000",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Research", "Contacts", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Find 10–20 emails or phone numbers for Kenyan businesses online.",
        responsibilities: ["Research 10 contacts", "List in Google Sheets", "Deliver via email"],
        requirements: ["Basic Google skills", "Internet access", "Smartphone/laptop"],
        benefits: ["M-Pesa payments", "Quick tasks", "Learn research skills"]
    },
    {
        id: 21,
        title: "Upload Blog Posts",
        company: "Kenya Bloggers",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1200",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["WordPress", "Website", "Content"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Upload text/images to WordPress for Kenyan blogs like travel or tech sites.",
        responsibilities: ["Upload 1 blog post", "Add images and format", "Confirm via email"],
        requirements: ["Basic computer skills", "Internet access", "Free WordPress trial"],
        benefits: ["M-Pesa payments", "Learn website skills", "Flexible hours"]
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
        responsibilities: ["Test 5 pages", "Report issues", "Deliver via WhatsApp"],
        requirements: ["Basic browsing skills", "Internet access", "Smartphone/laptop"],
        benefits: ["M-Pesa payments", "Quick tasks", "Learn QA skills"]
    },
    {
        id: 23,
        title: "Add Product Listings",
        company: "Kilimall Freelance",
        location: "Nairobi, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1000",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["E-commerce", "Website", "Data"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Add 5–10 products to Kenyan e-commerce sites like Kilimall.",
        responsibilities: ["Enter 5 product details", "Upload images", "Deliver via email"],
        requirements: ["Basic computer skills", "Internet access", "Attention to detail"],
        benefits: ["M-Pesa payments", "Support e-commerce", "Flexible hours"]
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
        responsibilities: ["Edit 1 section of text", "Ensure clarity", "Confirm via email"],
        requirements: ["English fluency", "Internet access", "Basic editing skills"],
        benefits: ["M-Pesa payments", "Quick tasks", "Learn web editing"]
    },
    {
        id: 25,
        title: "Social Media Page Setup",
        company: "Nakuru Social",
        location: "Nakuru, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1000",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Social Media", "Website", "Marketing"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Set up basic Facebook/Instagram pages for Kenyan businesses.",
        responsibilities: ["Create 1 page", "Add bio and logo", "Deliver via WhatsApp"],
        requirements: ["Social media familiarity", "Internet access", "Smartphone/laptop"],
        benefits: ["M-Pesa payments", "Learn marketing", "Flexible hours"]
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
        responsibilities: ["Answer 5 questions", "Provide honest feedback", "Submit via platform"],
        requirements: ["Smartphone access", "Internet connection", "Basic English"],
        benefits: ["M-Pesa payments", "Quick tasks", "No skills needed"]
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
        responsibilities: ["Tag 20 images", "Follow guidelines", "Deliver via platform"],
        requirements: ["Smartphone/laptop", "Internet access", "Attention to detail"],
        benefits: ["M-Pesa payments", "Quick tasks", "Learn AI basics"]
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
        responsibilities: ["Test 1 app", "Write 50-word review", "Submit via email"],
        requirements: ["Smartphone access", "Basic English", "Internet connection"],
        benefits: ["M-Pesa payments", "Quick tasks", "Discover new apps"]
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
        responsibilities: ["Sort 20 items", "Use Google Sheets", "Deliver via email"],
        requirements: ["Basic Excel skills", "Internet access", "Smartphone/laptop"],
        benefits: ["M-Pesa payments", "Quick tasks", "Learn data skills"]
    },
    {
        id: 30,
        title: "Add Video Subtitles",
        company: "Eldoret Media Hub",
        location: "Eldoret, Kenya",
        type: "Freelance",
        salary: "KES 300 - 1200",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Subtitles", "Video", "Swahili"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Add subtitles to 2–5 min Kenyan videos in English/Swahili.",
        responsibilities: ["Add subtitles to 1 video", "Use free tools", "Deliver via email"],
        requirements: ["English/Swahili fluency", "Free Aegisub software", "Internet access"],
        benefits: ["M-Pesa payments", "Flexible hours", "Learn video editing"]
    },
    {
        id: 31,
        title: "Marketing Manager",
        company: "Safaricom",
        location: "Nairobi, Kenya",
        type: "Full-time",
        salary: "KES 1000 - 2000",
        experience: "Senior Level",
        remote: "Hybrid",
        tags: ["Marketing", "Strategy", "Digital"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Lead marketing campaigns for Safaricom’s digital products.",
        responsibilities: ["Plan campaigns", "Manage team", "Analyze metrics"],
        requirements: ["5+ years marketing experience", "Degree in Marketing", "Data analysis skills"],
        benefits: ["Competitive salary", "M-Pesa payments", "Career growth"]
    }
];

// DOM Elements
const DOM = {
    jobsList: document.getElementById('jobs-list'),
    jobModal: document.getElementById('job-modal'),
    modalJobContent: document.getElementById('modal-job-content'),
    salaryRange: document.getElementById('salary-range'),
    salaryValue: document.getElementById('salary-value'),
    jobSearch: document.getElementById('job-search'),
    locationSearch: document.getElementById('location-search'),
    searchBtn: document.querySelector('.search-btn'),
    sortSelect: document.getElementById('sort-by'),
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('nav'),
    paginationContainer: document.querySelector('.pagination-container'),
    prevPage: document.querySelector('.prev-page'),
    nextPage: document.querySelector('.next-page'),
    paginationNumbers: document.querySelector('.pagination-numbers'),
    clearFilters: document.querySelector('.clear-filters'),
    popularSearches: document.querySelectorAll('.popular-searches a'),
};

// Pagination Settings
const jobsPerPage = 5;
let currentPage = 1;
let currentFilteredJobs = [...jobsData];

// Page Init
document.addEventListener('DOMContentLoaded', () => {
    if (!DOM.jobsList) return console.error('Jobs list element not found');
    initRangeSlider();
    setupEventListeners();
    updateJobs();
});

// Master Controller
function updateJobs() {
    let filtered = applyFilters(jobsData);
    filtered = applySearch(filtered);
    filtered = applySorting(filtered);
    currentFilteredJobs = filtered;

    const paginated = getPaginatedJobs(filtered);
    renderJobs(paginated);
    renderPagination(filtered);
    document.getElementById('job-count').textContent = `(${filtered.length})`;
}

// Get Paginated Jobs
function getPaginatedJobs(jobs) {
    const start = (currentPage - 1) * jobsPerPage;
    const end = start + jobsPerPage;
    return jobs.slice(start, end);
}

// Filters
function applyFilters(jobs) {
    const jobTypes = Array.from(document.querySelectorAll('input[name="job-type"]:checked')).map(el => el.value.toLowerCase());
    const experiences = Array.from(document.querySelectorAll('input[name="experience"]:checked')).map(el => el.value.toLowerCase());
    const remoteOptions = Array.from(document.querySelectorAll('input[name="remote"]:checked')).map(el => el.value.toLowerCase());
    const minSalary = parseInt(DOM.salaryRange.value) || 300;

    return jobs.filter(job => {
        const jobType = (job.type || '').toLowerCase();
        const jobExperience = (job.experience || '').toLowerCase();
        const jobRemote = (job.remote || '').toLowerCase();

        const matchesType = jobTypes.length === 0 || jobTypes.includes(jobType);
        const matchesExperience = experiences.length === 0 || experiences.includes(jobExperience);
        const matchesRemote = remoteOptions.length === 0 || remoteOptions.includes(jobRemote);

        const salaryMatch = job.salary.match(/KES\s*(\d+)[^\d]*(\d+)?/);
        const jobMin = parseInt(salaryMatch?.[1]) || 0;
        const jobMax = parseInt(salaryMatch?.[2]) || jobMin;
        const matchesSalary = jobMax >= minSalary;

        return matchesType && matchesExperience && matchesRemote && matchesSalary;
    });
}

// Search
function applySearch(jobs) {
    const searchTerm = DOM.jobSearch.value.toLowerCase().trim();
    const locationTerm = DOM.locationSearch.value.toLowerCase().trim();

    return jobs.filter(job => {
        const title = job.title?.toLowerCase() || '';
        const company = job.company?.toLowerCase() || '';
        const tags = job.tags?.map(t => t.toLowerCase()) || [];
        const location = job.location?.toLowerCase() || '';
        const remote = job.remote?.toLowerCase() || '';

        const matchesSearch =
            !searchTerm ||
            title.includes(searchTerm) ||
            company.includes(searchTerm) ||
            tags.some(tag => tag.includes(searchTerm));

        const matchesLocation =
            !locationTerm ||
            location.includes(locationTerm) ||
            (locationTerm.includes('remote') && remote === 'remote');

        return matchesSearch && matchesLocation;
    });
}

// Sorting
function applySorting(jobs) {
    const sortBy = DOM.sortSelect.value;
    const sorted = [...jobs];

    switch (sortBy) {
        case 'recent':
            return sorted.sort((a, b) => {
                const aTime = a.date.includes('day') ? parseInt(a.date) : 14;
                const bTime = b.date.includes('day') ? parseInt(b.date) : 14;
                return aTime - bTime;
            });
        case 'salary-high':
            return sorted.sort((a, b) => {
                const aMax = parseInt(a.salary.match(/KES\s*\d+[^\d]*(\d+)/)?.[1] || a.salary.match(/KES\s*(\d+)/)?.[1]);
                const bMax = parseInt(b.salary.match(/KES\s*\d+[^\d]*(\d+)/)?.[1] || b.salary.match(/KES\s*(\d+)/)?.[1]);
                return bMax - aMax;
            });
        case 'salary-low':
            return sorted.sort((a, b) => {
                const aMin = parseInt(a.salary.match(/KES\s*(\d+)/)?.[1]);
                const bMin = parseInt(b.salary.match(/KES\s*(\d+)/)?.[1]);
                return aMin - bMin;
            });
        default:
            return sorted;
    }
}

// Render Jobs
function renderJobs(jobs) {
    if (!DOM.jobsList) return;
    DOM.jobsList.innerHTML = '';

    if (jobs.length === 0) {
        DOM.jobsList.innerHTML = `
            <div class="no-results">
                <h3>No jobs found</h3>
                <p>Try adjusting filters or search terms.</p>
            </div>`;
        return;
    }

    jobs.forEach(job => {
        const card = document.createElement('div');
        card.className = 'job-card';
        card.setAttribute('data-id', job.id);
        card.innerHTML = `
            <div class="job-info">
                <h3>${job.title}</h3>
                <div class="company-name">${job.company}</div>
                <div class="job-meta">
                    <div class="job-meta-item"><i class="fas fa-map-marker-alt"></i> ${job.location}</div>
                    <div class="job-meta-item"><i class="fas fa-briefcase"></i> ${job.type}</div>
                    <div class="job-meta-item"><i class="fas fa-signal"></i> ${job.experience}</div>
                    <div class="job-meta-item"><i class="fas fa-laptop-house"></i> ${job.remote}</div>
                </div>
                <div class="job-tags">${job.tags.map(t => `<span class="job-tag">${t}</span>`).join('')}</div>
            </div>
            <div class="job-actions">
                <div class="salary">${job.salary}</div>
                <div class="job-date">${job.date}</div>
                <button class="btn btn-primary btn-sm apply-btn">Apply Now</button>
            </div>`;
        card.addEventListener('click', e => {
            if (!e.target.classList.contains('apply-btn')) {
                const jobData = jobsData.find(j => j.id === parseInt(card.dataset.id));
                if (jobData) showJobModal(jobData);
            }
        });
        DOM.jobsList.appendChild(card);
    });
}

// Render Pagination
function renderPagination(jobs) {
    const totalPages = Math.ceil(jobs.length / jobsPerPage);
    DOM.paginationNumbers.innerHTML = '';

    if (totalPages <= 1) {
        DOM.prevPage.disabled = true;
        DOM.nextPage.disabled = true;
        return;
    }

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement('button');
        btn.className = `pagination-btn page-number ${i === currentPage ? 'active' : ''}`;
        btn.textContent = i;
        btn.addEventListener('click', () => {
            currentPage = i;
            updateJobs();
            window.scrollTo({ top: DOM.jobsList.offsetTop - 100, behavior: 'smooth' });
        });
        DOM.paginationNumbers.appendChild(btn);
    }

    DOM.prevPage.disabled = currentPage === 1;
    DOM.nextPage.disabled = currentPage === totalPages;
}

// Show Job Modal
function showJobModal(job) {
    DOM.modalJobContent.innerHTML = `
        <h2>${job.title}</h2>
        <p><strong>Company:</strong> ${job.company}</p>
        <p><strong>Location:</strong> ${job.location}</p>
        <p><strong>Type:</strong> ${job.type}</p>
        <p><strong>Experience:</strong> ${job.experience}</p>
        <p><strong>Remote:</strong> ${job.remote}</p>
        <p><strong>Salary:</strong> ${job.salary}</p>
        <p><strong>Description:</strong> ${job.description}</p>
        <h3>Responsibilities</h3>
        <ul>${job.responsibilities.map(r => `<li>${r}</li>`).join('')}</ul>
        <h3>Requirements</h3>
        <ul>${job.requirements.map(r => `<li>${r}</li>`).join('')}</ul>
        <h3>Benefits</h3>
        <ul>${job.benefits.map(b => `<li>${b}</li>`).join('')}</ul>
        <button class="btn btn-primary btn-block apply-btn">Apply Now</button>`;
    DOM.jobModal.style.display = 'block';
}

// Salary Range
function initRangeSlider() {
    if (DOM.salaryRange && DOM.salaryValue) {
        DOM.salaryRange.min = 300;
        DOM.salaryRange.max = 2000;
        DOM.salaryRange.step = 100;
        DOM.salaryRange.value = 300;
        DOM.salaryValue.textContent = `KES ${DOM.salaryRange.value}+`;

        DOM.salaryRange.addEventListener('input', () => {
            DOM.salaryValue.textContent = `KES ${DOM.salaryRange.value}+`;
            currentPage = 1;
            updateJobs();
        });
    }
}

// Event Listeners
function setupEventListeners() {
    // Search
    let debounce;
    [DOM.jobSearch, DOM.locationSearch].forEach(input => {
        input.addEventListener('input', () => {
            clearTimeout(debounce);
            debounce = setTimeout(() => {
                currentPage = 1;
                updateJobs();
            }, 300);
        });
    });
    DOM.searchBtn.addEventListener('click', e => {
        e.preventDefault();
        currentPage = 1;
        updateJobs();
    });

    // Popular Searches
    DOM.popularSearches.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            DOM.jobSearch.value = link.dataset.search;
            currentPage = 1;
            updateJobs();
        });
    });

    // Filters
    document.querySelectorAll('.checkbox-group input').forEach(cb => {
        cb.addEventListener('change', () => {
            currentPage = 1;
            updateJobs();
        });
    });

    // Clear Filters
    DOM.clearFilters.addEventListener('click', () => {
        document.querySelectorAll('.checkbox-group input').forEach(cb => cb.checked = false);
        DOM.salaryRange.value = 300;
        DOM.salaryValue.textContent = `KES 300+`;
        DOM.jobSearch.value = '';
        DOM.locationSearch.value = '';
        currentPage = 1;
        updateJobs();
    });

    // Sort
    DOM.sortSelect.addEventListener('change', () => {
        currentPage = 1;
        updateJobs();
    });

    // Apply Now (on job card and modal)
    DOM.jobsList.addEventListener('click', e => {
        if (e.target.classList.contains('apply-btn')) {
            const jobCard = e.target.closest('.job-card');
            const jobId = parseInt(jobCard.dataset.id);
            const jobData = jobsData.find(j => j.id === jobId);
            if (jobData) showJobModal(jobData);
        }
    });

    DOM.jobModal.addEventListener('click', e => {
        if (e.target.classList.contains('apply-btn')) {
            window.location.href = '../pages/pricing.html';
        }
    });

    // Modal Close
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.jobModal.style.display = 'none';
        });
    });

    // Navigation Toggle
    DOM.navToggle.addEventListener('click', () => {
        DOM.nav.classList.toggle('active');
    });

    // Pagination
    DOM.prevPage.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updateJobs();
            window.scrollTo({ top: DOM.jobsList.offsetTop - 100, behavior: 'smooth' });
        }
    });

    DOM.nextPage.addEventListener('click', () => {
        const totalPages = Math.ceil(currentFilteredJobs.length / jobsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            updateJobs();
            window.scrollTo({ top: DOM.jobsList.offsetTop - 100, behavior: 'smooth' });
        }
    });
}