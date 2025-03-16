export default function Joke(props){
    if (props.setup){
        return (
            <>
                <h1>Joke:</h1>
                <p>{props.setup}</p>
                <p>{props.punchline}</p>
            </>
        )    
    }
    else{
        return(
            <>
                <h1>Joke:</h1>
                <p>{props.punchline}</p>
            </>
        )
    }
}