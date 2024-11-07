# SISTN_Web

Welcome to the SISTN_Web repository, the source code for SISTN (Society of Information Science & Technology Nigeria)'s official website. This website was developed using **React** with **Vite** as the build tool, providing a streamlined and efficient development process.

## Table of Contents
1. [About the Project](#about-the-project)
2. [Getting Started](#getting-started)
3. [Development](#development)
4. [Making Changes](#making-changes)
5. [Building for Production](#building-for-production)
6. [Deploying to Hostinger](#deploying-to-hostinger)
7. [PHP Server Setup](#php-server-setup)
8. [Deploying the PHP Server to Hostinger](#deploying-the-php-server-to-hostinger)
9. [Technology Used](#technology-used)

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
This will run the development server on [http://localhost:5173](http://localhost:5173) by default (or another port if 5173 is in use). Vite will automatically hot-reload changes, so any modifications you make will be visible without needing to refresh the browser.

---

## Making Changes

### Folder Structure
The key folders are as follows:
- **src/**: Contains all source code, including components, assets, styles, and configuration files.
- **public/**: Contains public assets, such as the favicon, which are served as-is.

### Steps to Modify Components
1. Navigate to `src/shared/components` for any reusable UI elements or `src/views/pages` for individual pages.
2. Modify the desired component or page.
3. Save your changes, and they will automatically reflect in the development server thanks to Vite's hot module replacement (HMR).

### Global Styles
The main stylesheets and CSS configurations are stored in `src/assets/scss`. Update the global styles here or in `src/style.css` to maintain consistency across the website.
For SASS reference, visit [SASS Docs](https://sass-lang.com/)
TailwindCSS is also being used, check the tailwind.config.js file to make your changes to how tailwind is being used in this project. For reference, visit  [Tailwind Docs](https://tailwindcss.com/)

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

Certainly! Here’s the additional section you requested:

---

## PHP Server Setup

In addition to the main SISTN_Web frontend, there's also a PHP server component for handling backend operations. Follow these instructions to set up and deploy the PHP server.

### Running the PHP Server Locally

To run the PHP server on your local machine, follow these steps:

1. **Install PHP**: Ensure PHP is installed on your system. You can verify by running:
   ```bash
   php -v
   ```
   If PHP is not installed, download and install it from [https://www.php.net/downloads](https://www.php.net/downloads).

2. **Navigate to the PHP Server Directory**:
   Go to the `php_server` directory within the project:
   ```bash
   cd php_server
   ```

3. **Start the PHP Server**:
   Start a local PHP server using:
   ```bash
   php -S localhost:8000
   ```
   This will run the server on [http://localhost:8000](http://localhost:8000).

4. **Configuration Settings**:
   - Adjust any necessary configurations in the `php_server/config.php` file. This may include settings for database connections, API endpoints, or environment variables.
   - Ensure the configuration matches your local development setup.

### Deploying the PHP Server to Hostinger

To deploy the PHP server on Hostinger, follow these steps:

1. **Upload the `php_server` Folder**:
   - Using an FTP client (like FileZilla) or the Hostinger File Manager, upload the entire `php_server` folder to the Hostinger server.
   - Place it in the **public_html** directory or a specific subdirectory if it’s part of a subdomain.

2. **Configure Server Settings**:
   - Edit the `php_server/config/database.php` file on the server to ensure all settings (e.g., database credentials, API keys) are correct for production.

3. **Test the PHP Server**:
   - Visit `yourdomain.com/php_server` (or the respective URL path) to ensure the PHP server is running correctly on Hostinger.
   - If you need URL rewriting or additional server configurations, add these settings to the `.htaccess` file in the `php_server` directory.

---

By following these instructions, you’ll be able to run and deploy the PHP server component of SISTN_Web effectively.

## Technology Used

### Frontend:
- **React.js**: For building the user interface with a component-based architecture.
- **Vite**: A next-generation build tool for faster development and optimized production builds.
- **TailwindCSS**: Utility-first CSS framework for styling the application.
- **SASS**: CSS preprocessor used for styling and improving maintainability.
  
### Backend:
- **PHP**: For server-side logic and handling dynamic content.
- **MySQL**: Used for database management.

### Deployment:
- **Hostinger**: Hosting platform for deploying the application.
- **FTP**: For transferring files to the server.
  
### Development Tools:
- **Node.js**: JavaScript runtime for building the frontend.
- **npm/yarn**: For managing dependencies and scripts.
- **Git**: Version control for managing the codebase.


### Note on Updates
Each time you make changes and rebuild the project, repeat the upload steps above with the newly generated `dist` folder.