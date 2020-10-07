export default class Element
{
    constructor() {
        

        //Creating text element
        this.textElement = document.createElement('input');
        this.textElement.setAttribute('type', 'text');
        this.textElement.readOnly = true;
        
        //Creating delete button
        this.deleteBtn = document.createElement('button');
        this.deleteBtn.value = "X";
        this.deleteBtn.onclick = this.remove;

        //Wrapping elements 
        this.wrapper = document.createElement('div');
        this.wrapper.appendChild(this.textElement);
        this.wrapper.appendChild(this.deleteBtn);
    }


    render(parentNode) {
        parentNode.appendChild(this.wrapper);
    }

    remove() {
        this.wrapper.remove();
    }

    getValue() {
        return this.textElement.value;
    }
    

}