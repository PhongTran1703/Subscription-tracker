import { config } from 'dotenv';

const env = process.env.NODE_ENV || 'development';
config({ path: `.env.${env}.local` });

export const { 
    PORT, 
    NODE_ENV, 
    DB_URI,
    JWT_SECRET, JWT_EXPIRES_IN, 
    ARCJET_ENV, ARCJET_KEY,
    QSTASH_TOKEN, QSTASH_URL,
    EMAIL_PASSWORD

} = process.env;
