import { ICreateOptions } from "../../../../../typescript/interfaces/interfaces";

export = (options: ICreateOptions) => {
  return [
    `const { Event } = require("sheweny");

module.exports = class ReadyEvent extends Event {
  constructor(client) {
    super(client, "ready", {
      description: "Client is logged in",
      once: true,
    });
  }

  execute() {
    console.log(\`\${this.client.user.tag} is logged in\`)
  }
};
`,
    "ready.js",
  ];
};
