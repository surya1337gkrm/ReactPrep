# 03. Tailwind CSS

In order to use tailwind, we can add **tailwind cdn url** in our root html file
(\<script src="https://cdn.tailwindcss.com"></script>)
or **install tailwindcss & postcss npm packages and configure**.

Initialize tailwindcss by running the below command<br>
`npx tailwindcss init`

Inside the **tailwind.config.js** file, for content property, we need to add the files where we might use our tailwind css classes.<br>
**Example**<br>
`content: ['./src/**/*.{html,js,jsx}'],`

**Note: talwind.config.css and .postcssrc should be in same directory.** and then create a **postcssrc** file to mention that we are using tailwind in our project.
