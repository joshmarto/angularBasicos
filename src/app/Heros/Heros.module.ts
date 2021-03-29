import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroComponent } from './Hero/hero.component';
import { ListComponent } from './list/list.component';

@NgModule({
    declarations: [
        HeroComponent,
        ListComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})
export class HerosModule{}