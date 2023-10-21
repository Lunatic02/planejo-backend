import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { SellsService } from './sells.service';
import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('sells')
export class SellsController {
  constructor(private readonly sellsService: SellsService) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createSellDto: CreateSellDto) {
    return this.sellsService.create(createSellDto);
  }
  @Get()
  findAll() {
    return this.sellsService.findAll();
  }

  @Get('encomendas')
  findOrders() {
    return this.sellsService.findOrders();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.sellsService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSellDto: UpdateSellDto) {
    return this.sellsService.update(+id, updateSellDto);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.sellsService.remove(+id);
  }
}
