import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './Pipes/filter.pipe';
import { PagenationPipe } from './Pipes/pagenation.pipe';
import { SortPipe } from './Pipes/sort.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    FilterPipe,
    PagenationPipe,
    SortPipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
