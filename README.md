# Modern Software Engineer Portfolio Website

A clean, responsive, and light-mode focused portfolio website built with modern **HTML5**, **Tailwind CSS**, and **Vanilla JavaScript**. Fully responsive, accessible, zero build steps required, and featuring a built-in Dark/Light theme toggle.

---

## 🌟 Key Features

- **🎨 Clean & Professional Design**: Light-themed default with sleek dark mode support.
- **⚡ Supercharged Performance**: Zero build system required — open `index.html` directly in any browser.
- **📱 Fully Responsive Layout**: Mobile-first design with smooth hamburger navigation drawer.
- **🔍 Filterable Projects Grid**: Category tabs (All, Full-Stack, Frontend, Cloud/API) with smooth transitions.
- **🔍 Interactive Case Study Modal**: Pop-up detail views for featured projects.
- **⏱️ Experience Timeline**: Clean vertical timeline highlighting job roles, achievements, and tech stacks.
- **✉️ Interactive Contact Form**: Validated contact form with simulated instant toast feedback.

---

## 📁 File Structure

```text
portfolio-website/
├── index.html        # Main HTML structure with Tailwind CDN & semantics
├── styles.css        # Custom CSS for animations, scrollbars & overrides
├── app.js            # JavaScript for theme switching, modal, filter & forms
└── README.md         # Setup and customization guide
```

---

## 🚀 How to Run Locally

### Option 1: Direct File Preview
Simply double-click or open `index.html` in your favorite web browser (Chrome, Firefox, Edge, Safari).

### Option 2: Local HTTP Server (Optional)
If you have Python installed:
```bash
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your browser.

---

## ✏️ How to Customize

1. **Personal Information**: Open `index.html` and replace "Alex Morgan" with your name, title, bio, and social media links.
2. **Projects**: Edit the `projectData` object inside `app.js` to showcase your real GitHub repositories, live demo links, and project descriptions.
3. **Skills**: Modify the skill proficiency percentages and tags in the `#skills` section of `index.html`.
4. **Work Experience**: Update the timeline items in the `#experience` section of `index.html`.
