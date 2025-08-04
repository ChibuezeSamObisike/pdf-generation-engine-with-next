import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
} from '@asteasolutions/zod-to-openapi';
import { PdfQuerySchema } from '@/lib/schemas/pdf';

export function generateOpenApiSpec() {
  const registry = new OpenAPIRegistry();

  registry.registerPath({
    method: 'get',
    path: '/api/pdf',
    request: {
      query: PdfQuerySchema,
    },
    responses: {
      200: {
        description: 'PDF generated successfully',
        content: {
          'application/pdf': {
            schema: { type: 'string', format: 'binary' },
          },
        },
      },
      400: {
        description: 'Invalid request',
      },
    },
    summary: 'Generate PDF from frontend route',
    tags: ['PDF'],
  });

  const generator = new OpenApiGeneratorV3(registry.definitions);

  return generator.generateDocument({
    openapi: '3.0.0',
    info: {
      title: 'PDF Generation API',
      version: '1.0.0',
    },
    servers: [{ url: 'http://localhost:3000' }],
  });
}
