import { Component, signal } from '@angular/core';
import { Card, cardSchema } from '../../models/card';
import { Control, form, validateStandardSchema } from '@angular/forms/signals';

@Component({
  selector: 'app-create-one-card',
  imports: [Control],
  templateUrl: './create-one-card.html',
  styleUrl: './create-one-card.css'
})
export class CreateOneCard {
  private readonly card = signal<Card>({ id: '', name: '' });
  protected readonly cardForm = form(this.card, card => {
    validateStandardSchema(card, cardSchema)
  })
}
