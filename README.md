# Project Setup Instructions

## Prerequisites
Ensure you have the following installed on your system:
- **Node.js** 
- **npm**

## Installation Steps
1. **Clone the repository**
   ```sh
   git clone url
   ```
   (clone the git repo)
2. **Install dependencies**
   ```sh
   npm install
   ```

## Available Scripts
- **Start the development server**
  ```sh
  npm run dev
  ```

## Dependencies
### Production Dependencies
- `@reduxjs/toolkit` ^2.5.1
- `@xyflow/react` ^12.4.2
- `react` ^18.3.1
- `react-dom` ^18.3.1
- `react-redux` ^9.2.0

### Development Dependencies
- `@eslint/js` ^9.17.0
- `@types/react` ^18.3.18
- `@types/react-dom` ^18.3.5
- `@vitejs/plugin-react` ^4.3.4
- `eslint` ^9.17.0
- `eslint-plugin-react-hooks` ^5.0.0
- `eslint-plugin-react-refresh` ^0.4.16
- `globals` ^15.14.0
- `typescript` ~5.6.2
- `typescript-eslint` ^8.18.2
- `vite` ^6.0.5

## Basic Usage
Upon launching the project, the UI displays **10 interconnected nodes** with the following features:
- **Click on a node**: Opens a side panel where you can change the node's **color** and **font size**.
- **Drag and move nodes**: Hold and drag nodes to reposition them.
- **Undo/Redo functionality**: Navigate through **past, present, and future** changes to the nodes.


