import { Component, signal } from '@angular/core';
import { createEmptyPlayer } from '../../models/player';
import { createEmptySession } from '../../models/session';
import { Control, form, required } from '@angular/forms/signals';

@Component({
  selector: 'app-add-new-one',
  imports: [Control],
  templateUrl: './add-new-one.html',
  styleUrl: './add-new-one.css'
})
export class AddNewOne {
  private readonly session = signal(createEmptySession());
  protected readonly sessionForm = form(this.session, session => {
    required(session.name),
    required(session.date)
  });

  constructor() {

  }

}
