import { CampoForm } from "../../components/CampoForm";
import { Input } from "../../components/Input";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { useUsuarios } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export const CadastroUsuario = () => {
    const store = useUsuarios();
    const navigate = useNavigate();
    let usuario = {};

    const salvar = () => {
        usuario.usuario = document.querySelector('input[name=usuario]').value;
        usuario.senha = document.querySelector('input[name=senha]').value;
        usuario.email = document.querySelector('input[name=email]').value;
        
        if(usuario.usuario && usuario.senha && usuario.email) {
            store.dispatch({
                'type': 'salvar',
                usuario
            })
            navigate("/");
        } else {
            alert("Todos os campos são obrigatórios");
        }
    }
    
    return (
        <div className="container" style={{marginTop: "100px"}}>
            <CampoForm classe="d-flex justify-content-end">
                <Link to="/">
                    <Button tipo="button" classe="btn btn-light" texto="Voltar" />
                </Link>
            </CampoForm>

            <CampoForm label="Usuário" classe="mb-3">
                <Input tipo="text" 
                    classe="form-control"
                    nome="usuario"
                />
            </CampoForm>

            <CampoForm label="E-mail" classe="mb-3">
                <Input tipo="email" 
                    classe="form-control"
                    nome="email"
                />
            </CampoForm>

            <CampoForm label="Senha" classe="mb-3">
                <Input tipo="password" 
                    classe="form-control"
                    nome="senha"
                />
            </CampoForm>

            <CampoForm classe="d-flex justify-content-end">
                <Button tipo="button" 
                    classe="btn btn-success" 
                    texto="Salvar"
                    funcao={salvar}
                />
            </CampoForm>
        </div>
    )
}