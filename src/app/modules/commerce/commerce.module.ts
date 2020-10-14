import { ComponentsModule } from './../home/components/components.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './../profil-space/profil-space.module';
import { MaterialAngularModule } from './../../material-angular/material-angular.module';
import { CoreModule } from './../../core/core.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitAddPageComponent } from './produit-add-page/produit-add-page.component';
import { ContainerCommerceSpaceComponent } from './container-commerce-space/container-commerce-space.component';
import { CommercePageComponent } from './commerce-page/commerce-page.component';
import { CommerceLstProduitPageComponent } from './commerce-lst-produit-page/commerce-lst-produit-page.component';


const routes: Routes = [
  {
    path: '',
    component: ContainerCommerceSpaceComponent,
    children: [
      {
        path: '',
        component: CommercePageComponent
      },
      {
        path: 'produits',
        component: CommerceLstProduitPageComponent
      },
      {
        path: 'produits/add',
        component: ProduitAddPageComponent
      }
    ]
  }
];

export const routingCommerce = RouterModule.forChild(routes);


@NgModule({
  declarations: [ProduitAddPageComponent, ContainerCommerceSpaceComponent, CommercePageComponent, CommerceLstProduitPageComponent],
  imports: [
    [
      CommonModule,
      CoreModule,
      MaterialAngularModule,
      routingCommerce,
      FormsModule,
      MatFormFieldModule,
      ReactiveFormsModule,
      ComponentsModule
    ]
  ]
})
export class CommerceModule { }
