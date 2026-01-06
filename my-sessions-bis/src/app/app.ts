import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddNewOne } from './features/sessions/components/add-new-one/add-new-one';
import { CreateOneCard } from './features/cards/components/create-one-card/create-one-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddNewOne, CreateOneCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-sessions');
}
