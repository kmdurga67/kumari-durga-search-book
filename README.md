# Book Finder Application

## 📚 Overview

The **Book Finder Application** is a React-based web app designed to help users search for books using the Open Library API. It features a clean, responsive UI, supports dark mode, and allows users to browse through paginated search results efficiently. This app is tailored to provide college students and book enthusiasts with a seamless book discovery experience.

---

## 🚀 Features

### Core Features
- **Book Search**: Quickly search for books by title using the Open Library API.
- **Book List Display**: View books with cover images, titles, and authors in a grid format.
- **Pagination**: Navigate through search results using a responsive and scalable pagination component.

### Enhanced User Experience
- **Dark Mode**: Switch between light and dark themes for improved accessibility.
- **Responsive Design**: Adapts to all screen sizes, from desktops to mobile devices.
- **Result Count Display**: Shows the total number of books found and the current range of displayed results.

---

## 🛠️ Technologies Used

- **Frontend**:
  - React
  - Tailwind CSS for styling and responsiveness
- **API Integration**:
  - Axios for HTTP requests to the Open Library API
- **Routing**:
  - React Router for navigation
- **State Management**:
  - React Hooks (`useState`, `useEffect`) for managing state and effects

---

## 📖 Installation and Setup

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/book-finder-app.git
   cd book-finder-app

2. **Install Dependencies**
    ```bash
    npm install

3. **Run the application**
    ```bash
    npm start

4. Open your browser and visit:
    http://localhost:3000

---

## 🔍 Usage Instructions
## Searching for Books

1. Enter a book title in the search bar and click the Search button.
2. The app will fetch results from the Open Library API and display up to 12 books per page.

## Navigating Search Results

- Use the pagination controls to browse through pages of results.
- The total number of results and the current range (e.g., 1–12 of 100 results) are displayed above the results.

## Switching Themes

- Toggle between Light Mode and Dark Mode by clicking the theme switch button in the top-right corner.

# 📂 Project Structure

- src/
├── components/
│   ├── BookCard.jsx          # Displays individual book details
│   ├── BookList.jsx          # Displays a grid of books
│   ├── DarkModeToggle.jsx    # Theme toggle button
│   ├── Pagination.jsx        # Pagination component
│   ├── SearchBar.jsx         # Search input and button
├── pages/
│   ├── Home.jsx              # Main application logic and layout
├── App.jsx                   # Root component with routes
├── index.css                 # Global styles
└── index.js                  # Entry point
