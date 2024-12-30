import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-hosting-demo-blargh';

  logEnv(): void {
    console.log(process.env['NODE_ENV']);
  }
}
