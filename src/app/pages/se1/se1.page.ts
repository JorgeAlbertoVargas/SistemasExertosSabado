import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-se1',
  templateUrl: './se1.page.html',
  styleUrls: ['./se1.page.scss'],
})
export class SE1Page implements OnInit {

  //inicializar Controlador
  constructor(private actionSheetCTRL: ActionSheetController) { }

  ngOnInit() {
  }

    //Implementar Metodo onClick()
    onClick(){
      //console.log("Hola Mundo");

      //llamar al metodo asincrono presentActionSheet()
      this.presentActionSheet();
    }

   //Metodo asincrono Action-Sheet
   async presentActionSheet() {
    const actionSheet = await this.actionSheetCTRL.create({
      header: 'Pagina SE-1',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        id: 'delete-button',
        data: {
          type: 'delete'
        },
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'Share',
        icon: 'share',
        data: 10,
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'Play (open modal)',
        icon: 'caret-forward-circle',
        data: 'Data value',
        handler: () => {
          console.log('Play clicked');
        }
      }, {
        text: 'Favorite',
        icon: 'heart',
        handler: () => {
          console.log('Favorite clicked');
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }]
    });
    await actionSheet.present();

    const { role, data } = await actionSheet.onDidDismiss();
    console.log('onDidDismiss resolved with role and data', role, data);
  }

} 

