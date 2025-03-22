export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    
    /**
     * Review Challenge:
     * Map over the list of ingredients and render them as list items
     * 
     * Note: We're doing things a weird way here. Don't worry,
     * we're building up to learning the right way 🙂
     */
    function onSubmitHandler(event){
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const ingredientData = formData.get("ingredient")
        ingredients.push(ingredientData)
        console.log(ingredients)
    }
    const ingredientsListItem = ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={onSubmitHandler}>
                <input 
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItem}
            </ul>
        </main>
    )
}