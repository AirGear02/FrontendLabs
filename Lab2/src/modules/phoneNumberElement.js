import Element from element;


export class PhoneNumberElement extends Element {

    static validatingRule = RegExp(/\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/);

    constructor(value = '') {
        
        super();
        this.textELement.value = value;
        this.textELement.onChange = validate();
    }


    validate() {
       this.isValid = validatingRule.test(this.element.nodeValue);
    }
}