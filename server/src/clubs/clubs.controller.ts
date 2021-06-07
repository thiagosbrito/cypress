import { Controller, Get, Param } from '@nestjs/common';
import { ClubsService } from './clubs.service';

@Controller('clubs')
export class ClubsController {
  constructor(private clubsService: ClubsService) {}

  @Get()
  public clubs(): any {
    return this.clubsService.clubs;
  }

  @Get(':code')
  public getClubByName(@Param('code') code: string): any {
    console.info(`given code is ${code}`);
    return this.clubsService.getClubByName(code);
  }
}
