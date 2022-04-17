import React, {useState} from "react";
import { mockComponent } from "react-dom/test-utils";
import { Link, } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import mock from "./mock.json";

function ComponenteLogin() {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");

    const navigate = useNavigate()

    function autenticar(){
        let existe = false;
        for (let i =0; i < mock.usuario.length; i++){
            if( nome == mock.usuario[i].nome) {
               if(senha == mock.usuario[i].senha){
                existe = true;
               }
            }
        }
            if(existe == true){             
            navigate('/logado')
        }
        else{
            window.alert("Usuario ou senha invalidos")
        }
    }

    return (
      
  <div align="center" >  
    <form class="box">
            <div class="control" >
            <label class="label" htmlFor="nome">LOGIN</label>
           
            <input class="input is-normal" id="nome" type="text" value={nome} onChange={(evento) => setNome(evento.target.value)}
            placeholder="e.g. alex@example.com"></input>
           
            <label class="label" htmlFor="senha">SENHA</label>
              
            <input class="input is-normal" id="senha" type="password" value={senha} onChange={(evento) => setSenha(evento.target.value)}
            placeholder="********"></input>
            <br />
            <br />
            <div class="buttons" class="control">
            <button class="button is-primary is-light" onClick={()=> autenticar()}>Entrar</button>
            </div>
        </div>
   
    </form>  
    </div>     

    );
}
  
  export default ComponenteLogin;


