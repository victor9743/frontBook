import { useContext, createContext, useReducer, useEffect, useState} from "react";

export const UserContext =  createContext("");
const usuarios_db = localStorage.getItem('usuarios') ?
                    JSON.parse(localStorage.getItem('usuarios')) :
                    [];
                    
export const UserProvider = ({children}) => {
    const [usuarios, dispatch] = useReducer(usuarioReducer, usuarios_db);
    
    useEffect(() => {
        localStorage.setItem('usuarios', JSON.stringify(usuarios));
    }, [usuarios]);

    let [logar, setLogar] = useState(false);

    return (
        <>
            <UserContext.Provider
                value={{
                    usuarios,
                    dispatch
                }}
            >
                {children}
            </UserContext.Provider>
        </>
    )
}

export const useUsuarios = () => {
    return useContext(UserContext);
}

const usuarioReducer = (usuarios, action) => {
    
    switch(action.type){
        case "salvar":{
            let usuario =action.usuario;
            usuario.id = usuarios.length ? Math.max(...usuarios.map(usuario => usuario.id)) + 1 : 1;
            
            return [...usuarios, action.usuario];
        }
        default:{
            return usuarios;
        }
    }
}