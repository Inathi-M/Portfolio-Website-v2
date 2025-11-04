# 🎨 Portfolio Website

A modern, responsive portfolio website built with Angular 19, showcasing professional experience, skills, projects, and educational background with a clean component-based architecture.

![Angular](https://img.shields.io/badge/Angular-19.2.0-DD0031?style=flat&logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?style=flat&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green.svg)

## 📋 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Development](#-development)
- [Building](#-building)
- [Deployment](#-deployment)
- [Customization](#-customization)
- [Browser Support](#-browser-support)

## ✨ Features

- **Modern Angular 19**: Built with the latest Angular features including standalone components
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Component-Based Architecture**: Clean separation of concerns with modular components
- **Type-Safe**: Full TypeScript implementation with strict type checking
- **Smooth Animations**: CSS animations and hover effects for enhanced user experience
- **Service Layer**: Centralized data management using Angular services
- **Modern Control Flow**: Uses Angular's new `@for` and `@if` syntax
- **Font Awesome Icons**: Professional iconography throughout the site
- **SEO Friendly**: Semantic HTML structure for better search engine optimization

## 🛠️ Tech Stack

- **Framework**: Angular 19.2.0
- **Language**: TypeScript 5.7.2
- **Build Tool**: Angular CLI with Vite
- **Styling**: CSS3 with custom properties and animations
- **Icons**: Font Awesome 6.4.0
- **Server**: Angular Dev Server (development)
- **Node Version**: 20.18.0+

## 📁 Project Structure

```
portfolio-angular/
├── src/
│   ├── app/
│   │   ├── components/          # Feature components
│   │   │   ├── navbar/          # Navigation component
│   │   │   ├── hero/            # Hero/landing section
│   │   │   ├── about/           # About section with stats
│   │   │   ├── experience/      # Skills and experience
│   │   │   ├── services/        # Services offered
│   │   │   ├── portfolio/       # Project showcase
│   │   │   ├── courses/         # Educational background
│   │   │   ├── contact/         # Contact information
│   │   │   └── footer/          # Footer section
│   │   ├── models/              # TypeScript interfaces
│   │   │   └── portfolio.models.ts
│   │   ├── services/            # Data services
│   │   │   └── portfolio.service.ts
│   │   ├── app.component.ts     # Root component
│   │   └── app.config.ts        # App configuration
│   ├── assets/                  # Static assets (images, CV, etc.)
│   ├── index.html               # Main HTML file
│   └── styles.css               # Global styles
├── angular.json                 # Angular CLI configuration
├── package.json                 # Dependencies and scripts
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
```

### Component Architecture

Each component follows the same structure:
- `*.component.ts` - Component logic and data injection
- `*.component.html` - Component template
- `*.component.css` - Component-specific styles

All components are **standalone** and can be imported directly without NgModule.

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 18.13 or higher (recommended: 20.18.0)
- **npm**: Version 9.0 or higher
- **Angular CLI**: Version 19.2.17

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Inathi-M/Portfolio-Website.git
   cd portfolio-angular
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify Node version** (if using nvm)
   ```bash
   nvm use 20.18.0
   ```

## 💻 Development

### Start Development Server

```bash
npm start
# or
ng serve
```

The application will be available at `http://localhost:4200/`

**Note**: If port 4200 is in use, specify a different port:
```bash
ng serve --port 4201
```

### Disable Hot Module Replacement (if needed)

```bash
ng serve --hmr=false
```

### Development Features

- **Auto-reload**: The app automatically reloads when you save changes
- **Live compilation**: TypeScript is compiled on-the-fly
- **Error reporting**: Compilation errors appear in the terminal and browser console

## 🏗️ Building

### Development Build

```bash
ng build
```

### Production Build

```bash
ng build --configuration production
```

Build artifacts will be stored in the `dist/` directory. The production build includes:
- Minified JavaScript and CSS
- Tree-shaking for smaller bundle sizes
- Optimized assets
- Source maps (optional)

### Build Statistics

Current bundle size (development):
- **main.js**: 135.35 kB
- **polyfills.js**: 92.41 kB
- **styles.css**: 319 bytes
- **Total**: ~228 kB

## 🚢 Deployment

### Deploy to GitHub Pages

1. Build for production:
   ```bash
   ng build --configuration production --base-href "/Portfolio-Website/"
   ```

2. Deploy using `angular-cli-ghpages`:
   ```bash
   npm install -g angular-cli-ghpages
   npx angular-cli-ghpages --dir=dist/portfolio-website/browser
   ```

### Deploy to Netlify

1. Build the project:
   ```bash
   ng build --configuration production
   ```

2. Deploy the `dist/portfolio-website/browser` directory to Netlify

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy:
   ```bash
   vercel --prod
   ```

## 🎨 Customization

### Update Personal Information

Edit `src/app/services/portfolio.service.ts` to customize:

```typescript
private portfolioData: PortfolioData = {
  personalInfo: {
    name: 'Your Name',
    role: 'Your Role',
    email: 'your.email@example.com',
    // ... other fields
  },
  // ... other data
};
```

### Modify Styling

- **Global styles**: Edit `src/styles.css`
- **Component styles**: Edit individual `*.component.css` files
- **Color scheme**: Update CSS custom properties in component styles

### Add New Sections

1. Generate a new component:
   ```bash
   ng generate component components/your-section
   ```

2. Make it standalone by adding to the decorator:
   ```typescript
   @Component({
     standalone: true,
     // ...
   })
   ```

3. Add the component to `app.component.ts` imports and template

### Update Content

- **Projects**: Edit the `projects` array in `portfolio.service.ts`
- **Skills**: Edit the `skillCategories` array
- **Services**: Edit the `services` array
- **Courses**: Edit the `courses` array

## 🌐 Browser Support

This project supports the following browsers:

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

Mobile browsers:
- iOS Safari (latest)
- Chrome for Android (latest)

## 📝 Scripts

| Script | Description |
|--------|-------------|
| `npm start` | Start development server |
| `npm run build` | Build for production |
| `npm run watch` | Build in watch mode |
| `npm test` | Run unit tests |
| `ng serve` | Start dev server (Angular CLI) |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👤 Author

**Inathi Mhlongo**
- GitHub: [@Inathi-M](https://github.com/Inathi-M)
- LinkedIn: [Inathi Mhlongo](https://linkedin.com/in/inathi-mhlongo)
- Email: tshaphna@gmail.com

## 🙏 Acknowledgments

- [Angular Team](https://angular.io/) for the amazing framework
- [Font Awesome](https://fontawesome.com/) for the icon library
- [Angular CLI](https://cli.angular.io/) for the development tools

---

**Built with ❤️ using Angular**
