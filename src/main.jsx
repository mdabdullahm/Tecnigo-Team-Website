// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import './index.css';

// লেআউটগুলো ইম্পোর্ট করুন
import Layout from './layout/Layout.jsx';
import UiUxLayout from './layout/UiUxLayout.jsx';

// পেজগুলো ইম্পোর্ট করুন
import Home from './pages/Home.jsx';
import ServiceDetails from './pages/ServiceDetails.jsx';
import Contact from './pages/Contact.jsx';
import Projects from './pages/Projects.jsx';
import Team from './pages/Team.jsx';
import Blog from './pages/Blog.jsx';
import Career from './pages/Career.jsx';
import WebDevelopment from './pages/WebDevelopment.jsx';
import MobileAppDevelopment from './pages/MobileAppDevelopment.jsx';
import MvpDevelopment from './pages/MvpDevelopment.jsx';
import ServiceDesign from './pages/ServiceDesign.jsx';
import UserResearch from './pages/UserResearch.jsx';
import InteractionDesign from './pages/InteractionDesign.jsx';
import MvpServicePage from './pages/MvpServicePage.jsx';
import UiUxDesignPage from './pages/UiUxDesignPage.jsx';
import WorkPage from './pages/WorkPage.jsx';
import ComingSoonPage from './pages/ComingSoonPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import CyberSecurityPage from './pages/CyberSecurityPage.jsx';

// --- নতুন: কৃত্রিম ডিলে ফাংশন ---
const sleep = (ms = 500) => new Promise((resolve) => setTimeout(resolve, ms));

const fakeLoader = async () => {
  await sleep(); // 500ms অপেক্ষা করবে
  return null;   // loader-কে অবশ্যই কিছু একটা return করতে হয়
};
// ------------------------------------


// রাউটার কনফিগারেশন
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: fakeLoader, // <-- লোডার যোগ করা হলো
      },
      {
        path: 'contact',
        element: <Contact />,
        loader: fakeLoader,
      },
      {
        path: 'projects',
        element: <Projects />,
        loader: fakeLoader,
      },
      {
        path: 'team',
        element: <Team />,
        loader: fakeLoader,
      },
      {
        path: 'blog',
        element: <Blog />,
        loader: fakeLoader,
      },
      {
        path: 'career',
        element: <Career />,
        loader: fakeLoader,
      },
      {
        path: 'services/web-development',
        element: <WebDevelopment />,
        loader: fakeLoader,
      },
      {
        path: 'services/mobile-app-development',
        element: <MobileAppDevelopment />,
        loader: fakeLoader,
      },
      {
        path: 'services/mvp-development',
        element: <MvpDevelopment />,
        loader: fakeLoader,
      },
      {
        path: 'services/service-design',
        element: <ServiceDesign />,
        loader: fakeLoader,
      },
      {
        path: 'services/user-research',
        element: <UserResearch />,
        loader: fakeLoader,
      },
      {
        path: 'services/cyber-security',
        element: <CyberSecurityPage />,
        loader: fakeLoader,
      },
      {
        path: 'services/interaction-design',
        element: <InteractionDesign />,
        loader: fakeLoader,
      },
      {
        path: 'services/mvp-development-service',
        element: <MvpServicePage />,
        loader: fakeLoader,
      },
      {
        path: 'services/:serviceId',
        element: <ServiceDetails />,
        loader: fakeLoader,
      },
    ],
  },
  {
    element: <UiUxLayout />,
    children: [
      {
        path: 'services/ui-ux-design',
        element: <UiUxDesignPage />,
        loader: fakeLoader, // <-- এখানেও লোডার যোগ করা হলো
      },
      {
        path: 'work',
        element: <WorkPage />,
        loader: fakeLoader,
      },
      {
        path: 'blog-xd',
        element: <ComingSoonPage />,
        loader: fakeLoader,
      },
      {
        path: 'about-xd',
        element: <AboutPage />,
        loader: fakeLoader,
      },
      {
        path: 'contact-xd',
        element: <ContactPage />,
        loader: fakeLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ParallaxProvider>
      <RouterProvider router={router} />
    </ParallaxProvider>
  </React.StrictMode>
);