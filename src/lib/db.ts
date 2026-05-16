import { createClient, type Client } from '@libsql/client';
import { TURSO_DATABASE_URL, TURSO_AUTH_TOKEN } from 'astro:env/server';

let clientPromise: Promise<Client> | null = null;

async function init(): Promise<Client> {
  const client = createClient({
    url: TURSO_DATABASE_URL,
    authToken: TURSO_AUTH_TOKEN || undefined,
  });

  await client.execute(`
    CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      type TEXT NOT NULL CHECK (type IN ('topic_request', 'speaker_offer')),
      name TEXT NOT NULL,
      email TEXT,
      message TEXT NOT NULL,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    )
  `);

  return client;
}

export function getDb(): Promise<Client> {
  if (!clientPromise) clientPromise = init();
  return clientPromise;
}
