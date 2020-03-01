import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemService } from './services/item.service';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatCardModule } from '@angular/material';

@NgModule({
	imports: [
		BrowserModule,
		HttpClientModule,
		MatInputModule,
		MatButtonModule,
		MatSelectModule,
		MatIconModule,
		MatToolbarModule,
		MatCardModule,
	],
	declarations: [
		AppComponent,
	],
	bootstrap: [AppComponent],
	providers: [ItemService],
})
export class AppModule {
}
