import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { SellerModule } from './seller/seller.module';
import { ClientsModule } from './clients/clients.module';
import { SellsModule } from './sells/sells.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PrismaModule,
    SellerModule,
    ClientsModule,
    SellsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
