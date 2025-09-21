import { Component } from '@angular/core';
import {
  IonContent,
  IonButton,
  IonIcon,
  IonGrid,
  IonRow,
  IonCol,
  IonMenuButton,
  IonButtons,
  IonMenuToggle
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { help, arrowBack } from 'ionicons/icons';
import { HeaderComponent } from '../../components/header/header.component';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-extra',
  templateUrl: './extra.page.html',
  styleUrls: ['./extra.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonIcon, HeaderComponent, IonGrid, IonRow, IonCol, RouterLink, IonMenuToggle ],
})
export class ExtraPage {
  constructor() {
    addIcons({ help, arrowBack });
  }
}
