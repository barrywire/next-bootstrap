# Next Basic Frontend

This repository contains a basic template of a create-next-app that comes with the following packages out of the box:

1. [NextJs](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
2. [Bootstrap](https://www.npmjs.com/package/bootstrap)
3. [Bootstrap-Icons](https://www.npmjs.com/package/bootstrap-icons)
4. [Sass](https://www.npmjs.com/package/sass)
5. [Commitlint](https://www.npmjs.com/package/commitlint)
6. [Husky](https://www/npmjs.com/package/husky)
7. [Husky+Commitlint](https://www.freecodecamp.org/news/how-to-use-commitlint-to-write-good-commit-messages/)

It also has custom styling that has a base color scheme and a font scheme as well.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

## Setting up the commitlint

- Create a commitlint file:

```bash
touch commitlint.config.js
```

- Configure the commitlint file:

```js
module.exports = {
  extends: ['@commitlint/config-conventional'],
};
```

- Add a prepare step which enables husky to run the commitlint:

```bash
npm pkg set scripts.prepare "husky install"
```

- Run the prepare step:

```bash
npm run prepare
```

- Add a pre-commit step which runs the commitlint:

```bash
npx husky add .husky/pre-commit "npx --no-install commitlint --edit $1"
```

or

```bash
yarn husky add .husky/commit-msg "yarn commitlint --edit $1"
```
