import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {

  cheminImage = "../../../assets/contact.jpg";

  formGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    organisation: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]), /*A valdier */
    message: new FormControl('', [Validators.required, Validators.minLength(5)]),
  });

  /* invalide seulement si le champs a été touché ou modifié */
  pasValideEtPasInitierOuModifer(formControl: FormControl ){
    return formControl.invalid && (formControl.touched ||formControl.dirty);
  }

  onSubmit() {
    this.formGroup.markAllAsTouched();
    if(this.formGroup.invalid){
      return;
    }
    console.log(this.formGroup.value);
  }
}
