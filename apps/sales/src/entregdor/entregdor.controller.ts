import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { EntregdorService } from "./entregdor.service";
import { EntregdorControllerBase } from "./base/entregdor.controller.base";

@swagger.ApiTags("entregdors")
@common.Controller("entregdors")
export class EntregdorController extends EntregdorControllerBase {
  constructor(
    protected readonly service: EntregdorService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
