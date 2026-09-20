# DevStack

A simple and responsive technology stack management application built with React and TypeScript. Users can explore available technologies, add their preferred technologies to their stack, and remove them whenever they want.

## Live Demo

Live Website: [Add your live website link here]

## Project Overview

DevStack helps users build their own development technology stack from a list of available technologies.

The application is designed with a clean, modern, and responsive interface that works across desktop, tablet, and mobile devices.

---

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* DaisyUI
* React Hot Toast
* Vite
* JSON
* React Icons

---

## Features

### 1. Add Technologies to Stack

Users can select technologies from the available technology cards and add them to their personal stack.

A technology cannot be added more than once.

### 2. Remove Technologies from Stack

Users can remove any technology individually from their stack using the `✕` button.

There is also a **Remove All** button to clear the complete stack at once.

### 3. Fully Responsive Design

The application is responsive and works on different screen sizes.

* Desktop layout
* Tablet layout
* Mobile layout
* Responsive navbar
* Mobile hamburger menu

---

# React Questions & Answers

## 1. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript or TypeScript.

It makes React components easier to write and understand because we can describe the UI and logic together.

## 2. What is the difference between State and Props?

**Props** are used to pass data from a parent component to a child component. Props are read-only and should not be changed by the child component.

**State** is data that belongs to a component and can change over time. When state changes, React updates the UI.

## 3. What is the `useState` hook, and how does it work?

`useState` is a React Hook used to create and manage state inside a functional component.

It returns two things:

* The current state value
* A function to update the state

Example:

```tsx
const [count, setCount] = useState(0);
```

Here, `count` stores the current value and `setCount` is used to update it.

## 4. What is the purpose of the `useEffect` hook?

`useEffect` is used to perform side effects in a React component.

For example, it can be used for:

* Fetching data
* Updating the document title
* Setting up event listeners
* Running code when a component renders or when specific data changes

Example:

```tsx
useEffect(() => {
  console.log("Component rendered");
}, []);
```

The empty dependency array means the effect runs once after the component is initially rendered.

---

## Conclusion

DevStack is a simple React and TypeScript project designed to practice component-based development, state management, props, event handling, responsive design, and user interaction.
