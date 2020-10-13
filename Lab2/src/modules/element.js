export default class Element
{
    constructor() {
        this.textElement = document.createElement('label');
    

        
        //Creating delete button
        this.deleteBtn = document.createElement('button');
        this.deleteBtn.textContent = "X";
        

        //Wrapping elements 
        this.wrapper = document.createElement('div');
        this.wrapper.appendChild(this.textElement);
        this.wrapper.appendChild(this.deleteBtn);

        
        this.deleteBtn.onclick = () => this.wrapper.remove();
        this.render = parentNode => parentNode.appendChild(this.wrapper);

    }


    //render = parentNode => parentNode.appendChild(this.wrapper);
    

}