import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, ReactiveFormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  public form!: UntypedFormGroup;

  constructor(private http: HttpClient) {
    
  }

  ngOnInit(): void {
    this.form = new UntypedFormGroup({ 
      userName: new FormControl('', Validators.required), 
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    
  }
}
