import { Module } from "@nestjs/common";
import { EntregdorModuleBase } from "./base/entregdor.module.base";
import { EntregdorService } from "./entregdor.service";
import { EntregdorController } from "./entregdor.controller";
import { EntregdorResolver } from "./entregdor.resolver";

@Module({
  imports: [EntregdorModuleBase],
  controllers: [EntregdorController],
  providers: [EntregdorService, EntregdorResolver],
  exports: [EntregdorService],
})
export class EntregdorModule {}
