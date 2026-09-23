function Footer() {
  const openHour = 9;
  const closeHour = 22;
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= openHour && currentHour <= closeHour;
  console.log(openHour, closeHour, currentHour, isOpen);
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We are open from {openHour}:00 to {closeHour}:00 and you can place
            your order
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          and we are currently closed and we open by {openHour}:00 and close
          by{" "}
        </p>
      )}
    </footer>
  );
}
export default Footer;
