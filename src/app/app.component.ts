import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'app-hosting-demo-blargh';

  logEnv(): void {
    console.log(process.env['BLARGH']);
  }

    ngOnInit(): void {
        // console.log(process.env);
    }
}
