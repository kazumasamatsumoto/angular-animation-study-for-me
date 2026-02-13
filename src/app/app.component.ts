import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnterLeaveDemoComponent } from './enter-leave-demo/enter-leave-demo.component';
import { ListDemoComponent } from './list-demo/list-demo.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EnterLeaveDemoComponent, ListDemoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Angular Animations サンプル';
}
