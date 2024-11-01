# SISTN_Web

Welcome to the SISTN_Web repository, the source code for SISTN (Society of Information Science & Technology Nigeria)'s official website. This website was developed using **React** with **Vite** as the build tool, providing a streamlined and efficient development process.

## Table of Contents
1. [About the Project](#about-the-project)
2. [Getting Started](#getting-started)
3. [Development](#development)
4. [Making Changes](#making-changes)
5. [Building for Production](#building-for-production)
6. [Deploying to Hostinger](#deploying-to-hostinger)
7. [License](#license)

---

## About the Project

SISTN_Web is designed to present the organization's mission, events, resources, and contact information to its members and the public. It provides a professional and engaging interface, built to be user-friendly, mobile-responsive, and easily maintainable.

---

## Getting Started

To set up the repository for local development, make sure you have **Node.js** and **npm** installed on your machine.

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/SISTN_Web.git
cd SISTN_Web
```

### 2. Install Dependencies
Use npm or yarn to install all required packages:
```bash
npm install
```
or
```bash
yarn
```

---

## Development

To start the development server and view the project on your local machine, use the following command:
```bash
npm run dev
```
This will run the development server on [http://localhost:5173](http://localhost:5173) by default (or another port if 3000 is in use). Vite will automatically hot-reload changes, so any modifications you make will be visible without needing to refresh the browser.

---

## Making Changes

### Folder Structure
The key folders are as follows:
- **src/**: Contains all source code, including components, assets, styles, and configuration files.
- **public/**: Contains public assets, such as the favicon, which are served as-is.

### Steps to Modify Components
1. Navigate to `src/components` for any reusable UI elements or `src/pages` for individual pages.
2. Modify the desired component or page.
3. Save your changes, and they will automatically reflect in the development server thanks to Vite's hot module replacement (HMR).

### Global Styles
The main stylesheets and CSS configurations are stored in `src/styles`. Update the global styles here to maintain consistency across the website.

---

## Building for Production

To prepare the website for deployment, build the project with the following command:
```bash
npm run build
```

This will generate a `dist` folder containing the minified and optimized code for production. The `dist` folder will include all assets, JavaScript, HTML, and CSS files necessary to deploy the site.

---

## Deploying to Hostinger

To host this website on Hostinger, follow these steps:

1. **Upload the `dist` Folder**:
   - Use an FTP client (e.g., FileZilla) or the Hostinger File Manager to upload the entire `dist` folder to the server.
   - Make sure it’s uploaded to the **public_html** directory if this is the primary site or into a specific directory if it’s a subdomain.

2. **Configure the Server**:
   - In Hostinger, ensure your domain or subdomain is pointing to the uploaded folder.
   - If any server configuration is needed (like `.htaccess` for URL rewriting), add it directly to the `dist` folder.

3. **Test the Deployment**:
   - Visit your domain to verify that the website is running correctly.

### Note on Updates
Each time you make changes and rebuild the project, repeat the upload steps above with the newly generated `dist` folder.

