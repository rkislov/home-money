import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

@NgModule({
    imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpModule
    ],
    exports: [
        ReactiveFormsModule,
        FormsModule,
        HttpModule
    ]
})

export class SharedModule {}