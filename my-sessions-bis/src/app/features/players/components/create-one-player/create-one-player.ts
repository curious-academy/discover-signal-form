import { Component, signal } from '@angular/core';
import { createEmptyPlayer, playerSchema } from '../../models/player';
import { Control, form, validateStandardSchema } from '@angular/forms/signals';
import { cardSchema } from '../../../cards/models/card';

@Component({
  selector: 'app-create-one-player',
  imports: [Control],
  templateUrl: './create-one-player.html',
  styleUrl: './create-one-player.css'
})
export class CreateOnePlayer {
  protected readonly player = signal(createEmptyPlayer())
  protected playerForm = form(this.player, playerSchema)
}
