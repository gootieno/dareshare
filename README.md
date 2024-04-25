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
