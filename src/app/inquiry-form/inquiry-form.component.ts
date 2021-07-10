import { Component, OnInit } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inquiry-form',
  templateUrl: './inquiry-form.component.html',
  styleUrls: ['./inquiry-form.component.scss'],
})
export class InquiryFormComponent implements OnInit {
  // emailjs constants
  mailServiceId = 'boorgundy_mail_service';
  mailTemplateId = 'template_9jsvubo';
  mailUserId = 'user_MB34gpowffdtFKV4qCfPe';

  // alert controls
  shouldShowSuccessAlert = false;
  shouldShowFailureAlert = false;

  // form fields
  name: FormControl;
  email: FormControl;
  businessName: FormControl;
  website: FormControl;
  businessTime: FormControl;
  aboutYou: FormControl;
  package: FormControl;
  budget: FormControl;
  targetDate: FormControl;
  additionalInfo: FormControl;
  inquiryForm: FormGroup;

  businessTimeOptions: string[] = ['NOT LAUNCHED YET', 'LESS THAN A YEAR', '1-3 YEARS', '5+ YEARS'];
  packageOptions: string[] = [
    'NOT SURE',
    'THE BURGUNDY',
    'THE CRIMSON',
    'THE TANGERINE',
    'THE ROSE',
    'PERSONALIZED PACKAGE',
  ];

  constructor() {
    this.name = new FormControl('', Validators.required);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.businessName = new FormControl('', Validators.required);
    this.website = new FormControl('', Validators.required);
    this.businessTime = new FormControl(this.businessTimeOptions[0], Validators.required);
    this.aboutYou = new FormControl('', Validators.required);
    this.package = new FormControl(this.packageOptions[0], Validators.required);
    this.budget = new FormControl('', Validators.required);
    this.targetDate = new FormControl('', Validators.required);
    this.additionalInfo = new FormControl('');

    this.inquiryForm = new FormGroup({
      name: this.name,
      email: this.email,
      businessName: this.businessName,
      website: this.website,
      businessTime: this.businessTime,
      aboutYou: this.aboutYou,
      package: this.package,
      budget: this.budget,
      targetDate: this.targetDate,
      additionalInfo: this.additionalInfo,
    });
  }

  ngOnInit(): void {}

  submit(): void {
    emailjs.send(this.mailServiceId, this.mailTemplateId, this.inquiryForm.value, this.mailUserId).then(
      (result: EmailJSResponseStatus) => {
        this.handleEmailSuccess();
        console.log(result.text);
      },
      (error) => {
        this.handleEmailFailure();
        console.log(error.text);
      }
    );
  }

  private handleEmailSuccess(): void {
    this.shouldShowSuccessAlert = true;
    this.shouldShowFailureAlert = false;
    this.inquiryForm.disable();
  }

  private handleEmailFailure(): void {
    this.shouldShowFailureAlert = true;
    this.shouldShowSuccessAlert = false;
    this.inquiryForm.disable();
  }
}
