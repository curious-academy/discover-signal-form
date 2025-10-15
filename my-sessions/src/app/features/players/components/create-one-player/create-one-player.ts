import { Component, signal } from '@angular/core';
import { createEmptyPlayer, playerSchema } from '../../models/player';
import { form, validateStandardSchema } from '@angular/forms/signals';

@Component({
  selector: 'app-create-one-player',
  imports: [],
  templateUrl: './create-one-player.html',
  styleUrl: './create-one-player.css'
})
export class CreateOnePlayer {
  protected readonly player = signal(createEmptyPlayer())
  protected playerForm = form(this.player, player => {
    playerSchema
  })
}
