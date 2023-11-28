"use client";

import { GuestInterface } from "@/app/invitation/[inviteCode]/page";
import updateInviteSent from "@/utils/updateInviteSent";

export default function InviteSentButton({ guest }: { guest: GuestInterface }) {
  return (
    <button onClick={async () => updateInviteSent(guest)}>
      {guest.inviteSent ? "Yes" : "No"}
    </button>
  );
}
