import PhoneNumberElelement from './modules/phoneNumberList';
import AddressElement from './modules/addressList';
import InlineElement from './modules/inlineElement';
//import AddressElement from './modules/addressElement';

const  phone  = new PhoneNumberElelement('phoneElemWrapper', 'Phones:');
const address = new AddressElement('addressElem', 'Addresses: ');
const name = new InlineElement('text', 'surname');
const date = new InlineElement('date', 'date');

//const adress = new AddressElement("4545454");

const node = document.querySelector('#main');

phone.render(node);
address.render(node);
name.render(node);
date.render(node);

//adress.render(node);