export interface EncapsulationRepository {
  /**
   * Gets the property if it exists.
   * @param property - Name of the property to search for.
   */
  get(property?: string): any;

  /**
   * Sets new property.
   * @param encapsulateInfo - Information to encapsulate.
   */
  set(encapsulateInfo?: Record<string, any>): void;
}
