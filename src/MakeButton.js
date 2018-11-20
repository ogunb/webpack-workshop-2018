function MakeButton({ label, style }) {
  const button = document.createElement('button');
  button.innerText = label;
  button.style = style.join(';');
  return button;
}

export default MakeButton;
