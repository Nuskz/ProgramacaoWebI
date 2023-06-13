
import { Card } from "../Cards"

export function Funcionarios(){
    var jsonPath = './src/Assets/exemploJson.json'
        var cards = [];
        fetch(jsonPath)
        .then(response => response.json())
        .then(data => {
          data.forEach(objeto => {
            var card = {
              id: objeto.id,
              nome: objeto.nome,
              foto: objeto.foto,
              email: objeto.email
            };
            cards.push(card);
          });
          console.log(cards)
      
  })
    return (
        
        <div>

        </div>
    )
}