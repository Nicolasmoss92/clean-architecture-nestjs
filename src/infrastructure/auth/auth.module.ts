import { Module } from '@nestjs/common';
import { AuthController } from './auth';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';

@Module({
  imports: [JwtModule.register({ secret: 'secret_key' })],
  controllers: [AuthController],
  providers: [AuthService],
  exports: [AuthService, JwtModule], 

})
export class AuthModule {}
