import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // replace with your project ID
  dataset: process.env.REACT_APP_SANITY_DATASET,      // replace with your dataset name
  apiVersion: 'v2022-03-07',                          // use the current date for the API version
  // token: process.env.REACT_APP_SANITY_API_TOKEN,      // Optional, for authenticated requests
  useCdn: true                                  // `false` if you need fresh data
});

export default client;
