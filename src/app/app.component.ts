import { Component } from '@angular/core';
import {CountryService} from './country.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private countryService: CountryService) {}
  country: any = {};
  countryName = '';
  capitalCity = '';
  currency = '';

  searchByName() {
    this.countryService.getCountryByName(this.countryName)
      .subscribe(country => this.country = country[0]);
    this.countryName = '';
  }

  searchByCapitalCity() {
    this.countryService.getCountryByCapitalCity(this.capitalCity)
      .subscribe(country => this.country = country[0]);
    this.capitalCity = '';
  }
  searchByCurrency() {
    this.countryService.getCountryByCurrency(this.currency)
      .subscribe(country => this.country = country[0]);
    this.currency = '';
  }

}
