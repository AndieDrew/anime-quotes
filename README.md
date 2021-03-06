# AnimeQuotes

### Table of Contents
- [AnimeQuotes](#AnimeQuotes)
  - [Overview](#overview)
  - [Learning Goals](#learning-goals)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Setup Instructions](#setup-instructions)
  - [Future Iterations](#future-iterations)
  - [Credits](#credits)
      - [Authors](#authors)
      - [Project Managers](#project-managers)

## Overview

With limited time and a niche audience being targeted the goal of this project was to produce an MVP demonstrating our React, Router, Asynchronous JavaScript and cypress skills with attention to user personas. I chose the Animechan API for my niche audience and tailored my application for the specific user personas. Anime Quotes is an application for anime fans who like quick, easy, intuitive access to their favorite anime quotes and usually use the application in the dark on mobile devices.

Application is fully responsive and accessible.

![Screen Shot 2021-06-14 at 11 06 41 PM](https://user-images.githubusercontent.com/27929330/121986808-3173dd80-cd65-11eb-9165-a6a4bab53a69.png)

No warnings or Errors locally

![Screen Shot 2021-06-14 at 11 07 59 PM](https://user-images.githubusercontent.com/27929330/121986876-5f592200-cd65-11eb-9309-c8817182d95e.png)

- Deployed [LINK](https://animequotes.surge.sh/)
- Repository [LINK](https://github.com/AndieDrew/anime-quotes)
- Project Spec [LINK](https://frontend.turing.edu/projects/module-3/niche-audience.html)
- API [LINK](https://animechan.vercel.app/)
- WireFrame, User Personas, MVP, Insporation [MiroBoard](https://miro.com/app/board/o9J_l_rN5AE=/)


## Learning Goals

- Refine React, Router, Asynchronous Javascript, Cypress testing skills with best practices.
- Implement TypeChecking with PropTypes.
- Refine project management skills and professionalism by having an organized project board, descriptive PR's, atomic commits that accurately track the progression of the project, and a thorough README.
- Demonstrate attention to detail with accessability and responsiveness.
- Learn to tailer an application to a very specific audience.

## Features

On application launch, the user will be greeted with a random anime quote with the anime and character name. The user can click the 'New Quote' button to generate a new quote, or click the 'Favorite' button to add the current quote to a list of favorites. User can navigate to the Favorites page by clicking the 'Favorites' button at the top right of the screen so they can view a list of all their favorite quotes. User can navigate back to the home page by clicking the 'Home' button at the top right of the screen.

![Screen Shot 2021-06-14 at 11 09 00 PM](https://user-images.githubusercontent.com/27929330/121986952-8283d180-cd65-11eb-8f5a-db4869d08aff.png)

![Screen Shot 2021-06-14 at 11 09 18 PM](https://user-images.githubusercontent.com/27929330/121986973-8dd6fd00-cd65-11eb-9df0-2deb117bf6b9.png)

## Technologies Used
* ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)

* ![React-Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

* ![CSS](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)

* ![Cypress](https://img.shields.io/badge/cypress-04C38E.svg?&style=for-the-badge&logo=cypress&logoColor=white)

## Setup Instructions
#### For viewing the application:
1. Open your terminal and access the directory you want to place this project in
2. Run `git clone https://github.com/AndieDrew/anime-quotes.git` to clone the repo
3. `cd` into the root directory of the project
4. Run `npm i` to install dependencies
5. Run `npm start` to start the web server
6. If a browser window does not automatically open, open your web browser and navigate to `http://localhost:3000` to access the application

#### For testing the application:
After completing the steps above to clone the repo:  
1. Run `npx cypress open` to open the Cypress testing GUI
2. Click on an integration test and allow the test to run


## Future Iterations

- Icon on the quote cards that lets the user know the quote is currently a favorite.
- A search bar on the favorites page to filter all of the favorites by anime or character name.
- A new search page where user can type an Anime or Character name, click search and the API will fetch 10 random quotes that include the anime or character name.
- Local Storage so user data persists and favorites aren't lost on reload.
- The form where the user can create their own anime quotes.

## Credits
#### Authors
<table>
  <tr>
    <td> Andrew Carlin <a href="https://github.com/AndieDrew">GH</td>
  </tr>
  <td>
     <img src="https://avatars.githubusercontent.com/u/27929330?v=4" alt="Andrew's' GH img"
  width="150" height="auto" />
  </td>  
</table>

#### Project Managers
<table>
  <tr>
    <td> Leta Keane <a href="https://github.com/letakeane">GH</td>
    <td> Scott Ertmer <a href="https://github.com/sertmer">GH</td>
  </tr>
  <td>
    <img src="https://avatars.githubusercontent.com/u/22563791?v=4" alt="Leta's GH img"
 width="150" height="auto" />
 </td>
  <td>
    <img src="https://avatars.githubusercontent.com/u/49926352?v=4" alt="Scott's GH img"
 width="150" height="auto" />
 </td>
</table>

**************************************************************************
This project was created for [Turing School of Software and Design](https://turing.io/)
##### 06/14/2021
**[Back to top](#table-of-contents)**
