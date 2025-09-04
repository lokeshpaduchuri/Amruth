import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: process.env['SANITY_PROJECT_ID']!,
  dataset: process.env['SANITY_DATASET']!,
  apiVersion: '2023-05-16',
  useCdn: true,
});
