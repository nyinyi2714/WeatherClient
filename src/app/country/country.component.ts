import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Country } from '../countries/country';
import { environment } from '../../environments/environment.development';

@Component({
  selector: 'app-country',
  standalone: true,
  imports: [],
  templateUrl: './country.component.html',
  styleUrl: './country.component.css'
})
export class CountryComponent {
  public countries : Country[] = [];
  baseUrl = "http://localhost:5137/";

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
