import { createHash, createHmac, randomInt, randomBytes } from 'node:crypto';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const ALTCHA_ALG = 'SHA-256';
const ALTCHA_ALG_NODE = ALTCHA_ALG.replace('-', ''); // node doesn't support alg with dashes
const ALTCHA_NUM_RANGE = [10000, 50000]; // adjust complexity
const ALTCHA_HMAC_KEY = 'secret.hmac.key'; // !! change this key !!

function createALTCHA(salt = randomBytes(12).toString('hex'), number = randomInt(...ALTCHA_NUM_RANGE)) {
  const challenge = createHash(ALTCHA_ALG_NODE).update(salt + number).digest('hex');
  return {
    algorithm: ALTCHA_ALG,
    challenge,
    maxnumber: ALTCHA_NUM_RANGE[1],
    salt,
    signature: createHmac(ALTCHA_ALG_NODE, ALTCHA_HMAC_KEY).update(challenge).digest('hex'),
  };
}

function verifyALTCHA(payload) {
  let json;
  try {
    json = JSON.parse(atob(payload));
  } catch {
    // invalid payload
    return false;
  }
  if (json) {
    const { algorithm, challenge, salt, signature, number } = json;
    const check = createALTCHA(salt, number);
    if (algorithm === check.algorithm && challenge === check.challenge && signature == check.signature) {
      return true;
    }
  }
  return false;
}

function url(ref, hash = '') {
  const url = new URL(ref);
  url.hash = hash;
  return url.toString();
}

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded());

// Endpoint to fetch a new challenge
app.get('/altcha', function (req, res) {
  res.send(createALTCHA());
});

// Endpoint to handle form submission
app.post('/submit', function (req, res) {
  const ref = req.header('referer');
  const { altcha } = req.body || {};
  if (verifyALTCHA(altcha)) {
    console.log('VERIFIED. Body:', req.body);
    if (ref) {
      res.redirect(url(ref, '#success'));
    } else {
      res.send('Submitted!');
    }

  } else {
    console.log('INVALID ALTCHA. Body:', req.body);
    if (ref) {
      res.redirect(url(ref, '#failure'));
    } else {
      res.status(403);
      res.send('ALTCHA check failed.');
    }
  }
});

app.listen(3000);