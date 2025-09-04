import type { Handler } from '@netlify/functions';

export const handler: Handler = async (event) => {
  try {
    const data = JSON.parse(event.body || '{}');
    if (!data.email || !data.message) {
      return { statusCode: 400, body: JSON.stringify({ ok: false }) };
    }
    // for demo, just log
    console.log('Contact request', data);
    return { statusCode: 200, body: JSON.stringify({ ok: true }) };
  } catch (e) {
    return { statusCode: 500, body: JSON.stringify({ ok: false }) };
  }
};
