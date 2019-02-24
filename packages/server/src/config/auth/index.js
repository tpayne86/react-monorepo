import DotEnv from 'dotenv';

DotEnv.config();

const {
  env: { JWT_AUTH_TOKEN, FACEBOOK_APP_ID, FACEBOOK_CLIENT_SECRET },
} = process;

const FACEBOOK_APP = {
  clientID: FACEBOOK_APP_ID,
  clientSecret: FACEBOOK_CLIENT_SECRET,
  callbackURL: '/api/auth/facebook/callback',
  profileURL:
    'https://graph.facebook.com/v2.5/me?fields=first_name,last_name,email',
};

export { JWT_AUTH_TOKEN, FACEBOOK_APP };
