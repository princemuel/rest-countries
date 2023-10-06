# Countries of the World

This application uses the REST Countries API to get info about countries on planet earth.

## Table of contents

- [Countries of the World](#countries-of-the-world)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
    - [Screenshot](#screenshot)
    - [Links](#links)
  - [Project Development](#project-development)
    - [Running the App](#running-the-app)
    - [Deploying the App](#deploying-the-app)
  - [My process](#my-process)
    - [Built with](#built-with)
    - [What I learned](#what-i-learned)
    - [Continued development](#continued-development)
    - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)

## Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode _(optional)_

### Screenshot

![](./screenshot.jpg)

### Links

Press <kbd>.</kbd> on the keyboard to view this project's code in the _`github.dev`_ code editor just like in _`Visual Studio Code`_

- Code: [Github Repository](https://github.com/princemuel/rest-countries)
- Live Site: [REST Countries of the World](https://rest-countries-mocha.vercel.app/)

## Project Development

### Running the App

- Clone the repo by running the command:

```bash
git clone https://github.com/princemuel/rest-countries.git
```

- Enter into the project folder:

```bash
cd rest-countries
```

- Install the project's dependencies:

```bash
# NOTE: This project uses pnpm as package manager but that's optional. You may delete the lockfile and install the deps using your choice of package manager

npm install
# or
yarn install
# or
pnpm install
```

- Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

### Deploying the App

Your app is ready to be deployed! The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://react.dev/) - JS library
- [Next.js](https://nextjs.org/docs) - React framework
- [Tailwind CSS](https://tailwindcss.com/docs) - For composing component styles using utility classes

### What I learned

```html
<h1>Some HTML code I'm proud of</h1>
```

```css
.proud-of-this-css {
  color: papayawhip;
}
```

```js
const proudOfThisFunc = () => {
  console.log('🎉');
};
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

## Author

- Website (In Development) - [Prince Muel](https://princemuel.vercel.app/)
- LinkedIn - [@princemuel](https://linkedin.com/in/princemuel/)
- Twitter - [@iamprincemuel](https://twitter.com/iamprincemuel)

## Acknowledgments
