const sanityClient = require('@sanity/client');
// Sanity Settings
const client = sanityClient({
  projectId: 's79gr8k9',
  dataset: 'production',
  apiVersion: '2022-09-08', // use current UTC date - see "specifying API version"!
  token:
    'skTkODWRHUiytpYMHD1G0mooYpwjuihssLk3naSpeBgzZ5u5lyCufY72WY82hW8kVoEq0DF5aO7z29qsuT1n8rwSiUqGlwl7P38AYgC5ORo2coNOzcBIkPBl9PxIeYRKzQ81P2vLLG9dpxQoEbGZOu15j0q0V7qD7MaAtLPDLcZOL57ZDoWE', // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

export default client;
