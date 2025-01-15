class NoteItem extends HTMLElement {
  static get observedAttributes() {
    return ["title", "body", "date"];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
          note-item {
            display: block;
            background: #ffffff;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 1rem;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
  
          note-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          }
  
          note-item h3 {
            margin: 0 0 0.5rem;
            font-size: 1.2rem;
            color: #4a90e2;
          }
  
          note-item p {
            font-size: 0.95rem;
            color: #555;
            margin-bottom: 1rem;
          }
  
          note-item small {
            font-size: 0.8rem;
            color: #999;
          }
        </style>
        <h3>${this.title}</h3>
        <p>${this.body}</p>
        <small>${this.date}</small>
      `;
  }
}

customElements.define("note-item", NoteItem);
