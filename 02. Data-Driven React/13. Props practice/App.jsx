/**
 * Challenge: create a page that displays your favorite jokes
 * - Create a Joke component in its own file.
 * - Import and render 4-5 <Joke /> components
 * - Each Joke should receive a "setup" prop and a "punchline" prop
 *   and render those however you'd like
 * - Use your favorite 2-part jokes (setup & punchline), or check
 *   jokes.md file for some examples.
 * 
 * EXTRA CREDIT:
 * Some jokes are only a punchline with no setup:
 * 
 * E.g.: "It’s hard to explain puns to kleptomaniacs because 
 * they always take things literally."
 * 
 * If you don't pass in a "question" prop, how might you make it only 
 * show the punchline?
 */
import Joke from "./Joke"
export default function App() {
    return (
        <>
            <Joke 
                setup="Why don’t skeletons fight each other?"
                punchline="Because they don’t have the guts!"
            />
            <Joke
                setup="Why did the scarecrow win an award?"
                punchline="Because he was outstanding in his field!"
            />    
            <Joke
                setup="Why do cows have hooves instead of feet?"
                punchline="Because they lactose!"
            />
            <Joke
                setup="Why did the programmer go broke?"
                punchline=" Because he used up all his cache! 😆"
            />
            <Joke
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
            />
        </>
    )
}