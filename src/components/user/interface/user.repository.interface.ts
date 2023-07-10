import { BaseInterfaceRepository } from "src/repositories/base/base.interface.repository";
import { User } from "../entity/user.entity";


export interface UserRepositoryInterface
  extends BaseInterfaceRepository<User> {}