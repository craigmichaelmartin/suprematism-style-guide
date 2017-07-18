import { Component, AfterViewInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import 'rxjs';


@Component({
  selector: 'docs-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements AfterViewInit {

  public path: string;
  public hash: string;

  constructor(
    private router: Router
  ) {

  }

  ngAfterViewInit() {
    this.router.events
      .map(event => (event as NavigationEnd).url)
      .distinctUntilChanged()
      .subscribe((url: string) => this.setUrl = url);
  }

  private set setUrl(path: string) {
    let parts = path.split('#');
    this.path = parts[0].replace(/^\/(.*)/, '$1');
    this.hash = parts[1] ? parts[1] : null;
  }

}
