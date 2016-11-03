import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CapitalizePipe } from './capitalize.pipe';

import { AppComponent }  from './app.component';

@NgModule({
	imports:      
	[ 
	BrowserModule,
	FormsModule
	],

	declarations: [ AppComponent, CapitalizePipe ],
	  // providers: [
   //             CapitalizePipe
   //           ],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }
