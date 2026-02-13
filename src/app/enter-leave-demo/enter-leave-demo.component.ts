import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-enter-leave-demo',
  standalone: true,
  templateUrl: './enter-leave-demo.component.html',
  styleUrl: './enter-leave-demo.component.css',
})
export class EnterLeaveDemoComponent {
  isShown = signal(false);

  toggle() {
    this.isShown.update((value) => !value);
  }
}
