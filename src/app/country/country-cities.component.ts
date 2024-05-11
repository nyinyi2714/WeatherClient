import { Component, OnInit } from '@angular/core';
import { City } from './city';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { MatTableModule } from "@angular/material/table";

@Component({
  selector: 'app-country-cities',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './country-cities.component.html',
  styleUrl: './country-cities.component.css'
})
export class CountryCitiesComponent implements OnInit {
  public cities : City[] = [];
  public displayedColumns : string[] = ["cityId", "name", "latitude", "longtitude"];
  public countryId : number;

  constructor(private http: HttpClient, private route: ActivatedRoute) {
    this.countryId = -1;
  }

  ngOnInit() {
    this.getCities();
  }

  getCities() {
    let id = this.route.snapshot.paramMap.get("id");
    this.countryId = id ? +id : -1;
    this.http.get<City[]>(`${environment.baseURL}api/Countries/countryCities/${this.countryId}`).subscribe(
      {
        next: result => this.cities = result,
        error: error => console.error(error)
      }
    );
  }
}
