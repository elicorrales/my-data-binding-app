import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  valueFromComponentClass = 'this is from component class code';
  numberValueFromComponentClass = 0;
  isDisabled = false;
  isPlaceHolderText = false;
  placeHolderText = 'Hello there';
  someOtherText = 'Some Other Text';

  username = 'Eli';

  constructor() {
    this.changeValuesDynamically();
  }

  ngOnInit(): void {
  }

  changeValuesDynamically() {
    setTimeout(
      () => {
        this.changeValuesDynamically();
        this.isDisabled = this.isDisabled ? false : true;
        this.numberValueFromComponentClass++;
        this.isPlaceHolderText = this.isPlaceHolderText ? false : true;
        this.placeHolderText = this.isPlaceHolderText?'Hi ...' : ''; }
    , 500);
  }

  getValueFromComponentClass() {
    return this.valueFromComponentClass;
  }

  onButtonClicked() {
    this.numberValueFromComponentClass = 0;
  }
  onButtonClicked2(obj,event) {
    console.log(obj);
    console.log(event);
  }

  onChangeInputText(obj,event) {
    console.log(obj);
    console.log(event.target.value);
    this.valueFromComponentClass = event.target.value;
  }

  onKeyDownInputText(event) {
    this.placeHolderText = event.target.value;
  }

  updateSomeOtherText(event) {
    this.someOtherText = event.target.value;
  }

  updateUserName(event) {
    this.username = event.target.value;
  }

  resetUserName() {
    this.username = '';
  }
}
