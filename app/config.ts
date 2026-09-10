export const ORGANIZATION_ID =
  process.env.NEXT_PUBLIC_ORGANIZATION_ID || '';

// The demo organization uses custom auth. In a real host app these values come
// from the host application's authenticated session.
export const AUTH_USER = {
  uid: process.env.NEXT_PUBLIC_EXAMPLE_UID || 'nextjs-example-user',
  fname: process.env.NEXT_PUBLIC_EXAMPLE_FNAME || 'Next.js',
  lname: process.env.NEXT_PUBLIC_EXAMPLE_LNAME || 'Guest',
};

export const GITHUB_ORG = 'qrati-labs';
export const REPO = 'qrati-connect-nextjs-example';
