# Zepto Apps Books List Website

This project is a web application built with React and RTK Query that allows users to browse, search, filter, and paginate through a list of books. Additionally, users can add books to a wishlist stored locally and switch between light and dark modes for a personalized browsing experience.

## Features

- **Books List Display**: Fetch and display a list of books using RTK Query.
- **Search**: Allows users to search for specific books by title or author.
- **Pagination**: Enables users to navigate through the list of books in pages.
- **Filter by Topic**: Users can filter the book list based on specific topics or categories.
- **Wishlist**: Users can add and manage their favorite books in a wishlist that is stored in local storage, preserving the list across sessions.
- **Light/Dark Mode**: Users can toggle between light and dark themes for comfortable viewing.

## Tech Stack

- **Frontend**: React, React Router
- **State Management**: Redux Toolkit (RTK), RTK Query
- **API Management**: Managed with RTK Query for fetching books list, search, filter, and pagination.
- **Wishlist**: Implemented using LocalStorage.
- **Styling**: Tailwind CSS for overall layout, with light and dark mode support.

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/rayan2228/zeptoApps.git
   cd zeptoApps
   ```

2. Install dependencies:

   ```npm
   npm install
   ```

3. Run the development server:

   ```npm
   npm start
   ```
