export default class ElementCreator {
    constructor(addBtnCallback) {
        
        this.textElement = document.createElement('input');
        this.textElement.type = 'text';

        this.addBtn = document.createElement('button');
        this.addBtn.textContent = 'add';
        this.addBtn.onclick = () => addBtnCallback(this.textElement.value);
        
        this.wrapper = document.createElement('div');
        
        this.wrapper.appendChild(this.textElement);
        this.wrapper.appendChild(this.addBtn);
        this.wrapper.className = 'adder_wrapper'


        this.render = parentNode => parentNode.appendChild(this.wrapper);
    }
}