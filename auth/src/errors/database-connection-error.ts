export class DatabaseConnectionError extends Error {
  reason = 'Error conecting to database';

  constructor() {
    super();

    //We do this only because we extend a Class that is build into the native language
    Object.setPrototypeOf(this, DatabaseConnectionError.prototype);
  }
}
