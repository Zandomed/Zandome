import packageInfo from '../../package.json';

export const config = {
   VERSION: packageInfo.version,
   SENTRY_ID: process.env.SENTRY_ID || '',
   GOOGLE_ANALYTICS_UID: process.env.GOOGLE_ANALYTICS_UID || '',
   USER_LINKEDIN: process.env.USER_LINKEDIN || '',
   USER_TWITTER: process.env.USER_TWITTER || '',
   USER_INSTAGRAM: process.env.USER_INSTAGRAM || '',
   USER_GITHUB: process.env.USER_GITHUB || '',
   EMAIL: process.env.EMAIL || '',
};
