//    saturday- 22/7

interface Respond<T> {
  status: 200 | 400 | 401 | 403 | 404 | 422;
  data: T | T[] | null;
  error: string | null;
}

class apiRespond<T> {
  // desired URL
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async finalResult(): Promise<Respond<T>> {
    try {
      //     AP call  Example
      const responseData: any = await fetch(this.baseUrl);

      // Status Check
      if (responseData.status !== 200) {
        const errorMessage = this.getErrorMessage(responseData.status);
        throw new Error(errorMessage);
      }

      return {
        status: responseData.status,
        data: responseData.data,
        error: responseData.error,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
  // A Class for Errors apear on API Call
  private getErrorMessage(statusCode: number): string {
    switch (statusCode) {
      case 400:
        return "Bad Request";
      case 401:
        return "Unauthorized";
      case 403:
        return "Forbidden";
      case 404:
        return "Not Found";
      case 422:
        return "Unprocessable Entity";
      default:
        return "Unknown Error";
    }
  }
}
