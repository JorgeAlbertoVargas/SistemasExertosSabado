import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-se2',
  templateUrl: './se2.page.html',
  styleUrls: ['./se2.page.scss'],
})
export class SE2Page implements OnInit {

  //Inicializar Controler
  constructor(private alertCTRL:AlertController) { }

  ngOnInit() {
  }


  //Metodo de Ion-Alert
  async presentAlert() {
    const alert = await this.alertCTRL.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCTRL.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }
}
