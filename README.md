# Work-Fit Database

A customized exercise and wellness resource for manufacturing plant employees. Featuring preventative exercises, warm-ups, and stretches with intelligent filtering by body part, movement type, and department.

## Features

✅ **Exercise Library** - Comprehensive collection of exercises, stretches, and warm-ups  
✅ **Smart Filtering** - Filter by body part, exercise type, and department  
✅ **QR Code Sharing** - Generate and download QR codes for easy employee access  
✅ **Mobile Responsive** - Works perfectly on phones, tablets, and desktops  
✅ **Company Branding** - Customized with your company colors  

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### 3. Build for Production

```bash
npm run build
```

### 4. Deploy to Vercel (Free!)

#### Option A: Direct Deployment (Recommended)
1. Go to [vercel.com](https://vercel.com)
2. Sign in with your GitHub account
3. Click "New Project"
4. Select the `Work-Fit-Website-Project` repository
5. Click "Deploy"
6. Done! Your site is live and gets a URL like `work-fit-website-project.vercel.app`

#### Option B: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

## Project Structure

```
Work-Fit-Website-Project/
├── src/
│   ├── components/           # Reusable React components
│   │   ├── FilterPanel.jsx   # Filter controls
│   │   ├── ExerciseCard.jsx  # Individual exercise display
│   │   ├── QRCodeModal.jsx   # QR code popup
│   │   └── *.css             # Component styles
│   ├── data/
│   │   └── exercises.js      # Exercise database
│   ├── App.jsx               # Main app component
│   ├── index.css             # Global styles
│   └── main.jsx              # React entry point
├── index.html                # HTML template
├── package.json              # Dependencies
├── vite.config.js            # Build configuration
└── vercel.json               # Vercel deployment config
```

## How to Add Your Own Exercises

### Edit the Exercise Database

1. Open `src/data/exercises.js`
2. Add new exercises to the `exercises` array following this format:

```javascript
{
  id: 11,
  name: "Your Exercise Name",
  type: "stretch",  // or "warm-up" or "preventative"
  bodyParts: ["neck", "shoulders"],  // See available body parts below
  departments: ["Trim", "Chassis"],   // See available departments below
  description: "Clear, simple instructions for the exercise",
  imageUrl: "https://link-to-your-image.jpg",
  videoUrl: "https://www.youtube.com/embed/video-id"  // Optional
}
```

### Available Body Parts
- neck
- shoulders
- wrist
- forearm
- elbow
- back
- lower back
- chest
- hips
- legs
- quads

(Add more as needed in the `bodyParts` array)

### Available Departments
- Trim
- Chassis
- Door/IP Line
- Body
- Final
- Material

(Edit the `departments` array in `src/data/exercises.js` if you need different ones)

### Adding Images and Videos

**For Images:**
- Use placeholder service like [placeholder.com](https://placeholder.com) while building
- Later, upload images to a free service like:
  - Imgur
  - Cloudinary (has free tier)
  - GitHub (in your repo's media folder)

**For Videos:**
- Use YouTube embedded links (format: `https://www.youtube.com/embed/VIDEO_ID`)
- Or use other video hosting services

## Customization

### Company Colors

Colors are defined in `src/index.css`. Your colors are already set:

```css
--primary-blue: #2baadf;
--teal: #75c7c3;
--orange: #ff9900;
--dark-blue: #10516f;
--gray: #7b7b7b;
--light-blue: #abe1f9;
```

### Sharing Your Website

Once deployed to Vercel:
1. Copy your Vercel URL (e.g., `https://work-fit-website-project.vercel.app`)
2. Click the "Share QR Code" button on your site
3. Download the QR code
4. Print it and post it around your plant!

Employees can scan the QR code with their phone cameras and instantly access the exercises.

## Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Vercel** - Hosting (free)
- **QRCode.react** - QR code generation

## Troubleshooting

### Port already in use
```bash
npm run dev -- --port 3001
```

### Build fails
Make sure you have Node.js 16+ installed:
```bash
node --version
```

### Images not loading
- Check that the image URLs are correct
- Test the URL in your browser first

## Next Steps

1. ✅ Add your exercises to `src/data/exercises.js`
2. ✅ Update images and videos
3. ✅ Test all filters work correctly
4. ✅ Deploy to Vercel
5. ✅ Generate QR code and print/share
6. ✅ Gather feedback from employees
7. ✅ Update exercises based on feedback

## Support

For questions about:
- **React/Code**: Check [React docs](https://react.dev)
- **Deployment**: Check [Vercel docs](https://vercel.com/docs)
- **This project**: Review the code comments throughout the files

## License

This project is for internal use at your manufacturing plant.

---

**Happy exercising!** 💪 Keep your team safe and healthy!
