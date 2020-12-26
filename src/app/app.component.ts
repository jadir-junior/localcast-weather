import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  template: `
    <div>
      <mat-toolbar color="primary"><span>LocalCast Weather</span></mat-toolbar>
      <div>Yout city, your forecast, right now!</div>
      <div fxLayout="row">
        <div fxFlex></div>
        <div fxFlex="300px">
          <mat-card>
            <mat-card-header>
              <mat-card-title>Current Weather</mat-card-title>
            </mat-card-header>
            <mat-card-content>
              <app-current-weather></app-current-weather>
            </mat-card-content>
          </mat-card>
        </div>
        <div fxFlex></div>
      </div>
    </div>
  `,
})
export class AppComponent {}
