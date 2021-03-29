import { Component } from '@angular/core';

@Component({
    selector: `app-contador`,
    template: `
        <h1>{{ title }}</h1>
        <h3>The base is <strong>{{base}}</strong></h3>

        <button (click)="add(base)"> +{{base}} </button>

        <span>{{ counter }}</span>

        <button (click)="add(-base)"> -{{base}} </button>
    `,
})

export class CounterComponent{
    title = 'Contador App';
    counter: number = 10;
    base: number = 5;

    add(val:number): void{
        this.counter += val;
    }
}