import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	rForm:  FormGroup;
	post: any;
	description: string = "";
	name: string = "";
	primaryEmail:string ="";
	titleAlert: string = "This field is required";
	descriptionAlert: string = "This field is required";
	emailAlert:string = "This field is required";
	constructor(private fb: FormBuilder){

		// specify the validation
		this.rForm = fb.group({
			'name' : [null, Validators.required],
			'description' : [null, Validators.compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
			'primaryEmail' : [null,Validators.email],
			'validate' : ''
		});
	}
	addPost(post){
		this.description = post.description;
		this.name = post.name;
		this.primaryEmail = post.primaryEmail;
	}
	ngOnInit(){
		this.rForm.get('validate').valueChanges.subscribe(
			(validate) => {
				if(validate == '1'){
					this.rForm.get('name').setValidators([Validators.required, Validators.minLength(3)]);
					this.rForm.get('primaryEmail').setValidators([Validators.required, Validators.email]);
					this.rForm.get('description').setValidators([Validators.required, Validators.minLength(3)]);
					this.titleAlert = "You need to specify at least 3 characters";
					this.emailAlert = "Primary Email not valid.";
					this.descriptionAlert = "You must specify a description between 30 to 500 characters";
				}else{
					this.rForm.get('name').setValidators([Validators.required);				
					this.rForm.get('description').setValidators([Validators.required);				
					this.rForm.get('primaryEmail').setValidators([Validators.required);				
				}
			this.rForm.get('name').updateValueAndValidity();
			this.rForm.get('description').updateValueAndValidity();
			this.rForm.get('primaryEmail').updateValueAndValidity();

			}
		)
	}
	awesomeMethod(event){
		console.log(event, 'got this');

	}
}
