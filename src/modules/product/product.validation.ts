import { z } from 'zod'

const variantValidationSchema = z.object({
  type: z.string(),
  value: z.string(),
})

const inventoryValidationSchema = z.object({
  quantity: z.number().int().min(0),
  inStock: z.boolean(),
})

const createProductValidationSchema = z.object({
  name: z.string({
    required_error: 'Name is required',
    invalid_type_error: 'Name must be a string',
  }),
  description: z.string(),
  price: z
    .number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a number',
    })
    .positive(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantValidationSchema),
  inventory: inventoryValidationSchema,
})

export const ZodValidation = {
  createProductValidationSchema,
}
