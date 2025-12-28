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
    // Renewed & twisted first 20 jobs – same structure, similar low-skill remote gigs, but fresh titles/descriptions
    {
        id: 1,
        title: "Create Basic Thumbnails",
        company: "Empire State Creators",
        location: "New York, NY",
        type: "Freelance",
        salary: "$5 - $15",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Canva", "YouTube", "Thumbnails"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Design eye-catching thumbnails for YouTube videos of New York-based creators using Canva.",
        responsibilities: ["Create thumbnail from brief", "Use bold text & images", "Deliver PNG files"],
        requirements: ["Basic Canva knowledge", "Free account", "No experience required"],
        benefits: ["Flexible hours", "PayPal payments", "Work from home"]
    },
    {
        id: 2,
        title: "Solve Basic Physics Problems",
        company: "Lone Star Learning",
        location: "Austin, TX",
        type: "Part-time",
        salary: "$3 - $8",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Physics", "Tutoring", "Education"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Help students solve introductory physics problems online for a Texas education platform.",
        responsibilities: ["Answer 5–10 problems daily", "Provide step-by-step explanations", "Submit via portal"],
        requirements: ["Good physics basics", "High school level", "Reliable internet"],
        benefits: ["Flexible schedule", "Online payments", "Build teaching experience"]
    },
    {
        id: 3,
        title: "Write Amazon Product Descriptions",
        company: "Silicon Beach Retail",
        location: "San Francisco, CA",
        type: "Freelance",
        salary: "$3 - $7",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Copywriting", "E-Commerce", "Descriptions"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Write short, persuasive product descriptions for items sold on Amazon by San Francisco sellers.",
        responsibilities: ["Write 100–200 word listings", "Focus on benefits", "Submit via Google Docs"],
        requirements: ["Clear writing", "Basic English", "Computer access"],
        benefits: ["Work from home", "PayPal payments", "Flexible tasks"]
    },
    {
        id: 4,
        title: "Cut TikTok Clips from Longer Videos",
        company: "Chi-Town Content",
        location: "Chicago, IL",
        type: "Part-time",
        salary: "$8 - $20",
        experience: "Mid Level",
        remote: "Remote",
        tags: ["Video Editing", "TikTok", "Clipping"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Extract and edit short viral clips from long-form videos for Chicago creators on TikTok.",
        responsibilities: ["Cut 30–60 sec clips", "Add text overlays", "Export for upload"],
        requirements: ["CapCut or similar experience", "Creative timing", "Reliable internet"],
        benefits: ["Flexible hours", "Online payments", "Portfolio building"]
    },
    {
        id: 5,
        title: "Engage on Instagram Comments",
        company: "Miami Vibes Agency",
        location: "Miami, FL",
        type: "Freelance",
        salary: "$2 - $5",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Social Media", "Instagram", "Engagement"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Reply to comments on Instagram posts for Miami influencers and small brands.",
        responsibilities: ["Answer 20–50 comments daily", "Keep friendly tone", "Follow response guide"],
        requirements: ["Instagram account", "Good communication", "Stable internet"],
        benefits: ["Work from home", "PayPal payments", "Flexible schedule"]
    },
    {
        id: 6,
        title: "Schedule Facebook Posts",
        company: "Rain City Marketing",
        location: "Seattle, WA",
        type: "Part-time",
        salary: "$8 - $18",
        experience: "Mid Level",
        remote: "Remote",
        tags: ["Social Media", "Facebook", "Scheduling"],
        logo: "/api/placeholder/60/60",
        date: "4 days ago",
        description: "Plan and schedule posts on Facebook for Seattle-based local businesses and startups.",
        responsibilities: ["Prepare 3–5 posts weekly", "Use Meta Business Suite", "Reply to basic comments"],
        requirements: ["Facebook experience", "Basic Canva", "Organized mindset"],
        benefits: ["Remote work", "Online payments", "Learn social strategy"]
    },
    {
        id: 7,
        title: "Remove Backgrounds from Images",
        company: "Rocky Mountain Shops",
        location: "Denver, CO",
        type: "Freelance",
        salary: "$5 - $12",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Photo Editing", "Remove.bg", "E-Commerce"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Clean up product photos by removing backgrounds for Denver online retailers.",
        responsibilities: ["Process 10–20 images", "Use free tools", "Deliver transparent PNGs"],
        requirements: ["Basic editing knowledge", "Internet access", "Attention to detail"],
        benefits: ["Flexible tasks", "PayPal payments", "Work from home"]
    },
    {
        id: 8,
        title: "Chat Support via Facebook Messenger",
        company: "Beantown Startups",
        location: "Boston, MA",
        type: "Part-time",
        salary: "$3 - $7",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Customer Support", "Messenger", "Chat"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Handle customer inquiries through Facebook Messenger for Boston small businesses.",
        responsibilities: ["Reply to messages quickly", "Use provided templates", "Log conversations"],
        requirements: ["Facebook account", "Fast typing", "Reliable internet"],
        benefits: ["Work from anywhere", "Online payments", "Flexible shifts"]
    },
    {
        id: 9,
        title: "Complete Micro-Tasks on Platforms",
        company: "Nashville Feedback Co",
        location: "Nashville, TN",
        type: "Freelance",
        salary: "$2 - $4",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Microtasks", "Surveys", "Testing"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Perform quick online micro-tasks like categorizing images or short surveys for research.",
        responsibilities: ["Complete 20–50 small tasks", "Follow instructions", "Submit online"],
        requirements: ["Basic computer", "Internet", "No experience needed"],
        benefits: ["Quick payouts", "PayPal payments", "Work from home"]
    },
    {
        id: 10,
        title: "Moderate Instagram DMs",
        company: "Hollywood Influence",
        location: "Los Angeles, CA",
        type: "Freelance",
        salary: "$2 - $5",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Social Media", "Instagram", "Moderation"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Filter and respond to direct messages on Instagram for LA brands and creators.",
        responsibilities: ["Review 30–60 DMs daily", "Flag spam", "Reply to valid ones"],
        requirements: ["Instagram familiarity", "Good judgment", "Reliable internet"],
        benefits: ["Flexible schedule", "PayPal payments", "Work remotely"]
    },
    {
        id: 11,
        title: "Copy-Paste Data into Google Sheets",
        company: "Valley Data Hub",
        location: "San Jose, CA",
        type: "Part-time",
        salary: "$3 - $8",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Data Entry", "Google Sheets", "Admin"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Transfer information from PDFs or websites into shared Google Sheets for startups.",
        responsibilities: ["Enter 50–100 rows daily", "Maintain accuracy", "Share updated sheet"],
        requirements: ["Google account", "Basic typing", "Attention to detail"],
        benefits: ["Work from home", "Online payments", "Flexible hours"]
    },
    {
        id: 12,
        title: "Book Appointments for Local Shops",
        company: "Liberty Retail Group",
        location: "Philadelphia, PA",
        type: "Part-time",
        salary: "$5 - $12",
        experience: "Mid Level",
        remote: "Remote",
        tags: ["Virtual Assistant", "Scheduling", "Customer Service"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Manage online booking calendars for Philadelphia salons and service businesses.",
        responsibilities: ["Handle booking requests", "Confirm via email/text", "Update Calendly"],
        requirements: ["Organizational skills", "Google Calendar knowledge", "Reliable internet"],
        benefits: ["Remote work", "PayPal payments", "Flexible schedule"]
    },
    {
        id: 13,
        title: "Find Contact Info Online",
        company: "Energy City Research",
        location: "Houston, TX",
        type: "Freelance",
        salary: "$3 - $7",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Lead Generation", "Research", "Data"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Search for emails and phone numbers of businesses for Houston sales teams.",
        responsibilities: ["Research 20–30 leads", "Fill spreadsheet", "Verify accuracy"],
        requirements: ["Google search skills", "Basic Excel", "Internet access"],
        benefits: ["Work from home", "Online payments", "Quick tasks"]
    },
    {
        id: 14,
        title: "Answer Biology Questions",
        company: "Desert Learning Center",
        location: "Phoenix, AZ",
        type: "Part-time",
        salary: "$3 - $8",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Biology", "Tutoring", "Education"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Provide answers and explanations to high school biology questions online.",
        responsibilities: ["Solve 5–10 questions daily", "Write clear steps", "Submit via platform"],
        requirements: ["Basic biology knowledge", "High school level", "Internet access"],
        benefits: ["Flexible hours", "Online payments", "Teaching growth"]
    },
    {
        id: 15,
        title: "Write Short LinkedIn Posts",
        company: "Coastal Content Agency",
        location: "San Diego, CA",
        type: "Freelance",
        salary: "$8 - $18",
        experience: "Mid Level",
        remote: "Remote",
        tags: ["Copywriting", "LinkedIn", "Professional"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Craft professional LinkedIn posts for San Diego companies and executives.",
        responsibilities: ["Write 2–4 posts weekly", "Include hashtags", "Submit for approval"],
        requirements: ["Professional tone", "LinkedIn familiarity", "Good writing"],
        benefits: ["Work from home", "PayPal payments", "Portfolio building"]
    },
    {
        id: 16,
        title: "Design Pinterest Pins",
        company: "Lone Star Creative",
        location: "Dallas, TX",
        type: "Freelance",
        salary: "$5 - $15",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Canva", "Pinterest", "Graphics"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Create tall, attractive pins for Pinterest marketing of Dallas-based brands.",
        responsibilities: ["Design 5–10 pins weekly", "Use Canva templates", "Deliver PNGs"],
        requirements: ["Basic Canva skills", "Free account", "Creative eye"],
        benefits: ["Flexible tasks", "Online payments", "Work from home"]
    },
    {
        id: 17,
        title: "Test Web Forms & Buttons",
        company: "Buckeye Tech Labs",
        location: "Columbus, OH",
        type: "Part-time",
        salary: "$3 - $8",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Website Testing", "QA", "Usability"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Click through websites and report if forms, buttons, or links work correctly.",
        responsibilities: ["Follow test scripts", "Screenshot issues", "Submit feedback"],
        requirements: ["Computer or phone", "Basic browsing", "Detail-oriented"],
        benefits: ["Work from home", "Online payments", "Flexible hours"]
    },
    {
        id: 18,
        title: "Set Up Simple Email Newsletters",
        company: "Motor City Digital",
        location: "Indianapolis, IN",
        type: "Part-time",
        salary: "$8 - $20",
        experience: "Mid Level",
        remote: "Hybrid",
        tags: ["Email Marketing", "Newsletters", "Mailchimp"],
        logo: "/api/placeholder/60/60",
        date: "4 days ago",
        description: "Build and schedule basic newsletters using Mailchimp for local businesses.",
        responsibilities: ["Design template", "Add content", "Schedule sends"],
        requirements: ["Mailchimp knowledge", "Basic design sense", "Reliable internet"],
        benefits: ["Hybrid work", "Online payments", "Marketing experience"]
    },
    {
        id: 19,
        title: "Answer Chemistry Questions",
        company: "Sunshine State Tutors",
        location: "Jacksonville, FL",
        type: "Freelance",
        salary: "$3 - $8",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Chemistry", "Tutoring", "Education"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Solve and explain basic chemistry problems for online high school students.",
        responsibilities: ["Answer 5–10 questions daily", "Show workings", "Submit online"],
        requirements: ["Chemistry basics", "High school level", "Reliable internet"],
        benefits: ["Flexible schedule", "PayPal payments", "Work from home"]
    },
    {
        id: 20,
        title: "Color Correct Product Images",
        company: "Alamo E-Commerce",
        location: "San Antonio, TX",
        type: "Freelance",
        salary: "$5 - $12",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Photo Editing", "Color Correction", "E-Commerce"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Adjust colors and brightness of product photos for consistent look on online stores.",
        responsibilities: ["Edit 10–20 images", "Match reference", "Deliver edited files"],
        requirements: ["Basic editing tools", "Eye for color", "Attention to detail"],
        benefits: ["Work from home", "PayPal payments", "Flexible tasks"]
    },
    // New twisted 21–25 task types (kept same count as original)
    {
        id: 21,
        title: "Caption Short Video Clips",
        company: "Peach State Media",
        location: "Atlanta, GA",
        type: "Freelance",
        salary: "$5 - $12",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Captioning", "Video", "Subtitles"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Add accurate captions to short social media videos for Atlanta creators.",
        responsibilities: ["Transcribe & time captions", "Sync with video", "Export SRT or burn-in"],
        requirements: ["Good typing", "English fluency", "Internet access"],
        benefits: ["Flexible hours", "PayPal payments", "Work from home"]
    },
    {
        id: 22,
        title: "Design Simple Banners",
        company: "Rose City Studio",
        location: "Portland, OR",
        type: "Freelance",
        salary: "$8 - $20",
        experience: "Mid Level",
        remote: "Remote",
        tags: ["Canva", "Banners", "Advertising"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Create web and social media banners for Portland small businesses using Canva.",
        responsibilities: ["Design 2–4 banners", "Match brand colors", "Deliver various sizes"],
        requirements: ["Canva experience", "Basic design sense", "Creative flair"],
        benefits: ["Work from home", "Online payments", "Portfolio growth"]
    },
    {
        id: 23,
        title: "Answer Economics Questions",
        company: "Vegas Online Academy",
        location: "Las Vegas, NV",
        type: "Part-time",
        salary: "$3 - $8",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Economics", "Tutoring", "Education"],
        logo: "/api/placeholder/60/60",
        date: "3 days ago",
        description: "Help students understand basic economics concepts and solve related questions.",
        responsibilities: ["Answer 5–10 questions daily", "Explain clearly", "Submit via platform"],
        requirements: ["Basic economics knowledge", "High school level", "Internet access"],
        benefits: ["Flexible schedule", "PayPal payments", "Work from home"]
    },
    {
        id: 24,
        title: "Monitor Discord Community",
        company: "Queen City Gaming",
        location: "Charlotte, NC",
        type: "Part-time",
        salary: "$5 - $10",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["Moderation", "Discord", "Community"],
        logo: "/api/placeholder/60/60",
        date: "1 day ago",
        description: "Keep Discord servers clean and engaging for Charlotte-based online communities.",
        responsibilities: ["Watch chat activity", "Remove rule breakers", "Welcome new members"],
        requirements: ["Discord experience", "Fair judgment", "Reliable internet"],
        benefits: ["Work from home", "Online payments", "Flexible hours"]
    },
    {
        id: 25,
        title: "Record Feedback on Websites",
        company: "Hub City UX",
        location: "Boston, MA",
        type: "Freelance",
        salary: "$5 - $12",
        experience: "Entry Level",
        remote: "Remote",
        tags: ["User Testing", "Feedback", "UX"],
        logo: "/api/placeholder/60/60",
        date: "2 days ago",
        description: "Browse new websites and record your thoughts while completing simple tasks.",
        responsibilities: ["Follow scenario", "Speak thoughts aloud", "Submit screen recording"],
        requirements: ["Mic & screen recorder", "Clear English", "Internet access"],
        benefits: ["Flexible tasks", "PayPal payments", "Work from home"]
    },
    // Remaining 135 jobs – same structure & count, but using refreshed/twisted task pool
    ...Array.from({ length: 135 }, (_, i) => {
        const states = [
            "New York, NY", "Los Angeles, CA", "Chicago, IL", "Houston, TX", "Phoenix, AZ",
            "Philadelphia, PA", "San Antonio, TX", "San Diego, CA", "Dallas, TX", "San Jose, CA",
            "Austin, TX", "Jacksonville, FL", "San Francisco, CA", "Columbus, OH", "Indianapolis, IN",
            "Seattle, WA", "Denver, CO", "Boston, MA", "Nashville, TN", "Miami, FL",
            "Atlanta, GA", "Portland, OR", "Las Vegas, NV", "Charlotte, NC", "Minneapolis, MN"
        ];
        const jobTitles = [
            "Create Basic Thumbnails", "Solve Basic Physics Problems", "Write Amazon Product Descriptions", "Cut TikTok Clips from Longer Videos",
            "Engage on Instagram Comments", "Schedule Facebook Posts", "Remove Backgrounds from Images",
            "Chat Support via Facebook Messenger", "Complete Micro-Tasks on Platforms", "Moderate Instagram DMs",
            "Copy-Paste Data into Google Sheets", "Book Appointments for Local Shops", "Find Contact Info Online",
            "Answer Biology Questions", "Write Short LinkedIn Posts", "Design Pinterest Pins",
            "Test Web Forms & Buttons", "Set Up Simple Email Newsletters", "Answer Chemistry Questions", "Color Correct Product Images",
            "Caption Short Video Clips", "Design Simple Banners", "Answer Economics Questions", "Monitor Discord Community",
            "Record Feedback on Websites", "Write Ad Copy for Facebook", "Create Google Slides Decks", "Track Pinterest Analytics",
            "Answer Grammar Questions", "Trim Podcast Episodes", "Edit Instagram Stories", "Explain Simple HTML/CSS",
            "Write Etsy Listings", "Test Mobile Games", "Create Basic Google Ads", "Answer Statistics Questions",
            "Design Event Posters", "Proofread Social Media Captions", "Answer Algebra Problems", "Make Figma Mockups",
            "Boost Posts on Social Media"
        ];
        const companies = [
            "Metro Creators", "TechFlow Solutions", "City Digital Agency", "Nova Media Group",
            "Spark Innovations", "CloudWave Studios", "NextStep Analytics", "BrightSide Marketing",
            "Urban Data Co", "Sunset Creative", "BlueWave Designs", "Horizon Startups",
            "Peak Education", "Sky Digital", "Riverside Insights"
        ];
        const types = ["Freelance", "Part-time"];
        const experiences = ["Entry Level", "Mid Level"];
        const remotes = ["Remote", "Hybrid", "On-site"];
        const tagSets = [
            ["Canva", "YouTube"], ["Physics", "Tutoring"], ["Copywriting", "Amazon"],
            ["Video Editing", "TikTok"], ["Social Media", "Instagram"], ["Social Media", "Facebook"],
            ["Photo Editing", "E-Commerce"], ["Customer Support", "Messenger"], ["Microtasks", "Surveys"],
            ["Social Media", "Moderation"], ["Data Entry", "Google Sheets"], ["Virtual Assistant", "Calendly"],
            ["Lead Research", "Data"], ["Biology", "Education"], ["Copywriting", "LinkedIn"],
            ["Canva", "Pinterest"], ["Testing", "QA"], ["Email Marketing", "Newsletters"],
            ["Chemistry", "Tutoring"], ["Photo Editing", "Color"], ["Captioning", "Video"],
            ["Canva", "Banners"], ["Economics", "Tutoring"], ["Moderation", "Discord"],
            ["User Testing", "UX"], ["Copywriting", "Facebook Ads"], ["Google Slides", "Design"],
            ["Pinterest", "Analytics"], ["Grammar", "Tutoring"], ["Podcast Editing", "Audio"],
            ["Instagram", "Stories"], ["HTML", "Tutoring"], ["Writing", "Etsy"],
            ["Testing", "Gaming"], ["Google Ads", "Marketing"], ["Statistics", "Tutoring"],
            ["Canva", "Posters"], ["Proofreading", "Social Media"], ["Algebra", "Tutoring"],
            ["Figma", "Mockups"], ["Social Media", "Boosting"]
        ];
        const descriptions = [
            `Design thumbnails for YouTube videos in {city} using Canva.`,
            `Solve introductory physics problems for students in {city}.`,
            `Write persuasive product descriptions for Amazon sellers in {city}.`,
            `Cut viral clips from long videos for {city} creators.`,
            `Reply to Instagram comments for {city} brands.`,
            `Schedule posts on Facebook for businesses in {city}.`,
            `Remove backgrounds from product photos for {city} shops.`,
            `Provide chat support via Messenger for {city} companies.`,
            `Complete quick micro-tasks and surveys for {city} platforms.`,
            `Moderate direct messages on Instagram for {city} accounts.`,
            `Transfer data into Google Sheets for {city} startups.`,
            `Manage appointment bookings for {city} service businesses.`,
            `Research contact details for leads in {city}.`,
            `Answer biology questions for students in {city}.`,
            `Write professional LinkedIn posts for {city} companies.`,
            `Create Pinterest pins for marketing in {city}.`,
            `Test website buttons and forms for {city} startups.`,
            `Build simple newsletters for {city} businesses.`,
            `Solve chemistry problems for students in {city}.`,
            `Color correct product images for {city} e-commerce.`,
            `Add captions to short videos for {city} creators.`,
            `Design banners for websites and social media in {city}.`,
            `Answer economics questions for online students in {city}.`,
            `Moderate Discord servers for {city} communities.`,
            `Record usability feedback on websites from {city}.`,
            `Write short ad copy for Facebook campaigns in {city}.`,
            `Create presentation decks in Google Slides for {city} teams.`,
            `Monitor and report Pinterest analytics for {city} brands.`,
            `Answer grammar and English questions for students in {city}.`,
            `Trim and clean podcast audio for {city} creators.`,
            `Edit Stories for Instagram accounts in {city}.`,
            `Explain basic HTML/CSS concepts to learners in {city}.`,
            `Write product listings for Etsy shops in {city}.`,
            `Test mobile games and report bugs for {city} developers.`,
            `Set up simple Google Ads for {city} businesses.`,
            `Solve statistics problems for students in {city}.`,
            `Design event posters using Canva for {city} organizers.`,
            `Proofread captions and posts for {city} social accounts.`,
            `Solve algebra problems for online learners in {city}.`,
            `Create basic mockups in Figma for {city} startups.`,
            `Boost and manage social media posts for {city} brands.`
        ];
        const responsibilities = [
            ["Create from brief", "Use Canva", "Deliver PNGs"],
            ["Solve 5–10 problems", "Explain steps", "Submit online"],
            ["Write 100–200 words", "Focus on benefits", "Submit via Docs"],
            ["Cut 30–60 sec clips", "Add text", "Export ready files"],
            ["Reply to 20–50 comments", "Friendly tone", "Follow guide"],
            ["Create 3–5 posts weekly", "Use scheduler", "Light engagement"],
            ["Process 10–20 images", "Clean removal", "Deliver PNGs"],
            ["Reply quickly", "Use templates", "Log chats"],
            ["Complete 20–50 tasks", "Follow rules", "Submit online"],
            ["Review 30–60 DMs", "Filter spam", "Respond appropriately"],
            ["Enter 50–100 rows", "Check accuracy", "Share sheet"],
            ["Handle bookings", "Confirm appointments", "Update calendar"],
            ["Find 20–30 contacts", "Fill sheet", "Verify info"],
            ["Solve 5–10 questions", "Explain clearly", "Submit online"],
            ["Write 2–4 posts weekly", "Add hashtags", "Submit draft"],
            ["Design 5–10 pins", "Use Canva", "Deliver files"],
            ["Follow test steps", "Report issues", "Screenshot bugs"],
            ["Design template", "Add content", "Schedule send"],
            ["Solve 5–10 questions", "Show workings", "Submit online"],
            ["Edit 10–20 images", "Match colors", "Deliver files"],
            ["Transcribe & sync", "Accurate timing", "Export captions"],
            ["Design 2–4 banners", "Match branding", "Various sizes"],
            ["Solve 5–10 questions", "Explain concepts", "Submit online"],
            ["Monitor chat", "Enforce rules", "Engage members"],
            ["Complete tasks", "Record screen & voice", "Submit feedback"],
            ["Write short ads", "Clear call-to-action", "Submit copy"],
            ["Design 5–10 slides", "Use templates", "Deliver link"],
            ["Track metrics", "Weekly report", "Suggest improvements"],
            ["Solve 5–10 questions", "Explain rules", "Submit online"],
            ["Trim episodes", "Add intro/outro", "Export clean audio"],
            ["Edit 1–3 Stories", "Add effects", "Deliver assets"],
            ["Answer 5–10 questions", "Explain code", "Submit online"],
            ["Write 5–10 listings", "SEO keywords", "Submit text"],
            ["Play & test", "Report bugs", "Give feedback"],
            ["Set up campaigns", "Choose keywords", "Monitor spend"],
            ["Solve 5–10 problems", "Explain steps", "Submit online"],
            ["Design posters", "Use Canva", "Deliver print-ready"],
            ["Proofread 500–1000 words", "Fix errors", "Submit clean"],
            ["Solve 5–10 problems", "Show steps", "Submit online"],
            ["Create 1–2 mockups", "Use Figma/Canva", "Deliver files"],
            ["Boost posts", "Set budget", "Track results"]
        ];
        const requirements = [
            ["Basic Canva", "Free account", "No experience"],
            ["Physics basics", "High school", "Internet"],
            ["Clear writing", "English", "Computer"],
            ["CapCut or similar", "Timing sense", "Internet"],
            ["Instagram use", "Communication", "Internet"],
            ["Facebook knowledge", "Basic Canva", "Organized"],
            ["Editing tools", "Attention to detail", "Internet"],
            ["Messenger access", "Typing speed", "Internet"],
            ["Basic computer", "Follow instructions", "No experience"],
            ["Instagram savvy", "Judgment", "Internet"],
            ["Google Sheets", "Typing", "Detail-oriented"],
            ["Calendly/Google Calendar", "Organization", "Internet"],
            ["Google search", "Basic Excel", "Internet"],
            ["Biology basics", "High school", "Internet"],
            ["Professional writing", "LinkedIn", "Computer"],
            ["Canva skills", "Creative", "Free account"],
            ["Browser", "Basic tech", "Detail-oriented"],
            ["Mailchimp or similar", "Design eye", "Internet"],
            ["Chemistry basics", "High school", "Internet"],
            ["Editing tools", "Color sense", "Detail-oriented"],
            ["Typing & listening", "English", "Internet"],
            ["Canva proficiency", "Branding", "Creative"],
            ["Economics basics", "High school", "Internet"],
            ["Discord use", "Fairness", "Internet"],
            ["Mic & recorder", "Clear speech", "Internet"],
            ["Ad writing", "Facebook knowledge", "Computer"],
            ["Google Slides", "Design sense", "Internet"],
            ["Pinterest knowledge", "Analytics", "Internet"],
            ["Grammar knowledge", "High school", "Internet"],
            ["Audio editing", "Software access", "Internet"],
            ["Story editing", "Instagram", "Creative"],
            ["Basic HTML/CSS", "High school", "Internet"],
            ["Writing skills", "Etsy knowledge", "Computer"],
            ["Mobile device", "Gaming interest", "Detail"],
            ["Google Ads access", "Basic marketing", "Internet"],
            ["Statistics basics", "High school", "Internet"],
            ["Canva", "Creative", "Free account"],
            ["Proofreading", "Detail", "Computer"],
            ["Algebra knowledge", "High school", "Internet"],
            ["Figma or Canva", "Design basics", "Creative"],
            ["Ad platform", "Social knowledge", "Internet"]
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
        const isRemote = i < 124 ? "Remote" : remotes[Math.floor(Math.random() * remotes.length)]; // ~144 remote
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

// Verify remote count
const remoteCount = jobsData.filter(job => job.remote === "Remote").length;
console.log(`Remote jobs: ${remoteCount}`); // Should be ~144

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
// Render Pagination (Block-based, 5-pages per block)
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

    // First page + leading ellipsis
    if (startPage > 1) {
        addPageButton(1, totalPages);
        if (startPage > 2) addEllipsis();
    }

    // Middle pages (current block)
    for (let i = startPage; i <= endPage; i++) {
        addPageButton(i, totalPages);
    }

    // Last page + trailing ellipsis
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) addEllipsis();
        addPageButton(totalPages, totalPages);
    }

    // Enable / Disable Prev / Next based on blocks
    DOM.prevPage.disabled = currentPage <= pagesPerBlock;
    DOM.nextPage.disabled = endPage >= totalPages;
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
// Helper: Add Ellipsis
// ================================
function addEllipsis() {
    const ellipsis = document.createElement('span');
    ellipsis.className = 'pagination-ellipsis';
    ellipsis.textContent = '...';
    DOM.paginationNumbers.appendChild(ellipsis);
}

// ================================
// Prev / Next Block Buttons Logic
// ================================
DOM.prevPage?.addEventListener('click', () => {
    const pagesPerBlock = 5;
    if (currentPage > 1) {
        // Jump to previous block
        currentPage = Math.max(1, currentPage - pagesPerBlock);
        updateJobs();
        window.scrollTo({ top: DOM.jobsList.offsetTop - 60, behavior: 'smooth' });
    }
});

DOM.nextPage?.addEventListener('click', () => {
    const pagesPerBlock = 5;
    const totalPages = Math.ceil(currentFilteredJobs.length / jobsPerPage);
    if (currentPage < totalPages) {
        // Jump to next block
        currentPage = Math.min(totalPages, currentPage + pagesPerBlock);
        updateJobs();
        window.scrollTo({ top: DOM.jobsList.offsetTop - 60, behavior: 'smooth' });
    }
});

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
        <button id="modal-apply-btn" class="btn btn-primary btn-block">Apply Now</button>`;

    DOM.jobModal.style.display = 'block';

    // Prevent duplicate listeners
       // Apply button in modal
    const modalApplyBtn = DOM.modalJobContent.querySelector('#modal-apply-btn');
    modalApplyBtn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        applyJob(job);
    };
    }

//apply job redirect logic
// ================================
// Temporary Notification Helper
// ================================
function showTemporaryNotification(message, color = "green") {
    // Remove existing message if any
    const existingMsg = document.getElementById("apply-error-msg");
    if (existingMsg) existingMsg.remove();

    // Create new notification div
    const msg = document.createElement("div");
    msg.id = "apply-error-msg";
    msg.textContent = message;

    msg.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: ${color};
        color: white;
        padding: 14px 28px;
        border-radius: 8px;
        font-weight: 500;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideDown 0.4s ease;
    `;

    document.body.appendChild(msg);

    // Auto remove after 5 seconds
    setTimeout(() => {
        msg.remove();
    }, 5000);

    // Add slideDown animation once
    if (!document.getElementById("slideDownStyle")) {
        const style = document.createElement("style");
        style.id = "slideDownStyle";
        style.textContent = `
            @keyframes slideDown {
                from { opacity: 0; transform: translate(-50%, -20px); }
                to { opacity: 1; transform: translateX(-50%); }
            }
        `;
        document.head.appendChild(style);
    }
}

// ================================
// Apply Job Function
// ================================
async function applyJob(job) {
    const token = localStorage.getItem("token");
    if (!token) {
        showTemporaryNotification("Please login first to apply.", "red");
        setTimeout(() => window.location.href = "login.html", 2000);
        return;
    }

    // Fetch user profile
    let user;
    try {
        const res = await fetch("https://remj82.onrender.com/api/auth/user", {
            headers: { Authorization: `Bearer ${token}` }
        });
        if (!res.ok) throw new Error("Failed to fetch user");
        const data = await res.json();
        user = data.user;
    } catch (err) {
        console.error("Failed to fetch user:", err);
        showTemporaryNotification("Unable to verify your profile. Try again later.", "red");
        return;
    }

    // Check verification
    if (!user.verified) {
        showTemporaryNotification("Your account is not verified to apply.", "red");
        return;
    }

    // Check connects
    if ((user.connects || 0) <= 0) {
        showTemporaryNotification("You don’t have enough connects to apply.", "red");
        setTimeout(() => window.location.href = "pricing.html", 4000);
        return;
    }

    // Apply job request
    try {
        const res = await fetch(`https://remj82.onrender.com/api/applications/apply/${String(job.id)}`, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
               jobId: String(job.id),
               title: job.title,
               company: job.company,
               description: job.description
           })

        });

        const data = await res.json();

        // Already applied
        if (data.alreadyApplied) {
            showTemporaryNotification("You have already applied for this job. Try another.", "#865711ff");
            return;
        }

        // Not enough connects (backend fallback)
        if (data.limitReached) {
            showTemporaryNotification("You don’t have enough connects to apply.", "red");
            setTimeout(() => window.location.href = "pricing.html", 4000);
            return;
        }

        // Successful application
        if (res.ok && data.success) {
            // Update local user connects
            user.connects -= 1;

            showTemporaryNotification("Application submitted successfully!", "green");

            // Update in-site notification bell immediately
            const notificationCountEl = document.getElementById("notificationCount");
            if (notificationCountEl) {
                let count = parseInt(notificationCountEl.textContent) || 0;
                notificationCountEl.textContent = count >= 9 ? "9+" : count + 1;
                notificationCountEl.style.display = "flex";
            }
        } else {
            // Any other error fallback
            showTemporaryNotification(data.message || "Unable to apply. Try again later.", "red");
        }

    } catch (err) {
        console.error("Apply error:", err);
        showTemporaryNotification("Unable to apply. Please try again later.", "red");
    }
}


// Salary Range Slider

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


// Setup Event Listeners

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
 
// NOTIFICATION BELL SYNC (Shared across pages)
 
document.addEventListener("DOMContentLoaded", () => {
  const token = localStorage.getItem("token");
  if (!token) return;

  const bell = document.getElementById("notificationBell");
  const countSpan = document.getElementById("notificationCount");

  if (!bell || !countSpan) return;

  // Fetch unread count
  async function updateCount() {
    try {
      const res = await fetch("https://remj82.onrender.com/api/notifications", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      const unread = (data || []).filter(n => !n.read).length;

      countSpan.textContent = unread > 9 ? "9+" : unread;
      countSpan.style.display = unread > 0 ? "flex" : "none";
    } catch (err) {
      console.error("Notification fetch error:", err);
    }
  }

  // Click → Mark all read + go to notifications.html
  bell.addEventListener("click", async (e) => {
    e.preventDefault();
    try {
      await fetch("https://remj82.onrender.com/api/notifications/mark-all-read", {
        method: "PATCH",
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.error("Mark all read failed:", err);
    } finally {
      window.location.href = "./notifications.html"; // ← CORRECT PATH
    }
  });

  // Initial + every 15 seconds
  updateCount();
  setInterval(updateCount, 15000);
});



  // Footer legal dropdowns – pure lightweight JS
  document.querySelectorAll('.legal-trigger').forEach(trigger => {
    trigger.addEventListener('click', function () {
      const item = this.closest('.legal-item');
      const isOpen = item.classList.toggle('open');
      
      // Update aria for accessibility
      this.setAttribute('aria-expanded', isOpen);
      
      // Close others when one opens (optional – feels cleaner)
      document.querySelectorAll('.legal-item.open').forEach(other => {
        if (other !== item) {
          other.classList.remove('open');
          other.querySelector('.legal-trigger').setAttribute('aria-expanded', 'false');
        }
      });
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.footer-legal')) {
      document.querySelectorAll('.legal-item.open').forEach(item => {
        item.classList.remove('open');
        item.querySelector('.legal-trigger').setAttribute('aria-expanded', 'false');
      });
    }
  });