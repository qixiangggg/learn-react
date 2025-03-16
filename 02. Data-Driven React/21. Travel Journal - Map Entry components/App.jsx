import Header from "./components/Header"
import Entry from "./components/Entry"
import data from "./data"
/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

export default function App() {
    const dataElements = data.map((x)=> 
    <Entry 
        img={x.img} 
        title={x.title} 
        country={x.country} 
        googleMapsLink={x.googleMapsLink}
        dates={x.dates}
        text={x.text}
    />)
    return (
        <>
            <Header />
            <main className="container">
                {dataElements}
            </main>
        </>
    )
}