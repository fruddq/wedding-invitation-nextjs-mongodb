import { GuestInterface } from "@/app/invitation/[inviteCode]/page";
import "./styles/rsvp.scss";
import updateGuest from "@/utils/updateGuest";
import { PreviousAndNextBtn } from "./previousAndNextBtn";

export interface FormValues {
  attending: boolean;
  email: string;
  phoneNumber: string;
  diet: string;
  allergies: string;
  comments: string;
  "additional-guest-attending-1": string;
  "additional-guest-diet-1": string;
  "additional-guest-allergies-1": string;
  "additional-guest-comments-1": string;
}

export default function Rsvp({
  guest,
  setGuest,
}: {
  guest: GuestInterface;
  setGuest: (guest: GuestInterface | null) => void;
}) {
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    const formValues: any = {};

    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    const attendingValues = Object.values(formValues).filter(
      (value: any) => value === "true" || value === "false"
    );

    if (attendingValues.length !== guest.additionalGuests.length + 1) {
      // @TODO make a proper error message if user does not click attending
      alert("Please select an option for Attending.");
      return;
    }

    const updatedGuest = await updateGuest(formValues, guest);

    if (updatedGuest) {
      localStorage.setItem("guest", JSON.stringify(updatedGuest));
      setGuest(updatedGuest);
    }
  };

  if (guest.hasResponded) {
    return (
      <section className="container-rsvp">
        <h1>Response Received</h1>
        <div>
          <p>
            Guest: {guest.firstName} {guest.lastName}
          </p>
          <p>Email: {guest.email}</p>
          <p>Phone Number: {guest.phoneNumber}</p>
          <p>Diet: {guest.diet}</p>
          <p>Allergies: {guest.allergies}</p>
          <p>Comments: {guest.comments}</p>
          <p>Attending: {guest.attending ? "Yes" : "No"}</p>
          {/* Display additional guests info */}
          {guest.additionalGuests &&
            guest.additionalGuests.map((additionalGuest, index) => (
              <div key={index}>
                <h2>Additional Guest {index + 1}</h2>
                <p>
                  Name: {additionalGuest.firstName} {additionalGuest.lastName}
                </p>
                <p>Diet: {additionalGuest.diet}</p>
                <p>Allergies: {additionalGuest.allergies}</p>
                <p>Comments: {additionalGuest.comments}</p>
                <p>Attending: {additionalGuest.attending ? "Yes" : "No"}</p>
              </div>
            ))}
        </div>
        <article>
          <PreviousAndNextBtn />
        </article>
      </section>
    );
  }

  return (
    <>
      <section className="container-rsvp">
        <h1>Attending?</h1>
        <form onSubmit={handleSubmit}>
          <div className="guest-name">
            <label htmlFor="guest-name">Guest:</label>
            {guest ? (
              <span>
                {guest.firstName} {guest.lastName}
              </span>
            ) : (
              <input type="text" name="guest-name" placeholder="Guest name" required />
            )}
          </div>

          <div className="attending">
            <label htmlFor="attending">Attending:</label>
            <input type="radio" name="attending" value="true" />{" "}
            <span className="checkbox-option">Yes</span>
            <input type="radio" name="attending" value="false" />{" "}
            <span className="checkbox-option">No</span>
          </div>

          <div className="phoneNumber">
            <label htmlFor="phoneNumber">Phone Number:</label>
            <input type="text" name="phoneNumber" placeholder="Phone Number" />
          </div>

          <div className="email">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="Email" />
          </div>

          <div className="diet">
            <label htmlFor="diet">Diet:</label>
            <input type="radio" name="diet" value="meat" defaultChecked />
            <span className="checkbox-option">Meat</span>
            <input type="radio" name="diet" value="vegetarian" />{" "}
            <span className="checkbox-option">Vegetarian</span>
            <input type="radio" name="diet" value="vegan" />{" "}
            <span className="checkbox-option">Vegan</span>
          </div>

          <div className="allergies">
            <label htmlFor="allergies">Allergies:</label>
            <input type="text" name="allergies" placeholder="Allergies" />
          </div>

          <div className="comments">
            <label htmlFor="comments">Info:</label>
            <input type="text" name="comments" placeholder="Additional info" />
          </div>

          {guest && guest.additionalGuests && guest.additionalGuests.length > 0 && (
            <div className="additional-guests-container">
              {guest.additionalGuests.map((additionalGuest, index) => (
                <div key={index} className="additional-guest">
                  <p>Plus one</p>
                  <div className="guest-name">
                    <label htmlFor={`additional-guest-name-${index}`}>Name:</label>
                    <span>{`${additionalGuest.firstName} ${additionalGuest.lastName}`}</span>
                  </div>

                  <div className="attending">
                    <label htmlFor={`additional-guest-attending-${index + 1}`}>
                      Attending:
                    </label>
                    <input
                      type="radio"
                      id={`additional-guest-attending-${index + 1}`}
                      name={`additional-guest-attending-${index + 1}`}
                      value="true"
                    />
                    <span className="checkbox-option">Yes</span>
                    <input
                      type="radio"
                      id={`additional-guest-not-attending-${index + 1}`}
                      name={`additional-guest-attending`}
                      value="false"
                    />
                    <span className="checkbox-option">No</span>
                  </div>

                  <div className="diet">
                    <label htmlFor={`additional-guest-diet-${index + 1}`}>Diet:</label>
                    <input
                      type="radio"
                      name={`additional-guest-diet-${index + 1}`}
                      value="meat"
                      defaultChecked
                    />
                    <span className="checkbox-option">Meat</span>
                    <input
                      type="radio"
                      name={`additional-guest-diet-${index + 1}`}
                      value="vegetarian"
                    />
                    <span className="checkbox-option">Vegetarian</span>
                    <input
                      type="radio"
                      name={`additional-guest-diet-${index + 1}`}
                      value="vegan"
                    />
                    <span className="checkbox-option">Vegan</span>
                  </div>
                  <div className="allergies">
                    <label htmlFor={`additional-guest-allergies-${index + 1}`}>
                      Allergies:
                    </label>
                    <input
                      type="text"
                      name={`additional-guest-allergies-${index + 1}`}
                      placeholder="Allergies"
                    />
                  </div>
                  <div className="comments">
                    <label htmlFor={`additional-guest-comments-${index + 1}`}>Info:</label>
                    <input
                      type="text"
                      name={`additional-guest-comments-${index + 1}`}
                      placeholder="Additional info"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}

          <button className="submit-btn" type="submit">
            Submit
          </button>
        </form>
      </section>
    </>
  );
}
