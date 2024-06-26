import { NgModule } from '@angular/core';

import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

// import { MenuModule } from 'primeng/menu';


@NgModule({
  exports: [
    // MenuModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    ButtonModule
  ]
})
export class PrimeNgModule { }
