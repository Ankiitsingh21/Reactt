import ReactDOM from 'react-dom/client'
import React from 'react'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom app</h1>
    </div>
  );
}

// const reactElement = {
//         type: 'a',
//         props:{
//                 href: 'https://reactjs.org',
//                 target:'_blank'
//         },
//         children:'Click me to visit React.org',
// }

const anotherElement=(
  <a href="www.google.com" target='_blank'>Visit a google .com</a>
)

const anotherUser = "Minute aur React"


const reactElement = React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click me to visit google',
  anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).render(
    
    reactElement
)
