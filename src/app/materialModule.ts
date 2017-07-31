import {NgModule} from '@angular/core';
import {MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule,
MdProgressSpinnerModule} from '@angular/material';

@NgModule({
  imports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule,
  MdProgressSpinnerModule ],
  exports: [MdButtonModule, MdCheckboxModule, MdToolbarModule, MdCardModule,
  MdProgressSpinnerModule],
})
export class MyOwnCustomMaterialModule { }