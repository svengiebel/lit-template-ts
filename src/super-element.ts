import { LitElement, css, unsafeCSS, CSSResultGroup, html } from "lit";
import twStyles from "./index.css";

export class SuperElement extends LitElement {
  static styles = css`
    ${unsafeCSS(twStyles)}
  ` as CSSResultGroup;
  protected render() {
    return html``;
  }
}
