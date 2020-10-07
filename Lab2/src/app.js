import PhoneNumberElelement from './modules/phoneNumberElement';
import AddressElement from './modules/addressElement';

const  phone  = new PhoneNumberElelement('123221');
const adress = new AddressElement("4545454");

const node = document.querySelector('#main');

phone.render(node);
adress.render(node);