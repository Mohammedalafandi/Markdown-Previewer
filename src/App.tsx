import { useState } from 'react'
import { marked } from 'marked'
import './App.css'
const md = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... **_both!_**

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png)

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.

`;

function App() {
  const [text, setText] = useState(md)

  return (
    <>
    <div>
      <h1 style={{textAlign: "center"}}>Markdown Previewer</h1>
      <div className='container'>
      <textarea id="editor" onChange={(event) =>{setText(event.target.value)}}
      value={text}>
        
      </textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: marked(text, { breaks: true }) }}>
      </div>
      </div>
    </div>
    </>
  )
}

export default App

