import { createRoot } from "react-dom/client"
const root = createRoot(document.getElementById("root"))

/**
 * Challenge (part 1):
 * Create a custom "Page" component
 * 
 * It should return an ordered list with the reasons why you're
 * excited to be learning React :)
 * 
 * Render the Page component.
 */

root.render(
    <OrderList/>
)

function OrderList(){
    return(
        <ul>
            <li>I want to become Full stack developer!</li>
            <li>I want to do full stack project</li>
            <li>I want to be freelancer</li>
        </ul>
    )
}
