import { DtoRepository } from "./contracts/DTO/DTORepository";

export class BaseDTORepository implements DtoRepository {
  protected data: Record<string, any>;

  constructor(data: Record<string, any>) {
    this.data = data;
  }

  getDto(): Record<string, any> {
    return { ...this.data };
  }
}
