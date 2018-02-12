import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

//import { ProductComponent } from './components/product/product.component';

const appRoutes: Routes = [
  //{ path: '', component: HomeComponent },
  //{ path: '**', component: NotFoundComponent }
	// Home
	{ path: '**', component: HomeComponent }
]

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes,
			{enableTracing: false}
		)
	],
	exports:[ RouterModule ]
})

export class AppRoutingModule {}
