import { Model, WhereOptions } from "sequelize";

export interface SequelizeRepository<T extends Model> {
  /**
   *
   * Method used to obtain all records.
   */
  all(): Promise<T[]>;

  /**
   *
   * Method to obtain records where a field complies with different values.
   * This one filters the records based on the values supplied.
   *
   * @param values - values is an array with distinct values. Values to search for.
   * @param field - name of field for filter.
   */
  whereIn(values: any[], field?: string): Promise<T[]>;

  /**
   * @param values - array of values to find.
   * @param orderBy - field to order by.
   * @param sort - sort direction.
   */
  find(values: WhereOptions, orderBy?: string, sort?: string): Promise<T[]>;

  /**
   * Method to find one record using the id.
   * @param id - id of the record.
   */
  get(id: number | string): Promise<T | null>;

  /**
   * Method to find a record based on search criteria.
   * @param array_search - search criteria.
   */
  findBy(array_search: WhereOptions): Promise<T | null>;

  /**
   *
   * Method to create new record
   * @param request - array of fields and values to be created.
   */
  create(request: Record<string, any>): Promise<T>;

  /**.
   *
   * Method to delete a record using the model.
   * @param model - model to be deleted.
   */
  delete(model: T): Promise<boolean>;

  /**
   * @param field - field to search.
   * @param value - value to search for.
   * @param conditions - additional conditions.
   */
  findLike(
    field: string,
    value: string,
    conditions: { L: string; R: string }
  ): Promise<T[]>;

  /**
   *
   * Method to update one record.
   * @param model - model to be updated.
   * @param values - fields to be updated.
   */
  update(model: T, values: Record<string, any>): Promise<boolean>;
}
