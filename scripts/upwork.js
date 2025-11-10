// jobsData with 160 simple tech jobs, 90% remote, USA locations, realistic USD salaries
// scripts/upwork.js
document.addEventListener('DOMContentLoaded', () => {
  const token = localStorage.getItem('token');
  if (!token) {
    window.location.href = 'login.html';
    return;
  }

  const userProfile = JSON.parse(localStorage.getItem('userProfile'));
  if (userProfile) {
    console.log(`Welcome back, ${userProfile.name}!`);
  }
  
});

const jobsData = [
    // Manually crafted first 20 jobs for variety
    {
        id: 1,
        title: "Design Simple Logo",
        company: "Big Apple Designs",
        location: "New York, NY",
        type: "Freelance",
        salary: "$5 - $15",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Canva", "Graphic Design", "Branding"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Create simple logos for New York-based small businesses like cafes or retail stores using Canva.",
        responsibilities: ["Design logo based on client brief", "Use Canva templates", "Deliver PNG/JPG files"],
        requirements: ["Basic computer skills", "Free Canva account", "No prior design experience"],
        benefits: ["Flexible hours", "PayPal payments", "Work from home"]
    },
    {
        id: 2,
        title: "Answer Math Questions",
        company: "Lone Star Tutoring",
        location: "Austin, TX",
        type: "Part-time",
        salary: "$3 - $8",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Math", "Tutoring", "Education"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Solve math problems (algebra, calculus) for students via an online platform in Texas.",
        responsibilities: ["Answer 5–10 math questions daily", "Explain solutions clearly", "Submit via platform"],
        requirements: ["Strong math skills", "High school diploma", "Reliable internet"],
        benefits: ["Flexible schedule", "Online payments", "Build teaching skills"]
    },
    {
        id: 3,
        title: "Write Product Reviews",
        company: "Bay Area E-Commerce",
        location: "San Francisco, CA",
        type: "Freelance",
        salary: "$3 - $7",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Writing", "Reviews", "E-Commerce"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Write short reviews for products sold by San Francisco online stores.",
        responsibilities: ["Write 100–200 word reviews", "Highlight product features", "Submit via email"],
        requirements: ["Good writing skills", "Attention to detail", "Basic computer access"],
        benefits: ["Work from home", "PayPal payments", "Flexible tasks"]
    },
    {
        id: 4,
        title: "Edit Short Videos",
        company: "Windy City Media",
        location: "Chicago, IL",
        type: "Part-time",
        salary: "$8 - $20",
        experience: "Mid Level",
        remote: "Remote",
        tags: ["Video Editing", "Social Media", "Content Creation"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Edit 30–60 second video clips for Chicago businesses’ social media campaigns.",
        responsibilities: ["Trim and enhance videos", "Add captions or effects", "Deliver via cloud"],
        requirements: ["Experience with editing tools (e.g., Adobe Premiere, Canva)", "Creative skills"],
        benefits: ["Flexible hours", "Online payments", "Portfolio growth"]
    },
    {
        id: 5,
        title: "Reply to YouTube Comments",
        company: "Sunshine Digital",
        location: "Miami, FL",
        type: "Freelance",
        salary: "$2 - $5",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Social Media", "YouTube", "Engagement"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Respond to comments on YouTube videos for Miami-based content creators.",
        responsibilities: ["Reply to 20–50 comments daily", "Maintain positive tone", "Follow brand guidelines"],
        requirements: ["Good communication skills", "YouTube account", "Reliable internet"],
        benefits: ["Work from home", "PayPal payments", "Flexible schedule"]
    },
    {
        id: 6,
        title: "Manage Social Media Posts",
        company: "Emerald City Marketing",
        location: "Seattle, WA",
        type: "Part-time",
        salary: "$8 - $18",
        experience: "Mid Level",
        remote: "Remote",
        tags: ["Social Media", "Marketing", "Content Creation"],
        logo: "/api/placeholder/60/60",
        date: "4 days ago",
        description: "Schedule and post content on Instagram and Twitter for Seattle startups.",
        responsibilities: ["Create 3–5 posts weekly", "Use scheduling tools", "Engage with followers"],
        requirements: ["Social media experience", "Canva or similar tool", "Good communication"],
        benefits: ["Remote work", "Online payments", "Learn marketing"]
    },
    {
        id: 7,
        title: "Photo Editing for E-Commerce",
        company: "Mile High Creations",
        location: "Denver, CO",
        type: "Freelance",
        salary: "$5 - $12",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Photo Editing", "Photoshop", "E-Commerce"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Edit product photos for online stores in Denver using Photoshop or Canva.",
        responsibilities: ["Enhance 10–20 images", "Remove backgrounds", "Deliver via cloud"],
        requirements: ["Basic photo editing skills", "Access to editing software", "Attention to detail"],
        benefits: ["Flexible tasks", "PayPal payments", "Work from home"]
    },
    {
        id: 8,
        title: "Texting Customer Support on WhatsApp",
        company: "Boston Tech Solutions",
        location: "Boston, MA",
        type: "Part-time",
        salary: "$3 - $7",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Customer Support", "WhatsApp", "Communication"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Provide customer support via WhatsApp for Boston-based tech companies.",
        responsibilities: ["Respond to customer queries", "Follow scripts", "Log interactions"],
        requirements: ["Smartphone with WhatsApp", "Good typing skills", "Reliable internet"],
        benefits: ["Work from anywhere", "Online payments", "Flexible hours"]
    },
    {
        id: 9,
        title: "Answer Short Survey Questions",
        company: "Music City Research",
        location: "Nashville, TN",
        type: "Freelance",
        salary: "$2 - $4",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Surveys", "Research", "Data Collection"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Complete short survey questions for market research firms in Nashville.",
        responsibilities: ["Answer 10–20 questions", "Provide honest feedback", "Submit online"],
        requirements: ["Basic computer skills", "Internet access", "No experience needed"],
        benefits: ["Quick tasks", "PayPal payments", "Work from home"]
    },
    {
        id: 10,
        title: "Reply to TikTok Comments",
        company: "Sunshine Influencers",
        location: "Los Angeles, CA",
        type: "Freelance",
        salary: "$2 - $5",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Social Media", "TikTok", "Engagement"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Engage with TikTok comments for LA-based influencers or brands.",
        responsibilities: ["Reply to 20–50 comments daily", "Use positive tone", "Follow guidelines"],
        requirements: ["TikTok account", "Communication skills", "Reliable internet"],
        benefits: ["Flexible schedule", "PayPal payments", "Work remotely"]
    },
    {
        id: 11,
        title: "Data Entry for Startups",
        company: "Silicon Valley Analytics",
        location: "San Jose, CA",
        type: "Part-time",
        salary: "$3 - $8",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Data Entry", "Excel", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Enter data into spreadsheets for San Jose tech startups.",
        responsibilities: ["Input 50–100 records daily", "Ensure accuracy", "Submit via cloud"],
        requirements: ["Basic Excel skills", "Attention to detail", "Computer access"],
        benefits: ["Work from home", "Online payments", "Flexible hours"]
    },
    {
        id: 12,
        title: "Virtual Assistant for Retail",
        company: "Philly Commerce",
        location: "Philadelphia, PA",
        type: "Part-time",
        salary: "$5 - $12",
        experience: "Mid Level",
        remote: "Remote",
        tags: ["Virtual Assistant", "Admin", "Customer Service"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Provide administrative support for Philadelphia retail businesses.",
        responsibilities: ["Schedule appointments", "Manage emails", "Organize tasks"],
        requirements: ["Good organizational skills", "Google Suite knowledge", "Reliable internet"],
        benefits: ["Remote work", "PayPal payments", "Flexible schedule"]
    },
    {
        id: 13,
        title: "Research Test for Market Analysis",
        company: "Houston Insights",
        location: "Houston, TX",
        type: "Freelance",
        salary: "$3 - $7",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Research", "Data Collection", "Analysis"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Collect data for market research projects for Houston-based companies.",
        responsibilities: ["Gather online data", "Compile reports", "Submit via email"],
        requirements: ["Basic research skills", "Internet access", "No experience needed"],
        benefits: ["Work from home", "Online payments", "Quick tasks"]
    },
    {
        id: 14,
        title: "Answer Geography Questions",
        company: "Phoenix Education",
        location: "Phoenix, AZ",
        type: "Part-time",
        salary: "$3 - $8",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Geography", "Tutoring", "Education"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Answer geography-related questions for online students in Arizona.",
        responsibilities: ["Solve 5–10 questions daily", "Provide clear explanations", "Submit online"],
        requirements: ["Knowledge of geography", "High school diploma", "Internet access"],
        benefits: ["Flexible hours", "Online payments", "Build teaching skills"]
    },
    {
        id: 15,
        title: "Write Blog Posts",
        company: "San Diego Media",
        location: "San Diego, CA",
        type: "Freelance",
        salary: "$8 - $18",
        experience: "Mid Level",
        remote: "Remote",
        tags: ["Writing", "Blogging", "SEO"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Write 500-word blog posts for San Diego businesses, focusing on SEO.",
        responsibilities: ["Write 1–2 posts weekly", "Incorporate keywords", "Submit via Google Docs"],
        requirements: ["Good writing skills", "Basic SEO knowledge", "Computer access"],
        benefits: ["Work from home", "PayPal payments", "Portfolio growth"]
    },
    {
        id: 16,
        title: "Design Social Media Graphics",
        company: "Dallas Creative Studio",
        location: "Dallas, TX",
        type: "Freelance",
        salary: "$5 - $15",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Canva", "Graphic Design", "Social Media"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Create graphics for social media posts for Dallas-based businesses.",
        responsibilities: ["Design 3–5 graphics weekly", "Use Canva", "Deliver via cloud"],
        requirements: ["Basic design skills", "Free Canva account", "Creative mindset"],
        benefits: ["Flexible tasks", "Online payments", "Work from home"]
    },
    {
        id: 17,
        title: "Test Mobile Apps",
        company: "Columbus Tech Hub",
        location: "Columbus, OH",
        type: "Part-time",
        salary: "$3 - $8",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Testing", "Mobile Apps", "QA"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Test mobile apps for functionality for Ohio-based startups.",
        responsibilities: ["Test app features", "Report bugs", "Provide feedback"],
        requirements: ["Smartphone or tablet", "Basic tech skills", "Attention to detail"],
        benefits: ["Work from home", "Online payments", "Flexible hours"]
    },
    {
        id: 18,
        title: "Manage Email Campaigns",
        company: "Indy Digital Solutions",
        location: "Indianapolis, IN",
        type: "Part-time",
        salary: "$8 - $20",
        experience: "Mid Level",
        remote: "Hybrid",
        tags: ["Email Marketing", "Communication", "Digital Marketing"],
        logo: "/api/placeholder/60/60",
        date: "4 days ago",
        description: "Manage email campaigns for Indianapolis businesses using platforms like Mailchimp.",
        responsibilities: ["Create email templates", "Send 2–3 campaigns weekly", "Track performance"],
        requirements: ["Email marketing experience", "Access to marketing tools", "Good communication"],
        benefits: ["Hybrid work", "Online payments", "Marketing skills growth"]
    },
    {
        id: 19,
        title: "Answer Science Questions",
        company: "Jacksonville Education",
        location: "Jacksonville, FL",
        type: "Freelance",
        salary: "$3 - $8",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Science", "Tutoring", "Education"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Solve science questions (biology, chemistry) for Florida students online.",
        responsibilities: ["Answer 5–10 questions daily", "Explain answers clearly", "Submit online"],
        requirements: ["Science knowledge", "High school diploma", "Reliable internet"],
        benefits: ["Flexible schedule", "PayPal payments", "Work from home"]
    },
    {
        id: 20,
        title: "Edit Product Photos",
        company: "San Antonio Retail",
        location: "San Antonio, TX",
        type: "Freelance",
        salary: "$5 - $12",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Photo Editing", "Canva", "E-Commerce"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Edit product images for San Antonio e-commerce stores using Canva or Photoshop.",
        responsibilities: ["Edit 10–20 images", "Enhance visuals", "Deliver via cloud"],
        requirements: ["Basic editing skills", "Editing tools", "Attention to detail"],
        benefits: ["Work from home", "PayPal payments", "Flexible tasks"]
    },
    // New 21 task types
    {
        id: 21,
        title: "Transcribe Audio Clips",
        company: "Atlanta Media Group",
        location: "Atlanta, GA",
        type: "Freelance",
        salary: "$5 - $12",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Transcription", "Audio", "Typing"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Transcribe short audio clips for Atlanta-based podcasts or businesses.",
        responsibilities: ["Transcribe 5–10 minutes of audio", "Ensure accuracy", "Submit via email"],
        requirements: ["Good listening skills", "Typing proficiency", "Internet access"],
        benefits: ["Flexible hours", "PayPal payments", "Work from home"]
    },
    {
        id: 22,
        title: "Create Infographics",
        company: "Portland Creative",
        location: "Portland, OR",
        type: "Freelance",
        salary: "$8 - $20",
        experience: "Mid Level",
        remote: "Remote",
        tags: ["Canva", "Infographics", "Design"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Design infographics for Portland businesses to use in marketing materials.",
        responsibilities: ["Create 1–2 infographics", "Use Canva or similar", "Deliver via cloud"],
        requirements: ["Design experience", "Canva proficiency", "Creative mindset"],
        benefits: ["Work from home", "Online payments", "Portfolio growth"]
    },
    {
        id: 23,
        title: "Answer History Questions",
        company: "Vegas Education Hub",
        location: "Las Vegas, NV",
        type: "Part-time",
        salary: "$3 - $8",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["History", "Tutoring", "Education"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Answer history questions for online students in Las Vegas.",
        responsibilities: ["Solve 5–10 questions daily", "Provide clear explanations", "Submit online"],
        requirements: ["History knowledge", "High school diploma", "Internet access"],
        benefits: ["Flexible schedule", "PayPal payments", "Work from home"]
    },
    {
        id: 24,
        title: "Moderate Online Forums",
        company: "Charlotte Tech Community",
        location: "Charlotte, NC",
        type: "Part-time",
        salary: "$5 - $10",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Moderation", "Community Management", "Online"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Moderate forums for Charlotte-based tech communities to ensure positive engagement.",
        responsibilities: ["Monitor posts", "Remove spam", "Engage users"],
        requirements: ["Good communication", "Basic tech skills", "Reliable internet"],
        benefits: ["Work from home", "Online payments", "Flexible hours"]
    },
    {
        id: 25,
        title: "Test Website Usability",
        company: "Boston Digital Labs",
        location: "Boston, MA",
        type: "Freelance",
        salary: "$5 - $12",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Usability Testing", "QA", "Web"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Test website usability for Boston-based startups to improve user experience.",
        responsibilities: ["Navigate websites", "Report issues", "Provide feedback"],
        requirements: ["Basic tech skills", "Attention to detail", "Internet access"],
        benefits: ["Flexible tasks", "PayPal payments", "Work from home"]
    },
    // Remaining 135 jobs, programmatically generated with random distribution of 41 tasks
    ...Array.from({ length: 135 }, (_, i) => {
        const states = [
            "New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ",
            "Philadelphia, PA", "San Antonio, TX", "San Diego, CA", "Dallas, TX", "San Jose, CA",
            "Austin, TX", "Jacksonville, FL", "San Francisco, CA", "Columbus, OH", "Indianapolis, IN",
            "Seattle, WA", "Denver, CO", "Boston, MA", "Nashville, TN", "Miami, FL",
            "Atlanta, GA", "Portland, OR", "Las Vegas, NV", "Charlotte, NC", "Minneapolis, MN"
        ];
        const jobTitles = [
            "Design Simple Logo", "Answer Math Questions", "Write Product Reviews", "Edit Short Videos",
            "Reply to YouTube Comments", "Manage Social Media Posts", "Photo Editing for E-Commerce",
            "Texting Customer Support on WhatsApp", "Answer Short Survey Questions", "Reply to TikTok Comments",
            "Data Entry for Startups", "Virtual Assistant for Retail", "Research Test for Market Analysis",
            "Answer Geography Questions", "Write Blog Posts", "Design Social Media Graphics",
            "Test Mobile Apps", "Manage Email Campaigns", "Answer Science Questions", "Edit Product Photos",
            "Transcribe Audio Clips", "Create Infographics", "Answer History Questions", "Moderate Online Forums",
            "Test Website Usability", "Write Email Copy", "Create Presentation Slides", "Monitor Social Media Analytics",
            "Answer English Literature Questions", "Edit Podcasts", "Create Instagram Reels", "Answer Basic Coding Questions",
            "Write Product Descriptions", "Test Game Apps", "Manage Google Ads", "Answer Economics Questions",
            "Create Flyers", "Proofread Content", "Answer Physics Questions", "Create Basic Website Mockups",
            "Schedule Social Media Ads"
        ];
        const companies = [
            "Cityscape Designs", "TechTrend Innovations", "Urban Media Co", "Starlight Tech",
            "Creative Solutions", "Digital Wave", "NextGen Startups", "Bright Path Marketing",
            "Metro Analytics", "Sunrise Media", "Blue Sky Creations", "Horizon Tech",
            "Skyline Education", "Peak Digital", "Urban Insights"
        ];
        const types = ["Freelance", "Part-time"];
        const experiences = ["Entry Level", "Mid Level"];
        const remotes = ["Remote", "Hybrid", "On-site"];
        const tagSets = [
            ["Canva", "Graphic Design"], ["Math", "Tutoring"], ["Writing", "Reviews"],
            ["Video Editing", "Content Creation"], ["Social Media", "YouTube"], ["Social Media", "Marketing"],
            ["Photo Editing", "Photoshop"], ["Customer Support", "WhatsApp"], ["Surveys", "Research"],
            ["Social Media", "TikTok"], ["Data Entry", "Excel"], ["Virtual Assistant", "Admin"],
            ["Research", "Analysis"], ["Geography", "Education"], ["Writing", "SEO"],
            ["Canva", "Social Media"], ["Testing", "QA"], ["Email Marketing", "Digital Marketing"],
            ["Science", "Tutoring"], ["Photo Editing", "Canva"], ["Transcription", "Audio"],
            ["Canva", "Infographics"], ["History", "Tutoring"], ["Moderation", "Community"],
            ["Usability Testing", "QA"], ["Writing", "Email Marketing"], ["PowerPoint", "Design"],
            ["Social Media", "Analytics"], ["English", "Tutoring"], ["Podcast Editing", "Audio"],
            ["Social Media", "Instagram"], ["Coding", "Tutoring"], ["Writing", "E-Commerce"],
            ["Testing", "Gaming"], ["Google Ads", "Marketing"], ["Economics", "Tutoring"],
            ["Canva", "Flyers"], ["Proofreading", "Writing"], ["Physics", "Tutoring"],
            ["Web Design", "Mockups"], ["Social Media", "Advertising"]
        ];
        const descriptions = [
            `Create logos for small businesses in {city} using Canva.`,
            `Solve math problems (algebra, calculus) for students in {city}.`,
            `Write reviews for products sold by {city} online stores.`,
            `Edit short video clips for {city} businesses’ social media.`,
            `Respond to comments on YouTube videos for {city} creators.`,
            `Schedule social media posts for {city} startups.`,
            `Edit product photos for {city} e-commerce stores.`,
            `Provide customer support via WhatsApp for {city} companies.`,
            `Complete survey questions for {city} market research firms.`,
            `Engage with TikTok comments for {city} influencers.`,
            `Enter data into spreadsheets for {city} startups.`,
            `Provide administrative support for {city} retail businesses.`,
            `Collect data for market research in {city}.`,
            `Answer geography questions for {city} students online.`,
            `Write blog posts for {city} businesses with SEO focus.`,
            `Design graphics for social media for {city} companies.`,
            `Test mobile apps for {city} startups.`,
            `Manage email campaigns for {city} businesses.`,
            `Solve science questions for {city} students online.`,
            `Edit product images for {city} e-commerce stores.`,
            `Transcribe audio clips for {city} podcasts or businesses.`,
            `Create infographics for {city} marketing campaigns.`,
            `Answer history questions for {city} students online.`,
            `Moderate forums for {city} tech communities.`,
            `Test website usability for {city} startups.`,
            `Write email copy for {city} businesses’ marketing.`,
            `Create presentation slides for {city} companies.`,
            `Monitor social media analytics for {city} brands.`,
            `Answer English literature questions for {city} students.`,
            `Edit podcasts for {city} content creators.`,
            `Create Instagram Reels for {city} influencers.`,
            `Answer basic coding questions for {city} students.`,
            `Write product descriptions for {city} e-commerce stores.`,
            `Test game apps for {city} developers.`,
            `Manage Google Ads for {city} businesses.`,
            `Answer economics questions for {city} students.`,
            `Create flyers for {city} events or businesses.`,
            `Proofread content for {city} websites or blogs.`,
            `Answer physics questions for {city} students.`,
            `Create basic website mockups for {city} startups.`,
            `Schedule social media ads for {city} brands.`
        ];
        const responsibilities = [
            ["Design based on brief", "Use Canva", "Deliver files"],
            ["Solve 5–10 questions", "Explain solutions", "Submit online"],
            ["Write 100–200 word reviews", "Highlight features", "Submit via email"],
            ["Trim and enhance videos", "Add captions", "Deliver via cloud"],
            ["Reply to 20–50 comments", "Positive tone", "Follow guidelines"],
            ["Create 3–5 posts weekly", "Use scheduling tools", "Engage followers"],
            ["Edit 10–20 images", "Remove backgrounds", "Deliver via cloud"],
            ["Respond to queries", "Follow scripts", "Log interactions"],
            ["Answer 10–20 questions", "Provide feedback", "Submit online"],
            ["Reply to 20–50 comments", "Positive tone", "Follow guidelines"],
            ["Input 50–100 records", "Ensure accuracy", "Submit via cloud"],
            ["Schedule appointments", "Manage emails", "Organize tasks"],
            ["Gather online data", "Compile reports", "Submit via email"],
            ["Solve 5–10 questions", "Explain answers", "Submit online"],
            ["Write 1–2 posts weekly", "Incorporate keywords", "Submit via Google Docs"],
            ["Design 3–5 graphics", "Use Canva", "Deliver via cloud"],
            ["Test app features", "Report bugs", "Provide feedback"],
            ["Create email templates", "Send campaigns", "Track performance"],
            ["Solve 5–10 questions", "Explain answers", "Submit online"],
            ["Edit 10–20 images", "Enhance visuals", "Deliver via cloud"],
            ["Transcribe 5–10 minutes", "Ensure accuracy", "Submit via email"],
            ["Create 1–2 infographics", "Use Canva", "Deliver via cloud"],
            ["Solve 5–10 questions", "Explain answers", "Submit online"],
            ["Monitor posts", "Remove spam", "Engage users"],
            ["Navigate websites", "Report issues", "Provide feedback"],
            ["Write 2–3 email copies", "Follow brand tone", "Submit via email"],
            ["Design 5–10 slides", "Use PowerPoint", "Deliver via cloud"],
            ["Track analytics", "Generate reports", "Submit weekly"],
            ["Solve 5–10 questions", "Explain answers", "Submit online"],
            ["Edit 10–20 minutes of audio", "Enhance quality", "Deliver via cloud"],
            ["Create 1–2 Reels", "Use editing tools", "Deliver via platform"],
            ["Answer 5–10 questions", "Explain code", "Submit online"],
            ["Write 5–10 descriptions", "Highlight features", "Submit via email"],
            ["Test game features", "Report bugs", "Provide feedback"],
            ["Set up 1–2 ad campaigns", "Monitor performance", "Submit reports"],
            ["Solve 5–10 questions", "Explain answers", "Submit online"],
            ["Design 1–2 flyers", "Use Canva", "Deliver via cloud"],
            ["Proofread 500–1000 words", "Correct errors", "Submit via email"],
            ["Solve 5–10 questions", "Explain answers", "Submit online"],
            ["Create 1–2 mockups", "Use Figma or Canva", "Deliver via cloud"],
            ["Schedule 2–3 ads", "Use ad platforms", "Track performance"]
        ];
        const requirements = [
            ["Basic design skills", "Canva account", "No experience needed"],
            ["Strong math skills", "High school diploma", "Reliable internet"],
            ["Good writing skills", "Attention to detail", "Computer access"],
            ["Editing tool experience", "Creative skills", "Reliable internet"],
            ["Communication skills", "YouTube account", "Reliable internet"],
            ["Social media experience", "Canva or similar", "Good communication"],
            ["Basic editing skills", "Editing software", "Attention to detail"],
            ["Smartphone with WhatsApp", "Typing skills", "Reliable internet"],
            ["Basic computer skills", "Internet access", "No experience needed"],
            ["TikTok account", "Communication skills", "Reliable internet"],
            ["Basic Excel skills", "Attention to detail", "Computer access"],
            ["Organizational skills", "Google Suite knowledge", "Reliable internet"],
            ["Basic research skills", "Internet access", "No experience needed"],
            ["Geography knowledge", "High school diploma", "Internet access"],
            ["Writing skills", "Basic SEO knowledge", "Computer access"],
            ["Basic design skills", "Canva account", "Creative mindset"],
            ["Smartphone or tablet", "Basic tech skills", "Attention to detail"],
            ["Email marketing experience", "Marketing tools", "Good communication"],
            ["Science knowledge", "High school diploma", "Reliable internet"],
            ["Basic editing skills", "Editing tools", "Attention to detail"],
            ["Listening skills", "Typing proficiency", "Internet access"],
            ["Design experience", "Canva proficiency", "Creative mindset"],
            ["History knowledge", "High school diploma", "Internet access"],
            ["Communication skills", "Basic tech skills", "Reliable internet"],
            ["Basic tech skills", "Attention to detail", "Internet access"],
            ["Writing skills", "Brand awareness", "Computer access"],
            ["PowerPoint skills", "Design sense", "Internet access"],
            ["Analytics experience", "Social media knowledge", "Reliable internet"],
            ["English knowledge", "High school diploma", "Internet access"],
            ["Audio editing skills", "Editing software", "Reliable internet"],
            ["Video editing skills", "Instagram knowledge", "Creative mindset"],
            ["Basic coding knowledge", "High school diploma", "Internet access"],
            ["Writing skills", "E-commerce knowledge", "Computer access"],
            ["Gaming interest", "Basic tech skills", "Attention to detail"],
            ["Ad platform experience", "Marketing knowledge", "Reliable internet"],
            ["Economics knowledge", "High school diploma", "Internet access"],
            ["Design skills", "Canva account", "Creative mindset"],
            ["Proofreading skills", "Attention to detail", "Computer access"],
            ["Physics knowledge", "High school diploma", "Internet access"],
            ["Web design basics", "Figma or Canva", "Creative mindset"],
            ["Ad scheduling experience", "Social media knowledge", "Reliable internet"]
        ];
        const salaries = [
            "$5 - $15", "$3 - $8", "$3 - $7", "$8 - $20", "$2 - $5",
            "$8 - $18", "$5 - $12", "$3 - $7", "$2 - $4", "$2 - $5",
            "$3 - $8", "$5 - $12", "$3 - $7", "$3 - $8", "$8 - $18",
            "$5 - $15", "$3 - $8", "$8 - $20", "$3 - $8", "$5 - $12",
            "$5 - $12", "$8 - $20", "$3 - $8", "$5 - $10", "$5 - $12",
            "$5 - $10", "$5 - $15", "$5 - $12", "$3 - $8", "$8 - $20",
            "$5 - $15", "$3 - $8", "$5 - $10", "$5 - $12", "$8 - $23",
            "$3 - $8", "$5 - $12", "$5 - $10", "$3 - $8", "$8 - $20",
            "$5 - $15"
        ];

        const index = Math.floor(Math.random() * jobTitles.length);
        const isRemote = i < 124 ? "Remote" : remotes[Math.floor(Math.random() * remotes.length)]; // Ensure 144 remote jobs
        const location = states[Math.floor(Math.random() * states.length)];
        return {
            id: i + 26,
            title: jobTitles[index],
            company: companies[Math.floor(Math.random() * companies.length)],
            location: location,
            type: types[Math.floor(Math.random() * types.length)],
            salary: salaries[index],
            experience: experiences[Math.floor(Math.random() * experiences.length)],
            remote: isRemote,
            tags: tagSets[index],
            logo: "/api/placeholder/60/60",
            date: `${Math.floor(1 + Math.random() * 5)} days ago`,
            description: descriptions[index].replace("{city}", location.split(",")[0]),
            responsibilities: responsibilities[index],
            requirements: requirements[index],
            benefits: ["Flexible hours", "Online payments", isRemote === "Remote" ? "Work from home" : "Career growth"]
        };
    })
];

// Verify 159 remote jobs
const remoteCount = jobsData.filter(job => job.remote === "Remote").length;
console.log(`Remote jobs: ${remoteCount}`); // Should be ~144

// DOM Elements
// ================================
// DOM Elements
// ================================
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

// ================================
// Pagination & Jobs
// ================================
const jobsPerPage = 5;
let currentPage = 1;
let currentFilteredJobs = [...jobsData]; // Assuming jobsData is defined globally

// ================================
// Page Init
// ================================
document.addEventListener('DOMContentLoaded', () => {
    if (!DOM.jobsList) return console.error('Jobs list element not found');
    initRangeSlider();
    setupEventListeners();
    updateJobs();
});

// ================================
// Master Controller
// ================================
function updateJobs() {
    let filtered = applyFilters(jobsData);
    filtered = applySearch(filtered);
    filtered = applySorting(filtered);
    currentFilteredJobs = filtered;

    const paginated = getPaginatedJobs(filtered);
    renderJobs(paginated);
    renderPagination(filtered);
    const jobCountEl = document.getElementById('job-count');
    if (jobCountEl) jobCountEl.textContent = `(${filtered.length})`;
}

// ================================
// Pagination Logic
// ================================
function getPaginatedJobs(jobs) {
    const start = (currentPage - 1) * jobsPerPage;
    const end = start + jobsPerPage;
    return jobs.slice(start, end);
}

// ================================
// Filters
// ================================
function applyFilters(jobs) {
    const jobTypes = Array.from(document.querySelectorAll('input[name="job-type"]:checked')).map(el => el.value.toLowerCase());
    const experiences = Array.from(document.querySelectorAll('input[name="experience"]:checked')).map(el => el.value.toLowerCase());
    const remoteOptions = Array.from(document.querySelectorAll('input[name="remote"]:checked')).map(el => el.value.toLowerCase());
    const minSalary = parseInt(DOM.salaryRange.value) || 2;

    return jobs.filter(job => {
        const jobType = (job.type || '').toLowerCase();
        const jobExperience = (job.experience || '').toLowerCase();
        const jobRemote = (job.remote || '').toLowerCase();

        const matchesType = jobTypes.length === 0 || jobTypes.includes(jobType);
        const matchesExperience = experiences.length === 0 || experiences.includes(jobExperience);
        const matchesRemote = remoteOptions.length === 0 || remoteOptions.includes(jobRemote);

        const salaryMatch = job.salary.match(/\$(\d+)[^\d]*(\d+)?/);
        const jobMin = parseInt(salaryMatch?.[1]) || 0;
        const jobMax = parseInt(salaryMatch?.[2]) || jobMin;
        const matchesSalary = jobMax >= minSalary;

        return matchesType && matchesExperience && matchesRemote && matchesSalary;
    });
}

// ================================
// Search
// ================================
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

// ================================
// Sorting
// ================================
function applySorting(jobs) {
    const sortBy = DOM.sortSelect.value;
    const sorted = [...jobs];

    switch (sortBy) {
        case 'recent':
            return sorted.sort((a, b) => {
                const aTime = a.date.includes('day') ? parseInt(a.date) : 14;
                const bTime = b.date.includes('day') ? parseInt(b.date) : 14;
                return bTime - aTime;
            });
        case 'salary-high':
            return sorted.sort((a, b) => {
                const aMax = parseInt(a.salary.match(/\$(\d+)[^\d]*(\d+)/)?.[2] || a.salary.match(/\$(\d+)/)?.[1]);
                const bMax = parseInt(b.salary.match(/\$(\d+)[^\d]*(\d+)/)?.[2] || b.salary.match(/\$(\d+)/)?.[1]);
                return bMax - aMax;
            });
        case 'salary-low':
            return sorted.sort((a, b) => {
                const aMin = parseInt(a.salary.match(/\$(\d+)/)?.[1]);
                const bMin = parseInt(b.salary.match(/\$(\d+)/)?.[1]);
                return aMin - bMin;
            });
        default:
            return sorted;
    }
}

// ================================
// Render Jobs
// ================================
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
        card.dataset.id = job.id;
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
                showJobModal(job);
            }
        });
        DOM.jobsList.appendChild(card);
    });
}

// ================================
// Render Pagination
// ================================
function renderPagination(jobs) {
    const totalPages = Math.ceil(jobs.length / jobsPerPage);
    DOM.paginationNumbers.innerHTML = '';

    if (totalPages <= 1) {
        DOM.paginationContainer.style.display = 'none';
        DOM.prevPage.disabled = true;
        DOM.nextPage.disabled = true;
        return;
    }

    DOM.paginationContainer.style.display = 'flex';
    const pagesPerBlock = 5;
    const currentBlock = Math.ceil(currentPage / pagesPerBlock);
    let startPage = (currentBlock - 1) * pagesPerBlock + 1;
    let endPage = Math.min(startPage + pagesPerBlock - 1, totalPages);

    if (totalPages - startPage < pagesPerBlock - 1 && totalPages > pagesPerBlock) {
        startPage = Math.max(1, totalPages - pagesPerBlock + 1);
        endPage = totalPages;
    }

    if (startPage > 1) {
        addPageButton(1, totalPages);
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            DOM.paginationNumbers.appendChild(ellipsis);
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        addPageButton(i, totalPages);
    }

    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            DOM.paginationNumbers.appendChild(ellipsis);
        }
        addPageButton(totalPages, totalPages);
    }

    DOM.prevPage.disabled = currentPage === 1;
    DOM.nextPage.disabled = currentPage === totalPages;
}

// ================================
// Helper: Add Page Button
// ================================
function addPageButton(pageNum, totalPages) {
    const btn = document.createElement('button');
    btn.className = `pagination-btn page-number ${pageNum === currentPage ? 'active' : ''}`;
    btn.textContent = pageNum;
    btn.setAttribute('aria-label', `Go to page ${pageNum} of ${totalPages}`);
    btn.addEventListener('click', () => {
        currentPage = pageNum;
        updateJobs();
        window.scrollTo({ top: DOM.jobsList.offsetTop - 60, behavior: 'smooth' });
    });
    DOM.paginationNumbers.appendChild(btn);
}

// ================================
// Show Job Modal
// ================================
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

    // Prevent duplicate listeners
    const modalApplyBtn = DOM.modalJobContent.querySelector('.apply-btn');
    if (modalApplyBtn) {
        modalApplyBtn.replaceWith(modalApplyBtn.cloneNode(true));
        const newBtn = DOM.modalJobContent.querySelector('.apply-btn');
        newBtn.addEventListener('click', () => applyJob(job));
    }
}

// ================================
// Apply Job Function
// ================================
async function applyJob(job) {
    const token = localStorage.getItem("token");
    if (!token) return alert("Please login first.");

    try {
        const res = await fetch(`https://remj82.onrender.com/api/applications/apply/${job.id}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: job.title,
                company: job.company,
                description: job.description
            })
        });

        const data = await res.json();
        if (!res.ok) return alert(data.message || "Something went wrong.");

        // ✅ Success: show alert and update notification bell
        alert(data.message);

        // Update notifications dynamically
        if (typeof fetchNotifications === "function") {
            fetchNotifications();
        }

    } catch (err) {
        console.error(err);
        alert("Something went wrong. Please try again later.");
    }
}

// ================================
// Salary Range Slider
// ================================
function initRangeSlider() {
    if (!DOM.salaryRange || !DOM.salaryValue) return;

    DOM.salaryRange.min = 2;
    DOM.salaryRange.max = 23;
    DOM.salaryRange.step = 1;
    DOM.salaryRange.value = 2;
    DOM.salaryValue.textContent = `$${DOM.salaryRange.value}+`;

    DOM.salaryRange.addEventListener('input', () => {
        DOM.salaryValue.textContent = `$${DOM.salaryRange.value}+`;
        currentPage = 1;
        updateJobs();
    });
}

// ================================
// Setup Event Listeners
// ================================
function setupEventListeners() {
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

    DOM.searchBtn?.addEventListener('click', e => {
        e.preventDefault();
        currentPage = 1;
        updateJobs();
    });

    DOM.popularSearches.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            DOM.jobSearch.value = link.dataset.search;
            currentPage = 1;
            updateJobs();
        });
    });

    document.querySelectorAll('.checkbox-group input').forEach(cb => {
        cb.addEventListener('change', () => {
            currentPage = 1;
            updateJobs();
        });
    });

    DOM.clearFilters?.addEventListener('click', () => {
        document.querySelectorAll('.checkbox-group input').forEach(cb => cb.checked = false);
        DOM.salaryRange.value = 2;
        DOM.salaryValue.textContent = `$2+`;
        DOM.jobSearch.value = '';
        DOM.locationSearch.value = '';
        currentPage = 1;
        updateJobs();
    });

    DOM.sortSelect?.addEventListener('change', () => {
        currentPage = 1;
        updateJobs();
    });

    DOM.jobsList?.addEventListener('click', e => {
        if (e.target.classList.contains('apply-btn')) {
            const jobCard = e.target.closest('.job-card');
            const jobId = parseInt(jobCard.dataset.id);
            const jobData = jobsData.find(j => j.id === jobId);
            if (jobData) showJobModal(jobData);
        }
    });

    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', () => {
            DOM.jobModal.style.display = 'none';
        });
    });

    DOM.navToggle?.addEventListener('click', () => {
        DOM.nav.classList.toggle('active');
    });

    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', () => {
            localStorage.removeItem('token');
            localStorage.removeItem('userEmail');
            localStorage.removeItem('userProfile');
            window.location.href = '../index.html';
        });
    }
}
