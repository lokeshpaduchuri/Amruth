import sanityClient from '@sanity/client';
import { environment } from '../../environments/environment';

export const client = sanityClient({
  projectId: environment.SANITY_PROJECT_ID,
  dataset: environment.SANITY_DATASET,
  apiVersion: '2023-05-16',
  useCdn: true,
});
