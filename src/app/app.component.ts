import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AsyncPipe, JsonPipe, RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
    private firestore = inject(Firestore);
    private collectionRef = collection(this.firestore, 'demo');
    items$ = collectionData(this.collectionRef, { idField: 'id' });
    title = 'app-hosting-demo';

    ngOnInit() {
        console.log(process.env['NODE_ENV']);
    }
}
