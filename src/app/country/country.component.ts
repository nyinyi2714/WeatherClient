import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Country } from './country';
import { environment } from '../../environments/environment.development';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-country',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './country.component.html',
  styleUrl: './country.component.scss'
})
export class CountryComponent {
  public countries : Country[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getCountries();
  }

  getCountries() {
    this.http.get<Country[]>(environment.baseURL + 'api/Countries').subscribe(
      {
        next: result => this.countries = result,
        error: error => console.error(error)
      }
    );
  }
}
