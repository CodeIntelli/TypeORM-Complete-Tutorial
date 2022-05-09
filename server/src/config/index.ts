/** @format */

require('dotenv').config({ path: './config.env' });

export const {
	TYPEORM_CONNECTION,
	TYPEORM_HOST,
	TYPEORM_DATABASE,
	TYPEORM_USER,
	TYPEORM_PASSWORD,
	TYPEORM_DBPORT,
	TYPEORM_PORT,
	TYPEORM_SYNCHRONIZE,
	TYPEORM_LOGGING,
	JWT_SECRET,
	CLOUDINARY_NAME,
	CLOUDINARY_KEY,
	CLOUDINARY_SECRET
} = process.env;
