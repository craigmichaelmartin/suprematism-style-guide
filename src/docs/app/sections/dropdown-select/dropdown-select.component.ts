import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';

@Component({
  selector: 'docs-dropdown-select',
  templateUrl: './dropdown-select.component.html',
  styleUrls: ['./dropdown-select.component.scss']
})
export class DropdownSelectSectionComponent extends AbstractSectionComponent {
  public heroes = [];

  public availableHeroes: Array<any> = [
    { text: 'Luke Skywalker', value: 'luke' },
    { text: 'Han Solo', value: 'han' },
    { text: 'Princess Leia', value: 'leia' },
    { text: 'Chewbacca', value: 'chewy' },
    { text: 'Obiwan Kenobi', value: 'obiwan' },
    { text: 'Yoda', value: 'yoda' }
  ];

  public villains = [];

  public availableVillains: Array<any> = [
    { text: 'Darth Vader', value: 'darth' },
    { text: 'Emperor Palpatine', value: 'emperor' },
    { text: 'Governor Tarkin', value: 'tarkin' },
    { text: 'Jabba the Hut', value: 'jabba' },
    { text: 'Boba Fett', value: 'boba' }
  ];

  public droids = [];

  public availableDroids: Array<any> = [
    { text: 'R2D2', value: 'r2d2' },
    { text: 'C3PO', value: 'c3po' },
    { text: 'BB-8', value: 'bb8' },
    { text: 'K2SO', value: 'k2so' }
  ];

  public planets = [];

  public availablePlanets: Array<any> = [
    { text: 'Tatooine', value: 'tatooine' },
    { text: 'Hoth', value: 'hoth' },
    { text: 'Coruscant', value: 'coruscant' },
    { text: 'Jedda', value: 'jedda' }
  ];

  public getPlanetsLabel = function(planetIds) {
    if (planetIds.length === this.availablePlanets.length) {
      return 'Congrats! You selected All Planets!';
    } else if (!planetIds.length) {
      return 'No planets?  What\'s your problem?';
    } else if (planetIds.length === 1) {
      return 'That is a truly pathetic number of planets!';
    } else if (planetIds.length === 2) {
      return 'Come on! You can select more than that!';
    } else {
      return 'Select some more planets to get a free toaster.';
    }
  };

  constructor(protected route: ActivatedRoute) {
    super(route);
  }
}
