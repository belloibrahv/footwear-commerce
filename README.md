# 👟 KidSteps - Children's Footwear E-Commerce Platform

A modern, full-featured e-commerce platform for children's footwear built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🎓 Project Information

**Course:** CSC 414 Electronic Commerce (400 Level)  
**Institution:** Tai Solarin University of Education, Ijebu Ode, Ogun State  
**Group:** Group 3 - Children Footwears  
**Academic Year:** 2024/2025

## 👥 Team Members (Group 3)

1. **FABELURIN AYOMIDE DAVID** (20202024229) - Team Lead
2. SAHEED ABDULQADIR BOLLUWATIFE (20202024223) - Frontend Developer
3. CRADEBO FAIDAT ADEOLA (20202024255) - Backend Developer
4. ABDUEFATAI AYOMIKUN SOBANDE (20202024140) - UI/UX Designer
5. HASSAN OMOTOYOSI OLA-WAFEYIKEMI (20202024107) - Developer
6. ADEBIYI ALIYAT OLUWATOYIB (20202024248) - Developer
7. CGUNLUSI GOODWEWS AMIOLAJESU (20202024125) - Developer
8. AYOOLA SEGUN MOSES (20202024143) - Developer
9. ROKEEB ABIOLA ADEDAYO (20202024139) - Developer
10. CLAUDNJOYE PRAISE MARKUS (20202024048) - Content Manager
11. CYEKUNLE MATTHEW OLADLYN (20202024105) - Developer
12. FASANYA OMOLOLA CHRISTIANA (20202024211) - Developer
13. ADELANA GBOLAJOKO GABRIEL (20202024241) - Developer
14. EKUARO MOSES AMANOLU (20202028072) - QA Tester
15. OYELETE TIMILEHIN AYOMIDE (20202024235) - Developer
16. OJOYE KAYODE STEPHEN (20202024219) - Developer
17. CDEDOYIN MICHAEL OBAOLWA (20202024068) - Developer
18. NOFIU BASIT OLATUNJI (20202024279) - Developer
19. BIORAKU OLUWASEYI TOHILOBA (20202024276) - Developer
20. GOLD ISAAC BRIGHT (20202024353) - Developer

## ✨ Features

### 🛍️ E-Commerce Functionality
- **Product Catalog:** Browse extensive collection of children's shoes
- **Product Categories:** Sneakers, Sandals, Boots, School Shoes, Casual
- **Product Filters:** Filter by category, price, size, and color
- **Product Search:** Real-time search functionality
- **Product Details:** Detailed product pages with image galleries
- **Shopping Cart:** Add, remove, and update cart items
- **Responsive Design:** Optimized for all devices

### 🎨 Modern UI/UX
- **Smooth Animations:** Powered by Framer Motion
- **Interactive Elements:** Hover effects and transitions
- **Clean Design:** Modern, minimalist interface
- **Gradient Accents:** Beautiful color schemes
- **Product Cards:** Eye-catching product displays
- **Team Showcase:** Animated slider featuring all team members

### 🚀 Technical Features
- **Next.js 15:** Latest features including App Router
- **TypeScript:** Type-safe development
- **Tailwind CSS:** Utility-first styling
- **Server Components:** Optimized performance
- **Image Optimization:** Next.js Image component
- **SEO Friendly:** Optimized metadata and structure

## 🛠️ Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Font:** Inter (Google Fonts)

## 📦 Installation

1. **Clone the repository:**
```bash
git clone <repository-url>
cd footwear-commerce
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run the development server:**
```bash
npm run dev
```

4. **Open your browser:**
Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
footwear-commerce/
├── app/                    # Next.js App Router
│   ├── about/             # About page
│   ├── cart/              # Shopping cart page
│   ├── products/          # Products listing & detail pages
│   ├── team/              # Team members page
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── Navigation.tsx     # Header navigation
│   ├── Hero.tsx          # Hero section
│   ├── ProductCard.tsx   # Product card component
│   ├── FeaturedProducts.tsx
│   ├── Categories.tsx    # Category showcase
│   ├── TeamSlider.tsx    # Animated team slider
│   └── Footer.tsx        # Footer component
├── lib/                  # Utility functions and data
│   └── data.ts          # Product and team data
├── types/               # TypeScript types
│   └── index.ts        # Type definitions
├── public/             # Static assets
├── project-docs/       # Project documentation
└── package.json        # Dependencies

```

## 🎯 Key Pages

- **Homepage (/):** Hero section, categories, featured products, team slider
- **Products (/products):** Full product catalog with filters and search
- **Product Detail (/products/[id]):** Detailed product information
- **About (/about):** Company story and values
- **Team (/team):** All 20 team members
- **Cart (/cart):** Shopping cart (template ready for state management)

## 🎨 Design Features

### Color Scheme
- **Primary:** Blue gradient (#0ea5e9 - #0284c7)
- **Secondary:** Purple gradient (#d946ef - #c026d3)
- **Accent:** Multi-color gradients for highlights

### Typography
- **Font Family:** Inter (clean, modern sans-serif)
- **Headings:** Bold, large sizes for impact
- **Body:** Readable, comfortable sizes

### Animations
- **Fade In:** Smooth content reveal
- **Slide Up:** Bottom-to-top entrance
- **Hover Effects:** Scale and shadow transitions
- **Slider:** Auto-playing team member carousel

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## 🚀 Build & Deploy

### Build for Production
```bash
npm run build
```

### Start Production Server
```bash
npm start
```

### Deploy to Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## 🎓 Learning Objectives Achieved

1. ✅ E-Commerce platform development
2. ✅ Modern web technologies implementation
3. ✅ Responsive design principles
4. ✅ User experience optimization
5. ✅ Team collaboration
6. ✅ Project management
7. ✅ TypeScript and type safety
8. ✅ Performance optimization

## 📈 Future Enhancements

- [ ] User authentication and accounts
- [ ] Backend API integration
- [ ] Real shopping cart with state management
- [ ] Payment gateway integration
- [ ] Order management system
- [ ] Admin dashboard
- [ ] Product reviews and ratings
- [ ] Wishlist functionality
- [ ] Email notifications
- [ ] Advanced analytics

## 🤝 Contributing

This project was developed as part of CSC 414 coursework by Group 3. For suggestions or improvements, please contact any team member.

## 📄 License

MIT License - Created for educational purposes.

## 🙏 Acknowledgments

- **Instructor:** CSC 414 Course Instructor
- **Institution:** Tai Solarin University of Education
- **Images:** Unsplash (for demo purposes)
- **Inspiration:** Modern e-commerce best practices

---

**Built with ❤️ by Group 3 - CSC 414 Electronic Commerce**  
*Tai Solarin University of Education, 2024*
