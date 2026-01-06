import { Component, inject, signal } from '@angular/core';
import { Control, customError, form, minLength, required, validate, validateStandardSchema } from '@angular/forms/signals';
import { Card } from '../../models/card';
import { JsonPipe } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-new-one',
  imports: [Control, JsonPipe],
  templateUrl: './create-new-one.html',
  styleUrl: './create-new-one.css'
})
export class CreateNewOne {
private  nameDifferentValidator = (control: AbstractControl): ValidationErrors | null => {
  const name = control.get('name');
  const mana = control.get('mana') as FormGroup;
  const manaName = mana.get('name');

  return name && manaName && (name.value !== manaName.value) ? null : {identic: true};
};


  // private readonly cardForm = inject(FormBuilder).group({
  //   id: [''],
  //   name: ['', [Validators.required]],
  //   description: [''],
  //   type: ['', [Validators.minLength(3)]],
  //   mana: ['']
  // }, { validators: this.nameDifferentValidator });


  protected readonly card = signal<Card>({ id: '', name: '', type: '',
                                           mana: '', description: '' });
  //protected readonly cardForm = form(this.card);

// protected readonly cardForm = form(this.card, card => {
//   required(card.name);
//   minLength(card.type, 3);
// });

//  protected readonly cardForm = form(this.card, card => {
//     required(card.name);
//     minLength(card.type, 3)

//     validate(card, context => {
//       if(context.value().mana === 'forest') {
//         return customError({ message: 'forest is not allowed' });
//       }
//     })
//   });

  protected readonly cardForm = form(this.card, card => {
    required(card.name),
    required(card.description, { message: 'Description is required', when: ({ valueOf }) => valueOf(card.name) !== '' && valueOf(card.name) === 'magic' }),

    validate(card, context => {
      if(context.value().mana === 'forest') {
        return customError({ message: 'forest is not allowed' });
      }

      return null;
    })
  });

  //this.cardForm.mana().value.set('Forest');
  ngOnInit(): void {
    const item: Card = {
      id: '1',
      name: 'Magic Card',
      description: 'A powerful magic card',
      type: 'Spell',
      mana: 'Fire'
    }
    this.cardForm().value.set(item)
  }

  save() {
    this.cardForm().errorSummary
    console.info('saved', this.cardForm().value());

  }
}
