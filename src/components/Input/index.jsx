export const Input = (props) => {
    return (
        <input type={props.tipo} 
            className={props.classe} 
            value={props.valor}
            onChange={props.funcao}
            name={props.nome}
        />
    )
}