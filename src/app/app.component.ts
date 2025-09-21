import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { MenuHelpComponent } from './components/menu-help/menu-help.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, MenuHelpComponent],
})
export class AppComponent {
  constructor() {}
}
