# Configuration Guide - config.json

All personal details, content, and data are now centralized in `src/config.json`. This makes it incredibly easy to customize the entire portfolio by editing just one file!

## 📁 Location

```
src/config.json
```

## 🎯 Quick Start

To customize the portfolio:

1. Open `src/config.json`
2. Edit the values you want to change
3. Save the file
4. Refresh your browser

That's it! All changes will be reflected automatically.

## 📋 Configuration Structure

### Personal Information

```json
"personal": {
  "name": "YOUR NAME",                    // Full name in CAPS
  "displayName": "Your Name",             // Display name (normal case)
  "title": "Your Job Title",              // Current position/role
  "tagline": "YOUR TAGLINE",              // Hero section main text
  "taglineAccent": "ACCENT TEXT",         // Hero section accent text
  "heroDescription": "Your description...", // Hero description text
  "heroTaglineTitle": "Your tagline",     // Below hero title
  "heroTaglineSubtitle": "Subtitle...",   // Below hero subtitle
  "profile": "Your profile text..."       // About section profile
}
```

### Contact Information

```json
"contact": {
  "email": "your@email.com",
  "phone": "+1 234 567 8900",
  "linkedin": {
    "display": "Your Name",
    "url": "https://linkedin.com/in/yourprofile"
  },
  "github": {
    "display": "Your Username",
    "url": "https://github.com/yourusername"
  }
}
```

### Education

```json
"education": [
  {
    "institution": "University Name",
    "location": "City, Country",
    "period": "Start Date - End Date",
    "degree": "Your Degree",
    "gpa": "GPA - X.XX/4.0"
  }
  // Add more education entries
]
```

### Experience

```json
"experience": [
  {
    "company": "Company Name",
    "period": "Start - End",
    "role": "Your Role",
    "achievements": [
      "Achievement 1",
      "Achievement 2",
      "Achievement 3"
    ]
  }
  // Add more experiences
]
```

### Projects

```json
"projects": [
  {
    "number": "1",                        // Display number
    "title": "Project Name",              // Project title
    "subtitle": "Project Type",           // Individual/Team/Client
    "tech": "Tech1, Tech2, Tech3",       // Technologies used
    "description": "Project description...",
    "contributions": [                    // Optional contributions list
      "What you did",
      "Another contribution"
    ],
    "link": "GitHub",                     // Link text
    "linkUrl": "https://github.com/..."  // Actual URL
  }
  // Add more projects
]
```

### Skills

```json
"skills": [
  {
    "category": "Category Name",          // e.g., "Programming Languages"
    "skills": ["Skill1", "Skill2", "Skill3"]
  }
  // Add more skill categories
]
```

### Achievements

```json
"achievements": [
  {
    "title": "Achievement Name",
    "organization": "Organization Name",  // Optional
    "year": "2024"                       // Optional
  }
  // Add more achievements
]
```

### Activities

```json
"activities": [
  {
    "title": "Activity Name",
    "period": "2024 - Present"           // Optional
  }
  // Add more activities
]
```

### Languages

```json
"languages": ["English", "Spanish", "French"]
```

### Referees

```json
"referees": [
  {
    "name": "Dr. Name",
    "title": "Position Title",           // Optional
    "department": "Department Name",
    "subdepartment": "Sub-department",   // Optional
    "institution": "Institution Name",
    "email": "email@institution.edu"
  }
  // Add more referees
]
```

### Navigation

```json
"navigation": [
  { "name": "Home", "href": "#home" },
  { "name": "About", "href": "#about" }
  // Add more navigation links
]
```

### Footer

```json
"footer": {
  "copyright": "2026 Your Name. All rights reserved."
}
```

## 🔧 Common Customization Tasks

### Change Your Name

Edit the `personal` section:

```json
"personal": {
  "name": "JOHN DOE",
  "displayName": "John Doe",
  ...
}
```

### Update Contact Info

Edit the `contact` section:

```json
"contact": {
  "email": "john@example.com",
  "phone": "+1 234 567 8900",
  "linkedin": {
    "display": "John Doe",
    "url": "https://linkedin.com/in/johndoe"
  },
  "github": {
    "display": "johndoe",
    "url": "https://github.com/johndoe"
  }
}
```

### Add a New Project

Add to the `projects` array:

```json
"projects": [
  // ... existing projects ...
  {
    "number": "6",
    "title": "My New Project",
    "subtitle": "Personal Project",
    "tech": "React, Node.js, MongoDB",
    "description": "A cool project I built...",
    "contributions": [
      "Implemented feature X",
      "Optimized performance by 50%"
    ],
    "link": "View Demo",
    "linkUrl": "https://myproject.com"
  }
]
```

### Add More Skills

Add to the `skills` array:

```json
"skills": [
  // ... existing skills ...
  {
    "category": "DevOps",
    "skills": ["Docker", "Kubernetes", "AWS", "CI/CD"]
  }
]
```

### Add Experience

Add to the `experience` array:

```json
"experience": [
  {
    "company": "New Company Inc",
    "period": "2024 Jan - Present",
    "role": "Senior Developer",
    "achievements": [
      "Led team of 5 developers",
      "Increased efficiency by 40%",
      "Launched 3 major features"
    ]
  }
  // ... existing experience ...
]
```

### Update Education

Edit the `education` array:

```json
"education": [
  {
    "institution": "Your University",
    "location": "Your City, Country",
    "period": "2020 - 2024",
    "degree": "B.Sc. in Computer Science",
    "gpa": "GPA - 3.8/4.0"
  }
]
```

### Change Languages

Edit the `languages` array:

```json
"languages": ["English", "Spanish", "Mandarin", "French"]
```

## 💡 Pro Tips

### 1. Maintain JSON Format

Always ensure your JSON is valid:
- Use double quotes for strings
- Add commas between array items (but not after the last item)
- No trailing commas in objects

### 2. Test After Changes

After editing config.json:
1. Save the file
2. Check browser console for errors
3. Refresh the page

### 3. Use JSON Validator

If you get errors, use an online JSON validator:
- [JSONLint](https://jsonlint.com/)
- [JSONFormatter](https://jsonformatter.org/)

### 4. Keep Backups

Before making major changes:
```bash
cp src/config.json src/config.backup.json
```

### 5. Empty Arrays

If you don't have contributions for a project:
```json
"contributions": []
```

If you don't have achievements:
```json
"contributions": [],
```

### 6. Optional Fields

Some fields are optional and can be empty strings:
```json
"title": "",      // Will not display if empty
"period": "",     // Will not display if empty
"organization": "" // Will not display if empty
```

## 🎨 Advanced Customization

### Change Hero Text Style

Edit these fields for different impact:

```json
"tagline": "FULL-STACK DEVELOPER",
"taglineAccent": "BUILDING THE FUTURE",
```

### Customize Navigation

Add or remove sections:

```json
"navigation": [
  { "name": "Home", "href": "#home" },
  { "name": "About", "href": "#about" },
  { "name": "Blog", "href": "#blog" },    // Add new section
  { "name": "Contact", "href": "#contact" }
]
```

### Project Display Numbers

Change project numbering style:

```json
"number": "01"    // Instead of "1"
"number": "I"     // Roman numerals
"number": "★"     // Special characters
```

## 📝 Complete Example

Here's a complete example for another person:

```json
{
  "personal": {
    "name": "JANE SMITH",
    "displayName": "Jane Smith",
    "title": "Full-Stack Web Developer",
    "tagline": "FULL-STACK DEVELOPMENT",
    "taglineAccent": "CRAFTED WITH PRECISION",
    "heroDescription": "Building responsive, user-friendly web applications with modern technologies.",
    "heroTaglineTitle": "Quality code is my passion",
    "heroTaglineSubtitle": "Let me bring your ideas to life.",
    "profile": "Passionate full-stack developer with 3 years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies."
  },
  "contact": {
    "email": "jane.smith@email.com",
    "phone": "+1 555 123 4567",
    "linkedin": {
      "display": "Jane Smith",
      "url": "https://linkedin.com/in/janesmith"
    },
    "github": {
      "display": "janesmith",
      "url": "https://github.com/janesmith"
    }
  }
  // ... rest of configuration
}
```

## 🚨 Common Mistakes to Avoid

### ❌ Wrong: Missing Comma

```json
{
  "name": "John Doe"
  "email": "john@email.com"  // Missing comma after previous line
}
```

### ✅ Correct:

```json
{
  "name": "John Doe",
  "email": "john@email.com"
}
```

### ❌ Wrong: Single Quotes

```json
{
  'name': 'John Doe'  // Single quotes not allowed
}
```

### ✅ Correct:

```json
{
  "name": "John Doe"
}
```

### ❌ Wrong: Trailing Comma

```json
{
  "name": "John Doe",
  "email": "john@email.com",  // Trailing comma not allowed
}
```

### ✅ Correct:

```json
{
  "name": "John Doe",
  "email": "john@email.com"
}
```

## 🔍 Troubleshooting

### Browser Shows Blank Page

**Cause**: Invalid JSON syntax

**Solution**:
1. Check browser console (F12)
2. Look for JSON parsing errors
3. Validate your JSON at jsonlint.com
4. Fix the syntax error

### Changes Not Showing

**Cause**: Browser cache

**Solution**:
1. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. Clear browser cache
3. Restart dev server

### Special Characters Not Displaying

**Cause**: Character encoding

**Solution**:
- Use Unicode escape sequences for special characters
- Or ensure file is saved as UTF-8

## 📚 Next Steps

1. Edit `src/config.json` with your information
2. Save and test in browser
3. Add your profile image (see CUSTOMIZATION_GUIDE.md)
4. Deploy your portfolio (see DEPLOYMENT.md)

---

**Remember**: All content changes should be made in `src/config.json` only. No need to edit individual component files!

For adding images and styling changes, see `CUSTOMIZATION_GUIDE.md`.
