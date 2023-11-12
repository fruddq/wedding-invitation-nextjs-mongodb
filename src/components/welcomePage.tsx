import "./styles/welcomePage.scss"
import { GuestInterface } from "@/app/invitation/[inviteCode]/page"

export default function WelcomePage({ guest }: { guest: GuestInterface }) {
  return (
    <>
      <section className="wrapper">
        <h1>Welcome to our wedding</h1>
        <h4>2024</h4>
        <p>
          A special invitation to <br />
          <span>
            {guest.additionalGuests && guest.additionalGuests.length > 0 && (
              <>
                {guest.firstName} {guest.lastName} <br />
                and
              </>
            )}
          </span>
        </p>
        {guest.additionalGuests && guest.additionalGuests.length > 0 && (
          <ul>
            {guest.additionalGuests.map((additionalGuest) => (
              <li key={additionalGuest.firstName}>
                {additionalGuest.firstName} {additionalGuest.lastName}
              </li>
            ))}
          </ul>
        )}
      </section>
    </>
  )
}
