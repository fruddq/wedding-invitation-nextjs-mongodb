import getEvent from "@/utils/getEvent"
import "./style.scss"
import EventComponent from "./eventComponent"
import { Event } from "@/interface/interface"

export default async function Event({
  params: { eventName: eventNameParam },
}: {
  readonly params: { readonly eventName: string }
}) {
  if (eventNameParam.includes(".")) {
    return null
  }

  const event = (await getEvent(eventNameParam)) as Event

  if (!event) {
    return null
  }

  return <EventComponent event={event} />
}
