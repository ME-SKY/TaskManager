import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TasksModule} from './components/tasks/tasks.module';
import {RouterModule} from '@angular/router';
import {ROUTES} from './routes/routes';
import {HttpClientModule} from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import {StoreModule} from '@ngrx/store';
import {taskReducer} from './store/reducers/task.reducer';
import {PipesModule} from './pipes/pipes.module';

registerLocaleData(localeRu);

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    TasksModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    StoreModule.forRoot({tasks: taskReducer}),
    PipesModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'ru-Ru'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
