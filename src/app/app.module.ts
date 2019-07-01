import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
// import ngx-translate and the http loader
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCardModule, MatInputModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatPaginatorModule} from '@angular/material'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { MainComponent } from './pages/main.component';
import { ListCurrencyComponent } from './components/ListCurrency/list-currency.component';
import { ItemCurrencyComponent } from './components/itemCurrency/item-currency.component';
import { FalgCurrencyComponent } from './components/flagCurrency/falg-currency.component';
import { ListCurencyComponent } from './pages/list-curency/list-curency.component';
import { DetailCurrencyComponent } from './pages/detail-currency/detail-currency.component';
import { LanguageComponent } from './components/language/language.component';

const appRoutes: Routes = [
    {path: 'currency/:id', component: DetailCurrencyComponent},
    {path: '', component: ListCurencyComponent}
];

@NgModule({
  declarations: [
    MainComponent,
    ListCurrencyComponent,
    ItemCurrencyComponent,
    FalgCurrencyComponent,
    ListCurencyComponent,
    DetailCurrencyComponent,
    LanguageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    NgbModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
