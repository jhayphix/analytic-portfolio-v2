import { createClient } from '@sanity/client';

const client = createClient({
  projectId: process.env.REACT_APP_SANITY_PROJECT_ID, // replace with your project ID
  dataset: process.env.REACT_APP_SANITY_DATASET,
  apiVersion: "v2022-03-07",
  token: process.env.REACT_APP_SANITY_API_TOKEN, // Optional, for authenticated requests
  useCdn: true, // `false` if you need fresh data
});


export default client;
