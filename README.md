# Countries App with Color Theme Switcher

This project integrates with the [REST Countries API](https://restcountries.com) to display useful imformation about countries in out world

## Screenshot

![Screenshot](./screenshot.jpg)

## Table of contents

- [Countries App with Color Theme Switcher](#countries-app-with-color-theme-switcher)
  - [Screenshot](#screenshot)
  - [Table of contents](#table-of-contents)
  - [Overview](#overview)
    - [The challenge](#the-challenge)
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

- [x] See all countries from the API on the homepage
- [x] Search for a country using an `input` field
- [x] Filter countries by region
- [x] Click on a country to see more detailed information on a separate page
- [x] Click through to the border countries on the detail page
- [x] Toggle the color scheme between light and dark mode

### Links

- Code: [Github Repo](https://github.com/princemuel/rest-countries)
- Live Site: [Rest Countries](http://rest-countries-mocha.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Axios](https://axios-http.com/docs/intro) - HTTP Client
- [React](https://beta.reactjs.org/) - A JavaScript library for building user interfaces
- [Vite.js](https://vitejs.dev/guide/) - An Fast and Opinionated Code Bundler for JavaScript
- [Tailwind CSS](https://tailwindcss.com/docs/installation) - A Utility-first CSS framework

### What I learned

- The proper way to work with state removing the need for boilerplate code and protecting it from future accidental modifications (used in the countries reducer)

```ts
const reducer = produce((draft: IState, action: IActions) => {
  switch (action.type) {
    case 'INITIALIZE':
      draft.countries = action?.payload.countries;
      draft.regions = action?.payload.regions;
      break;
    case 'SEARCH':
      draft.search = action.payload;
      break;
    case 'FILTER':
      draft.filter = action.payload;
      break;
    default: {
      //@ts-expect-error
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
});
```

- How to implement a cache function to keep track of previous state (used for the data fetcher)

```ts
function memoize(this: any, func: Function) {
  const cache = new Map<string, any>();

  return (...args: any[]) => {
    let key = args.length + args.join('+');
    if (cache.has(key)) return cache.get(key);

    let result = func.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
const fetcher = memoize(async (url: string) => {
  ...
});
```

### Continued development

- Setting up an application to use type-safe React Query hooks

### Useful resources

- [Javascript:The Definitive Guide](https://www.oreilly.com/library/view/javascript-the-definitive/9781491952016/) - This book by author David Flanagan helped me improve in my Javascript knowledge. I really liked this book and it will be my companion guide going forward cus' there are still some important concepts I have to master.

- [React TypeScript Tutorial: Polymorphic Components](https://youtu.be/uZ8GZm5KEXY?list=PLC3y8-rFHvwi1AXijGTKM0BKtHzVC-LSK) - This amazing video resource helped me finally understand how the reusable components in the existing componnt libraries are created. I'd recommend it to anyone who wants is not familiar with this concept.

- [Get a catch block error message with TypeScript](https://kentcdodds.com/blog/get-a-catch-block-error-message-with-typescript) - This is an amazing article which helped me understand how to provide handle errors obtained in the catch block and make them type-safe. I'd recommend it to anyone still learning this concept.

## Author

- Website - [Prince Muel](https://princemuel.vercel.app) (In Development)
- Twitter - [@iamprincemuel](https://www.twitter.com/iamprincemuel)
- LinkedIn - [@princemuel](https://www.linkedin.com/in/princemuel)
- Discord - [@princemuel](https://discordapp.com/users/princemuel#3896)
