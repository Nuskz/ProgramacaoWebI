import styles from "./styles.module.css"


export function Card({nome,propriedade1,propriedade2,email}) {

    return (
        <div>
            <div>
              <img src="" alt="" />
            </div>
            <div>
              <h1>{nome}</h1>
              <h2>{propriedade1}</h2>
              <h2>{propriedade2}</h2>
            </div>
            <div>
                <h1>{email}</h1>
            </div>
        </div>   
    )
  }
  
  