import { DtoFactoryRepository } from "../domain/contracts/DTO/DTOFactoryRepository";
import { EncapsulationRepository } from "../domain/contracts/encapsulationRepository";
import { EncapsulationService } from "../domain/services/EncapsulationService";

class DTO implements EncapsulationRepository {
  protected mapper: DtoFactoryRepository;

  constructor(mapper: DtoFactoryRepository) {
    this.mapper = mapper;
  }

  extractDto(): Record<string, any> {
    return this.mapper.generateDto().getDto();
  }

  get(property?: string): any {
    // TODO: solve error for encapsulation service at get method
    return this.mapper.generateEncapsulation(
      new EncapsulationService(property || null),
      "get"
    );
  }

  set(encapsulateInfo?: Record<string, any>): void {
    this.mapper.generateEncapsulation(
      new EncapsulationService(encapsulateInfo || {}),
      "set"
    );
  }

  setMapper(mapper: DtoFactoryRepository): void {
    this.mapper = mapper;
  }
}
