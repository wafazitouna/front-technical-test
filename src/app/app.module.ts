import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemService } from './services/item.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule
	],
	declarations: [
		AppComponent,
	],
	bootstrap: [AppComponent],
	providers: [ItemService]
})
export class AppModule {
}
