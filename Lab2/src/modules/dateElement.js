export default class DateElement {
    constructor(title) {
        this.label = document.createElement('label');
        this.input = document.createElement('input');
        this.label.textContent = title;

        this.input.type = 'date';

        this.input.id = Math.floor(Date.now() * Math.random());
        this.label.htmlFor = this.input.id;

        this.wrapper = document.createElement('div');
        this.wrapper.className = 'inline_wrapper';

        this.wrapper.append(this.label, this.input);
        
        this.value = () => new Date(this.input.value);
        this.input.onchange = () => this.isValid = this().value < Date.now();

        this.render = parentNode => parentNode.appendChild(this.wrapper);

    }
}