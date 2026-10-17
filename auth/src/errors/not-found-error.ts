import { CustomError } from './custom-error';

export class NotFoundError extends CustomError {
  statusCode = 404;
  reason = 'Not found';

  constructor() {
    super('Route not found');

    //We do this only because we extend a Class that is build into the native language
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return [{ message: this.reason }];
  }
}
