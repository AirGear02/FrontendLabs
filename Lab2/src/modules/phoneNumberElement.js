import Element from './element';


export default class PhoneNumberElement extends Element {

    constructor(value) {
        
        super();
        this.textElement.textContent = value;
        this.validatingRule = RegExp("([0-9]{4})");

        this.textElement.onChange = this.validate();
        
        this.wrapper.className = "phone_wrapper";
    }


    validate() {
       this.isValid =this.validatingRule.test(this.textElement.nodeValue);
    }
}