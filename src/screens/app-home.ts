import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { SuperElement } from "../super-element";

@customElement("app-home")
export class AppHome extends SuperElement {
  @state()
  visible = false;

  render() {
    return html` <h1>Home</h1> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-home": AppHome;
  }
}
