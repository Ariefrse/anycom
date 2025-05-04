# AnyComp

A modern web platform for company incorporation services in Malaysia, built with Next.js, TypeScript, Tailwind CSS, Zustand, and ShadCN UI.

## 🚀 Project Overview
AnyCom is a CoSec Marketplace (Company
Secretary).

## 🛠️ Technology Stack
- **Framework:** Next.js (React, SSR/SSG)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** Zustand
- **UI Components:** ShadCN UI
- **Font:** Montserrat (Google Fonts)
- **Icons:** Lucide React
- **Notifications:** Sonner

## 📁 Project Structure
- `/app` – Main app pages and global styles
- `/components` – Reusable UI and feature components
- `/lib` – Data, types, and Zustand store
- `/public/images` – Static assets (logos, provider images)

## ✨ Features
- Responsive, accessible UI with ShadCN and Tailwind
- Large, prominent provider images in a grid
- Search and filter providers by type, region, and completion time
- Consistent blue styling for primary actions (search, contact)
- Realistic provider data with images
- Social/contact info in the footer

## 🖥️ Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm or yarn

### Installation
```bash
npm install
# or
yarn install
```

### Development
```bash
npm run dev
# or
yarn dev
```
Visit [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production
```bash
npm run build
npm start
```

## 🖼️ Customizing Provider Images
- Add new images to `/public/images/`.
- Update `/lib/data.ts` to reference new images in the `logo` field for each provider.

## 📝 Customization Notes
- **Font:** Montserrat is imported via Google Fonts in `app/globals.css` and set as the default sans font in Tailwind.
- **Primary Color:** The main blue (`#1e3a8a`) is used for key actions (search, contact, incorporate).
- **State:** Filters and provider data are managed with Zustand for simplicity and scalability.

## 🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 📄 License
[MIT](LICENSE) 