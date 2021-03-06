import { Seeder, Factory } from "typeorm-seeding";
import { TaskHistory } from "../entity/TaskHistory";

export default class CreateTaskHistories implements Seeder {
  public async run(factory: Factory): Promise<void> {
    await factory(TaskHistory)({ roles: [] }).createMany(10);
  }
}
