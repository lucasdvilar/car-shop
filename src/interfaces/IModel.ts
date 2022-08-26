export interface IModel<T> {
  create(obj: T): Promise<T>;
  read(): Promise<T[]>;
  readOne(s: string): Promise<T | null>;
  update(s: string, obj: T): Promise<T | null>;
  delete(s: string): Promise<T | null>;
}
