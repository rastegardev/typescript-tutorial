interface ApiResponse<T> {
  status: 200 | 400 | 401 | 403 | 404 | 422;
  data: T | T[] | null;
  error: string | null;
}

class ApiCaller<T> {
  constructor(private baseUrl: string) {}

  public async getResponse(): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(this.baseUrl);
      const responseData = await response.json();

      // Check the status code
      if (!response.ok) {
        throw new Error(responseData.error || "Unknown Error");
      }

      // If everything is correct, return the response
      return {
        status: response.status,
        data: responseData.data,
        error: null,
      };
    } catch (error) {
      throw new Error(error.message || "Unknown Error");
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
