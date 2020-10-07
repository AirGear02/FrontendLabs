import Element from './element'

export default class AddressElement extends Element{
    
    constructor(value) {

        super();
        this.textElement.textContent = value;
        this.textElement.onChange = this.validate();
        this.wrapper.className = "address_wrapper"
    }

    validate() {   
        this.isValid = this.textElement.textContent.length > 5;
    }
}