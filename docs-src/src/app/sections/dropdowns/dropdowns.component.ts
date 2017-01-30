import {
  Component,
  OnInit
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AbstractSectionComponent } from '../section.abstract';
import { ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'docs-dropdowns',
  templateUrl: './dropdowns.component.html',
  styleUrls: ['./dropdowns.component.scss']
})
export class DropdownsComponent extends AbstractSectionComponent implements OnInit {

  // public members
  public dropdownModel: Array<any> = [];
  public dropdownSelectionText: string = '';

  // private members
  private dropdown$: ReplaySubject<any> = new ReplaySubject<any>(1);
  

  /**
   * Creates an instance of DropdownsComponent.
   * 
   * @param {ActivatedRoute} route
   * 
   * @memberOf DropdownsComponent
   */
  constructor(protected route: ActivatedRoute) {
    super(route);

    // init the model
    this.dropdown$.next([
      {
        id: 0,
        label: 'All',
        selected: false,
        icon: null,
        partial: false,
        type: 'all'
      },
      {
        id: 1,
        label: 'Auto',
        icon: 'u-supre-icon--Auto',
        selected: false,
        type: 'item'
      },
      {
        id: 2,
        label: 'Ecommerce',
        icon: 'u-supre-icon--ecommerce',
        selected: false,
        type: 'item'
      },
      {
        id: 3,
        label: 'Finance',
        icon: 'u-supre-icon--finance',
        selected: false,
        type: 'item'
      },
      {
        id: 4,
        label: 'Travel',
        icon: 'u-supre-icon--travel',
        selected: false,
        type: 'item'
      }
    ]);

  }


  /**
   * OnInit hook
   * 
   * 
   * @memberOf DropdownsComponent
   */
  ngOnInit() {
    this.addSubscription = this.dropdown$.subscribe(model => {
      this.dropdownModel = model;
      if (model.filter(item => item.selected).length === 0) {
        this.dropdownSelectionText = "Select Categories";
      } else 
      if (model.filter(item => item.selected).length === 1) {
        this.dropdownSelectionText = "1 Category Selected";
      } else
      if (model.filter(item => item.selected).length === model.length) {
        this.dropdownSelectionText = `All Categories Selected`;
      } else {
        this.dropdownSelectionText = `${model.filter(item => item.selected).length} Categories Selected`;
      }
    });
  }


  /**
   * Toggle a single item
   * 
   * @param {number} itemId
   * 
   * @memberOf DropdownsComponent
   */
  toggleItem(itemId: number) {
    this.dropdown$
      .take(1)
      .subscribe(state => this.dropdown$.next(
        update(state, Number(itemId))
      ));

    function update(state, id) {
      return state.slice(0)
        .map(item => {
          if(item.id === id){
            return Object.assign({}, item, {selected: !item.selected});
          }
          return item;
        })
        .reduce((items, item, index, orig_collection) => {
          if (item.type === 'all') {
            let all_items = orig_collection.slice(1).every(item => item.selected),
                some_items = orig_collection.slice(1).some(item => item.selected);
            if (some_items) { item.selected = false; item.partial = true; }
            if (all_items) { item.selected = true; item.partial = false; }
            if (!some_items && !all_items) { item.selected = false; item.partial = false; }
          }
          return items.concat(item);
        }, []);
    }
  }


  /**
   * Toggle all the items
   * 
   * @param {number} itemId
   * 
   * @memberOf DropdownsComponent
   */
  toggleAllItem(itemId: number) {
    this.dropdown$
      .take(1)
      .subscribe(state => this.dropdown$.next(
        update(state, Number(itemId))
      ));

    function update(state, id) {
      let selected = !state[id].selected;
      return state.slice(0)
        .map(item => {
          if (item.type === 'all') {
            return Object.assign({}, item, {selected, partial: false});
          } else {
            return Object.assign({}, item, {selected});
          }
        });
    }
  }



}
