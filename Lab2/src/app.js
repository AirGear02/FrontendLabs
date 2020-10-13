import PhoneNumberElelement from './modules/phoneNumberElement';
import AddressElement from './modules/addressElement';
import ElementCreator from './modules/elementCreator';
import TextElement from './modules/textElement';
import DateElement from './modules/dateElement';

const  phone  = new PhoneNumberElelement('123221');
const adress = new AddressElement("4545454");
const date = new TextElement();
const text = new DateElement();
const node = document.querySelector('#main');


const creatorOnClick = (value) => {
    const new_phone = new AddressElement(value);
    new_phone.render(node)
}
const creator = new ElementCreator(creatorOnClick);



phone.render(node);
adress.render(node);
creator.render(node);
date.render(node);
text.render(node);