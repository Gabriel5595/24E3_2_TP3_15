export default function Product({name, price, description = "Sem decrição disponível"}) {
    return (
        <div className={StyleSheet.productContainer}>
            <h2>{name}</h2>
            <p>{price}</p>
            <p>{description}</p>
        </div>
    )
}