import { z } from 'zod';
import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';

extendZodWithOpenApi(z);

export const PdfQuerySchema = z.object({
  route: z.string().openapi({
    description: 'Frontend route to render as PDF',
    example: '/invoice',
  }),
});
