import InlineElement from './inlineElement';
import PhoneNumberList from './phoneNumberList';
import AddressList from './addressList';

export default class AddressList {
    constructor(label, wrapperClassName) {
        this.wrapper = document.createElement('div');
        this.wrapper.className = wrapperClassName;

        this.label = document.createElement('label');
        this.label.textContent = label;

        this.name = new InlineElement('text', 'First Name');
        this.surname = new InlineElement('text', 'Last Name');
        this.birthday = new InlineElement('date', 'Date of birth');
        this.addresses = new AddressList('Addresses', 'PhoneElemWrapper');
        this.phones = new PhoneNumberList('Phone\nnumbers', 'AddressWrapper');

        this.submit = new document.createElement('button');
    }

    async sendData() {
        const response = await fetch('https://god.com/api/register', {
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
                name: this.name.value(),
                surname: this.surname.value(),
                birthday: this.birthday.value(),
                addresses: this.addresses.values(),
                phoneNumbers: this.phones.values()  
            })
        })
            
        if(response.ok) {
            alert('OK');
            console.log(await response.json());
        }
        else {
            alert(response.status);
        }
    }

    isValid() {
        this.errorsMessage = [];
        if(!this.name.isValid()) this.errorsMessages.push('Name length should be more than 2');
        if(!this.surname.isValid()) this.errorsMessages.push('Surname length should be more than 2');
        if(!this.birthday.isValid()) this.errorsMessages.push('Birth must be before now');
        if(this.addresses.values().length === 0) this.errorsMessage.push('Add at least one address');
        if(this.phones.values().length === 0) this.errorsMessage.push('Add at least one phone number');

        return this.errorsMessage.length === 0;
    }

    printErorrs() {
        this.errorsWrapper.hidden = false;
        this.errorsWrapper.innerHtml = '';
        this.errorsMessage.forEach(message => {
            const li = document.createElement('li');
            li.textContent = message;
            document.appendChild(li);
        });
    }
}