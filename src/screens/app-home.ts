import { html } from "lit";
import { customElement, state } from "lit/decorators.js";
import { storeController } from "../state/my-store";
import { SuperElement } from "../super-element";

@customElement("app-home")
export class AppHome extends SuperElement {
  static style = [SuperElement.styles];

  private store = storeController.useState(this, (state) => state.bears);

  @state()
  visible = false;

  render() {
    return html`
      <div class="m-auto max-w-3xl">
        <div
          class="preview w-full border-base-300 bg-base-200 rounded-b-box rounded-tr-box flex min-h-[6rem] min-w-[18rem] max-w-4xl flex-wrap items-center justify-center gap-2 overflow-x-hidden border bg-cover bg-top p-4 flex-col"
        >
          <div class="card w-96 glass">
            <figure class="p-8 bg-white">
              <img src="https://lit.dev/images/logo.svg" alt="lit dev" />
            </figure>
            <div class="card-body">
              <h2 class="card-title">Lit Template</h2>
              <div class="justify-end card-actions">
                <a
                  href="//github.com/svengiebel/lit-template-ts"
                  class="btn btn-primary"
                  >GitHub</a
                >
              </div>
            </div>
          </div>

          <div class="card bg-slate-600 mt-4">
            <figure class="p-8 bg-white">
              <h2 class="text-3xl font-bold text-blue-600">
                ${this.store.state.bears}
              </h2>
            </figure>
            <div class="card-body">
              <button
                @click=${this.store.state.addBears}
                class="btn btn-primary"
              >
                Add Bears
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "app-home": AppHome;
  }
}
