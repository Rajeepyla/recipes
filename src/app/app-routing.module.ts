import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { ServerComponent } from './server/server/server.component';

const routes: Routes = [{path: '' , component :AppComponent},
{path:'forms', component:FormsComponent},
{path:'server', component:ServerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
