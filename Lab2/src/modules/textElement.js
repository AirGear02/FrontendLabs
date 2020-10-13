export default class TextElement {
    constructor(title) {
        this.label = document.createElement('label');
        this.input = document.createElement('input');
        this.label.textContent = title;

        this.input.type = 'text';

        this.input.id = Math.floor(Date.now() * Math.random());
        this.label.htmlFor = this.input.id;

        this.wrapper = document.createElement('div');
        this.wrapper.className = 'inline_wrapper';
        this.wrapper.append( this.label, this.input);
        
        this.value = () => this.input.value;
        this.input.onchange = () => this.isValid = this().value.length() > 5;

        this.render = parentNode => parentNode.appendChild(this.wrapper);

        
    }
}