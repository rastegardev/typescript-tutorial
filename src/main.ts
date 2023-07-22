interface response<T> {
  status: 200 | 400 | 401 | 403 | 404 | 422;
  data: T | T[] | null;
  error: string | null;
}

class ApiResponse2 {
  baseURl = "https://opentdb.com/api.php?amount=";
  apiResult = async (params: response) => {

  };
}
