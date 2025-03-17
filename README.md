# COVID Data Visualization

This project uses the Next.js framework and is bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, install the necessary dependencies:

```bash
npm install
```

Then, start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## Overview

This project visualizes COVID data using bar charts with a legend to identify the data points.

### Technologies Used

-   **Next.js** – for building the web application
-   **MUI X - Charts** – for rendering the bar graphs
-   **Fetch API** – for retrieving the JSON dataset
-   **React Hooks (useState & useEffect)** – for managing state and handling data fetching

### Approach

1. **Fetching Data** – The data is retrieved using the Fetch API. To improve user experience, a loading screen is displayed while the data is being processed.
2. **Data Processing** – Since some values in the dataset were strings, I used the `.map()` method to convert them into numbers to ensure compatibility with the MUI Charts library.
3. **Deployment for Accessibility** – To prevent issues with running the solution, I have deployed the app on a live domain, making it easier to review. You can access it here: [Deployed App Link](https://covid-data-git-env-final-kemolesengs-projects.vercel.app/).

Let me know if you want any further tweaks! 🚀
