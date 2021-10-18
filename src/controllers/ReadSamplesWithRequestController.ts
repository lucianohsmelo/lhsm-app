import { Controller, HttpRequest, HttpResponse, ok } from '@lhsm/api';

import { ReadfileService } from '../domain/services/SampleService';

export class ReadFileWithRequestController implements Controller {
  constructor(private readonly sampleService: ReadfileService) {}

  async handle(httpRequest: HttpRequest): Promise<HttpResponse<unknown | unknown[]>> {
    const path = httpRequest.params.path as string;
    const data = await this.sampleService.readFile(path);

    return ok(data);
  }
}
