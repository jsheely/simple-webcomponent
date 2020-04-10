import { LitElement, customElement, html, property } from "lit-element";

@customElement("my-element")
export default class MyElement extends LitElement {
  @property()
  title;
  handleClick = () => {
    this.title = "Something else";
    this.requestUpdate();
  };
  render() {
    return html`<div @click=${this.handleClick}>${this.title}</div>`;
  }
}
