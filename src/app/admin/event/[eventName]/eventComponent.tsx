"use client";
import { GuestInterface } from "@/app/invitation/[inviteCode]/page";
import InviteSentButton from "@/components/inviteSentButton";
import getEvent from "@/utils/getEvent";
import inviteGuest from "@/utils/inviteGuest";
import updateEventPassword from "@/utils/updateEventPassword";
import updateRsvpDate from "@/utils/updateRsvpDate";
import "./style.scss";
import { useState } from "react";
import { PasswordFormComponent } from "./passwordForm";
import PacmanLoader from "react-spinners/PacmanLoader";
import { Event } from "@/interface/interface";
import { InviteGuestForm } from "./inviteGuestForm";
import { GuestsComponent } from "./guestsComponent";

interface EventComponentProps {
  event: Event;
}
export default function EventComponent({ event: eventDB }: EventComponentProps) {
  const [event, setEvent] = useState<Event>(eventDB);
  const [loading, setLoading] = useState(false);

  const { guestList, RSVPDate, id, eventName, eventDate, password, inviteLink } = event;

  return (
    <div>
      {loading && (
        <div className="loader-container">
          <PacmanLoader
            color="orange"
            loading={loading}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      )}

      <h1 className="event-name"> {eventName}</h1>
      <div className="event-settings">
        <div className="event-info">
          {/* <p>Event Date: {eventDate.toLocaleDateString()}</p>
          <p>RSVP Date: {RSVPDate?.toLocaleDateString() || "N/A"}</p> */}
          <p>
            Invite Link: e-invite.vercel.app/invitation/
            {inviteLink}
          </p>
        </div>

        <PasswordFormComponent event={event} setEvent={setEvent} setLoading={setLoading} />

        <br />

        {/* <form
          action={async (data: FormData) => {
            "use server"
            await updateRsvpDate(data, id)
          }}
          className="login-form"
        >
          <div className="form-field">
            <label htmlFor="rsvp-date">RSVP Date: </label>
            <input type="date" id="rsvp-date" name="rsvp-date" />
          </div>
          <button type="submit">Change RSVP Date</button>
        </form> */}

        <InviteGuestForm event={event} setEvent={setEvent} setLoading={setLoading} />
      </div>

      <GuestsComponent event={event} setEvent={setEvent} setLoading={setLoading} />
    </div>
  );
}
