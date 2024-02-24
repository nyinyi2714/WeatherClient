import { Routes } from '@angular/router';
import { HelloComponent } from './hello/hello.component';
import { CountryComponent } from './country/country.component';

export const routes: Routes = [
    { path: "", component: HelloComponent, pathMatch: "full" },
    { path: "countries", component: CountryComponent },
];
