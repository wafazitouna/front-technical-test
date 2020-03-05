import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ItemService } from './services/item.service';
import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatToolbarModule, MatCardModule } from '@angular/material';
import { FolderDetailsComponent } from './pages/folder-details/folder-details.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ModalFolderNameComponent } from './components/modal-folder-name/modal-folder-name.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
	{
		path: '',
		pathMatch: 'full',
		component: HomePageComponent,
	},
	{ path: 'folder/:id', component: FolderDetailsComponent },

	{ path: '**', component: PageNotFoundComponent },
];
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
		RouterModule.forRoot(
			appRoutes,
		),
		NgbModule,
		FormsModule,
	],
	declarations: [
		AppComponent,
		FolderDetailsComponent,
		PageNotFoundComponent,
		HomePageComponent,
		HomePageComponent,
		ModalFolderNameComponent,
	],
	entryComponents: [ModalFolderNameComponent],
	bootstrap: [AppComponent],
	providers: [ItemService],
})
export class AppModule {
}
