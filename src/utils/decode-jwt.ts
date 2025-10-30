
export function decodeJwtManually(token: string) {
  if (!token) {
    return null;
  }

  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('Invalid JWT format');
  }

  const base64UrlPayload = parts[1];
  const base64Payload = base64UrlPayload.replace(/-/g, '+').replace(/_/g, '/');
  const decodedPayload = Buffer.from(base64Payload, 'base64').toString('utf8');

  return JSON.parse(decodedPayload);
}