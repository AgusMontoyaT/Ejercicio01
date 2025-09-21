import { Component } from '@angular/core';
import { IonContent, IonButton, IonIcon, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { heart } from 'ionicons/icons';
import { HeaderComponent } from '../../components/header/header.component';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonIcon, HeaderComponent, IonGrid, IonRow, IonCol, RouterLink]
})
export class InicioPage {
  constructor() {
    addIcons({ heart });
  }
}
