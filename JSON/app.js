document.getElementById('button1').addEventListener('click', loadCustomer); 

function loadCustomer(e){
    xhr = new XMLHttpRequest();

    xhr.open('GET', 'customer.json', true); 

    xhr.onload = function(){
        if(xhr.status === 200){
            // console.log(this.responseText);
            
            const customer = JSON.parse(this.responseText); 

            const output = `
            <ul> 
                <li>ID: ${customer.id}</li>
                <li>Name: ${customer.name}</li>
                <li>Company: ${customer.company}</li>
                <li>Phone: ${customer.phone}</li>
            </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }

    xhr.send();
}