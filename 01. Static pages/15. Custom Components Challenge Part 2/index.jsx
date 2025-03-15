import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
Challenge: 

Part 2: 
- Add a `<header>` element with an `<img />` element with the image of the 
  React logo inside (src="react-logo.png") and make sure to set the 
  width to something more manageable so it doesn't take up the whole screen.
  Also, as always, you should include some alt text on the image.
- Add an `<h1>` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list, then wrap
  the `<h1>` and `<ol>` inside a `<main>` element to keep our semantic
  structure flowing well.
- Add a `<footer>` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

function Header(){
    return (
        <header>
            <img src="react-logo.png" width="40px" alt="react logo"/>
        </header>
    )
}

function Main(){
    return(
        <main>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>I want to become Full Stack developer!</li>
                <li>I am more likely to landed a full stack intern</li>
            </ol>
        </main>
    )
}

function Footer(){
    return (
        <footer>
            © 20xx Chong development. All rights reserved.
        </footer>
    )
}
function Page() {
    return (
        <div>
            <header>
                <img src="react-logo.png" width="40px" alt="react logo"/>
            </header>
            <main>
                <h1>Reasons I'm excited to learn React</h1>
                <ol>
                    <li>I want to become Full Stack developer!</li>
                    <li>I am more likely to landed a full stack intern</li>
                </ol>
            </main>
            <footer>
                © 20xx Chong development. All rights reserved.
            </footer>
        </div>
    )
}

root.render(
    <Page />
)
