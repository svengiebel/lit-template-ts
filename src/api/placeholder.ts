import { StatusRenderer, Task } from "@lit-labs/task";
import { ReactiveControllerHost } from "lit";

export default class Placeholder {
  host!: ReactiveControllerHost;
  private task!: Task;

  constructor(host: ReactiveControllerHost) {
    this.host = host;
    this.task = new Task(
      host,
      async () => {
        try {
          const req = await fetch(`https://jsonplaceholder.typicode.com/posts`);
          const reqJson = await req.json();
          return reqJson;
        } catch (err) {
          throw Error("error");
        }
      },
      () => []
    );
  }

  render(renderFunctions: StatusRenderer<any>) {
    return this.task.render(renderFunctions);
  }
}
