export function initSentryServer() {
  const dsn = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
  if (!dsn) return null;
  // lazy require to avoid adding runtime dependency when not configured
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Sentry = require("@sentry/node");
    Sentry.init({ dsn, tracesSampleRate: 0.05 });
    return Sentry;
  } catch (err) {
    // Sentry not installed — ignore silently
    return null;
  }
}

export function initSentryClient() {
  if (typeof window === "undefined") return null;
  const dsn = process.env.NEXT_PUBLIC_SENTRY_DSN || process.env.SENTRY_DSN;
  if (!dsn) return null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const Sentry = require("@sentry/browser");
    Sentry.init({ dsn, tracesSampleRate: 0.02 });
    return Sentry;
  } catch (err) {
    return null;
  }
}
