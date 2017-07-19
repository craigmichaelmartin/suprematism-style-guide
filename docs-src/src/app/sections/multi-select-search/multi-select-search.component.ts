import {
  Component,
  ViewChild
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';

@Component({
  selector: 'docs-multi-select-search',
  templateUrl: './multi-select-search.component.html',
  styleUrls: ['./multi-select-search.component.scss']
})
export class MultiSelectSearchSectionComponent extends AbstractSectionComponent {

  public genericOptions = [
    {
      id: 1,
      display: 'Farmers Insurance Group',
      children: [
        {
          id: 11,
          display: '21st Century Insurance',
          children: [],
          selected: false
        }, {
          id: 12,
          display: 'Bristol West Holdings',
          children: [],
          selected: false
        }, {
          id: 13,
          display: 'Farmers Group Capital II',
          children: [
            {
              id: 131,
              display: 'Farmers Group Capital',
              children: [
                {
                  id: 1311,
                  display: 'Farmers',
                  children: [],
                  selected: false,
                  icon: 'u-supre-icon u-supre-icon--insurance'
                }
              ],
              selected: false
            }, {
              id: 132,
              display: 'Farmers Group',
              children: [],
              selected: false
            }
          ],
          selected: false
        }, {
          id: 14,
          display: 'Farmers Life Insurance',
          children: [],
          selected: false
        }
      ],
      selected: false
    }, {
      id: 2,
      display: `Khol's Corporation`,
      children: [
        {
          id: 21,
          display: 'Croft and Barrow',
          children: [
            {
              id: 211,
              display: 'Croft',
              children: [
                {
                  id: 2111,
                  display: 'Lara',
                  children: [
                    {
                      id: 21111,
                      display: 'Tomb Raider',
                      children: [],
                      selected: false
                    }
                  ],
                  selected: false
                }
              ],
              selected: false
            }, {
              id: 212,
              display: 'Barrow',
              children: [],
              selected: false
            }
          ],
          selected: false
        }, {
          id: 22,
          display: 'Jennifer Lopez Living',
          children: [],
          selected: false
        }, {
          id: 23,
          display: 'Vera Wang Everyday',
          children: [],
          selected: false
        }
      ],
      selected: false
    }, {
      id: 3,
      display: 'Liberty Mutual Insurance',
      children: [
        {
          id: 31,
          display: 'American Fire and Casualty',
          children: [
            {
              id: 311,
              display: 'Canadian',
              children: [],
              selected: false
            }
          ],
          selected: false
        }, {
          id: 32,
          display: 'Liberty Mutual Surety',
          children: [],
          selected: false
        }
      ],
      selected: false
    }
  ];

  public example;

  constructor(protected route: ActivatedRoute) {
    super(route);
    this.example = {
      options: this.genericOptions,
      searchDebounce: 500,  // default
      searchPlaceholder: 'Brand Search',
      inactiveButtonText: 'All Brands',
      inactiveButtonTextFunc: void 0,  // default
      selectedOptionsNoSelectionText: 'Available Brands from Advertisers',
      selectedOptionsNoSelectionTextFunc: void 0,  // default
      showSelectedParent: false,  // default
      selectChildrenWithParent: true,  // default
      selectChildrenToDepth: 0,  // default
      unselectChildrenWithParent: false,  // default
      unselectParentWithChild: true  // default
    };
  }

}
