import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { EntregdorServiceBase } from "./base/entregdor.service.base";

@Injectable()
export class EntregdorService extends EntregdorServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
