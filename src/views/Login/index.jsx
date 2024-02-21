import { useState } from "react";
import { CampoForm } from "../../components/CampoForm";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { useUsuarios } from "../../contexts/UserContext";
import { Link } from "react-router-dom";

export const Login = () => {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const store = useUsuarios();

    const salvar = () => {
        let valid_salvar = false;

        store.usuarios.forEach((u) => {
            if ((u.usuario === usuario) && (senha === u.senha)) {
                valid_salvar = true;
            }
        });
    }

    return (
        <div className="container" style={{marginTop: "100px"}}>
            <CampoForm classe="d-flex justify-content-end">
                <Link to="/usuario/novo">
                    <Button tipo="button" classe="btn btn-primary" texto="+ Criar Usuário" />
                </Link>
            </CampoForm>

            <CampoForm label="Usuário" classe="mb-3">
                <Input tipo="text" 
                    classe="form-control"
                    funcao={(e) => setUsuario(e.target.value)}
                />
            </CampoForm>

            <CampoForm label="Senha" classe="mb-3">
                <Input tipo="password" 
                    classe="form-control"
                    funcao={(e) => setSenha(e.target.value)}
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