// Job data with varied types and experience levels for filter testing
const jobsData = [
    {
        "id": 1,
        "title": "Design Simple Logo",
        "company": "Nairobi Prints",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 2000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Branding"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Design simple logos for small businesses like matatu companies or local shops in Nairobi using Canva.",
        "responsibilities": ["Create a logo based on client brief", "Use Canva templates", "Deliver PNG/JPG files"],
        "requirements": ["Basic computer skills", "Free Canva account", "No prior design experience needed"],
        "benefits": ["Flexible hours", "M-Pesa payments", "Work from home"]
    },
    {
        "id": 2,
        "title": "Create Social Media Graphics",
        "company": "Mombasa Digital",
        "location": "Mombasa, Kenya",
        "type": "Part-time",
        "salary": "KES 300 - 1000",
        "experience": "Mid Level",
        "remote": "Hybrid",
        "tags": ["Canva", "Social Media", "Marketing"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Design Instagram/Facebook posts for coastal businesses like hotels or tour agencies using Canva.",
        "responsibilities": ["Design 1–2 social media posts", "Follow client’s branding", "Deliver via WhatsApp"],
        "requirements": ["Smartphone/laptop with internet", "Free Canva account", "Basic creativity"],
        "benefits": ["Quick M-Pesa payments", "Work from anywhere", "Learn marketing"]
    },
    {
        "id": 3,
        "title": "Software Developer",
        "company": "Tech Nairobi",
        "location": "Nairobi, Kenya",
        "type": "Full-time",
        "salary": "KES 500 - 2000",
        "experience": "Senior Level",
        "remote": "On-site",
        "tags": ["JavaScript", "Python", "Web Development"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Develop web applications for Kenyan startups using modern frameworks.",
        "responsibilities": ["Write clean code", "Collaborate with team", "Deploy applications"],
        "requirements": ["3+ years coding experience", "Degree in Computer Science", "Git knowledge"],
        "benefits": ["Competitive salary", "M-Pesa payments", "Career growth"]
    },
    {
        "id": 4,
        "title": "Basic Photo Editing",
        "company": "Eldoret Media",
        "location": "Eldoret, Kenya",
        "type": "Contract",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["GIMP", "Photo Editing", "E-commerce"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Edit photos for local e-commerce shops like those on Kilimall, cropping or adding filters using GIMP.",
        "responsibilities": ["Crop/resize 1–2 photos", "Apply basic filters", "Deliver via WhatsApp"],
        "requirements": ["Free GIMP software", "Basic computer skills", "Internet access"],
        "benefits": ["Quick tasks", "M-Pesa payments", "Learn photo editing"]
    },
    {
        "id": 5,
        "title": "Create Poster for Market",
        "company": "Nakuru Traders",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Marketing", "Local Business"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Design posters for Nakuru market stalls or small businesses to advertise products like farm produce.",
        "responsibilities": ["Create 1 poster", "Use Canva templates", "Deliver via email"],
        "requirements": ["Free Canva account", "Basic creativity", "Internet access"],
        "benefits": ["Support local traders", "M-Pesa payments", "Work from home"]
    },
    {
        "id": 6,
        "title": "Solve Maths Calculations",
        "company": "Nairobi Tutors",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Math", "Tutoring", "KCSE"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Solve KCSE-level math problems (algebra, geometry) for online tutoring platforms.",
        "responsibilities": ["Solve 5–10 math questions", "Show workings clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE math knowledge", "Basic calculator", "Internet access"],
        "benefits": ["M-Pesa payments", "Flexible hours", "Help students"]
    },
    {
        "id": 7,
        "title": "Geography Research Summary",
        "company": "Kenyatta Uni Press",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 2000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Geography", "Research", "Writing"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 200–300 word summaries on Kenyan geography topics like Rift Valley or coastal erosion.",
        "responsibilities": ["Research topic using Google", "Write 200-word summary", "Deliver via email"],
        "requirements": ["Basic research skills", "Google Docs access", "English/Swahili fluency"],
        "benefits": ["M-Pesa payments", "Learn Kenyan geography", "Flexible hours"]
    },
    {
        "id": 8,
        "title": "Answer Short Geography Questions",
        "company": "Mombasa Edu Hub",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Geography", "Quizzes", "KCSE"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Answer 5–10 short geography questions (e.g., ‘Name Kenya’s lakes’).",
        "responsibilities": ["Answer 5–10 questions", "Use simple sentences", "Deliver via WhatsApp"],
        "requirements": ["KCSE geography knowledge", "Internet access", "Smartphone/laptop"],
        "benefits": ["Quick tasks", "M-Pesa payments", "Support education"]
    },
    {
        "id": 9,
        "title": "Summarize News Articles",
        "company": "Daily Nation Freelance",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Research", "News"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Summarize Kenyan news articles (e.g., from Nation or Standard) in 100–200 words.",
        "responsibilities": ["Read 1 article", "Write 100-word summary", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Access to news sites", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Stay updated on news", "Flexible hours"]
    },
    {
        "id": 10,
        "title": "Create Study Notes",
        "company": "Kisumu Tutors",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Education", "Notes", "KCSE"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Create bullet-point notes for KCSE subjects like history or biology.",
        "responsibilities": ["Summarize 1 chapter", "Write 10–20 bullet points", "Deliver via email"],
        "requirements": ["KCSE knowledge", "Google Docs access", "Basic research skills"],
        "benefits": ["M-Pesa payments", "Help students", "Work from home"]
    },
    {
        "id": 11,
        "title": "Write Short Blog Posts",
        "company": "Safaricom Bloggers",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 2000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Blogging", "Tourism"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Write 300-word blog posts on Kenyan topics like tourism or tech for local blogs.",
        "responsibilities": ["Write 1 post on given topic", "Use simple English", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Build writing portfolio", "Flexible hours"]
    },
    {
        "id": 12,
        "title": "Product Descriptions",
        "company": "Jumia Kenya",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "E-commerce", "Marketing"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 50–100 word descriptions for products on Kenyan e-commerce platforms like Jumia.",
        "responsibilities": ["Write 1 description", "Highlight product features", "Deliver via email"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn e-commerce"]
    },
    {
        "id": 13,
        "title": "Write Social Media Captions",
        "company": "Mombasa Marketing",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 700",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Social Media", "Writing", "Marketing"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Write 10–20 short captions for Kenyan businesses’ social media posts.",
        "responsibilities": ["Write 10 captions", "Use engaging language", "Deliver via WhatsApp"],
        "requirements": ["Social media familiarity", "English/Swahili fluency", "Smartphone access"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn marketing"]
    },
    {
        "id": 14,
        "title": "Transcribe Short Audio",
        "company": "Nairobi Podcasts",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Transcription", "Audio", "Swahili"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Transcribe 5-min Kenyan podcast clips in English or Swahili.",
        "responsibilities": ["Listen to 5-min audio", "Type transcript", "Deliver via Google Docs"],
        "requirements": ["Good listening skills", "Free Otter.ai account", "Internet access"],
        "benefits": ["M-Pesa payments", "Flexible hours", "Learn transcription"]
    },
    {
        "id": 15,
        "title": "Rewrite Sentences",
        "company": "Kisumu Writers",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Editing", "English"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Paraphrase 10–20 sentences for Kenyan educational content.",
        "responsibilities": ["Rewrite 10 sentences", "Keep meaning clear", "Deliver via email"],
        "requirements": ["English fluency", "Basic writing skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Improve writing skills"]
    },
    {
        "id": 16,
        "title": "Data Entry",
        "company": "Nairobi Data Solutions",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Data Entry", "Excel", "Admin"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Enter data like customer names or sales into spreadsheets for Kenyan businesses.",
        "responsibilities": ["Input 20–50 data points", "Use Google Sheets", "Deliver via email"],
        "requirements": ["Basic Excel skills", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Flexible hours", "Learn data skills"]
    },
    {
        "id": 17,
        "title": "Organize Emails",
        "company": "Mombasa Admin",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 700",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Email", "Admin", "Organization"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Sort and label 20–50 emails for Kenyan startups using Gmail.",
        "responsibilities": ["Sort 20 emails", "Label by category", "Report via WhatsApp"],
        "requirements": ["Gmail familiarity", "Basic organization skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn admin skills"]
    },
    {
        "id": 18,
        "title": "Fill Online Forms",
        "company": "Eldoret Services",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 600",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Forms", "Admin", "Data"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Fill 5–10 online forms for Kenyan businesses like loan applications.",
        "responsibilities": ["Complete 5 forms", "Enter accurate data", "Deliver via email"],
        "requirements": ["Basic computer skills", "Internet access", "Attention to detail"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Support local businesses"]
    },
    {
        "id": 19,
        "title": "Schedule Social Media Posts",
        "company": "Nakuru Digital",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 700",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Social Media", "Scheduling", "Marketing"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Queue 5–10 social media posts for Kenyan brands using Buffer.",
        "responsibilities": ["Schedule 5 posts", "Use client content", "Confirm via WhatsApp"],
        "requirements": ["Social media familiarity", "Free Buffer account", "Internet access"],
        "benefits": ["M-Pesa payments", "Learn marketing", "Flexible hours"]
    },
    {
        "id": 20,
        "title": "List Contacts",
        "company": "Nairobi Networks",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Research", "Contacts", "Admin"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Find 10–20 emails or phone numbers for Kenyan businesses online.",
        "responsibilities": ["Research 10 contacts", "List in Google Sheets", "Deliver via email"],
        "requirements": ["Basic Google skills", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn research skills"]
    },
    {
        "id": 21,
        "title": "Upload Blog Posts",
        "company": "Kenya Bloggers",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["WordPress", "Website", "Content"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Upload text/images to WordPress for Kenyan blogs like travel or tech sites.",
        "responsibilities": ["Upload 1 blog post", "Add images and format", "Confirm via email"],
        "requirements": ["Basic computer skills", "Internet access", "Free WordPress trial"],
        "benefits": ["M-Pesa payments", "Learn website skills", "Flexible hours"]
    },
    {
        "id": 22,
        "title": "Basic Website Testing",
        "company": "Mombasa Tech",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Website", "Testing", "QA"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Test Kenyan websites for broken links or errors by clicking through pages.",
        "responsibilities": ["Test 5 pages", "Report issues", "Deliver via WhatsApp"],
        "requirements": ["Basic browsing skills", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn QA skills"]
    },
    {
        "id": 23,
        "title": "Add Product Listings",
        "company": "Kilimall Freelance",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["E-commerce", "Website", "Data"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Add 5–10 products to Kenyan e-commerce sites like Kilimall.",
        "responsibilities": ["Enter 5 product details", "Upload images", "Deliver via email"],
        "requirements": ["Basic computer skills", "Internet access", "Attention to detail"],
        "benefits": ["M-Pesa payments", "Support e-commerce", "Flexible hours"]
    },
    {
        "id": 24,
        "title": "Update Website Text",
        "company": "Eldoret Web",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Website", "Editing", "Content"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Edit 100–200 words on Kenyan websites like NGO homepages.",
        "responsibilities": ["Edit 1 section of text", "Ensure clarity", "Confirm via email"],
        "requirements": ["English fluency", "Internet access", "Basic editing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn web editing"]
    },
    {
        "id": 25,
        "title": "Social Media Page Setup",
        "company": "Nakuru Social",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Social Media", "Website", "Marketing"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Set up basic Facebook/Instagram pages for Kenyan businesses.",
        "responsibilities": ["Create 1 page", "Add bio and logo", "Deliver via WhatsApp"],
        "requirements": ["Social media familiarity", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Learn marketing", "Flexible hours"]
    },
    {
        "id": 26,
        "title": "Complete Online Surveys",
        "company": "Kenya Surveys",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Surveys", "Microtasks", "Feedback"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Complete 5–10 short surveys on Kenyan products or services.",
        "responsibilities": ["Answer 5 questions", "Provide honest feedback", "Submit via platform"],
        "requirements": ["Smartphone access", "Internet connection", "Basic English"],
        "benefits": ["M-Pesa payments", "Quick tasks", "No skills needed"]
    },
    {
        "id": 27,
        "title": "Tag Images for AI",
        "company": "Mombasa AI Hub",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 700",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["AI", "Images", "Microtasks"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Label 20–50 images (e.g., ‘maize’ or ‘matatu’) for AI training.",
        "responsibilities": ["Tag 20 images", "Follow guidelines", "Deliver via platform"],
        "requirements": ["Smartphone/laptop", "Internet access", "Attention to detail"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn AI basics"]
    },
    {
        "id": 28,
        "title": "Review Mobile Apps",
        "company": "Nairobi Tech Reviews",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Apps", "Reviews", "Testing"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Write 50-word reviews for Kenyan apps after testing.",
        "responsibilities": ["Test 1 app", "Write 50-word review", "Submit via email"],
        "requirements": ["Smartphone access", "Basic English", "Internet connection"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Discover new apps"]
    },
    {
        "id": 29,
        "title": "Categorize Market Data",
        "company": "Kisumu Analytics",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 700",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Data", "Microtasks", "Organization"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Sort 20–50 items (e.g., farm products) into categories for Kenyan markets.",
        "responsibilities": ["Sort 20 items", "Use Google Sheets", "Deliver via email"],
        "requirements": ["Basic Excel skills", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn data skills"]
    },
    {
        "id": 30,
        "title": "Add Video Subtitles",
        "company": "Eldoret Media Hub",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Subtitles", "Video", "Swahili"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Add subtitles to 2–5 min Kenyan videos in English/Swahili.",
        "responsibilities": ["Add subtitles to 1 video", "Use free tools", "Deliver via email"],
        "requirements": ["English/Swahili fluency", "Free Aegisub software", "Internet access"],
        "benefits": ["M-Pesa payments", "Flexible hours", "Learn video editing"]
    },
    {
        "id": 31,
        "title": "Marketing Manager",
        "company": "Safaricom",
        "location": "Nairobi, Kenya",
        "type": "Full-time",
        "salary": "KES 1000 - 2000",
        "experience": "Senior Level",
        "remote": "Hybrid",
        "tags": ["Marketing", "Strategy", "Digital"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Lead marketing campaigns for Safaricom’s digital products.",
        "responsibilities": ["Plan campaigns", "Manage team", "Analyze metrics"],
        "requirements": ["5+ years marketing experience", "Degree in Marketing", "Data analysis skills"],
        "benefits": ["Competitive salary", "M-Pesa payments", "Career growth"]
    },
    {
        "id": 32,
        "title": "Create Matatu Stickers",
        "company": "Nairobi Graphics",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Matatu"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Design vibrant stickers for matatus in Nairobi using Canva, incorporating local slang or themes.",
        "responsibilities": ["Create 1–2 sticker designs", "Use Canva templates", "Deliver PNG files via WhatsApp"],
        "requirements": ["Free Canva account", "Basic creativity", "Internet access"],
        "benefits": ["M-Pesa payments", "Flexible hours", "Support local culture"]
    },
    {
        "id": 33,
        "title": "Write KCSE History Notes",
        "company": "Eldoret Tutors",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["History", "Education", "KCSE"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Summarize KCSE history topics like Mau Mau or Kenyan independence in bullet points.",
        "responsibilities": ["Write 10–15 bullet points", "Summarize 1 topic", "Deliver via Google Docs"],
        "requirements": ["KCSE history knowledge", "Google Docs access", "Basic research skills"],
        "benefits": ["M-Pesa payments", "Help students", "Work from home"]
    },
    {
        "id": 34,
        "title": "Edit Videos for TikTok",
        "company": "Mombasa Creators",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Video Editing", "TikTok", "Social Media"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Edit short 15–30 second TikTok videos for Kenyan influencers using CapCut.",
        "responsibilities": ["Edit 1 video", "Add text and effects", "Deliver via WhatsApp"],
        "requirements": ["Free CapCut app", "Smartphone with internet", "Basic creativity"],
        "benefits": ["M-Pesa payments", "Flexible hours", "Learn video editing"]
    },
    {
        "id": 35,
        "title": "Answer Biology Questions",
        "company": "Kisumu Edu Hub",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Biology", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Answer 5–10 KCSE-level biology questions (e.g., human anatomy or plant biology).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via email"],
        "requirements": ["KCSE biology knowledge", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Support education"]
    },
    {
        "id": 36,
        "title": "Design Event Flyers",
        "company": "Nakuru Events",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Events"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Create flyers for local events like harambees or church functions in Nakuru using Canva.",
        "responsibilities": ["Design 1 flyer", "Use client brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support community events", "Flexible hours"]
    },
    {
        "id": 37,
        "title": "Translate Short Texts",
        "company": "Nairobi Translators",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Translation", "Swahili", "English"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Translate 100–200 words from English to Swahili for Kenyan businesses or NGOs.",
        "responsibilities": ["Translate 1 text", "Ensure accuracy", "Deliver via Google Docs"],
        "requirements": ["Fluency in English/Swahili", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Support local communication"]
    },
    {
        "id": 38,
        "title": "Mobile App Developer",
        "company": "Tech Mombasa",
        "location": "Mombasa, Kenya",
        "type": "Full-time",
        "salary": "KES 600 - 2500",
        "experience": "Mid Level",
        "remote": "Hybrid",
        "tags": ["Flutter", "Mobile Apps", "Development"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Develop mobile apps for Kenyan startups using Flutter or React Native.",
        "responsibilities": ["Build app features", "Test functionality", "Collaborate with team"],
        "requirements": ["2+ years coding experience", "Flutter knowledge", "Internet access"],
        "benefits": ["Competitive salary", "M-Pesa payments", "Career growth"]
    },
    {
        "id": 39,
        "title": "Write Product Reviews",
        "company": "Jumia Freelance",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "E-commerce", "Reviews"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Write 50–100 word reviews for products on Kenyan e-commerce platforms like Jumia.",
        "responsibilities": ["Write 1 review", "Highlight pros/cons", "Submit via email"],
        "requirements": ["Basic English", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn e-commerce"]
    },
    {
        "id": 40,
        "title": "Create WhatsApp Stickers",
        "company": "Eldoret Creations",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Social Media"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Design fun WhatsApp stickers with Kenyan themes like slang or local memes using Canva.",
        "responsibilities": ["Create 5 stickers", "Use Canva tools", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic creativity", "Internet access"],
        "benefits": ["M-Pesa payments", "Flexible hours", "Support local culture"]
    },
    {
        "id": 41,
        "title": "Answer Chemistry Questions",
        "company": "Nakuru Tutors",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Chemistry", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Answer 5–10 KCSE-level chemistry questions (e.g., periodic table or reactions).",
        "responsibilities": ["Answer 5 questions", "Show workings", "Deliver via Google Docs"],
        "requirements": ["KCSE chemistry knowledge", "Internet access", "Basic calculator"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 42,
        "title": "Design Business Cards",
        "company": "Kisumu Prints",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Branding"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create business cards for Kenyan SMEs like boda boda groups or salons using Canva.",
        "responsibilities": ["Design 1 card", "Follow client brief", "Deliver PNG files"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Flexible hours", "Support local businesses"]
    },
    {
        "id": 43,
        "title": "Write Agriculture Blog Posts",
        "company": "Kenya Farmers Hub",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Agriculture", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 300-word blog posts on Kenyan farming topics like maize or dairy.",
        "responsibilities": ["Write 1 post", "Research topic", "Deliver via Google Docs"],
        "requirements": ["Basic research skills", "English fluency", "Internet access"],
        "benefits": ["M-Pesa payments", "Learn agriculture", "Flexible hours"]
    },
    {
        "id": 44,
        "title": "Test M-Pesa Integration",
        "company": "Nairobi Fintech",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Testing", "Fintech", "M-Pesa"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Test M-Pesa payment features on Kenyan apps or websites for functionality.",
        "responsibilities": ["Test 1 feature", "Report bugs", "Deliver via email"],
        "requirements": ["Smartphone with M-Pesa", "Internet access", "Basic testing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn fintech"]
    },
    {
        "id": 45,
        "title": "Create Infographics",
        "company": "Mombasa NGOs",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Infographics", "NGO"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Design infographics for Kenyan NGOs on topics like health or education using Canva.",
        "responsibilities": ["Create 1 infographic", "Use provided data", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support NGOs", "Flexible hours"]
    },
    {
        "id": 46,
        "title": "Answer Physics Questions",
        "company": "Eldoret Edu Hub",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Physics", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Answer 5–10 KCSE-level physics questions (e.g., mechanics or electricity).",
        "responsibilities": ["Answer 5 questions", "Show workings", "Deliver via Google Docs"],
        "requirements": ["KCSE physics knowledge", "Internet access", "Basic calculator"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 47,
        "title": "Write Tourism Articles",
        "company": "Kenya Travel Blog",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 2000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Tourism", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Write 300-word articles on Kenyan tourist spots like Maasai Mara or Diani Beach.",
        "responsibilities": ["Write 1 article", "Research destination", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Internet access", "Basic research skills"],
        "benefits": ["M-Pesa payments", "Promote tourism", "Flexible hours"]
    },
    {
        "id": 48,
        "title": "Customer Support Agent",
        "company": "Safaricom Freelance",
        "location": "Nairobi, Kenya",
        "type": "Part-time",
        "salary": "KES 400 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Customer Service", "Support", "Telecom"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer customer queries for Safaricom services via WhatsApp or email.",
        "responsibilities": ["Respond to 10–20 queries", "Use provided scripts", "Report via email"],
        "requirements": ["Basic English/Swahili", "Smartphone with internet", "Good communication"],
        "benefits": ["M-Pesa payments", "Flexible hours", "Learn customer service"]
    },
    {
        "id": 49,
        "title": "Design Menu Cards",
        "company": "Kisumu Eateries",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Hospitality"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create menu cards for local Kisumu restaurants or cafes using Canva.",
        "responsibilities": ["Design 1 menu", "Include prices and items", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support local businesses", "Flexible hours"]
    },
    {
        "id": 50,
        "title": "Transcribe Swahili Interviews",
        "company": "Nairobi Media",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Transcription", "Swahili", "Media"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Transcribe 5-min Swahili interviews for Kenyan media outlets.",
        "responsibilities": ["Listen to audio", "Type transcript", "Deliver via Google Docs"],
        "requirements": ["Swahili fluency", "Free Otter.ai account", "Internet access"],
        "benefits": ["M-Pesa payments", "Flexible hours", "Learn transcription"]
    },
    {
        "id": 51,
        "title": "Data Analyst",
        "company": "Nairobi Analytics",
        "location": "Nairobi, Kenya",
        "type": "Full-time",
        "salary": "KES 800 - 3000",
        "experience": "Mid Level",
        "remote": "Hybrid",
        "tags": ["Data Analysis", "Excel", "Python"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Analyze sales/market data for Kenyan businesses using Excel or Python.",
        "responsibilities": ["Analyze datasets", "Create reports", "Present findings"],
        "requirements": ["2+ years data experience", "Excel/Python skills", "Degree in related field"],
        "benefits": ["Competitive salary", "M-Pesa payments", "Career growth"]
    },
    {
        "id": 52,
        "title": "Write Swahili Captions",
        "company": "Mombasa Social",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 700",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Swahili", "Social Media", "Writing"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Write 10–20 Swahili captions for coastal businesses’ social media posts.",
        "responsibilities": ["Write 10 captions", "Use engaging language", "Deliver via WhatsApp"],
        "requirements": ["Swahili fluency", "Social media familiarity", "Smartphone access"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn marketing"]
    },
    {
        "id": 53,
        "title": "Test E-commerce Websites",
        "company": "Kilimall Testing",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["E-commerce", "Testing", "QA"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Test Kenyan e-commerce sites like Kilimall for checkout or navigation issues.",
        "responsibilities": ["Test 5 pages", "Report errors", "Deliver via email"],
        "requirements": ["Basic browsing skills", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn QA skills"]
    },
    {
        "id": 54,
        "title": "Write Press Releases",
        "company": "Nairobi PR",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "PR", "Media"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Write 200-word press releases for Kenyan startups or events.",
        "responsibilities": ["Write 1 release", "Follow client brief", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic writing skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Build PR skills", "Flexible hours"]
    },
    {
        "id": 55,
        "title": "Create E-learning Quizzes",
        "company": "Kisumu E-learning",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Education", "Quizzes", "KCSE"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Create 10–20 multiple-choice questions for KCSE subjects like English or Kiswahili.",
        "responsibilities": ["Write 10 questions", "Include answers", "Deliver via Google Docs"],
        "requirements": ["KCSE subject knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Support education", "Flexible hours"]
    },
    {
        "id": 56,
        "title": "Design Wedding Invitations",
        "company": "Nakuru Events",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Events"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create digital wedding invitations for Kenyan clients using Canva.",
        "responsibilities": ["Design 1 invitation", "Follow client theme", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support events", "Flexible hours"]
    },
    {
        "id": 57,
        "title": "Answer Swahili Questions",
        "company": "Eldoret Tutors",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Swahili", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Answer 5–10 KCSE-level Swahili questions (e.g., grammar or literature).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["Swahili fluency", "KCSE knowledge", "Internet access"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 58,
        "title": "SEO Content Writer",
        "company": "Nairobi Digital",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Mid Level",
        "remote": "Remote",
        "tags": ["SEO", "Writing", "Content"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 300–500 word SEO articles for Kenyan websites like travel or tech blogs.",
        "responsibilities": ["Write 1 article", "Use keywords", "Deliver via Google Docs"],
        "requirements": ["Basic SEO knowledge", "English fluency", "Internet access"],
        "benefits": ["M-Pesa payments", "Learn SEO", "Flexible hours"]
    },
    {
        "id": 59,
        "title": "Create Email Newsletters",
        "company": "Mombasa Marketing",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Email", "Marketing", "Canva"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Design email newsletters for Kenyan businesses using Canva or Mailchimp.",
        "responsibilities": ["Create 1 newsletter", "Add text/images", "Deliver via email"],
        "requirements": ["Free Canva/Mailchimp account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Learn marketing", "Flexible hours"]
    },
    {
        "id": 60,
        "title": "Answer Business Studies Questions",
        "company": "Kisumu Tutors",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Business Studies", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer 5–10 KCSE-level business studies questions (e.g., entrepreneurship or finance).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE business knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 61,
        "title": "Design Church Posters",
        "company": "Eldoret Faith",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Religious"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create posters for church events like crusades or fundraisers in Eldoret using Canva.",
        "responsibilities": ["Design 1 poster", "Follow client brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support community", "Flexible hours"]
    },
    {
        "id": 62,
        "title": "Write Health Blog Posts",
        "company": "Nairobi Health Hub",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Health", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 300-word blog posts on Kenyan health topics like malaria prevention or nutrition.",
        "responsibilities": ["Write 1 post", "Research topic", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote health", "Flexible hours"]
    },
    {
        "id": 63,
        "title": "Test Mobile Banking Apps",
        "company": "KCB Freelance",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Testing", "Fintech", "Apps"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Test Kenyan mobile banking apps like KCB or Equity for usability issues.",
        "responsibilities": ["Test 1 feature", "Report bugs", "Deliver via email"],
        "requirements": ["Smartphone with app", "Internet access", "Basic testing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn fintech"]
    },
    {
        "id": 64,
        "title": "Create Instagram Reels",
        "company": "Mombasa Influencers",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Video Editing", "Instagram", "Social Media"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Edit 15–30 second Instagram Reels for Kenyan influencers using CapCut.",
        "responsibilities": ["Edit 1 reel", "Add effects and music", "Deliver via WhatsApp"],
        "requirements": ["Free CapCut app", "Smartphone with internet", "Basic creativity"],
        "benefits": ["M-Pesa payments", "Flexible hours", "Learn video editing"]
    },
    {
        "id": 65,
        "title": "Answer English Literature Questions",
        "company": "Nakuru Tutors",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["English", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer 5–10 KCSE-level English literature questions (e.g., set books like Blossoms).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE English knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 66,
        "title": "Design School Certificates",
        "company": "Kisumu Schools",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Education"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create certificates for Kenyan schools or training programs using Canva.",
        "responsibilities": ["Design 1 certificate", "Follow school template", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support education", "Flexible hours"]
    },
    {
        "id": 67,
        "title": "Write Environmental Articles",
        "company": "Nairobi Green Hub",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Environment", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 300-word articles on Kenyan environmental issues like deforestation or conservation.",
        "responsibilities": ["Write 1 article", "Research topic", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote conservation", "Flexible hours"]
    },
    {
        "id": 68,
        "title": "Social Media Manager",
        "company": "Mombasa Startups",
        "location": "Mombasa, Kenya",
        "type": "Part-time",
        "salary": "KES 500 - 1500",
        "experience": "Mid Level",
        "remote": "Remote",
        "tags": ["Social Media", "Marketing", "Content"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Manage social media accounts for Kenyan startups, posting and engaging daily.",
        "responsibilities": ["Post 2–3 times daily", "Respond to comments", "Report via email"],
        "requirements": ["1+ year social media experience", "Smartphone with internet", "Creativity"],
        "benefits": ["M-Pesa payments", "Learn marketing", "Flexible hours"]
    },
    {
        "id": 69,
        "title": "Answer Agriculture Questions",
        "company": "Eldoret Farmers",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Agriculture", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Answer 5–10 KCSE-level agriculture questions (e.g., crop rotation or livestock).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE agriculture knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 70,
        "title": "Design Product Labels",
        "company": "Nakuru Packaging",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Packaging"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create labels for Kenyan products like honey or soap using Canva.",
        "responsibilities": ["Design 1 label", "Follow client brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support local products", "Flexible hours"]
    },
    {
        "id": 71,
        "title": "Write Tech Reviews",
        "company": "Nairobi Tech Hub",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Tech", "Reviews"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 100-word reviews for Kenyan tech products like apps or gadgets.",
        "responsibilities": ["Write 1 review", "Test product", "Deliver via Google Docs"],
        "requirements": ["Basic English", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Discover new tech"]
    },
    {
        "id": 72,
        "title": "Create Travel Itineraries",
        "company": "Mombasa Tours",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Travel", "Writing", "Tourism"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create 1–2 page travel itineraries for Kenyan destinations like Lamu or Amboseli.",
        "responsibilities": ["Plan 1 itinerary", "Include activities", "Deliver via email"],
        "requirements": ["Basic research skills", "English fluency", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote tourism", "Flexible hours"]
    },
    {
        "id": 73,
        "title": "Answer CRE Questions",
        "company": "Kisumu Tutors",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["CRE", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer 5–10 KCSE-level Christian Religious Education (CRE) questions.",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE CRE knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 74,
        "title": "Design Boda Boda Logos",
        "company": "Nairobi Riders",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Boda Boda"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create logos for boda boda groups in Nairobi using Canva.",
        "responsibilities": ["Design 1 logo", "Follow rider brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support local riders", "Flexible hours"]
    },
    {
        "id": 75,
        "title": "Write Food Blog Posts",
        "company": "Kenya Foodies",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Food", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 300-word blog posts on Kenyan dishes like ugali or nyama choma.",
        "responsibilities": ["Write 1 post", "Research recipe/topic", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote Kenyan cuisine", "Flexible hours"]
    },
    {
        "id": 76,
        "title": "Test Ride-Sharing Apps",
        "company": "Nairobi Mobility",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Testing", "Apps", "Mobility"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Test Kenyan ride-sharing apps like Bolt or Uber for functionality.",
        "responsibilities": ["Test 1 feature", "Report issues", "Deliver via email"],
        "requirements": ["Smartphone with app", "Internet access", "Basic testing skills"],
        "benefits.’s": ["M-Pesa payments", "Quick tasks", "Learn app testing"]
    },
    {
        "id": 77,
        "title": "Create School Posters",
        "company": "Mombasa Schools",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Education"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Design posters for school events like sports days or exams in Mombasa using Canva.",
        "responsibilities": ["Design 1 poster", "Follow school brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support education", "Flexible hours"]
    },
    {
        "id": 78,
        "title": "Answer Computer Studies Questions",
        "company": "Eldoret Tutors",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Computer Studies", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer 5–10 KCSE-level computer studies questions (e.g., networking or programming).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE computer knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 79,
        "title": "Write Fashion Blog Posts",
        "company": "Nairobi Style",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Fashion", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Write 300-word blog posts on Kenyan fashion trends like kitenge or streetwear.",
        "responsibilities": ["Write 1 post", "Research topic", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote Kenyan fashion", "Flexible hours"]
    },
    {
        "id": 80,
        "title": "Design NGO Logos",
        "company": "Kisumu NGOs",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "NGO"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Create logos for Kenyan NGOs focused on education or health using Canva.",
        "responsibilities": ["Design 1 logo", "Follow NGO brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support NGOs", "Flexible hours"]
    },
    {
        "id": 81,
        "title": "Write Business Proposals",
        "company": "Nairobi Startups",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 2000",
        "experience": "Mid Level",
        "remote": "Remote",
        "tags": ["Writing", "Business", "Proposals"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Write 1–2 page business proposals for Kenyan startups seeking funding.",
        "responsibilities": ["Write 1 proposal", "Follow client brief", "Deliver via Google Docs"],
        "requirements": ["Basic business knowledge", "English fluency", "Internet access"],
        "benefits": ["M-Pesa payments", "Learn business skills", "Flexible hours"]
    },
    {
        "id": 82,
        "title": "Answer Home Science Questions",
        "company": "Nakuru Tutors",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Home Science", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Answer 5–10 KCSE-level home science questions (e.g., nutrition or textiles).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE home science knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 83,
        "title": "Create Event Tickets",
        "company": "Mombasa Events",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Events"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Design digital tickets for Kenyan events like concerts or fundraisers using Canva.",
        "responsibilities": ["Design 1 ticket", "Include event details", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support events", "Flexible hours"]
    },
    {
        "id": 84,
        "title": "Write NGO Reports",
        "company": "Nairobi NGOs",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "NGO", "Reports"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 200–300 word reports for Kenyan NGOs on projects like water access or education.",
        "responsibilities": ["Write 1 report", "Summarize project data", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support NGOs", "Flexible hours"]
    },
    {
        "id": 85,
        "title": "Answer IRE Questions",
        "company": "Mombasa Tutors",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["IRE", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Answer 5–10 KCSE-level Islamic Religious Education (IRE) questions.",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE IRE knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 86,
        "title": "Design Shop Signage",
        "company": "Kisumu Traders",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Local Business"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create digital signage for Kisumu shops like dukas or kiosks using Canva.",
        "responsibilities": ["Design 1 sign", "Follow client brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support local businesses", "Flexible hours"]
    },
    {
        "id": 87,
        "title": "Write Sports Blog Posts",
        "company": "Nairobi Sports Hub",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Sports", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 300-word blog posts on Kenyan sports like football or athletics.",
        "responsibilities": ["Write 1 post", "Research topic", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote Kenyan sports", "Flexible hours"]
    },
    {
        "id": 88,
        "title": "Test Delivery Apps",
        "company": "Eldoret Delivery",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Testing", "Apps", "Delivery"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Test Kenyan delivery apps like Glovo or Jumia Food for functionality.",
        "responsibilities": ["Test 1 feature", "Report issues", "Deliver via email"],
        "requirements": ["Smartphone with app", "Internet access", "Basic testing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn app testing"]
    },
    {
        "id": 89,
        "title": "Create Training Manuals",
        "company": "Nakuru Trainers",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Training", "Education"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Write 1–2 page training manuals for Kenyan workshops on farming or business.",
        "responsibilities": ["Write 1 manual", "Follow client brief", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support training", "Flexible hours"]
    },
    {
        "id": 90,
        "title": "Answer Music Questions",
        "company": "Mombasa Arts",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Music", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer 5–10 KCSE-level music questions (e.g., theory or instruments).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE music knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 91,
        "title": "Design Campaign Posters",
        "company": "Nairobi Politics",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Politics"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create posters for Kenyan political or community campaigns using Canva.",
        "responsibilities": ["Design 1 poster", "Follow campaign brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support campaigns", "Flexible hours"]
    },
    {
        "id": 92,
        "title": "Write Tech Blog Posts",
        "company": "Kisumu Tech Hub",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Tech", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 300-word blog posts on Kenyan tech topics like M-Pesa or startups.",
        "responsibilities": ["Write 1 post", "Research topic", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote Kenyan tech", "Flexible hours"]
    },
    {
        "id": 93,
        "title": "Test Educational Apps",
        "company": "Eldoret EdTech",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Testing", "Apps", "Education"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Test Kenyan educational apps for KCSE revision for usability issues.",
        "responsibilities": ["Test 1 feature", "Report bugs", "Deliver via email"],
        "requirements": ["Smartphone with app", "Internet access", "Basic testing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Support education"]
    },
    {
        "id": 94,
        "title": "Create Job Adverts",
        "company": "Nairobi HR",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "HR", "Adverts"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Write job adverts for Kenyan companies hiring for roles like drivers or clerks.",
        "responsibilities": ["Write 1 advert", "Follow client brief", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic writing skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn HR skills"]
    },
    {
        "id": 95,
        "title": "Answer Art Questions",
        "company": "Mombasa Arts Hub",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Art", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer 5–10 KCSE-level art questions (e.g., drawing or design).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE art knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 96,
        "title": "Design Farm Posters",
        "company": "Nakuru Farmers",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Agriculture"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create posters for Kenyan farms advertising products like milk or vegetables.",
        "responsibilities": ["Design 1 poster", "Follow farm brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support farmers", "Flexible hours"]
    },
    {
        "id": 97,
        "title": "Write Education Blog Posts",
        "company": "Kisumu Education",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Education", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 300-word blog posts on Kenyan education topics like KCSE tips or e-learning.",
        "responsibilities": ["Write 1 post", "Research topic", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote education", "Flexible hours"]
    },
    {
        "id": 98,
        "title": "Test Health Apps",
        "company": "Nairobi Health Tech",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Testing", "Apps", "Health"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Test Kenyan health apps for features like telemedicine or fitness tracking.",
        "responsibilities": ["Test 1 feature", "Report issues", "Deliver via email"],
        "requirements": ["Smartphone with app", "Internet access", "Basic testing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn health tech"]
    },
    {
        "id": 99,
        "title": "Create Market Surveys",
        "company": "Eldoret Analytics",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Surveys", "Research", "Data"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create 10–20 question surveys for Kenyan markets on products like maize or electronics.",
        "responsibilities": ["Write 10 questions", "Use Google Forms", "Deliver via email"],
        "requirements": ["Basic research skills", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn survey design"]
    },
    {
        "id": 100,
        "title": "Answer French Questions",
        "company": "Mombasa Tutors",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["French", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer 5–10 KCSE-level French questions (e.g., grammar or vocabulary).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE French knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 101,
        "title": "Design Matatu Flyers",
        "company": "Nairobi Transport",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Transport"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create flyers for matatu saccos in Nairobi to advertise routes or fares.",
        "responsibilities": ["Design 1 flyer", "Follow sacco brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support transport", "Flexible hours"]
    },
    {
        "id": 102,
        "title": "Write Culture Blog Posts",
        "company": "Kisumu Heritage",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Culture", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 300-word blog posts on Kenyan cultural topics like Luo traditions or Maasai crafts.",
        "responsibilities": ["Write 1 post", "Research topic", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote culture", "Flexible hours"]
    },
    {
        "id": 103,
        "title": "Test Tourism Apps",
        "company": "Mombasa Travel Tech",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Testing", "Apps", "Tourism"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Test Kenyan tourism apps for booking or navigation features.",
        "responsibilities": ["Test 1 feature", "Report issues", "Deliver via email"],
        "requirements": ["Smartphone with app", "Internet access", "Basic testing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn tourism tech"]
    },
    {
        "id": 104,
        "title": "Create Social Media Ads",
        "company": "Nakuru Marketing",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Social Media", "Marketing"],
        "logo": ["/api/placeholder/60/60"],
        "date": "1 day ago",
        "description": "Design social media ads for Kenyan businesses like shops or restaurants using Canva.",
        "responsibilities": ["Design 1 ad", "Follow client brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Learn marketing", "Flexible hours"]
    },
    {
        "id": 105,
        "title": "Answer German Questions",
        "company": "Nairobi Tutors",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["German", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer 5–10 KCSE-level German questions (e.g., grammar or vocabulary).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE German knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 106,
        "title": "Design School Banners",
        "company": "Eldoret Education",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Education"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create digital banners for Kenyan schools to promote events like open days.",
        "responsibilities": ["Design 1 banner", "Follow school brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support education", "Flexible hours"]
    },
    {
        "id": 107,
        "title": "Write Finance Blog Posts",
        "company": "Nairobi Finance Hub",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Finance", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 300-word blog posts on Kenyan finance topics like mobile banking or savings.",
        "responsibilities": ["Write 1 post", "Research topic", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote financial literacy", "Flexible hours"]
    },
    {
        "id": 108,
        "title": "Test Agritech Apps",
        "company": "Kisumu Agritech",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Testing", "Apps", "Agriculture"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Test Kenyan agritech apps for features like weather updates or market prices.",
        "responsibilities": ["Test 1 feature", "Report issues", "Deliver via email"],
        "requirements": ["Smartphone with app", "Internet access", "Basic testing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Support farmers"]
    },
    {
        "id": 109,
        "title": "Create Health Surveys",
        "company": "Mombasa Health",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Surveys", "Health", "Data"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create 10–20 question surveys on Kenyan health issues like malaria or nutrition.",
        "responsibilities": ["Write 10 questions", "Use Google Forms", "Deliver via email"],
        "requirements": ["Basic research skills", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Support health research"]
    },
    {
        "id": 110,
        "title": "Answer Economics Questions",
        "company": "Nakuru Tutors",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Economics", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer 5–10 KCSE-level economics questions (e.g., supply and demand).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE economics knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 111,
        "title": "Design Charity Flyers",
        "company": "Nairobi Charities",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Charity"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create flyers for Kenyan charity events like food drives or fundraisers using Canva.",
        "responsibilities": ["Design 1 flyer", "Follow charity brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support charities", "Flexible hours"]
    },
    {
        "id": 112,
        "title": "Write Entrepreneurship Blog Posts",
        "company": "Eldoret Startups",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Entrepreneurship", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 300-word blog posts on Kenyan entrepreneurship topics like starting a kiosk.",
        "responsibilities": ["Write 1 post", "Research topic", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote entrepreneurship", "Flexible hours"]
    },
    {
        "id": 113,
        "title": "Test E-learning Platforms",
        "company": "Kisumu EdTech",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Testing", "E-learning", "Education"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Test Kenyan e-learning platforms for features like quizzes or video lessons.",
        "responsibilities": ["Test 1 feature", "Report issues", "Deliver via email"],
        "requirements": ["Smartphone/laptop with platform", "Internet access", "Basic testing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Support education"]
    },
    {
        "id": 114,
        "title": "Create Event Programs",
        "company": "Mombasa Events",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Events"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Design event programs for Kenyan events like weddings or conferences using Canva.",
        "responsibilities": ["Design 1 program", "Include schedule", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support events", "Flexible hours"]
    },
    {
        "id": 115,
        "title": "Answer Sociology Questions",
        "company": "Nairobi Tutors",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Sociology", "Education", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer 5–10 sociology questions for Kenyan college students (e.g., social structures).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["Basic sociology knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 116,
        "title": "Design Market Banners",
        "company": "Nakuru Markets",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Markets"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create digital banners for Nakuru market stalls to advertise products like fruits.",
        "responsibilities": ["Design 1 banner", "Follow stall brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support local markets", "Flexible hours"]
    },
    {
        "id": 117,
        "title": "Write Travel Blog Posts",
        "company": "Mombasa Travel Hub",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Travel", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 300-word blog posts on Kenyan travel experiences like coast safaris or hiking.",
        "responsibilities": ["Write 1 post", "Research topic", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote tourism", "Flexible hours"]
    },
    {
        "id": 118,
        "title": "Test NGO Websites",
        "company": "Nairobi NGOs",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Testing", "Websites", "NGO"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Test Kenyan NGO websites for functionality like donation buttons or forms.",
        "responsibilities": ["Test 5 pages", "Report issues", "Deliver via email"],
        "requirements": ["Basic browsing skills", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Support NGOs"]
    },
    {
        "id": 119,
        "title": "Create Workshop Flyers",
        "company": "Eldoret Trainers",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Training"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Design flyers for Kenyan training workshops on farming or business skills.",
        "responsibilities": ["Design 1 flyer", "Follow workshop brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support training", "Flexible hours"]
    },
    {
        "id": 120,
        "title": "Answer Political Science Questions",
        "company": "Kisumu Tutors",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Political Science", "Education", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer 5–10 political science questions for Kenyan college students (e.g., governance).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["Basic political science knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 121,
        "title": "Design Tourism Posters",
        "company": "Mombasa Tourism",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Tourism"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create posters for Kenyan tourism campaigns like beach or safari promotions.",
        "responsibilities": ["Design 1 poster", "Follow tourism brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote tourism", "Flexible hours"]
    },
    {
        "id": 122,
        "title": "Write Community Blog Posts",
        "company": "Nakuru Community",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Community", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 300-word blog posts on Kenyan community initiatives like youth groups or harambees.",
        "responsibilities": ["Write 1 post", "Research topic", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support communities", "Flexible hours"]
    },
    {
        "id": 123,
        "title": "Test Fintech Websites",
        "company": "Nairobi Fintech",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Testing", "Websites", "Fintech"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Test Kenyan fintech websites for features like loan applications or payments.",
        "responsibilities": ["Test 5 pages", "Report issues", "Deliver via email"],
        "requirements": ["Basic browsing skills", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn fintech"]
    },
    {
        "id": 124,
        "title": "Create Health Posters",
        "company": "Kisumu Health",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Health"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create posters for Kenyan health campaigns like vaccination or hygiene using Canva.",
        "responsibilities": ["Design 1 poster", "Follow health brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote health", "Flexible hours"]
    },
    {
        "id": 125,
        "title": "Answer Psychology Questions",
        "company": "Eldoret Tutors",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Psychology", "Education", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer 5–10 psychology questions for Kenyan college students (e.g., behavior theories).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["Basic psychology knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 126,
        "title": "Design Retail Flyers",
        "company": "Nairobi Retail",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Retail"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create flyers for Kenyan retail shops advertising sales or new products.",
        "responsibilities": ["Design 1 flyer", "Follow shop brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support retail", "Flexible hours"]
    },
    {
        "id": 127,
        "title": "Write Youth Blog Posts",
        "company": "Mombasa Youth Hub",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Youth", "Blogging"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 300-word blog posts on Kenyan youth issues like employment or education.",
        "responsibilities": ["Write 1 post", "Research topic", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support youth", "Flexible hours"]
    },
    {
        "id": 128,
        "title": "Test Retail Apps",
        "company": "Nakuru Retail Tech",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Testing", "Apps", "Retail"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Test Kenyan retail apps for features like product browsing or checkout.",
        "responsibilities": ["Test 1 feature", "Report issues", "Deliver via email"],
        "requirements": ["Smartphone with app", "Internet access", "Basic testing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn retail tech"]
    },
    {
        "id": 129,
        "title": "Create Education Surveys",
        "company": "Kisumu Education",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Surveys", "Education", "Data"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create 10–20 question surveys on Kenyan education topics like school access.",
        "responsibilities": ["Write 10 questions", "Use Google Forms", "Deliver via email"],
        "requirements": ["Basic research skills", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Support education research"]
    },
    {
        "id": 130,
        "title": "Answer Literature Questions",
        "company": "Nairobi Tutors",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Literature", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer 5–10 KCSE-level literature questions (e.g., African novels or poetry).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE literature knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 131,
        "title": "Design Festival Posters",
        "company": "Mombasa Festivals",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Festivals"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create posters for Kenyan festivals like Lamu Cultural Festival using Canva.",
        "responsibilities": ["Design 1 poster", "Follow festival brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Promote festivals", "Flexible hours"]
    },
    {
        "id": 132,
        "title": "Write Agriculture Reports",
        "company": "Eldoret Farmers",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 500 - 1500",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Writing", "Agriculture", "Reports"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Write 200–300 word reports on Kenyan farming projects like irrigation or dairy.",
        "responsibilities": ["Write 1 report", "Summarize project data", "Deliver via Google Docs"],
        "requirements": ["English fluency", "Basic research skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support agriculture", "Flexible hours"]
    },
    {
        "id": 133,
        "title": "Test Charity Apps",
        "company": "Nairobi Charities",
        "location": "Nairobi, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Testing", "Apps", "Charity"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Test Kenyan charity apps for features like donation tracking or volunteer signup.",
        "responsibilities": ["Test 1 feature", "Report issues", "Deliver via email"],
        "requirements": ["Smartphone with app", "Internet access", "Basic testing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Support charities"]
    },
    {
        "id": 134,
        "title": "Create Business Flyers",
        "company": "Kisumu SMEs",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "Business"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create flyers for Kenyan SMEs like salons or hardware stores using Canva.",
        "responsibilities": ["Design 1 flyer", "Follow SME brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support SMEs", "Flexible hours"]
    },
    {
        "id": 135,
        "title": "Answer Geography Questions",
        "company": "Nakuru Tutors",
        "location": "Nakuru, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Geography", "KCSE", "Tutoring"],
        "logo": "/api/placeholder/60/60",
        "date": "2 days ago",
        "description": "Answer 5–10 KCSE-level geography questions (e.g., climate or landforms).",
        "responsibilities": ["Answer 5 questions", "Explain clearly", "Deliver via Google Docs"],
        "requirements": ["KCSE geography knowledge", "Internet access", "Basic writing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Help students"]
    },
    {
        "id": 136,
        "title": "Design NGO Banners",
        "company": "Mombasa NGOs",
        "location": "Mombasa, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1200",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Canva", "Graphic Design", "NGO"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create digital banners for Kenyan NGOs promoting campaigns like literacy.",
        "responsibilities": ["Design 1 banner", "Follow NGO brief", "Deliver via WhatsApp"],
        "requirements": ["Free Canva account", "Basic design skills", "Internet access"],
        "benefits": ["M-Pesa payments", "Support NGOs", "Flexible hours"]
    },

    {
        "id": 137,
        "title": "Test Transport Apps",
        "company": "Eldoret Mobility",
        "location": "Eldoret, Kenya",
        "type": "Freelance",
        "salary": "KES 300 - 800",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Testing", "Apps", "Transport"],
        "logo": "/api/placeholder/60/60",
        "date": "3 days ago",
        "description": "Test Kenyan transport apps for features like route planning or ticketing.",
        "responsibilities": ["Test 1 feature", "Report issues", "Deliver via email"],
        "requirements": ["Smartphone with app", "Internet access", "Basic testing skills"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Learn transport tech"]
    },
    {
        "id": 138,
        "title": "Create Community Surveys",
        "company": "Kisumu Community",
        "location": "Kisumu, Kenya",
        "type": "Freelance",
        "salary": "KES 400 - 1000",
        "experience": "Entry Level",
        "remote": "Remote",
        "tags": ["Surveys", "Community", "Data"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create 10–20 question surveys on Kenyan community issues like youth employment.",
        "responsibilities": ["Write 10 questions", "Use Google Forms", "Deliver via email"],
        "requirements": ["Basic research skills", "Internet access", "Smartphone/laptop"],
        "benefits": ["M-Pesa payments", "Quick tasks", "Support community research"]
    },
    {
        "id": 139,
        "title": "Graphic Designer",
        "company": "Nairobi Creative Studio",
        "location": "Nairobi, Kenya",
        "type": "Full-time",
        "salary": "KES 800 - 2000",
        "experience": "Mid Level",
        "remote": "Hybrid",
        "tags": ["Graphic Design", "Adobe", "Branding"],
        "logo": "/api/placeholder/60/60",
        "date": "1 day ago",
        "description": "Create branding materials for Kenyan businesses using Adobe tools or Canva.",
        "responsibilities": ["Design logos and marketing materials", "Collaborate with clients", "Deliver final files"],
        "requirements": ["2+ years design experience", "Adobe/Canva proficiency", "Portfolio required"],
        "benefits": ["Competitive salary", "M-Pesa payments", "Career growth"]
    }

];

// DOM Elements
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

    // Hide pagination if one page or no jobs
    if (totalPages <= 1) {
        DOM.paginationContainer.style.display = 'none';
        DOM.prevPage.disabled = true;
        DOM.nextPage.disabled = true;
        return;
    }
    DOM.paginationContainer.style.display = 'flex';

    // Always show exactly 5 pages per block
    const pagesPerBlock = 5;
    const currentBlock = Math.ceil(currentPage / pagesPerBlock);
    let startPage = (currentBlock - 1) * pagesPerBlock + 1;
    let endPage = Math.min(startPage + pagesPerBlock - 1, totalPages);

    // Adjust startPage if near the end to ensure 5 pages when possible
    if (totalPages - startPage < pagesPerBlock - 1 && totalPages > pagesPerBlock) {
        startPage = Math.max(1, totalPages - pagesPerBlock + 1);
        endPage = totalPages;
    }

    // Add First Page and Ellipsis
    if (startPage > 1) {
        addPageButton(1, totalPages);
        if (startPage > 2) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            ellipsis.setAttribute('aria-hidden', 'true');
            DOM.paginationNumbers.appendChild(ellipsis);
        }
    }

    // Add Page Numbers
    for (let i = startPage; i <= endPage; i++) {
        addPageButton(i, totalPages);
    }

    // Add Last Page and Ellipsis
    if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
            const ellipsis = document.createElement('span');
            ellipsis.className = 'pagination-ellipsis';
            ellipsis.textContent = '...';
            ellipsis.setAttribute('aria-hidden', 'true');
            DOM.paginationNumbers.appendChild(ellipsis);
        }
        addPageButton(totalPages, totalPages);
    }

    // Update Previous/Next Buttons
    DOM.prevPage.disabled = currentPage === 1;
    DOM.nextPage.disabled = currentPage === totalPages;

    // Accessibility
    DOM.prevPage.setAttribute('aria-label', 'Go to previous page');
    DOM.nextPage.setAttribute('aria-label', 'Go to next page');
}

// Helper Function to Add Page Button
function addPageButton(pageNum, totalPages) {
    const btn = document.createElement('button');
    btn.className = `pagination-btn page-number ${pageNum === currentPage ? 'active' : ''}`;
    btn.textContent = pageNum;
    btn.setAttribute('aria-label', `Go to page ${pageNum} of ${totalPages}`);
    btn.setAttribute('aria-current', pageNum === currentPage ? 'page' : 'false');
    btn.addEventListener('click', () => {
        currentPage = pageNum;
        updateJobs();
        window.scrollTo({ top: DOM.jobsList.offsetTop - 60, behavior: 'smooth' });
    });
    DOM.paginationNumbers.appendChild(btn);
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
            window.scrollTo({ top: DOM.jobsList.offsetTop - 60, behavior: 'smooth' });
            const activeBtn = DOM.paginationNumbers.querySelector(`button[aria-label="Go to page ${currentPage} of ${Math.ceil(currentFilteredJobs.length / jobsPerPage)}"]`);
            if (activeBtn) activeBtn.focus();
        }
    });

    DOM.nextPage.addEventListener('click', () => {
        const totalPages = Math.ceil(currentFilteredJobs.length / jobsPerPage);
        if (currentPage < totalPages) {
            currentPage++;
            updateJobs();
            window.scrollTo({ top: DOM.jobsList.offsetTop - 60, behavior: 'smooth' });
            const activeBtn = DOM.paginationNumbers.querySelector(`button[aria-label="Go to page ${currentPage} of ${totalPages}"]`);
            if (activeBtn) activeBtn.focus();
        }
    });

    // Keyboard Navigation for Pagination
    DOM.paginationContainer.addEventListener('keydown', (e) => {
        const totalPages = Math.ceil(currentFilteredJobs.length / jobsPerPage);
        if (e.key === 'ArrowLeft' && currentPage > 1) {
            currentPage--;
            updateJobs();
            window.scrollTo({ top: DOM.jobsList.offsetTop - 60, behavior: 'smooth' });
            const activeBtn = DOM.paginationNumbers.querySelector(`button[aria-label="Go to page ${currentPage} of ${totalPages}"]`);
            if (activeBtn) activeBtn.focus();
        } else if (e.key === 'ArrowRight' && currentPage < totalPages) {
            currentPage++;
            updateJobs();
            window.scrollTo({ top: DOM.jobsList.offsetTop - 60, behavior: 'smooth' });
            const activeBtn = DOM.paginationNumbers.querySelector(`button[aria-label="Go to page ${currentPage} of ${totalPages}"]`);
            if (activeBtn) activeBtn.focus();
        }
    });
}