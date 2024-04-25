<div align="center">
  <img src="https://github-readme-stats.vercel.app/api?username=gootieno&hide_title=false&hide_rank=false&show_icons=true&include_all_commits=true&count_private=true&disable_animations=false&theme=dracula&locale=en&hide_border=false&order=1" height="150" alt="stats graph"  />
  <img src="https://github-readme-stats.vercel.app/api/top-langs?username=gootieno&locale=en&hide_title=false&layout=compact&card_width=320&langs_count=5&theme=dracula&hide_border=false&order=2" height="150" alt="languages graph"  />
</div>

###

<img src="https://raw.githubusercontent.com/gootieno/gootieno/output/snake.svg" alt="Snake animation" />

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" height="40" alt="nextjs logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" height="40" alt="express logo"  />
</div>

###

<div align="center">
  <img height="200" src="https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2dnZ25tN2IxbjUzZDY3dGZycWR2a3YxNHdlb3p6ZGczbDhxbzhybiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fhH2o6SHOjOtphR3DR/giphy.gif"  />
</div>

###

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" height="40" alt="typescript logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" alt="react logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" height="40" alt="jest logo"  />
  <img width="12" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/storybook/storybook-original.svg" height="40" alt="storybook logo"  />
</div>

###


# dareshare

Welcome to dareshare, where users can engage in virtual game sessions with a variety of games. This document serves as the home for our project's wiki, providing an overview, key features, technical details, and guidance on contributions.

## Overview

This platform provides a dynamic environment where users can choose games to play, participate in game sessions, and interact with other players. Our first version currently hosts the game "Never Have I Ever," with plans to expand our game offerings in the future.

## Key Features

- **Dynamic Game Selection**: Initially featuring "Never Have I Ever," the platform is designed to support additional games as it grows.
- **Real-Time Interactivity**: Users can create, join, and participate in live game sessions, enhancing social interaction and engagement.
- **Category-Based Question Filtering**: Enhances the gaming experience by allowing questions to be filtered by categories within each game.

## Technical Structure

### Data Schema

Our application leverages Firebase Firestore to manage dynamic data, organized into several key collections:
- **Games**: Information about each game, including detailed descriptions.
- **Categories**: Used to categorize questions within games. Initially implemented within "Never Have I Ever."
- **Questions**: Related to games and categorized for filtering.
- **GameSessions**: Tracks live sessions, their participants, and statuses.
- **Users**: Stores user profiles and authentication data.

Detailed schema information can be accessed in the [Schema Documentation](https://github.com/gootieno/dareshareweb/wiki/Firebase-Collections).

### Tools and Technologies

- **Frontend**: Built with Next.js to ensure a responsive and interactive user experience.
- **Backend**: Firebase Firestore provides real-time data management, with Firebase Authentication handling user security.
- **Hosting**: The platform is hosted on Firebase Hosting, facilitating seamless integration with Firestore and other Firebase services.
