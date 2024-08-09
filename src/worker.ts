import { solveChallenge, clarifyData } from './helpers';

let controller: AbortController | undefined = undefined;

onmessage = async (message) => {
  const { type, payload, start, max } = message.data;
  let result: ReturnType<typeof solveChallenge> | Awaited<ReturnType<typeof clarifyData>> | null = null;
  if (type === 'abort') {
    controller?.abort();
    controller = undefined;
  } else if (type === 'work') {
    if ('obfuscated' in payload) {
      const { key, obfuscated } = payload || {};
      result = await clarifyData(obfuscated, key, max, start);

    } else {
      const { algorithm, challenge, salt } = payload || {};
      result = solveChallenge(challenge, salt, algorithm, max, start);
    }
    controller = result.controller;
    result.promise.then((solution) => {
      self.postMessage(solution ? { ...solution, worker: true } : solution);
    });
  }
};

export {};
