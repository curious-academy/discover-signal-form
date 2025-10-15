import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddNewOne } from './features/sessions/components/add-new-one/add-new-one';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddNewOne],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-sessions');
}
