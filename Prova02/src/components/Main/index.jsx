import { Card } from "../Cards"

import { Funcionarios } from "../Funcionarios"
import styles from "./styles.module.css"

export function Main() {



    function irParaHome(){
        
    }
    function irParaFuncionarios(){
        
    }
    return (
            <main className={styles.body}>
                <div className={styles.menuEsquerda}>
                    <button onclick={irParaHome}>Home</button>
                    <button onClick={irParaFuncionarios}>Funcionários</button>
                </div>
                <div  className={styles.conteudoPrincipal}>
                    <h1>
                        Está é uma aplicação utilizando Vite + React, onde peguei como base o meu codígo da primeira avaliação
                    </h1>
                </div>
                
            </main>
    )
}

