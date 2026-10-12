import { ValidationError } from 'express-validator';

export class RequestValidationError extends Error {
  constructor(public errors: ValidationError[]) {
    super();

    //We do this only because we extend a Class that is build into the native language
    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }
}
