# ShoppyGlobe - A Simple E-commerce Web App

## Introduction
ShoppyGlobe is a simple e-commerce web application built using React and Redux. It allows users to browse products, view product details, add items to the cart, and proceed to checkout.

## Features
- Product listing page
- Product detail page
- Shopping cart functionality
- Add/Remove items from the cart
- Clear the cart
- Checkout functionality
- Responsive design

## Tech Stack
- **Frontend:** React.js, Redux Toolkit, React Router, Axios
- **Styling:** CSS
- **State Management:** Redux Toolkit

## Installation
### Prerequisites
- Node.js (>=16.0)
- npm or yarn

### Clone the repository
```sh
git clone https://github.com/pardeshi123/React_Project_1
cd ShoppyGlobe
```

### Install dependencies
```sh
npm install  # or yarn install
```

### Start the development server
```sh
npm start  # or yarn start
```

The app will run on `http://localhost:3000/`.

## Usage
1. Browse products on the homepage.
2. Click on a product to view its details.
3. Add the product to the cart.
4. Navigate to the cart page to manage items.
5. Proceed to checkout to place an order.

## Redux Store
Redux is used for state management, and it includes:
- **cartSlice.js**: Contains actions for adding, removing, and clearing items in the cart.
- **store.js**: Configures the Redux store.

## API Used
This project uses `https://dummyjson.com/products` to fetch product details.

## Contributing
Contributions are welcome! Feel free to open an issue or submit a pull request.

