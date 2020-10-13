import PhoneNumberElelement from './modules/phoneNumberElement';
import AddressElement from './modules/addressElement';
import ElementCreator from './modules/elementCreator';
import TextElement from './modules/textElement';
import DateElement from './modules/dateElement';

class MyForm {
    constructor(title) {
        this.wrapper = new document.createElement('div');
        this.wrapper.className = 'form-wrapper';

        this.title = document.createElement('h3');
        this.title.textContent = title;

        this.firstnName = new TextElement('Firs tName');
        this.lastName = new TextElement('Last Name');
        this.birthDate = new DateElement('Date of Birth');

        this.outerAddressWrapper = document.createElement('div');
        this.addressesLabel = document.createElement('label');
        this.inneraddressesWrapper = document.createElement('div');
        this.addressesLabel.textContent = 'Addresses';
        
        this.outerAddressWrapper.append(this.addressesLabel, this.innerAddressesWrapper);

        this.addresses = [];
        this.addressCreator = new ElementCreator((value) => {
            const address = new AddressElement(value);
            address.render(this.innerAddressesLabel);
            this.addresses.push(address);
        });

        this.outerPhonesWrapper = document.createElement('div');
        this.phonesLabel = document.createElement('label');
        this.innerPhonesWrapper = document.createElement('div');
        this.phonesLabel.textContent = 'Phone Numbers';

        this.outerPhonesWrapper.append(this.phonesLabel, this.innerPhonesWrapper);
        
        this.phones = [];
        this.phonesCreator = new ElementCreator((value) => {
            const phone = new PhoneNumberElelement(value);
            phone.render(this.innerPhonesWrapper);
            this.phones.push(phone);
        })
        
        this.wrapper.append(this.title);
        this.firstnName.render(this.wrapper);
        this.lastName.render(this.wrapper);
        this.wrapper.append(this.outerAddressWrapper);
        this.addressCreator.render(this.wrapper);
        this.wrapper.append(this.outerPhonesWrapper);
        this.phonesCreator.render(this.wrapper);

        

    }
}