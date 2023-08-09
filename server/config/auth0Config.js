import { auth } from "express-oauth2-jwt-bearer";
import dotenv from "dotenv";

dotenv.config();
const jwtCheck = auth({
  audience: process.env.AUDIENCE,
  issuerBaseURL: process.env.ISSUERBASEURL,
  tokenSigningAlg: "RS256",
});

export default jwtCheck;
