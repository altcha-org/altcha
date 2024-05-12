/**
 * An example server implementation for ALTCHA using Deno.
 * 
 * Run: deno run --allow-net server-deno.ts
 */

import { Hono } from 'https://deno.land/x/hono/mod.ts';
import { cors } from 'https://deno.land/x/hono/middleware/cors/index.ts';
import {
  createChallenge,
  verifySolution,
} from 'https://deno.land/x/altcha@0.3.0/mod.ts';

// Configure your secret HMAC key
const HMAC_KEY = 'secret.hmac.key';

const app = new Hono();

function url(ref: string, hash: string = '') {
  const url = new URL(ref);
  url.hash = hash;
  return url.toString();
}

app.use('/*', cors());

// Configure this endpoint as `challengeurl`
app.get('/altcha', async (c) =>
  c.json(
    await createChallenge({
      expires: new Date(Date.now() + 3600000),
      hmacKey: HMAC_KEY,
    }
  )
));

// Form submission endpoint
app.post('/submit', async (c) => {
  const ref = c.req.header('referer');
  const form = await c.req.formData();

  // The verification payload is received as `altcha` field
  const payload = form.get('altcha');

  console.log('Body:', Object.fromEntries(form));

  if (!payload) {
    return c.text('Invalid payload', 400);
  }

  if (await verifySolution(payload as string, HMAC_KEY)) {
    console.log('VERIFIED.');
    if (ref) {
      return c.redirect(url(ref, '#success'));
    }
    return c.text('Submitted!');
  }

  console.log('INVALID ALTCHA.');
  if (ref) {
    return c.redirect(url(ref, '#failure'));
  }
  return c.text('ALTCHA check failed.', 400);
});

Deno.serve(app.fetch);
