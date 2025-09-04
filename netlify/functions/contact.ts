import type { Handler } from '@netlify/functions';
import { z } from 'zod';

const schema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(1)
});

export const handler: Handler = async (event) => {
  if (event.httpMethod !== 'POST') return { statusCode: 405, body: '' };
  const data = JSON.parse(event.body ?? '{}');
  const result = schema.safeParse(data);
  if (!result.success) return { statusCode: 422, body: '' };
  return { statusCode: 200, body: 'ok' };
};
