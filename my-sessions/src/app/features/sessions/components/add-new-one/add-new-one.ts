import { Component, Optional, signal } from '@angular/core';
import { createEmptyPlayer } from '../../models/player';
import { createEmptySession } from '../../models/session';
import { Control, customError, form, min, property, required, validate, validateAsync } from '@angular/forms/signals';

@Component({
  selector: 'app-add-new-one',
  imports: [Control],
  templateUrl: './add-new-one.html',
  styleUrl: './add-new-one.css'
})
export class AddNewOne {
  private readonly session = signal(createEmptySession());
  protected readonly sessionForm = form(this.session, session => {
    required(session.name);
    required(session.description, {when: ({ valueOf }) => valueOf(session.name) !== '' && valueOf(session.name).length > 3});
  });

  constructor() {
    const notes = this.sessionForm.notes;


  }

}
