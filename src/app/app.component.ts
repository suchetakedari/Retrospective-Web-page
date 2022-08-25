import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public whatWentWellcards = [];
  public whatCanBeImproved = [];
  public startDoing = [];
  public actionItems = [];
  public whatWentWellDisplay = [];

  public addNewCard(type) {
    const body = { description: '', editable: true };
    this[type].push(body);
  }

  public onSave(item, type) {
    this[type] = this[type].map((k) => {
      if (k.description === item.description) {
        k.editable = false;
      }
      return k;
    });
  }
}
