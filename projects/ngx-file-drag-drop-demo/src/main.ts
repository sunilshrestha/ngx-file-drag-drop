import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { bootstrapApplication } from '@angular/platform-browser';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations()
  ]
})
  .catch(err => console.error(err));
