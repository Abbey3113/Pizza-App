function Pizza({ pizz, onDelete }) {
  console.log(pizz);
  const { id, ingredients, name, photoName, price, soldOut } = pizz;
  function handleDelete() {
    onDelete(id);
  }
  return (
    <li className={`pizza ${soldOut ? "sold-out" : ""}`}>
      <img src={photoName} alt={name} />
      <div className="pizza">
        <h3>{name}</h3>
        <p>{ingredients}</p>
        <span>{soldOut ? "sold out" : price}</span>
        <button className="btn" onClick={handleDelete}>
          Delete{" "}
        </button>
      </div>
    </li>
  );
}
export default Pizza;
