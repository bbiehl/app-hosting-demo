import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-hosting-demo';

  logEnv(): void {
    console.log(process.env['BLARGH']);
  }
}
