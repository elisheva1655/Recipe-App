export function LikedRecipe(props) {
    return (
        <>
            <img src={props.item.pic} alt={`Picture of ${props.item.name}`}/>
            <h3>{props.item.name}</h3>

        </>
    )
}