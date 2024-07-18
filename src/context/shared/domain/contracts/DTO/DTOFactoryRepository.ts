import { EncapsulationRepository } from "../encapsulationRepository";
import { DtoRepository } from "./DTORepository";

export interface DtoFactoryRepository extends EncapsulationRepository {
  /**
   * Generate instance from DtoRepository.
   */
  generateDto(): DtoRepository;

  /**
   * Validate if the property exists.
   * @param property - Name of the property to be validated.
   * @return boolean - true if exists.
   */
  validateProperty(property: string): boolean;

  /**
   * Add property.
   * @param encapsulateInfo - Information to encapsulate.
   */
  addProperty(encapsulateInfo: Record<string, any>): void;

  /**
   * Generate new Encapsulation.
   * @param encapsulationRepository - EncapsulationRepository instance.
   * @param action - "get" or "set".
   * @returns - Encapsulated fields if action is "get", otherwise sets new properties.
   */
  generateEncapsulation(
    encapsulationRepository: EncapsulationRepository,
    action: string
  ): any;

  /**
   * Run method.
   */
  run(): void;
}
