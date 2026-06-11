# Packaging-Reusable-Logic-into-a-Custom-Hook

## Student

Victoria Salomon

# Custom Hook: useWindowSize

## Overview

This project demonstrates how to create and use a custom React hook called `useWindowSize`. The hook tracks the browser window's width and height in real time and allows any React component to access that information without duplicating code.

The application simulates a responsive streaming website interface that automatically switches between Mobile and Desktop layouts based on the browser width.

---

## Learning Objectives

This project demonstrates:

* Creating a custom React hook
* Using the `useState` hook
* Using the `useEffect` hook
* Handling browser resize events
* Cleaning up event listeners to prevent memory leaks
* Building responsive React applications
* Reusing logic across multiple components

---

## Features

### Custom Hook

A reusable hook called `useWindowSize` was created to manage all browser resize logic.

### Real-Time Window Tracking

The application continuously displays the current:

* Window Width
* Window Height

The values update automatically whenever the browser is resized.

### Responsive Layout

The application automatically changes between:

#### Desktop Layout

* Width greater than or equal to 768px
* Blue background
* Desktop Streaming View

#### Mobile Layout

* Width less than 768px
* Pink background
* Mobile Streaming View

### Cleanup Function

The hook removes the resize event listener when the component unmounts.

This prevents:

* Memory leaks
* Duplicate event listeners
* Unnecessary performance issues

---

## Technologies Used

* React
* Vite
* JavaScript (ES6+)
* CSS
* React Hooks (`useState`, `useEffect`)

---

## Project Structure

```text
src/
├── hooks/
│   └── useWindowSize.js
├── ResponsiveCard.jsx
├── App.jsx
├── App.css
└── main.jsx
```

---

## How the Application Works

### Step 1: Create the Custom Hook

The custom hook stores the current browser dimensions using React state.

```javascript
const [windowSize, setWindowSize] = useState({
  width: window.innerWidth,
  height: window.innerHeight,
});
```

### Step 2: Listen for Resize Events

The hook uses `useEffect` to attach a resize event listener.

```javascript
window.addEventListener("resize", handleResize);
```

Whenever the browser size changes, the state updates automatically.

### Step 3: Cleanup

The cleanup function removes the event listener.

```javascript
return () => {
  window.removeEventListener("resize", handleResize);
};
```

### Step 4: Reuse the Hook

The ResponsiveCard component imports the hook.

```javascript
const { width, height } = useWindowSize();
```

This allows the component to access window dimensions without implementing resize logic itself.

---

## Test Cases

### Normal Test Cases

#### Test Case 1: Desktop View

Input:

```text
Width = 1200px
```

Expected Result:

```text
Desktop Streaming View
Desktop Layout
Blue Background
```

Result: Passed

---

#### Test Case 2: Tablet Width

Input:

```text
Width = 900px
```

Expected Result:

```text
Desktop Streaming View
Desktop Layout
Blue Background
```

Result: Passed

---

#### Test Case 3: Mobile View

Input:

```text
Width = 500px
```

Expected Result:

```text
Mobile Streaming View
Mobile Layout
Pink Background
```

Result: Passed

---

### Edge Test Cases

#### Test Case 4: Exact Breakpoint

Input:

```text
Width = 768px
```

Expected Result:

```text
Desktop Layout
```

Result: Passed

---

#### Test Case 5: Extremely Small Width

Input:

```text
Width = 200px
```

Expected Result:

```text
Mobile Layout
```

Result: Passed

---

#### Test Case 6: Rapid Window Resizing

Action:

```text
Repeatedly resize the browser window
```

Expected Result:

```text
Width updates correctly
Height updates correctly
No console errors
No crashes
```

Result: Passed

---

## Installation Instructions

Clone the repository:

```bash
git clone <repository-url>
```

Navigate to the project folder:

```bash
cd custom-hook-usewindowsize
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the browser using the URL displayed in the terminal.

---

## Key Concepts Demonstrated

* Custom Hooks
* State Management
* Side Effects
* Event Listeners
* Cleanup Functions
* Responsive Design
* Code Reusability


North Seattle College
