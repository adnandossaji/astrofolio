# Astrofolio 🚀

A modern, responsive portfolio template built with Astro, perfect for developers, designers, creatives, and food bloggers. Astrofolio combines lightning-fast performance with beautiful design and user-friendly features.

<div align="center">
  <img src="https://github.com/adnandossaji/astrofolio/blob/main/.github/resources/Screenshot%202025-04-27%20at%209.21.31%20PM.png?raw=true" alt="Homepage" width="80%" />
</div>

## 📸 Screenshots

<div style="display: flex; flex-wrap: wrap; gap: 10px; margin-bottom: 20px;">
  <img src="https://github.com/adnandossaji/astrofolio/blob/main/.github/resources/Screenshot%202025-04-27%20at%209.21.54%20PM.png?raw=true" alt="Recipe Page" width="48%" />
  <img src="https://github.com/adnandossaji/astrofolio/blob/main/.github/resources/Screenshot%202025-04-27%20at%209.22.04%20PM.png?raw=true" alt="Gallery" width="48%" />
  <img src="https://github.com/adnandossaji/astrofolio/blob/main/.github/resources/Screenshot%202025-04-27%20at%209.22.55%20PM.png?raw=true" alt="Mobile View" width="30%" style="margin: 0 auto;" />
</div>

## ✨ Features

- **⚡ Lightning Fast Performance**: Built with Astro for optimal speed and performance
- **🎨 Clean, Modern Design**: Responsive layout that looks great on all devices
- **📱 Mobile-Friendly**: Fully responsive design for perfect viewing on any device
- **📝 Recipe Collection**: Share your favorite recipes with a beautiful presentation
- **🖼️ Image Gallery**: Showcase your work with the easy-to-use gallery system
- **🔍 SEO Friendly**: Optimized for search engines out of the box
- **📊 Content Collections**: Leverages Astro's Content Collections for organizing content

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Yarn or npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/adnandossaji/astrofolio.git
cd astrofolio
```

2. Install dependencies
```bash
yarn install
# or
npm install
```

3. Start the development server
```bash
yarn dev
# or
npm run dev
```

4. Visit `http://localhost:4321` to view your site

## 📂 Project Structure

```
/
├── public/              # Static assets
│   ├── images/          # Images used throughout the site
│   │   └── gallery/     # Gallery images (place your gallery images here)
│   └── favicon.svg      # Site favicon
├── src/
│   ├── components/      # Reusable UI components
│   ├── content/         # Content collections
│   │   ├── gallery/     # Gallery metadata
│   │   └── recipes/     # Recipe content
│   ├── layouts/         # Page layouts
│   ├── lib/             # Utility functions
│   └── pages/           # Site pages
│       └── recipes/     # Recipe pages
└── package.json         # Project dependencies
```

## 📝 Adding Content

### Adding Recipes

Create a new Markdown file in `src/content/recipes/` with the following format:

```md
---
title: Recipe Title
description: Short description of the recipe
image: /path/to/image.jpg
prepTime: 15 minutes
cookTime: 30 minutes
servings: 4
difficulty: easy
tags: [tag1, tag2]
ingredients:
  - name: Ingredient 1
    amount: 1
    unit: cup
  - name: Ingredient 2
    amount: 2
    unit: tbsp
instructions:
  - step: 1
    instruction: First instruction
  - step: 2
    instruction: Second instruction
notes: Optional notes about the recipe
author: Your Name
datePublished: 2023-05-20
---
```

### Adding Gallery Images

#### Simple Method
1. Place your image files directly in the `/public/images/gallery/` folder.
2. Accepted file types: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.avif`
3. Images will automatically appear in the gallery with titles generated from the filenames.

#### With Metadata
For more control (titles, descriptions, etc.), add a YAML file in `src/content/gallery/` with the following format:

```yaml
title: Image Title
description: Image description
image: /images/gallery/your-image.jpg
alt: Alt text for accessibility
category: Category
featured: true
dateAdded: "2023-06-15"
```

##### Fields
- `title`: Custom title for the image (required)
- `description`: Detailed description (optional)
- `image`: Path to the image file - must match a file in `/public/images/gallery/` (required)
- `alt`: Alternative text for accessibility (optional)
- `category`: Category for filtering (optional) 
- `featured`: Set to `true` to prioritize this image in the gallery (optional, default: false)
- `dateAdded`: Date string in YYYY-MM-DD format for sorting (optional)

Featured images appear first in the gallery, followed by the most recently added images.

## 🛠️ Customization

### Styling

Astrofolio uses custom CSS variables for theming. Edit the global styles in the layout file to customize the look and feel.

### Components

All UI components are in the `src/components/` directory. Modify them to suit your needs.

## 📱 Responsive Design

Astrofolio is fully responsive and optimized for various screen sizes:
- Desktop
- Tablet
- Mobile

## 🔨 Build & Deploy

Build your site for production:

```bash
yarn build
# or
npm run build
```

Preview the production build:

```bash
yarn preview
# or
npm run preview
```

## 🤝 Contributing

Contributions are welcome! Feel free to submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- Built with [Astro](https://astro.build/)
- Icons from [Lucide](https://lucide.dev/)
- Fonts from [Google Fonts](https://fonts.google.com/)

```sh
yarn create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `yarn install`             | Installs dependencies                            |
| `yarn dev`             | Starts local dev server at `localhost:4321`      |
| `yarn build`           | Build your production site to `./dist/`          |
| `yarn preview`         | Preview your build locally, before deploying     |
| `yarn astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `yarn astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check out the [Astro documentation](https://docs.astro.build).
# astrofolio
