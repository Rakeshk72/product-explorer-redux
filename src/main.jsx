// Import StrictMode from React.
import { StrictMode } from "react";

// Import createRoot to render the application.
import { createRoot } from "react-dom/client";

// Import Provider to make Redux available.
import { Provider } from "react-redux";

// Import BrowserRouter for routing.
import { BrowserRouter } from "react-router-dom";

// Import the Redux store.
import { store } from "./app/store.js";

// Import the main App component.
import App from "./App.jsx";

// Import application styles.
import "./styles/App.css";

// Render the React application.
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);