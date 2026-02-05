# ICTKS - International Conference on Traditional Knowledge System

This is a Next.js application for the International Conference on Traditional Knowledge System, organized by the Department of Architecture and Planning, National Institute of Technology Patna.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd ictks
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
ictks/
├── src/
│   └── app/
│       ├── components/       # Reusable components
│       │   ├── Navbar.jsx   # Navigation bar
│       │   ├── Footer.jsx   # Footer
│       │   └── TKSBox.jsx   # Expandable content boxes
│       ├── committee/        # Committee page
│       ├── registration/     # Registration page
│       ├── schedule/         # Schedule page
│       ├── sponsors/         # Sponsors page
│       ├── reach/            # Contact page
│       ├── layout.js         # Root layout
│       ├── page.js           # Home page
│       └── globals.css       # Global styles
├── public/
│   └── img/                  # Images and assets
└── package.json
```

## Pages

- **Home** (`/`) - Conference introduction and key areas
- **Committee** (`/committee`) - Organizing committee members
- **Registration** (`/registration`) - Registration details and fees
- **Schedule** (`/schedule`) - Important dates and submission guidelines
- **Sponsors** (`/sponsors`) - Sponsorship information
- **Reach Us** (`/reach`) - Contact information and location map

## Features

- ✅ Fully responsive design
- ✅ Mobile-friendly navigation
- ✅ Expandable content sections
- ✅ Modern Next.js 15 App Router
- ✅ Google Fonts integration
- ✅ Font Awesome icons
- ✅ Interactive components

## Building for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 15
- React
- CSS (Custom styling)
- Font Awesome
- Google Fonts (Poppins, IM Fell English)

## Event Information

- **Event Date:** 5th & 6th June, 2026
- **Location:** NIT Patna, Ashok Rajpath, Patna, Bihar, 800005, India
- **Email:** ictks2026@nitp.ac.in

## License

© 2025 ICTKS - All Rights Reserved
