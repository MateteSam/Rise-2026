import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { registerRiseAttendee } from "./rise-communications.server";

const RegistrationSchema = z.object({
  firstName: z.string().trim().min(1).max(80),
  lastName: z.string().trim().min(1).max(80),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().min(5).max(40),
  organisation: z.string().trim().max(140).optional(),
  attendanceFormat: z.literal("in-person"),
  notes: z.string().trim().max(1000).optional(),
});

export const registerRiseAttendeeFn = createServerFn({ method: "POST" })
  .validator(RegistrationSchema)
  .handler(async ({ data }) => registerRiseAttendee(data));
