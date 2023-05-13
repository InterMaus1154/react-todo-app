


const Button = ({children, onClick, id, style}) =>{
    return (
        <button style={style} onClick={()=>onClick} id={id} className={"my-button"}>{children}</button>
    );
};

export default Button;