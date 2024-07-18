import { EncapsulationRepository } from "../contracts/encapsulationRepository";

export class EncapsulationService implements EncapsulationRepository {
  protected data: Record<string, any>;

  constructor(data: Record<string, any>) {
    this.data = data;
  }

  get(property?: string): any {
    if (property && this.data.hasOwnProperty(property)) {
      return this.data[property];
    }
    return this.data;
  }

  set(encapsulateInfo?: Record<string, any>): any {
    if (encapsulateInfo) {
      this.data = { ...this.data, ...encapsulateInfo };
    }
    return this.data;
  }
}
