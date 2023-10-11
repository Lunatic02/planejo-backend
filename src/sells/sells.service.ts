import { Injectable } from '@nestjs/common';
import { CreateSellDto } from './dto/create-sell.dto';
import { UpdateSellDto } from './dto/update-sell.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SellsService {
  constructor(private prisma: PrismaService) {}
  create(createSellDto: CreateSellDto) {
    return this.prisma.sell.create({
      data: createSellDto,
    });
  }

  findAll() {
    return this.prisma.sell.findMany();
  }

  findOne(id: number) {
    return this.prisma.sell.findUnique({
      where: { id },
    });
  }

  update(id: number, updateSellDto: UpdateSellDto) {
    return this.prisma.sell.update({
      where: { id },
      data: updateSellDto,
    });
  }

  remove(id: number) {
    return this.prisma.sell.delete({
      where: { id },
    });
  }
}
