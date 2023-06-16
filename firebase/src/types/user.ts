import { z } from "zod";

export const createUserSchema = z.object({
  name: z.string().nonempty("Please enter a name.").min(6, "Name must be at least 6 characters long."),
  email: z
    .string()
    .nonempty("Please enter an email address.")
    .min(6, "Email address must be at least 6 characters long.")
});
