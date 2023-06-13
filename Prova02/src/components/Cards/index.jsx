import styles from "./styles.module.css"


export function Card({title,price,description}) {

    return (
        <div>
            <img src="" alt="" />
            <div className={styles.teste}>
              <h1>{title}</h1>
              <span>R$ {price}</span>
            </div>
            <p>{description}</p>
            <button>Comprar</button>
            
        </div>   
    )
  }
  
  