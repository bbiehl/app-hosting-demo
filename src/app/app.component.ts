import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app-hosting-demo';
  environment = process.env['NODE_ENV'];
  apiKey = process.env['API_KEY'];
  apiKey2 = process.env['api-key'];


  logEnv(): void {
    console.log('Environment:', process.env['NODE_ENV']);
    console.log('API KEY:', process.env['api-key']);
  }

}
