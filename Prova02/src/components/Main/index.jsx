import { Card } from "../Cards"
import styles from "./styles.module.css"

export function Main() {
const cards = [
    {price: "12,00", description: "lorem ipsum", title:"viagra"},
    {price: "13,00", description: "lorem ipsum", title:"viagra"},
    {price: "14,00", description: "lorem ipsum", title:"viagra"},
    {price: "15,00", description: "lorem ipsum", title:"viagra"},
]
    return (
        <div>
            <h1 className={styles.teste}>Viagra</h1>
           {
            cards.map((item) => (
                <Card price={item.price} description={item.description} title={item.title} />
            ))
           }
           
           
        </div>   
    )
  }
  
  