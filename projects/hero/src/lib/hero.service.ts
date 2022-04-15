import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService {
  public constructor(private readonly httpClient: HttpClient) {}
}
