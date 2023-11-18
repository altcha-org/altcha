import { solveChallenge } from './helpers';

onmessage = async (message) => {
  const { alg, challenge, max, salt } = message.data || {};
  if (challenge && salt) {
    const solution = await solveChallenge(challenge, salt, alg, max);
    self.postMessage(solution ? { ...solution, worker: true } : solution);
  } else {
    self.postMessage(null);
  }
};

export {};