import styles from "./styles.module.css"


export function Navbar() {
  function irCadastro(){

  }

  function voltaPaginaPrincipal(){

  }
  const LogoPrincipal = () => {
    const imageUrl = './Assets/LogoPrincipal.jpg'
    
    return <img scr={imgUrl} alt='Minha Imagem'/>
  }

  return (
    <header className={styles.cabecalho}>
    <div className={styles.logoPrincipal}>
        <img onclick="voltaPaginaPrincipal()" src='./src/Assets/LogoPrincipal.jpg' alt="LogoViagra"/>
    </div>
    <div className={styles.logoUsuario}>
        <span id= {styles.nomeUsuario}>Sem Usuario</span>
        <img onclick="irCadastro()" src="./src/Assets/usuario icone.png" alt="iconeUsuarioGenerico" />
    </div>
</header>
  )
}

