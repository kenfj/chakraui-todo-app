# Chakra UI React Todo App

Live Demo: https://kenfj.github.io/chakraui-todo-app/

* This is React Todo App using Chakra UI
  - https://chakra-ui.com/
* Updated from this tutorial to use TypeScript and custom hooks, and so on.
  - Learn Chakra-ui by building a Todo Application with Local Storage, Dark Mode enabled.
  - https://www.youtube.com/watch?v=QVnkGqEsbK0
* Auto deploy to GitHub Pages by GitHub Actions

```bash
npx create-react-app chakraui-todo-app --template typescript --use-npm
cd chakraui-todo-app

# https://chakra-ui.com/docs/getting-started
npm i @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^4

# for icon buttons
npm install react-icons

# id generator
npm install nanoid

# for deploy
npm install gh-pages

BROWSER=none npm start
npm test

# manual deploy to GitHub Pages
npm run deploy
# https://create-react-app.dev/docs/deployment/#github-pages
```

* `colorScheme`: https://chakra-ui.com/docs/theming/theme
