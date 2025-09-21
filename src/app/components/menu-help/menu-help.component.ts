import {Component} from '@angular/core';
import {
  IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonTitle, IonToolbar, IonButton
} from "@ionic/angular/standalone";
import {addIcons} from 'ionicons';
import {close} from 'ionicons/icons';

@Component({
  selector: 'app-menu-help',
  templateUrl: './menu-help.component.html',
  styleUrls: ['./menu-help.component.scss'],
  standalone: true,
  imports: [
    IonMenu, IonMenuToggle, IonHeader,
    IonTitle, IonToolbar, IonContent, IonIcon,
    IonButton
  ]
})
export class MenuHelpComponent {
  constructor() {
    addIcons({close});
  }

  cerrarMenu() {
    const menu = document.querySelector('ion-menu');
    menu?.close();
  }
}
