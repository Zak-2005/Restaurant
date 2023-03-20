export default function contactPage() {
    const content = document.querySelector("#content");
    const contact = document.createElement("div");

    const contactContent = document.createElement('div');
    contactContent.classList.add('contactContent');

    contact.classList.add('contactPage')
    const body = document.querySelector('body');
    body.style.backgroundImage = "url(../Pictures/woodBackground.jpg)"


    const header = document.createElement("div");
    header.textContent = "Contact Us";
    header.classList.add('heading');
    contact.appendChild(header);

    const subhead = document.createElement('div');
    subhead.classList.add('subhead');
    subhead.textContent = 'If you have any questions, concerns, or want to reserve a table, feel free to contact us at:';
    contactContent.appendChild(subhead);
  
    const email = document.createElement("div");
    email.textContent = 'Email: you@example.com'
    contactContent.appendChild(email);
    
    const phone = document.createElement("div");
    phone.textContent = 'Phone Number: 999-999-9999'
    contactContent.appendChild(phone);

    const address = document.createElement("div");
    address.textContent = 'Address: 123456 Main St Anytown, USA 12345'
    contactContent.appendChild(address);

    contact.appendChild(contactContent);
    content.appendChild(contact);
  }
  