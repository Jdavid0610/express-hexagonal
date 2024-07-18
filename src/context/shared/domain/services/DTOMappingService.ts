import { BaseDTORepository } from "../baseDTORepository";
import { DtoFactoryRepository } from "../contracts/DTO/DTOFactoryRepository";
import { DtoRepository } from "../contracts/DTO/DTORepository";
import { EncapsulationRepository } from "../contracts/encapsulationRepository";

export class DTOMappingService implements DtoFactoryRepository {
  protected data: Record<string, any> = {};
  protected values: any;

  constructor(values: Record<string, any>) {
    this.run(values);
  }

  run(values: Record<string, any> = {}): void {
    for (const [property, value] of Object.entries(values)) {
      (this as any)[property] = value;
      this.data[property] = value;
    }
  }

  get(property?: string): any {
    if (property && !this.validateProperty(property)) {
      // throw new PropertyNotFound(`Exception: Property: ${property} doesn't exists, if you want create it, use set() method....`);
      return null; // MODIFY
    }
    return property ? (this as any)[property] : this.data;
  }

  set(encapsulateInfo?: Record<string, any>): void {
    if (encapsulateInfo) {
      const key = Object.keys(encapsulateInfo)[0];
      (this as any)[key] = encapsulateInfo[key];
      this.addProperty(encapsulateInfo);
    }
  }

  generateEncapsulation(
    encapsulationRepository: EncapsulationRepository,
    action: string
  ): any {
    const method = encapsulationRepository[
      action as keyof EncapsulationRepository
    ] as Function;
    return method.apply(encapsulationRepository, []);
  }

  addProperty(encapsulateInfo: Record<string, any>): void {
    this.run(encapsulateInfo);
  }

  generateDto(): DtoRepository {
    return new BaseDTORepository(this.data);
  }

  validateProperty(property: string): boolean {
    return Object.prototype.hasOwnProperty.call(this, property);
  }
}
