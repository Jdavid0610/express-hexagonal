import { Model, FindOptions, WhereOptions, Op, ModelCtor } from "sequelize";
import { SequelizeRepository } from "../domain/contracts/sequelizeRepository";

export class SequelizeBaseRepository<T extends Model>
  implements SequelizeRepository<T>
{
  protected baseModel: ModelCtor<T>;
  protected relations: string[];

  constructor(model: ModelCtor<T>, relations: string[] = []) {
    this.baseModel = model;
    this.relations = relations;
  }

  async find(
    values: WhereOptions,
    orderBy: string | undefined = "id",
    sort: string | undefined = "DESC"
  ): Promise<T[]> {
    const queryOptions: FindOptions = {
      where: values,
      order: [[orderBy, sort]],
      include: this.relations,
    };
    return this.baseModel.findAll(queryOptions);
  }

  async findBy(arraySearch: WhereOptions): Promise<T | null> {
    const queryOptions: FindOptions = {
      where: arraySearch,
      include: this.relations,
    };
    return this.baseModel.findOne(queryOptions);
  }

  async findLike(
    field: string,
    value: string,
    conditions: { L: string; R: string }
  ): Promise<T[]> {
    const queryOptions: FindOptions = {
      where: {
        [field]: {
          [Op.like]: `${conditions.L}${value}${conditions.R}`,
        },
      },
      include: this.relations,
    };
    return this.baseModel.findAll(queryOptions);
  }

  async all(): Promise<T[]> {
    const queryOptions: FindOptions = {
      include: this.relations,
    };
    return this.baseModel.findAll(queryOptions);
  }

  async create(request: T["_creationAttributes"]): Promise<T> {
    return this.baseModel.create(request);
  }

  async get(id: number | string): Promise<T | null> {
    const queryOptions: FindOptions = {
      where: { id },
      include: this.relations,
    };
    return this.baseModel.findByPk(id, queryOptions);
  }

  async delete(model: T): Promise<boolean> {
    await model.destroy();
    return true;
  }

  async update(model: T, values: Record<string, any>): Promise<boolean> {
    const result = await model.update(values);
    return Boolean(result);
  }

  async whereIn(values: any[], field: string = "id"): Promise<T[]> {
    const queryOptions: FindOptions = {
      where: {
        [field]: {
          [Op.in]: values,
        },
      },
      include: this.relations,
    };
    return this.baseModel.findAll(queryOptions);
  }
}
