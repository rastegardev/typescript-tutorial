interface ApiResponse<T> {
  status: 200 | 400 | 401 | 403 | 404 | 422;
  data: T | T[] | null;
  error: string | null;
}

class ApiCaller<T> {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  public async getResponse(): Promise<ApiResponse<T>> {
    try {
      // API call is made here.
      // Assume the response data from the API is stored in the responseData variable.

      // For example purposes, let's assume responseData is the API response.
      const responseData: any = {
        status: 200,
        data: "Example data",
        error: null,
      };

      // Check the status code
      if (responseData.status !== 200) {
        const errorMessage = this.getErrorMessage(responseData.status);
        throw new Error(errorMessage);
      }

      // If everything is correct, return the response
      return {
        status: responseData.status,
        data: responseData.data,
        error: responseData.error,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }

  // Helper function to get error message based on the status code
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

// Example usage of the class
async function example() {
  const apiUrl = "https://api.example.com/data";
  const apiCaller = new ApiCaller<string>(apiUrl);

  try {
    const response = await apiCaller.getResponse();
    console.log(response);
  } catch (error) {
    console.error(error.message);
  }
}

example();
