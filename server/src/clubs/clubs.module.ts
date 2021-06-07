import { Module } from '@nestjs/common';
import { ClubsService } from './clubs.service';
import { ClubsController } from './clubs.controller';

@Module({
  providers: [ClubsService],
  controllers: [ClubsController]
})
export class ClubsModule {}
