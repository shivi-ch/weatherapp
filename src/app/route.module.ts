import {NgModule} from '@angular/core'
import {Routes,RouterModule, Router} from '@angular/router'
import{MainComponent} from './main/main.component'
import { SearchComponent } from './search/search.component'
const appRoutes:Routes = [
    {path:'',component: MainComponent },
    {path:'search/:lat/:lon/:temp/:name/:wspeed/:tempmin/:tempmax/:weather',component: SearchComponent }
]
@NgModule({
imports:[RouterModule.forRoot(appRoutes)],
exports : [RouterModule]
})
export class AppRouteModule{

}