import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';

export const router: Routes = [
    { path: '', redirectTo:'page1', pathMatch:'full'},
    { path: 'page1', component: Page1Component },
    { path: 'page2/:id', component: Page2Component },
    { path: 'page3/:id', component: Page3Component },
    { path: 'page4/:id', component: Page4Component },
    { path: 'page5/:id', component: Page5Component }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);