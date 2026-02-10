// import { z } from "zod";

// // Zod schema for inserting posts
// export const insertPostsSchema = z.object({
//   title: z
//     .string()
//     .min(3, { message: "Title must be at least 3 characters" })
//     .max(150, { message: "Title must be at most 150 characters" }),

//   slug: z
//     .string()
//     .min(3, { message: "Slug must be at least 3 characters" })
//     .max(100, { message: "Slug must be at most 100 characters" })
//     .regex(
//       /^[a-z0-9]+(?:-[a-z0-9]+)*$/,
//       "Slug must be lowercase letters, numbers, and dashes only"
//     ),

//   desc: z
//     .string()
//     .min(10, { message: "Description must be at least 10 characters" }),

//   date: z
//     .string()
//     .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format"),

//   views: z
//     .number()
//     .int()
//     .nonnegative({ message: "Views cannot be negative" })
//     .optional()
//     .default(0),

//   img: z.string().url({ message: "Image must be a valid URL" }).optional(),

//   catSlug: z.string().min(1, { message: "Category slug is required" }),
// });

// export const signInSchema = z.object({
//   email: z.email(),
//   password: z.string().min(8),
// });
