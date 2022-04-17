import mock from './mock.json'

function ListaDeUsuarios() {
    console.log(mock)
  return (
    
    <div className="content">
        {mock.usuario.map((usuario)=>(
            <li key={usuario.nome}>
                <p>{usuario.nome}</p>
              
            </li>
        ))}
    </div>
  );
}


export default ListaDeUsuarios;