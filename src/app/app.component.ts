import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { collection, collectionData, Firestore } from '@angular/fire/firestore';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [AsyncPipe, JsonPipe],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    private firestore = inject(Firestore);
    private demoCollectionRef = collection(this.firestore, 'demo');
    readonly items$ = collectionData(this.demoCollectionRef, {idField: 'id'});
    title = 'app-hosting-demo-blargh';

    logEnv(): void {
        console.log(process.env['NODE_ENV']);
    }
}
