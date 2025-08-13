const BASE_PATH = "./tooling";

export function plopGenerator(plop) {
  plop.setGenerator("plop", {
    description: "Generate a plop",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "plop name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: `${BASE_PATH}/{{camelCase name}}/index.js`,
        templateFile: "./tooling/plop/index.js.hbs",
      },
      {
        type: "add",
        path: `${BASE_PATH}/{{camelCase name}}/{{camelCase name}}.ts.hbs`,
        templateFile: "./tooling/plop/plop.ts.hbs",
      },
      {
        type: "add",
        path: `${BASE_PATH}/{{camelCase name}}/index.ts.hbs`,
        templateFile: "./tooling/plop/plopIndex.ts.hbs",
      },
      {
        type: "append",
        path: `${BASE_PATH}/index.js`,
        pattern: "/* PLOP_INJECT_EXPORT */",
        template:
          'export { {{camelCase name}}Generator } from "./{{camelCase name}}/index.js";',
      },
    ],
  });
}
