import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../shared/i18n/api.service';
import { ToastService } from '../toast/toast-service';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  @ViewChild('formSucess') formSucess: TemplateRef<any>;
  @ViewChild('formFailed') formFailed: TemplateRef<any>;
  addForm: any = new FormGroup({});

  text = '';
  isShowLoader: boolean = false;
  isShow: boolean = false;
  success: boolean = false
  constructor(private fBuilder: FormBuilder, private api: ApiService, public toastService: ToastService, private dialog: MatDialog) {
    this.addForm = this.fBuilder.group({
      email: new FormControl(null, [Validators.required, Validators.email]),
      name: new FormControl(null, Validators.compose([Validators.required])),
      last_name: new FormControl(null, Validators.compose([Validators.required])),
      company: new FormControl(null, Validators.compose([Validators.required])),
      phone: new FormControl(null, Validators.compose([Validators.required])),
      message: new FormControl(null, Validators.compose([Validators.required])),

    });
  }


  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  closemodal() {
    // this.modalReference.close();
  }
  submit() {
    console.log("No");
    this.addForm.markAllAsTouched();
    console.log("No");
    if (this.addForm.valid) {
      console.log(this.addForm.value);
      console.log("Yes");
      this.api.sendMessage(this.addForm.value).subscribe((res) => {
        this.isShowLoader = false;
        this.text = res?.message
        this.isShow = true
        this.success = true
        this.dialog.open(this.formSucess, {
          panelClass: 'contact_form_dialog'
        });
        this.addForm.reset();
      },
        (err) => {
          this.text = err?.error?.message
          this.success = false;
          this.isShowLoader = false;
          this.dialog.open(this.formFailed, {
            panelClass: 'contact_form_dialog'
          });
          this.addForm.reset();
        })
    }


  }
  // ngOnDestroy(): void {
  //   this.toastService.clear();
  // }

  keyPressContact(event) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    }
    else if (/[1-9]{1}[0-9]{9}/.test(event.keyCode)) {
      event.preventDefault();
      return true;
    }
    else {
      return true;
    }
  }
}
