# React Portfolio

A responsive personal portfolio built with **React and Chakra UI** to showcase my projects, technical skills, and frontend development experience.

## Overview

This project is a personal portfolio website designed to present my work and provide a way for visitors, recruiters, and potential collaborators to contact me.

The application uses reusable React components, responsive layouts, and a custom theme context to create an interactive user experience.

## Features

- **Responsive Design:** Adapts to different screen sizes.
- **Dark and Light Mode:** Switch between themes using a custom React Context.
- **Project Showcase:** Displays selected projects in reusable cards.
- **Smooth Navigation:** Navigate between portfolio sections using the header.
- **Sticky Header:** Keeps the navigation visible while scrolling.
- **Contact Form:** Includes name, email address, enquiry type, and message fields.
- **Form Validation:** Uses Formik and Yup to manage form values and validate user input.
- **Social Links:** Provides quick access to email, GitHub, and LinkedIn.

## Tech Stack

- **React** — Component-based user interface development.
- **JavaScript (ES6+)** — Application logic and interactivity.
- **Chakra UI v3** — UI components and responsive styling.
- **Formik** — Form state management and submission handling.
- **Yup** — Form validation.
- **HTML5 and CSS3** — Web structure and styling.
- **Create React App** — Development server and production build tooling.

## Project Structure

```text
react-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── assets/
│   │   ├── Context/
│   │   │   └── ThemeContext.js
│   │   ├── Header.js
│   │   ├── LandingSection.js
│   │   ├── ProjectsSection.js
│   │   └── ContactMe.js
│   ├── App.css
│   ├── App.js
│   └── index.js
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## View the Website

### Option 1: Run Locally

You can run the application on your computer by following these steps.

**Prerequisites**

- [Node.js and npm](https://nodejs.org/)
- [Git](https://git-scm.com/)

**1. Clone the repository**

```bash
git clone https://github.com/Mohammad-Amin-Jenadele/react-portfolio.git
```

**2. Navigate to the project directory**

```bash
cd react-portfolio
```

**3. Install dependencies**

```bash
npm install
```

**4. Start the development server**

```bash
npm start
```

**5. Open the website**

Visit [http://localhost:3000](http://localhost:3000) in your browser.

The development server will automatically reload the page when you make changes to the source code.

### Option 2: View the Live Website

A live demo link will be added once the application is deployed.

The GitHub repository contains the source code; it does not automatically host the running React application. Until deployment, use the local setup instructions above to view the website.

## Form Submission

The contact form currently demonstrates frontend form handling and validation with Formik and Yup. Its submission handler logs the submitted values to the browser console.

A backend or form-handling service is required to deliver messages or store submissions permanently.

## Production Build

To generate an optimized production build, run:

```bash
npm run build
```

The generated files will be placed in the `build/` directory and can be deployed to a compatible static hosting service.

## Future Improvements

- Deploy the portfolio and add a live demo link.
- Integrate the contact form with a backend or email service.
- Expand the project showcase with additional projects and demonstrations.

## License

This project is available under the MIT License. See the [LICENSE](LICENSE) file for details.