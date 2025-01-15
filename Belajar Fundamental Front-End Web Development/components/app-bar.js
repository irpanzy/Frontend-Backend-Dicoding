class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <style>
          app-bar {
            display: block;
            background-color: #4a90e2;
            color: #fff;
            padding: 1rem;
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
        </style>
        <div>${this.innerText}</div>
      `;
  }
}

customElements.define("app-bar", AppBar);
