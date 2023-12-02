import getEvent from "@/utils/getEvent"
import "./style.scss"
import EventComponent from "./eventComponent"

export default async function Event({
  params: { eventName: eventNameParam },
}: {
  readonly params: { readonly eventName: string }
}) {
  if (eventNameParam.includes(".")) {
    return null
  }

  const event = await getEvent(eventNameParam)

  if (!event) {
    return null
  }

  return <EventComponent event={event} />
}
