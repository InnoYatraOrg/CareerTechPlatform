# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})

## Git Commands

Here are some commonly used Git commands:

- `git init`: Initialize a new Git repository.
- `git clone <repository>`: Clone an existing repository.
- `git add <file>`: Stage changes for commit.
- `git commit -m "<message>"`: Commit staged changes with a message.
- `git push`: Push changes to a remote repository.
- `git pull`: Fetch and merge changes from a remote repository.
- `git status`: Check the status of the working directory.

## Branching Commands

Here are some commonly used Git branching commands:

- `git branch`: List all branches in the repository.
- `git branch <branch-name>`: Create a new branch.
- `git checkout <branch-name>`: Switch to a specified branch.
- `git merge <branch-name>`: Merge a specified branch into the current branch.
- `git branch -d <branch-name>`: Delete a specified branch.

## Branching Conventions

Here are some common branching conventions:

- **Feature Branching**: Create a new branch for each feature or task. This keeps the main branch clean and allows for easier collaboration.
- **Git Flow**: A branching model that defines how to manage branches for releases, features, and hotfixes. It typically includes a `develop` branch for ongoing development and `master` for stable releases.
- **Naming Conventions**: Use prefixes for branch names to indicate their purpose, such as:
  - `feature/`: For new features (e.g., `feature/login-page`)
  - `bugfix/`: For bug fixes (e.g., `bugfix/fix-login-error`)
  - `hotfix/`: For urgent fixes to the production branch (e.g., `hotfix/urgent-fix`)

## Storing Image Files

When creating image files, it is recommended to store them in a dedicated folder within the `src` directory:

- **For general assets**: Create a folder named `assets` within the `src` directory, and then create a subfolder named `images` to store all image files.
  - Path: `CareerTechPlatform/src/assets/images/`
  
- **For icons**: If the images are icons, you can store them in the existing `src/Icons` folder.
  - Path: `CareerTechPlatform/src/Icons/`
