export const normalize = (s: string) =>
  s.trim().replace(/\s+/g, " ").toLowerCase();

export const strEq = (a: string, b: string) => normalize(a) === normalize(b);

const escapeReg = (s: string) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

/**
 * Build patterns to accept:
 * - from `accepted: string[]`
 * - from `correctRegex: string | string[]`
 * - fallback to `correct: string` (for text/fill-in) if provided
 */
export const buildPatterns = (q: any): RegExp[] => {
  const pats: RegExp[] = [];
  const push = (p: string) => {
    try { pats.push(new RegExp(p, "i")); } catch {}
  };

  if (Array.isArray(q.correctRegex)) q.correctRegex.forEach(push);
  else if (typeof q.correctRegex === "string") push(q.correctRegex);

  if (Array.isArray(q.accepted)) {
    q.accepted.forEach((s: string) => pats.push(new RegExp(`^${escapeReg(s)}$`, "i")));
  }

  if (typeof q.correct === "string") {
    pats.push(new RegExp(`^${escapeReg(q.correct)}$`, "i"));
  }

  return pats;
};

export const matchesAny = (input: string, patterns: RegExp[]) =>
  patterns.some((re) => re.test(input));

/** Set equality (strings, case-insensitive) */
export const setEqual = (a: string[], b: string[]) => {
  const A = new Set(a.map(normalize));
  const B = new Set(b.map(normalize));
  if (A.size !== B.size) return false;
  for (const v of A) if (!B.has(v)) return false;
  return true;
};
