import "./Button.css";

function Button(props) {
    return (
        <button className="custom-button">
            {props.text}
        </button>
    );
}

export default Button;
    
