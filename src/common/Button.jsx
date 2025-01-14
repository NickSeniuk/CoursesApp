import "../common/buttonStyles.css";

function Button({ buttonText, onClick }) {
  return <button onClick={onClick}>{buttonText}</button>;
}

export default Button;
