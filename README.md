# YC Directory

A modern startup directory platform built with Next.js and Sanity CMS, designed to help entrepreneurs pitch their startups, connect with other entrepreneurs, and get noticed in virtual competitions.

## 🚀 Features

- **Startup Discovery**: Browse and search through a curated directory of startups
- **Advanced Search**: Search startups by title, category, or author name
- **Startup Details**: View detailed information about each startup including pitch, description, and author details
- **Real-time Updates**: Live updates when content changes in the CMS
- **Responsive Design**: Modern, mobile-friendly interface built with Tailwind CSS
- **Content Management**: Sanity Studio integration for easy content management
- **Authentication**: NextAuth.js integration for user authentication

## 🛠️ Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript
- **Styling**: Tailwind CSS, Radix UI components
- **CMS**: Sanity v3 with custom schema
- **Authentication**: NextAuth.js v5
- **Icons**: Lucide React
- **Font**: Work Sans font family

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 10.5.2+

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd yc-directory
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory and add your Sanity project credentials:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token
```

4. Generate Sanity types:
```bash
npm run typegen
```

5. Start the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📝 Content Management

The project includes a Sanity Studio for content management:

- Access the studio at `/studio`
- Manage startups, authors, and other content
- Real-time preview of changes
- Built-in vision tool for GROQ queries

### Content Types

- **Startups**: Title, description, category, image, pitch (markdown), author reference, view count
- **Authors**: Name, username, email, image, bio

## 🔍 Search Functionality

The platform includes comprehensive search capabilities:
- Search by startup title
- Search by category
- Search by author name
- Real-time search results
- URL-based search parameters

## 🎨 Styling

The project uses a modern design system with:
- Custom CSS classes for consistent styling
- Tailwind CSS for utility-first styling
- Responsive design patterns
- Custom color scheme and typography

## 📱 Pages

- **Home Page** (`/`): Displays all startups with search functionality
- **Startup Detail** (`/startup/[id]`): Individual startup information and pitch
- **Author Profile** (`/user/[id]`): Author information and their startups
- **Sanity Studio** (`/studio`): Content management interface

## 🚀 Deployment

The project is optimized for deployment on Vercel:

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm start
```

## 📄 Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typegen` - Generate Sanity TypeScript types

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is private and proprietary.

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)