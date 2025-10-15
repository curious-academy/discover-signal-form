import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({providedIn: 'root'})
export class GetPlayersRaw {
  private readonly httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<{results: { name: string }[]}>(`https://swapi.dev/api/people/`).pipe(
      map(response => response.results.map((r, index) => ({ id: `${index + 1}`, name: r.name })))
    );
  }
}
