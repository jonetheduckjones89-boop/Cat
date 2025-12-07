# HealthAuto Dashboard

A comprehensive healthcare management dashboard built with React, Vite, and TypeScript. This application enables healthcare providers to manage patients, schedules, files, and utilize AI for presentation reviews.

## Features

- **Dashboard Overview**: Quick stats and quick actions for daily operations.
- **Patient Management**: View and manage patient contact details.
- **Schedule System**: View upcoming meetings and appointments.
- **File Management**: Upload and download patient-related files.
- **AI Review**: AI-driven analysis of patient data presentations.
- **Backend Integration**: Connected to a live backend service for data persistence.

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **HTTP Client**: Axios
- **Routing**: React Router DOM

## Setup & Installation

1.  **Install Dependencies**
    ```bash
    npm install
    ```

2.  **Run Development Server**
    ```bash
    npm run dev
    ```

3.  **Build for Production**
    ```bash
    npm run build
    ```

4.  **Linting & Formatting**
    ```bash
    npm run lint
    npm run format
    ```

## Architecture

The project follows a standard scalable React architecture:

- `src/api/`: Centralized API definition and endpoints.
- `src/components/`: Reusable UI components (Navbar, Cards, Layouts).
- `src/pages/`: Page-level components corresponding to routes.
- `src/styles/`: Global styles and CSS configurations.
- `src/main.tsx`: Application entry point.

## Code Quality

This project enforces code quality using ESLint and Prettier.
- **Linting**: Checks for code errors and unused variables.
- **Formatting**: Ensures consistent code style across the project.
