import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZIndexComponent } from './z-index/z-index.component';
import { BeforeAfterComponent } from './before-after/before-after.component';
import { OpacityComponent } from './opacity/opacity.component';
import { TransformComponent } from './transform/transform.component';

@NgModule({
  declarations: [
    AppComponent,
    ZIndexComponent,
    BeforeAfterComponent,
    OpacityComponent,
    
    TransformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
