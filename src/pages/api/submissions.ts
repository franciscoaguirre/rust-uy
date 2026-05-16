export const prerender = false;

import type { APIRoute } from 'astro';
import { getDb } from '../../lib/db';

const TYPES = ['topic_request', 'speaker_offer'] as const;
type SubmissionType = (typeof TYPES)[number];

function json(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function isEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export const POST: APIRoute = async ({ request }) => {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return json({ error: 'Cuerpo inválido.' }, 400);
  }

  const type = body.type;
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  if (!TYPES.includes(type as SubmissionType)) {
    return json({ error: 'Tipo de solicitud inválido.' }, 400);
  }
  if (!name) {
    return json({ error: 'El nombre es obligatorio.' }, 400);
  }
  if (!message) {
    return json({ error: 'El mensaje es obligatorio.' }, 400);
  }
  if (email && !isEmail(email)) {
    return json({ error: 'El email no es válido.' }, 400);
  }
  if (type === 'speaker_offer' && !email) {
    return json({ error: 'El email es obligatorio para dar una charla.' }, 400);
  }

  try {
    const db = await getDb();
    await db.execute({
      sql: 'INSERT INTO submissions (type, name, email, message) VALUES (?, ?, ?, ?)',
      args: [type as string, name, email || null, message],
    });
  } catch (err) {
    console.error('Failed to store submission', err);
    return json({ error: 'No se pudo guardar la solicitud. Intentá de nuevo.' }, 500);
  }

  return json({ ok: true }, 201);
};
