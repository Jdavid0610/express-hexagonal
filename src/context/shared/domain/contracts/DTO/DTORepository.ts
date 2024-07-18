export interface DtoRepository {
  /**
   * Generate Data Transfer Object.
   */
  getDto(): Record<string, any>;
}
