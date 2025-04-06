I'll create a comprehensive README file for your portfolio website:

```markdown project="Akshat Portfolio" file="README.md"
...
```

**Option B: Download as ZIP**

1. Download the ZIP file from the repository
2. Extract it to your preferred location
3. Open a terminal and navigate to the extracted folder


### Step 2: Install Dependencies

Navigate to the project directory in your terminal and run one of the following commands based on your package manager:

**Using npm:**

```shellscript
npm install
```

**Using yarn:**

```shellscript
yarn install
```

**Using pnpm:**

```shellscript
pnpm install
```

This will install all the required dependencies listed in the `package.json` file, including:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Lucide React (for icons)
- shadcn/ui components
- next-themes (for theme management)


The installation might take a few minutes depending on your internet connection.

## Running the Application

### Development Mode

To run the application in development mode with hot-reloading:

**Using npm:**

```shellscript
npm run dev
```

**Using yarn:**

```shellscript
yarn dev
```

**Using pnpm:**

```shellscript
pnpm dev
```

Once started, the application will be available at [http://localhost:3000](http://localhost:3000).

The development server provides:

- Hot reloading (changes appear immediately)
- Error overlay (displays errors in the browser)
- Development-specific optimizations


### Production Mode

To build and run the application in production mode:

**Step 1: Build the application**

```shellscript
npm run build
# or
yarn build
# or
pnpm build
```

**Step 2: Start the production server**

```shellscript
npm start
# or
yarn start
# or
pnpm start
```

The production version will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

The project follows a standard Next.js App Router structure:

```plaintext
portfolio-website/
├── app/                  # Next.js app directory (App Router)
│   ├── layout.tsx        # Root layout component
│   ├── page.tsx          # Home page component
│   └── globals.css       # Global styles
├── components/           # React components
│   ├── about.tsx         # About section
│   ├── contact.tsx       # Contact section
│   ├── education.tsx     # Education section
│   ├── experience.tsx    # Experience section
│   ├── hero.tsx          # Hero section
│   ├── mode-toggle.tsx   # Theme toggle component
│   ├── navbar.tsx        # Navigation bar
│   ├── projects.tsx      # Projects section
│   ├── scroll-to-top.tsx # Scroll to top button
│   ├── section-heading.tsx # Section heading component
│   ├── skills.tsx        # Skills section
│   ├── theme-provider.tsx # Theme provider component
│   └── ui/               # UI components from shadcn/ui
├── lib/                  # Utility functions
│   └── utils.ts          # Utility functions (includes cn for conditional classes)
├── public/               # Static assets
│   └── images/           # Image assets
├── .gitignore            # Git ignore file
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── README.md             # Project documentation
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## Component Breakdown

### Core Components

1. **`app/layout.tsx`**

1. Root layout that wraps all pages
2. Includes the ThemeProvider for dark/light mode
3. Sets up metadata and global styles



2. **`app/page.tsx`**

1. Main page component that assembles all sections
2. Imports and renders all section components in order



3. **`components/navbar.tsx`**

1. Navigation bar with links to all sections
2. Includes mobile responsive menu
3. Contains the theme toggle button





### Section Components

4. **`components/hero.tsx`**

1. Hero section with name, title, and social links
2. Animated with Framer Motion



5. **`components/about.tsx`**

1. About section with profile image and bio
2. Contact information cards



6. **`components/experience.tsx`**

1. Work experience section with timeline
2. Animated job cards with responsibilities and skills



7. **`components/education.tsx`**

1. Education background with institutions and degrees
2. Animated cards with details



8. **`components/skills.tsx`**

1. Skills categorized by type
2. Interactive skill tags



9. **`components/projects.tsx`**

1. Project showcase with details and links
2. Animated project cards



10. **`components/contact.tsx`**

1. Contact form and contact information
2. Form submission handling





### Utility Components

11. **`components/theme-provider.tsx`**

1. Provides theme context using next-themes
2. Handles theme persistence



12. **`components/mode-toggle.tsx`**

1. Theme toggle button (light/dark/system)
2. Animated icon transitions



13. **`components/section-heading.tsx`**

1. Reusable section heading with animations
2. Consistent styling across sections



14. **`components/scroll-to-top.tsx`**

1. Button to scroll back to top
2. Appears after scrolling down





## Customization Guide

### Personal Information

To customize the portfolio with your information:

1. **Hero Section (`components/hero.tsx`)**

1. Update name, title, and social media links



2. **About Section (`components/about.tsx`)**

1. Replace profile image in `public/images/profile.png`
2. Update bio text and contact information



3. **Experience Section (`components/experience.tsx`)**

1. Modify the `experiences` array with your work history
2. Each experience object includes title, company, period, responsibilities, and skills



4. **Education Section (`components/education.tsx`)**

1. Update the `education` array with your academic background
2. Each education object includes institution, degree, location, period, and GPA



5. **Skills Section (`components/skills.tsx`)**

1. Modify the `skillCategories` array with your skills
2. Group skills by category with appropriate icons



6. **Projects Section (`components/projects.tsx`)**

1. Update the `projects` array with your projects
2. Each project includes title, description, features, technologies, and links





### Styling and Theming

1. **Colors**

1. Main color scheme is defined in `tailwind.config.ts`
2. Current theme uses blue and purple gradients



2. **Fonts**

1. The site uses Inter font from Google Fonts
2. To change fonts, update in `app/layout.tsx`



3. **Dark/Light Mode**

1. Theme settings are managed by `next-themes` in `components/theme-provider.tsx`
2. Toggle functionality is in `components/mode-toggle.tsx`



4. **Animations**

1. Animations are created with Framer Motion
2. Modify animation parameters in individual components





## Troubleshooting

### Common Issues and Solutions

1. **Installation Errors**

1. **Issue**: `npm install` fails with dependency conflicts
2. **Solution**: Try using `npm install --legacy-peer-deps` or clear npm cache with `npm cache clean --force`



2. **Next.js Build Errors**

1. **Issue**: Build fails with TypeScript errors
2. **Solution**: Check the error messages and fix type issues in the indicated files



3. **Theme Toggle Not Working**

1. **Issue**: Dark/light mode toggle doesn't change the theme
2. **Solution**: Ensure `ThemeProvider` is properly set up in `app/layout.tsx` and check browser localStorage



4. **Images Not Loading**

1. **Issue**: Profile or other images don't appear
2. **Solution**: Verify image paths and ensure images exist in the correct location



5. **Hydration Errors**

1. **Issue**: React hydration errors in console
2. **Solution**: Ensure server and client rendering match by using proper client-side detection with useEffect and useState



6. **Responsive Issues**

1. **Issue**: Layout breaks on certain screen sizes
2. **Solution**: Check Tailwind responsive classes and test on various device sizes





### Debugging Tips

1. **Check the Console**

1. Open browser developer tools (F12) and check the console for errors



2. **Inspect Network Requests**

1. Use the Network tab in developer tools to check if resources are loading



3. **Component Isolation**

1. Test problematic components in isolation to identify issues



4. **Clear Cache**

1. Clear browser cache or try in incognito/private mode



5. **Restart Development Server**

1. Stop and restart the Next.js development server





## Deployment

### Vercel (Recommended)

The easiest way to deploy this Next.js application is with Vercel:

1. Create an account on [Vercel](https://vercel.com/)
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in the project directory and follow the prompts
4. Or connect your GitHub repository to Vercel for automatic deployments


### Other Hosting Options

#### Netlify

1. Create an account on [Netlify](https://www.netlify.com/)
2. Set build command to `npm run build`
3. Set publish directory to `.next`
4. Deploy through the Netlify UI or CLI


#### Traditional Hosting

1. Build the application: `npm run build`
2. Export as static site (if no server components): Add `"export": "next export"` to package.json scripts and run `npm run export`
3. Upload the `out` directory to your hosting provider


## Resources

### Official Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)


### Tutorials and Guides

- [Learn Next.js](https://nextjs.org/learn)
- [Tailwind CSS Tutorial](https://tailwindcss.com/docs/utility-first)
- [Framer Motion Examples](https://www.framer.com/motion/examples/)


### Community Support

- [Next.js GitHub Discussions](https://github.com/vercel/next.js/discussions)
- [React Stack Overflow](https://stackoverflow.com/questions/tagged/reactjs)
- [Tailwind CSS Discord](https://tailwindcss.com/discord)


---

## License

This project is licensed under the MIT License.

---

Created with ❤️ by Akshat Sahu

```plaintext

```