export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(error: string) {
    super(error);

    Object.setPrototypeOf(this, CustomError.prototype);
  }

  abstract serializeErrors(): { message: string; type?: string }[];
}
