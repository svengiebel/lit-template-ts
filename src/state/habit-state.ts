import { state } from "lit-shared-state";

@state()
export class ExampleState {
  myArray: number[] = [1, 2, 3];
}

export const exampleState = new ExampleState();
