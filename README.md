# Description

This is my developer portfolio. There you shall see my bio, my CodePen and GitHub projects, and my contact information... and perhaps more if an idea fancies me. ;D

This app is hosted at [my-portfolio-afcf3.web.app](my-portfolio-afcf3.web.app).

# Development Setup

1. Set up Node in your shell environment. Use Node version `20.9.0`.
2. Install global dependencies
   ```
   npm i -g pnpm firebase-tools
   ```
3. Set up Firebase CLI by running these commands:
   ```
   $ firebase login
   $ firebase init
   ```
4. Run this command to install local dependencies:
   ```
   $ pnpm i
   ```
5. Serve app locally
   ```
   $ pnpm dev
   ```

# Deploy

1. Build the project
   ```
   $ pnpm build
   ```
2. Use Firebase CLI to deploy build files contained in the `dist` directory to Firebase Hosting
   ```
   $ firebase deploy
   ```
