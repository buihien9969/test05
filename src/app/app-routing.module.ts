import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import {SignatureCaptureComponent} from "./pages/signatures/signature-capture/signature-capture.component";
import {BrowserModule} from "@angular/platform-browser";

const routes: Routes = [
  { path: 'ddd', component: HomeComponent },
  { path: 'sing', component: SignatureCaptureComponent },
  { path: '**', redirectTo: 'home' }

];

@NgModule({
  imports: [

    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
