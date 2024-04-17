# Frontend Mentor - Todo app solution

This is my solution to the [Todo app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Add new todos to the list
- Mark todos as complete
- Delete todos from the list
- Filter by all/active/complete todos
- Clear all completed todos
- Toggle light and dark mode
- **Bonus**: Drag and drop to reorder items on the list

### Screenshot

![Todo app](./screenshot.jpg)

### Links

- Solution URL: [https://github.com/daHatta/fem-todo-app](https://github.com/daHatta/fem-todo-app)
- Live Site URL: [https://fem-todo-app-delta.vercel.app/](https://fem-todo-app-delta.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwindcss](https://tailwindcss.com/) - CSS framework
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework

### What I learned

Packages used in this project:

```js
// ...

"dependencies": {
    "@hello-pangea/dnd": "^16.6.0",
    "@savvywombat/tailwindcss-grid-areas": "^4.0.0",
    "next": "14.1.4",
    "next-themes": "^0.3.0",
    "react": "^18",
    "react-dom": "^18"
  },

// ...
```

There where some tricky parts to solve, i.e. the styling of custom checkboxes:

```css
/* ... */
input[type="checkbox"]:checked {
  background: linear-gradient(
      130deg,
      var(--clr-checkStart),
      var(--clr-checkEnd)
    ) border-box;
  border: 1px solid transparent;
}

input[type="checkbox"]:checked::after {
  content: "";
  margin-left: 1px;
  width: 18px;
  height: 18px;
  background: url("../images/icon-check.svg");
  background-repeat: no-repeat;
  background-position: center, center;
}
/* ... */
```

Getting information from child-component:

```js
// StatusBar component
/* Function to filter Tasks accourding their status active/completed */
const handleFilterValue = (filter: string) => {
  handleSelectedFilter(filter);
};

// page
// Function to get filter value from Statusbar component
const handleSelectedFilter = (filter: string) => {
  setFilterValue(filter);
};
```

Getting the filter value from the child-component was needed to set the value of the useState-Hook in the parent element.
This would allow the app to set up a filtered List which can be provided for the TodoList component.

### Continued development

This is a perfect challenge to learn about React/Next.js and Typescript especially about the communication between components. Learning and understanding how to deal with props of components was significant in order to solve this challenge. One of my next challenges/projects will deal with Next.js and external APIs followed by CRUD.

### Useful resources

- [Using Multiple Fonts](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts#using-multiple-fonts) - Nextjs Documentation (Opitmizing Fonts).
- [Light & Dark Mode in Next.js App Router + Tailwind with no Flicker](https://www.davegray.codes/posts/light-dark-mode-nextjs-app-router-tailwind) - Awesome article by **Dave Gray** about Light & Dark Mode implementation in Next.js.
- [Custom Styling Checkboxes: The Modern Way](https://dev.to/adbutterfield/custom-styling-checkboxes-the-modern-way-3o42) - Great article by **Adam Butterfield**
- [Pure CSS Custom Checkbox Style](https://moderncss.dev/pure-css-custom-checkbox-style/) - Another Great article about checkbox styling by **Stephanie Eckles**.
- [Grid Areas in Tailwindcss](https://savvywombat.com.au/tailwind-css/grid-areas) - Great plugin for named grid areas in Tailwindcss by **SavvyWombat**.
- [Coding a Todo List Using NextJS with TailwindCSS](https://www.youtube.com/watch?v=zffCSsHQx9g) - Great Video about a Todo-project made by **Codr Kai**.
- [React For Beginners 29: Todo App Part 2 Preview Of The App](https://www.youtube.com/watch?v=Y_IiNLsQmD8&list=PLSsAz5wf2lkK_ekd0J__44KG6QoXetZza&index=29) - Awesome Video series about React for Beginners made by **Code Stoic**. I learned a lot about React by watching his series from the beginning.
- [React JS Typescript Drag and Drop](https://www.youtube.com/watch?v=dRLYO1-dhQU) - Awesome video about the use of react-beautiful-dnd made by **Nic Valdez** from **Darwin Tech**.
- [React For Beginners 45: Sorting Items In A Todo List](https://www.youtube.com/watch?v=fu_PYQ0b-uQ) - Great Video by **Code Stoic**, which is part of the series mentioned before.
- [#34 Filtering a List in React | working with React events | A Complete React Course](https://www.youtube.com/watch?v=weFOaIHlDpo) - Great Video by **procademy**, also part of a bigger series.
- [The useState Hook as a Props In React with Typescript](https://www.youtube.com/watch?v=qot-mSwWTDI) - Nice intro in dealing with types as Props for components made by **proCodeZone**.

## Author

- Frontend Mentor - [@daHatta](https://www.frontendmentor.io/profile/daHatta)
