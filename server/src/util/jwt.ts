import jwt from "jsonwebtoken";
import { jwtSecret } from "../config/globals";

export const generateJWT = async (username: string): Promise<string> => {
  const generateJwt = new Promise<string>((resolve, reject) => {
    jwt.sign(
      { user: username },
      jwtSecret(),
      { expiresIn: 36000 },
      (err, token) => {
        if (err) reject(err);
        resolve(token);
      }
    );
  });
  return await generateJwt;
};

export const getUsernameFromToken = async (token: string): Promise<string> => {
  return await jwt.verify(token, jwtSecret());
};
