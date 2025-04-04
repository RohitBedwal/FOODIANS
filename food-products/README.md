# Food Products Application

This project is a React-based application designed for managing and displaying food products. Below is a detailed overview of the project's structure and its components.

---

## Components

### `/components`
- **FoodCard2.jsx**  
  A card component for displaying food product details with enhanced styling.

- **Header.jsx**  
  Renders the header section, including the application logo and navigation links.

- **Home.jsx**  
  The main component for the homepage, showcasing featured products and categories.

- **NavBar2.jsx**  
  A navigation bar component with links to various sections of the application like search bar , home ,cart login .

- **Pagination.jsx**  
  Handles pagination for product lists, allowing users to navigate between pages.

- **ProductCard.jsx**  
  A reusable card component for displaying individual product details.

- **SideBar.jsx**  
  A sidebar component for filtering products by categories or other criteria.

- **SortingBox.jsx**  
  Provides sorting options for products, such as by name  or grade ascending to descending.

---

## Contexts

### `/context`
- **BarcodeContext.jsx**  
  Manages the state and logic for barcode scanning functionality saves the barcode in localStorage.

- **CartContext.jsx**  
  Provides a context for managing the shopping cart state across the application.

- **CategoryContext.jsx**  
  Handles the state for product categories and their selection.

- **InputContext.jsx**  
  Manages user input states, such as search queries.

- **ProductsByCategoryContext.jsx**  
  Provides context for managing products filtered by selected categories.

---

## Pages

### `/pages`
- **Cart.jsx**  
  Displays the user's shopping cart and allows them to proceed to checkout.

- **ProductByCategory.jsx**  
  Shows products filtered by a specific category.

- **ProductDetails.jsx**  
  Displays detailed information about a selected product.

- **SearchName.jsx**  
  Provides a search interface for finding products by name and barcode.

---

## Public Assets

### `/public`
- **vite.svg**  
  The Vite logo used in the application.

---

## Source Files

### `/src/assets`
#### Fonts
- **/font**  
  Contains custom fonts used in the application.

#### Images
- **home.jpg**  
  An image used on the homepage.  
- **Home1.png**  
  Another image used for homepage styling.  
- **logo.png**  
  The application logo.

#### React Assets
- **react.svg**  
  The React logo used in the application.

### `/src`
- **App.css**  
  Styles for the main application component.  
- **App.jsx**  
  The root component that sets up routing and renders the main structure.  
- **index.css**  
  Global styles for the application.  
- **main.jsx**  
  The entry point for the React application.

---

## Configuration and Environment

- **.env**  
  Environment variables for the application.  
- **.gitignore**  
  Specifies files and directories to be ignored by Git.  
- **eslint.config.js**  
  Configuration for ESLint to enforce coding standards.  
- **index.html**  
  The main HTML file for the application.  
- **package-lock.json**  
  Automatically generated file for locking dependencies.  
- **package.json**  
  Contains metadata and dependencies for the project.

---

## How to Run the Project

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the development server with `npm start`.
4. Open the application in your browser at `http://localhost:3000`.

---

## License

This project is licensed under the MIT License.
