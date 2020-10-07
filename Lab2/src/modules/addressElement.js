import Element from 'element'

export class AddressElement extends Element{
    
    constructor(value) {

        console.log('123213');
        super();
        this.textELement.value = value;
        this.textELement.onChange = validate();
    }

    validate() {
        this.isValid = this.textELement.value.length > 5;
    }
}