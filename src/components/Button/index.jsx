export const Button = (props) => {
    return (
        <button type={props.tipo} 
            className={props.classe} 
            onClick={props.funcao}
        >
            {props.texto}
        </button>
    )
}