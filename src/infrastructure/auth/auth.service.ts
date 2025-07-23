import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(loginDto: { email: string; password: string }) {
    const { email, password } = loginDto;

    if (email !== 'admin@teste.com' || password !== '123456') {
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { sub: 1, email };

    const access_token = await this.jwtService.signAsync(payload, {
      expiresIn: '15m',
    });

    const refresh_token = await this.jwtService.signAsync(payload, {
      expiresIn: '7d',
    });

    return { access_token, refresh_token };
  }
}
