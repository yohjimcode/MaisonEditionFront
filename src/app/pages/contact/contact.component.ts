import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { merge, Subject } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnDestroy {

  private readonly destroy = new Subject<void>();

  cheminImage = "https://img.freepik.com/vecteurs-libre/illustration-litterature-dessinee-main_23-2149263481.jpg?t=st=1730155311~exp=1730158911~hmac=b059a99802a34d55e1000e693d320a7e830a4dd5dc40a0af196d71ef4f960bdb&w=740";

  readonly nom = new FormControl('', [Validators.required]);
  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage: string = '';

  constructor(){
    merge(this.nom.statusChanges, this.nom.valueChanges)
    .pipe(takeUntilDestroyed());
  }

  ngOnDestroy() {
    this.destroy.next();
    this.destroy.complete();
  }
}

