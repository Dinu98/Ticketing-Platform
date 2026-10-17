export class DatabaseConnectionError extends Error {
  statusCode = 500;
  reason = 'Error conecting to database';

  constructor() {
    super();

    //We do this only because we extend a Class that is build into the native language
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
