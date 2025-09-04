import sanityClient, { type SanityClient } from '@sanity/client';
import { environment } from '../../environments/environment';

let cachedClient: SanityClient | null = null;

/**
 * Returns a configured Sanity client, or null if env vars are missing.
 * Avoids constructing the client at import time to prevent runtime errors
 * when SANITY_PROJECT_ID/DATASET are not set.
 */
export function getClient(): SanityClient | null {
  const projectId = (environment.SANITY_PROJECT_ID ?? '').trim();
  const dataset = (environment.SANITY_DATASET ?? '').trim();
  if (!projectId || !dataset) return null;
  if (!cachedClient) {
    cachedClient = sanityClient({
      projectId,
      dataset,
      apiVersion: '2023-05-16',
      useCdn: true,
    });
  }
  return cachedClient;
}
