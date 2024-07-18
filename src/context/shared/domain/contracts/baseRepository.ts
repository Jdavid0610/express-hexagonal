import { Model } from "sequelize";

export interface baseRepository<T extends Model> {
  search(arraySearch: any): Promise<T | null>;

  deleteRecord(model: T): Promise<boolean>;

  createRecord(data: any): Promise<T>;

  findRecord(id: number | string): Promise<T | null>;

  getAll(): Promise<T[]>;

  updateRecord(model: T, values: any): Promise<boolean>;
}
