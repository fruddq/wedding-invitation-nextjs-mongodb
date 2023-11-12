"use server"
import { FormValues } from "@/components/rsvp";
import prisma from "@/db";

const updateGuest = async (guestInfo: FormValues) => {
    console.log("HELLO", guestInfo)

};

export default updateGuest;