export default function contactPage() {
    const content = document.querySelector("#content");
    const contact = document.createElement("div");
  
    const header = document.createElement("div");
    header.textContent = "Contact Us";
    contact.appendChild(header);
  
    const email = document.createElement("div");
    email.textContent = 'you@example.com'
    contact.appendChild(email);
    
    const phone = document.createElement("div");
    phone.textContent = '999-999-9999'
    contact.appendChild(phone);

    content.appendChild(contact);
  }
  