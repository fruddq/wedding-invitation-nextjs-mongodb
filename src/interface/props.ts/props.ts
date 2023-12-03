import { Event } from "../interface"

export interface updateEventProps {
    event: Event
    setEvent: React.Dispatch<React.SetStateAction<Event>>
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
}