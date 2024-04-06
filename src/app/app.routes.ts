import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { CountryComponent } from './country/country.component';
import { CountryCitiesComponent } from './country/country-cities.component';

export const routes: Routes = [
    { path: "", component: HelloComponent, pathMatch: "full" },
    { path: "countries", component: CountryComponent },
    { path: "country-cities/:id", component: CountryCitiesComponent },
];
