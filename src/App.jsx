function App() {
    return (
    <div>
      <h1>Building This React Page</h1>

      <h2>1. How I Installed React</h2>
      <p>
        I installed React using Vite, which is a fast modern tooling setup for web development.
        In the terminal, I ran the following commands to first create my environment, cd into the directory
        from which it was created, install dependencies, and start the development server:
      </p>
    <pre>
{`npm create vite@latest
cd my-react-app
npm install
npm run dev`}
    </pre>
      <p>
        This created the project folder, installed React automatically, and started a development server:
        <ul>
          <li>The project structure includes a <code>src/</code> folder where the main React code resides.</li>
          <li>It also includes an <code>index.html</code> file that serves as the entry point for the web page.</li>
          <li>Lastly, there is an <code>index.css</code> file for styling the page.</li>
        </ul>
      </p>
      <h2>2. How I Built This Page</h2>
      <p>
        Inside the <code>src/</code> folder, I edited the <code>App.jsx</code> file and replaced
        the default content with this explanation you're seeing on the web page now.
      </p>
      <p>
        This page is a <b>simple functional component</b> (foundation of React) that returns HTML (like JSX). 
        I used standard HTML tags such as <code>h1</code>, <code>h2</code>, <code>p</code>, and <code>pre</code>
      </p>
      <p>
        The styling is done using CSS in the <code>index.css</code> file, which was created automatically by Vite when I set up the project.
      </p>

      <h3><mark>Files I Changed:</mark></h3>
      <ul>
        <li><code>src/App.jsx: </code>Added my React component</li>
        <li><code>index.html: </code>Changed the title name of the web page</li>
        <li><code>index.css: </code>Changed the styling of my web page</li>
      </ul>

      <p>
        When I save the file, Vite automatically reloads the page because it includes hot reload support.
      </p>

      <h2>3. Challenges I Faced:</h2>
      <p>
        Since I was new to React, I had to learn the basics of JSX syntax and how to structure components.
        I also had to understand how Vite works as a build tool and how it integrates with React.
      </p>
      <p>
        However, the official React documentation and tutorials online were very helpful in overcoming these challenges.
      </p>

      <h2>4. Final Result</h2>
      <p>This is the web page you’re currently viewing, built entirely with React library framework!</p>
    </div>
  );

}

export default App
