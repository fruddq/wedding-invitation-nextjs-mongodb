import { PreviousAndNextBtn } from "./previousAndNextBtn";
import "./styles/welcomePage.scss";
import { GuestInterface } from "@/app/invitation/[inviteCode]/page";

export default function WelcomePage({ guest }: { guest: GuestInterface }) {
  return (
    <>
      <section className="wrapper-invitation">
        <h1 className="welcome-title">Welcome to our wedding</h1>
        <h4 className="sub-title">2024</h4>
        <p className="welcome-text">A special invitation to:</p>
        <span className="welcome-span">
          {guest.additionalGuests && guest.additionalGuests.length > 0 && (
            <>
              {guest.firstName} {guest.lastName} <br />
              <ul>
                {guest.additionalGuests.map((additionalGuest) => (
                  <li key={additionalGuest.firstName}>
                    {additionalGuest.firstName.length > 0 && "and"} <br />
                    {additionalGuest.firstName} {additionalGuest.lastName}
                  </li>
                ))}
              </ul>
            </>
          )}
        </span>
      </section>
    </>
  );
}
