# Real Estate MERN Project

Welcome to the Real Estate MERN Project, a full-stack application built using the MERN stack (MongoDB, Express, React, Node.js). This project focuses on real estate management, providing users with the ability to log in, view residencies, search for properties, favorite them, book visits, and manage their bookings.

## Features
- **Authentication:** Utilizing Auth0 for secure user authentication, enabling users to log in and log out securely.
- **Residency Search:** Users can search for residencies by name, city, and country.
- **Favorites:** Users can mark residencies as favorites and view them in their favorites page.
- **Booking Visits:** Users can book visits for residencies and manage their bookings.
- **Interactive Map:** The application showcases the locations of different residencies on an interactive map.

## Backend (Server Side)
- **Prisma:** Utilized `@prisma/client` (version 5.1.1) to interact with MongoDB using Prisma's query and modeling capabilities.
- **Cookie Parser:** Used `cookie-parser` for parsing cookies in the server.
- **CORS:** Enabled `cors` for handling Cross-Origin Resource Sharing.
- **Dotenv:** Employed `dotenv` (version 16.3.1) for managing environment variables.
- **Express:** The server runs on `express` (version 4.18.2) framework for handling HTTP requests.
- **Express Async Handler:** Utilized `express-async-handler` for handling asynchronous operations within Express routes.
- **Express OAuth2 JWT Bearer:** Integrated `express-oauth2-jwt-bearer` to ensure secure access to API endpoints.
- **Nodemon:** Used `nodemon` (version 3.0.1) for auto-restarting the server during development.

## Frontend (Client Side)
- **Auth0 React:** Leveraged `@auth0/auth0-react` (version 2.2.0) for implementing authentication in the frontend.
- **Mantine:** Utilized components from `@mantine/core`, `@mantine/dates`, `@mantine/form`, and `@mantine/hooks` (all version 6.0.17) for UI components and form handling.
- **Axios:** Used `axios` (version 1.4.0) for making HTTP requests to the backend.
- **Dayjs:** Employed `dayjs` (version 1.11.9) for handling dates and times efficiently.
- **ESRI Leaflet Geocoder:** Integrated `esri-leaflet-geocoder` (version 2.3.3) for geocoding and displaying locations on the map.
- **Framer Motion:** Utilized `framer-motion` (version 10.8.5) for adding animations to UI components.
- **Leaflet:** Used `leaflet` (version 1.9.4) for interactive maps.
- **Lodash:** Employed `lodash` (version 4.17.21) for utility functions.
- **React:** The frontend is built using `react` (version 18).
- **React Accessible Accordion:** Utilized `react-accessible-accordion` (version 5.0.0) for creating accessible accordions.
- **React Countup:** Employed `react-countup` (version 6.4.2) for animated number counting.
- **React Icons:** Used `react-icons` (version 4.8.0) for a wide variety of icons.
- **React Leaflet:** Integrated `react-leaflet` (version 4.2.1) for seamless integration of Leaflet maps with React components.
- **React Outside Click Handler:** Utilized `react-outside-click-handler` (version 1.3.0) for detecting clicks outside specific components.
- **React Query:** Employed `react-query` (version 3.39.3) for managing and caching API data.
- **React Router Dom:** Utilized `react-router-dom` (version 6.10.0) for handling client-side routing.
- **React Spinners:** Used `react-spinners` (version 0.13.8) for adding loading spinners.
- **React Toastify:** Integrated `react-toastify` (version 9.1.3) for displaying toast notifications.
- **Swiper:** Utilized `swiper` (version 9.1.1) for creating sliders and carousels.
- **World Countries:** Employed `world-countries` (version 4.0.0) for accessing country information.

## Deployment
The application is deployed on Vercel and can be accessed at [Real Estate MERN Project](https://real-estate-mern-project-eight.vercel.app/).
