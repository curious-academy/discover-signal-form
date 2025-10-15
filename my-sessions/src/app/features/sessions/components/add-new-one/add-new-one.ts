import { Component, inject, Optional, resource, signal } from '@angular/core';
import { createEmptyPlayer } from '../../models/player';
import { createEmptySession } from '../../models/session';
import { Control, customError, form, min, property, required, validate, validateAsync, validateHttp } from '@angular/forms/signals';
import { toSignal } from '@angular/core/rxjs-interop';
import { GetPlayersRaw } from '../../services/get-players';
import { JsonPipe } from '@angular/common';
import { Card } from '../../models/card';

@Component({
  selector: 'app-add-new-one',
  imports: [Control, JsonPipe],
  templateUrl: './add-new-one.html',
  styleUrl: './add-new-one.css'
})
export class AddNewOne {
  private readonly getPlayers = inject(GetPlayersRaw);
  private readonly session = signal(createEmptySession());
  private readonly cards = signal<Card[]>([]);

  private readonly tryValidate = resource({
    defaultValue: false,
    loader: async (params) => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return true
    }
  });

  protected readonly players = toSignal(this.getPlayers.getAll())
  protected readonly sessionForm = form(this.session, session => {
    required(session.name);
    required(session.description, {message: 'plouf', when: ({ valueOf }) => valueOf(session.name) !== '' && valueOf(session.name).length > 3});
    min(session.winnerId, 1, {  message: 'Winner is required'});

    validate(session, s => {
      if(s.value().durationMinutes > 30) {
        console.info('Duration is too long');
        return customError({ kind: 'durationMinutes', message: 'Too long session' });
      }

      return null;
    }),
    validateAsync(session.notes, {
      params: ({ valueOf }) => ({ name: valueOf(session.notes) }),
      factory: () => this.tryValidate,
      errors: (err) => {
        console.info('error ?', err)
        return null;
      }
    })
  });

  addCard() {

  }
}
