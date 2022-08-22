import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { ref } from "lit/directives/ref.js";

import initRouter from "./router";
import { SuperElement } from "./super-element";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
@customElement("app-wrapper")
export class AppWrapper extends SuperElement {
  static style = [SuperElement.styles];

  render() {
    const callback = (element: any) => {
      initRouter(element);
    };
    return html`
      <div class="">
        <main ${ref(callback)}></main>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-wrapper": AppWrapper;
  }
}
