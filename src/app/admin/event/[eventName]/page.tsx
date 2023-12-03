import getEvent from "@/utils/getEvent";
import "./style.scss";
import EventComponent from "./eventComponent";
import { GuestInterface } from "@/interface/interface";

interface IEvent {
  guestList: GuestInterface[];
  RSVPDate: Date | null;
  id: string;
  eventName: string | null;
  eventDate: Date;
  password: string;
  inviteLink: string | null;
  eventPlannerUserId: string;
}

export default async function Event({
  params: { eventName: eventNameParam },
}: {
  readonly params: { readonly eventName: string };
}) {
  if (eventNameParam.includes(".")) {
    return null;
  }

  const event = (await getEvent(eventNameParam)) as IEvent;

  if (!event) {
    return null;
  }

  return <EventComponent event={event} />;
}
