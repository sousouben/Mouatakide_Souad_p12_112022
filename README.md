# Mouatakide_Souad_p12_112022

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
![Figma](https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

---

![logo](frontend/src/assets/logo/logo.png)

## Presentation

SportSee project is an application for sportive people that want to follow their daily progress through analytics dashboard.

## Prerequisites

Run the npm command will allow you to install the dependencies
npm install

## Installing the app

- Clone the repo on your computer.

```bash
clone the repository : https://github.com/sousouben/Mouatakide_Souad_p12_112022.git
```

- Package installations after cloning.

```bash
# with NPM
npm install
# with Yarn
yarn
```

- Start the application

```bash
npm run start
# or
npm start
# with Yarn
yarn start
```

- You can generate jsdoc after cloning.

```bash
npm run doc
```

### Backend

    Open a new terminal and run `cd Backend` command
    Then run the `npm run start` command the backend will open http://localhost:3000

### FrontEnd

    Open a new terminal and run `cd frontend`
    Then run the `npm start` command will allow you to run the application on http://localhost:3001

    Getting Started with Create React App

This project was bootstrapped with Create React App.

### Possible endpoints

This project includes four endpoints that you will be able to use:

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

### Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.

## Author

Mouatakide Souad
