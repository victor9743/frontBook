export const CampoForm = (props) => {
    return (
        <div className={props.classe}>
            <label>{props.label}</label>
            {
                props.children
            }
        </div>
    )

}