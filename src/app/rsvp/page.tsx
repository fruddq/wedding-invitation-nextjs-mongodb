import "./style.scss";
// import Image from "next/image";

export default function Rsvp() {
  return (
    <>
      <section className="container">
        <h1>Attending?</h1>
        <form>
          <div className="guest-name">
            <label htmlFor="guest-name">Guest name:</label>
            <input type="text" name="guest-name" placeholder="Guest name" required />
          </div>
          <div className="attending">
            <label htmlFor="attending">Attending:</label>
            <input type="checkbox" name="attending" /> Yes
            <input type="checkbox" name="attending" /> No
          </div>
          <div className="diet">
            <label htmlFor="diet">Diet:</label>
            <input type="checkbox" name="diet" /> Meat
            <input type="checkbox" name="diet" /> Vegetarian
            <input type="checkbox" name="diet" /> Vegan
          </div>
          <div className="allergies">
            <label htmlFor="allergies">Allergies:</label>
            <input type="text" name="allergies" placeholder="Allergies" />
          </div>
          <div className="else">
            <label htmlFor="else">Else:</label>
            <input type="text" name="else" placeholder="Else" />
          </div>
          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
