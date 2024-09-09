import Product from "../../components/Product"
import styles from "./home.module.css"

export default function Home() {
    return (
        <div>
            <Product name={"Canyon SL Ultimate"} price={"€4000,00"}/>
            <Product name={"Specialized Tarmac SL8"} price={"€8000,00"} description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit adipisci modi earum molestias architecto aperiam optio omnis facilis error hic. Deserunt iure soluta maxime reprehenderit rerum mollitia. Earum, quos ducimus."/>
        </div>
    )
}