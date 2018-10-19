import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {

  isLinear = false;

  form: FormGroup;

  get formName() {
    return this.form.get('name').value;
  }

  get formAddress() {
    return this.form.get('address').value;
  }

  get formPhone() {
    return this.form.get('phone').value;
  }

  get formComment() {
    return this.form.get('comment').value;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
      comment: ['', Validators.required]
    });
  }

  submitForm() {
    console.log(this.form.value);
  }

}
