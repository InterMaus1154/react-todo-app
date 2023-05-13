

const Radiobutton = props =>{
    const {state, setState, style, value, name, id, className, labelText} = props;

    return (
    <label className={className} htmlFor={id}>
        <input 
        style={style} 
        type="radio" 
        checked={state === value} 
        onChange={e=>setState(e.target.value)} 
        value={value} 
        name={name}
        id={id}/>
        <span>{labelText}</span>
    </label>     
    );

};


export default Radiobutton;