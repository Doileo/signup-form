# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![Desktop view of the project](./images/desktop-layout.png)


### Links

- Solution URL: (https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1/hub/responsive-signup-form-using-css-grid-sElUGiuIiD)
- Live Site URL: (https://doileo.github.io/signup-form/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

The main goal of this project was to structure the HTML document correctly by using fewer div tags. When it came to deciding how to create the desktop layout, I decided to use grid-template-areas, something simple that I had never used before.

Here is the code snippet:

```css
body {
    background-image: url(../images/bg-intro-desktop.png);
    display: grid;
    grid-template-rows: 2em 7vh auto 5em;
    grid-template-columns: 2fr 2fr 0fr 0fr;
    grid-template-areas:
      "header . . ."
      ".  main main ."
      ". . . ."
      "footer footer footer footer";
  }
```

### Continued development

I'm using this space as a reminder to practice the form input validation by using JavaScript.

### Useful resources

- [Resource 1](https://www.youtube.com/watch?v=v5KzBPUEgGQ&t=561s) - This helped me for figuring out how to use grid-template-areas. I really liked this pattern and will use it going forward.

## Author

- Website - [Doina](https://doileo.github.io/portfolio/)
- Frontend Mentor - [@Doileo](https://www.frontendmentor.io/profile/Doileo)
- LinkedIn - (https://www.linkedin.com/in/doinaleovchindeveloper/)

