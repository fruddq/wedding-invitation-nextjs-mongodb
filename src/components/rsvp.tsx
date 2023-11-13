import { GuestInterface } from "@/app/invitation/[inviteCode]/page";
import "./styles/rsvp.scss";
import updateGuest from "@/utils/updateGuest";

export interface FormValues {
  email: string;
  phoneNumber: string;
  allergies: string;
  else: string;
  "additional-guest-allergies-0": string;
  "additional-guest-else-0": string;
}

export default function Rsvp({ guest }: { guest: GuestInterface }) {
  const handleSubmit = (event: React.FormEvent) => {
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

    updateGuest(formValues);
  };
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
            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              defaultValue={guest ? guest.phoneNumber || "" : ""}
              readOnly={!!guest}
            />
          </div>

          <div className="email">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              defaultValue={guest ? guest.email || "" : ""}
              readOnly={!!guest}
            />
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

          <div className="else">
            <label htmlFor="else">Info:</label>
            <input type="text" name="else" placeholder="Additional info" />
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
                    <label htmlFor={`additional-guest-attending-${index}`}>
                      Attending:
                    </label>
                    <input
                      type="radio"
                      id={`additional-guest-attending-${index}`}
                      name={`additional-guest-attending`}
                      value="true"
                    />
                    <span className="checkbox-option">Yes</span>
                    <input
                      type="radio"
                      id={`additional-guest-not-attending-${index}`}
                      name={`additional-guest-attending`}
                      value="false"
                    />
                    <span className="checkbox-option">No</span>
                  </div>

                  <div className="diet">
                    <label htmlFor={`additional-guest-diet-${index}`}>Diet:</label>
                    <input
                      type="radio"
                      name={`additional-guest-diet-${index}`}
                      value="meat"
                      defaultChecked
                    />
                    <span className="checkbox-option">Meat</span>
                    <input
                      type="radio"
                      name={`additional-guest-diet-${index}`}
                      value="vegetarian"
                    />
                    <span className="checkbox-option">Vegetarian</span>
                    <input
                      type="radio"
                      name={`additional-guest-diet-${index}`}
                      value="vegan"
                    />
                    <span className="checkbox-option">Vegan</span>
                  </div>
                  <div className="allergies">
                    <label htmlFor={`additional-guest-allergies-${index}`}>
                      Allergies:
                    </label>
                    <input
                      type="text"
                      name={`additional-guest-allergies-${index}`}
                      placeholder="Allergies"
                    />
                  </div>
                  <div className="else">
                    <label htmlFor={`additional-guest-else-${index}`}>Info:</label>
                    <input
                      type="text"
                      name={`additional-guest-else-${index}`}
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
