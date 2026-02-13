import { Component, signal } from '@angular/core';

interface ListItem {
  id: number;
  name: string;
}

@Component({
  selector: 'app-list-demo',
  standalone: true,
  templateUrl: './list-demo.component.html',
  styleUrl: './list-demo.component.css',
})
export class ListDemoComponent {
  items = signal<ListItem[]>([
    { id: 1, name: 'りんご' },
    { id: 2, name: 'バナナ' },
    { id: 3, name: 'オレンジ' },
  ]);
  nextId = signal(4);
  itemNames = ['ぶどう', 'いちご', 'メロン', 'スイカ', 'もも', '梨', 'キウイ'];

  addItem() {
    const name = this.itemNames[(this.nextId() - 1) % this.itemNames.length];
    const id = this.nextId();
    this.items.update((list) => [...list, { id, name }]);
    this.nextId.update((n) => n + 1);
  }

  removeItem(id: number) {
    this.items.update((list) => list.filter((item) => item.id !== id));
  }
}
