export default function Boton() {
  function handleClick() {
    console.log("Hiciste clic");
  }

  return <button onClick={handleClick}>Haz clic</button>;
}
