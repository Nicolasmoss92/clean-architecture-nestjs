import { HttpRequest, HttpResponse } from "./http.type";

  export abstract class ControllerBase {
    abstract handle(req: HttpRequest): Promise<HttpResponse | void>;
  
    abstract exception(error: unknown): Error;
  }
  