import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ParentDataComponent } from "./components/parent-data/parent-data.component";
import { ListRenderComponent } from "./components/list-render/list-render.component";
import { ItemDetailComponent } from "./components/item-detail/item-detail.component";

const routes: Routes = [
  {path: '', component: ParentDataComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDetailComponent},
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {};
