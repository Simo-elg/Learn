
# Mon Site

This project is a modern React web application built with Vite and TypeScript. It demonstrates the use of React Router for navigation, protected routes, form validation, and component-based architecture.

## Features

- **Home Page:** Displays a header and a list of beautiful quotes.
- **About Page:** Information about the site or project.
- **Team Page:** Protected route that only displays content if the user is logged in.
- **Login Page:** Allows users to "log in" (stateful, for demo purposes) to access protected content.
- **Contact Page:** Includes a form with validation for name, email, and message fields. Shows error messages for invalid input and displays a success alert on valid submission.
- **404 Not Found:** Custom page for undefined routes.
- **Navigation Bar:** Sticky navigation at the top for easy access to all main pages.
- **Scroll To Top:** Automatically scrolls to the top when navigating between pages.

## Technologies Used

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [React Router v6](https://reactrouter.com/)
- [Tailwind CSS](https://tailwindcss.com/) (for styling)

## How to Run

1. **Install dependencies:**
   ```sh
   npm install
   ```
2. **Start the development server:**
   ```sh
   npm run dev
   ```
3. Open your browser and go to [http://localhost:5173](http://localhost:5173) (or the port shown in your terminal).

## Project Structure

- `src/App.tsx` — Main application with routing and navigation.
- `src/components/` — All React components (Header, About, Quotes, Team, Login, Contact, etc).
- `public/` — Static assets.

## Notes

- The login system is for demonstration only and does not use real authentication.
- The contact form validates input on the client side and does not send data to a server.

---

Feel free to explore and modify the project to learn more about React, routing, and form handling!

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
