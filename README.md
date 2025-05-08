# Employee Management Database
  ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

  ## Description
  This is a full-stack MERN application where users can take a 10-question tech quiz and receive a final score. This version of the app includes full Cypress integration for both component and end-to-end (E2E) testing.

  ## Table of Contents
  - [Installation](#installation)
  - [Features](#features)
  - [Tech](#tech)
  - [Usage](#usage)
  - [License](#license)
  - [Contribution](#contribution)
  - [Testing](#tests)
  - [Contact](#contact)

 ## Installation
  - Clone a copy of the repository directly do your desktop with bash:
    - git clone https://github.com/langiam/Tech-Quiz-Test-Suite.git
    - cd Tech-Quiz-Test-Suite
  - Open the repo folder in a codeing GUI of your choice
 
 ##  Features
  - Take a randomized 10-question quiz
  - Get instant score feedback upon completion
  - Option to start a new quiz after finishing
  - Component and E2E tests written in Cypress
 
 ##  Tech
  - **Frontend:** React + TypeScript + Vite
  - **Backend:** Node.js + Express + MongoDB + Mongoose
  - **Testing:** Cypress (component + E2E)


  ## Usage
    - Install Dependinces: npm install
    - Set up environment variables
    - Copy .env.example to .env in the /server directory and provide 
      - your local MongoDB connection string: MONGODB_URI=mongodb://
        127.0.0.1:27017/techquiz
    - Seed the database:
      - cd server
      - npx tsx src/seeds/seed.ts
    -Start the development server:
      - npm run start:dev
  ## License
  This project is licensed under the **MIT** license. 
  Please visit [MIT](https://opensource.org/licenses/MIT) for additional information.

  ## Contribution
  Please feel free to contribute; just create and clone your own fork.

  ## Testing
  Any bugs or suggested edits can be reported through the issuses tap on GitHub.

  ## Contact
  If you have any questions, you can contact me at:
  - Github: [langiam](https://github.com/langiam)
  - Email: [ryan.matthew.lang@gmail.com](mailto:ryan.matthew.lang@gmail.com)
