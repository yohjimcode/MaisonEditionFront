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

  cheminImage = "https://img.freepik.com/vecteurs-libre/illustration-litterature-dessinee-main_23-2149263481.jpg?t=st=1730155311~exp=1730158911~hmac=b059a99802a34d55e1000e693d320a7e830a4dd5dc40a0af196d71ef4f960bdb&w=740";

  formGroup = new FormGroup({
    nom: new FormControl('', [Validators.required]),
    organisation: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]), /*A valider */
    message: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
  });

  /* invalide seulement si le champs a été touché ou modifié */
  pasValideEtPasInitierOuModifer(formControl: FormControl ){
    return formControl.invalid && (formControl.touched ||formControl.dirty);
  }

  onSubmit() {
    this.formGroup.markAllAsTouched(); //Verifie que tout est rempli
    if(this.formGroup.invalid){
      return;
    }
    console.log(this.formGroup.value);
    alert("Mail envoyé");
  }
}
