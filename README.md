# Product Explorer Redux

## Description

Product Explorer Redux is a React web application that allows users to browse products, search for products, view product details, and manage a favorites list.

The application retrieves product information from the DummyJSON API and displays the data dynamically in the user interface.

This project demonstrates the use of React, Redux Toolkit, React Router, external API requests, and responsive CSS.

---

## Live Site

https://product-explorer-redux.netlify.app

---

## GitHub Repository

https://github.com/Rakeshk72/product-explorer-redux

---

## Technologies Used

- HTML5
- CSS3
- JavaScript
- React
- Vite
- Redux Toolkit
- React Router DOM
- Fetch API / AJAX
- DummyJSON API
- Git
- GitHub
- Netlify

---

## Approach Taken

I started the project by planning the main features and breaking the application into reusable React components.

The application uses React components to organize the user interface into separate sections such as the navigation bar, search bar, product list, and product cards.

React Router is used to navigate between the Home page, Product Details page, Favorites page, and the custom Not Found page.

Redux Toolkit is used for state management. It manages product-related state and the user's favorites.

The application makes asynchronous requests to the DummyJSON API to retrieve product data. The retrieved data is then displayed dynamically in the application.

CSS is used to style the application and create a responsive product layout.

Git and GitHub were used for version control throughout development, and the completed application is deployed on Netlify.

---

## Features

- Browse products from an external API
- Search for products
- View individual product details
- Add products to Favorites
- Remove products from Favorites
- Redux Toolkit state management
- React Router navigation
- Responsive product layout
- Custom 404 Not Found page
- External API integration

---

## External API / AJAX

This project uses the DummyJSON Products API as an external data source.

The application makes asynchronous requests to the API and retrieves product information such as:

- Product name
- Product image
- Category
- Price
- Rating
- Product details

The retrieved API data is rendered dynamically in the React application.

---

## Usage Instructions

1. Open the live application.
2. Browse the available products on the Home page.
3. Use the search box to search for products.
4. Click **View Details** to view more information about a product.
5. Click **Add Favorite** to add a product to the Favorites list.
6. Open the **Favorites** page from the navigation bar.
7. Remove products from Favorites when they are no longer needed.

---

## Installation

To run the project locally, clone the repository and install the required dependencies.

```bash
git clone https://github.com/Rakeshk72/product-explorer-redux.git
```

Move into the project folder:

```bash
cd product-explorer-redux
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Create a production build:

```bash
npm run build
```

---

## Unsolved Problems / Future Improvements

The current version meets the main project requirements, but some additional improvements could be made in the future:

- Favorites could be stored in LocalStorage so they remain available after refreshing the browser.
- Additional product filtering could be added.
- Products could be sorted by price, rating, or category.
- More advanced UI features could be added.
- Additional error handling and loading feedback could be implemented.

---

## Deployment

The application is deployed on Netlify.

Live application:

https://product-explorer-redux.netlify.app

The Netlify deployment is connected to the GitHub repository and builds the application from the `main` branch.

---

## Author

**Rakesh Kumar**