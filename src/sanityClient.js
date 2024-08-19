import { createClient } from '@sanity/client';

const client = createClient({
  projectId: '8f8l8k4g',   // replace with your project ID
  dataset: 'production',   // replace with your dataset name
  apiVersion: 'v2022-03-07',       // use the current date for the API version
  token: 'skWwtvlajkPnf2U0mJywBb3sMAySVMSvTpPO7nyOBidjwgWDRPwCQUcJB7FToGRC2pvvSRDUpq5W5SCLvyj7bIsZKiq8h6n5Eea3okDftwO73Y0af18Yt3YK0gOsnQr7l7AiWgaWddQ4TQVuJIl4EL0IJ6fADC6hZrBzPWtGRHXS8BLznvPv',     // Optional, for authenticated requests
  useCdn: true,                   // `false` if you need fresh data
});

export default client;
