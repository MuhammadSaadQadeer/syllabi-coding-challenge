# Project Setup Guide

## Prerequisites
- Node.js (version > 20)
- Git
- npm or yarn

## Getting Started

### 1. Clone the Repository
```bash
git clone git@github.com:MuhammadSaadQadeer/syllabi-coding-challenge.git
```

### 2. Frontend Setup
```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install   # or
yarn install

# Start development server
npm run dev   # or
yarn dev
```

### 3. Backend Setup
```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install -D json-server json-server-auth   # NPM
# or
yarn add -D json-server json-server-auth      # Yarn

# Start backend server
node server.js
```

## Project Structure
- `frontend/`: Contains frontend application
- `backend/`: Contains backend server and configuration

## Troubleshooting
- Ensure Node.js is version > 20
- Check that all dependencies are correctly installed
- Verify network connections if server fails to start

## Additional Notes
- Use npm or yarn consistently throughout the project
- Refer to project documentation for specific configuration details
