import { Jwt } from "../entities";

export abstract class JwtDataSource {
  abstract saveRefreshToken(userId: number, refreshtoken: string, expiresIn: Date): Promise<Jwt>;
  abstract findRefreshToken(token: string): Promise<Jwt>;
  abstract deleteRefreshToken(token: string): Promise<void>;
  abstract updateRefreshToken(oldToken: string, newToken: string, expiresIn: Date): Promise<Jwt>;
}