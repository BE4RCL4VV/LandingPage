import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Ec401Component } from './ec401/ec401.component';
import { MainComponent } from './main/main.component';
import { ProductComponent } from './product/product.component';
import { Rga72Component } from './rga72/rga72.component';
import { Srt905Component } from './srt905/srt905.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'srt905', component: Srt905Component },
  { path: 'ec401', component: Ec401Component},
  { path: 'rga72', component: Rga72Component},
  { path: 'product', component: ProductComponent },
  { path: '', component: MainComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
