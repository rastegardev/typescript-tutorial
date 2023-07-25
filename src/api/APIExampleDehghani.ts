export enum STATUS {
  OK = 200,
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_FOUND = 404,
  VALIDATION = 422,
}

interface Respond<T> {
  status: STATUS;
  data: T | T[] | null;
  error: string | null;
}

export class APIResponse<T> {
  // desired URL
  private status: STATUS;
  private data: T | T[] | null;
  private error: string | null;

  constructor(response: Respond<T>) {
    this.status = response.status;
    this.data = response.data;
    this.error = response.error;

    try {
      // Status Check
      if (this.status !== 200) {
        this.error = response.error;
        throw new Error(this.error!);
      }
    } catch (error) {
      throw new Error("خطا در برقراری ارتباط با سرور");
    }
  }
}
