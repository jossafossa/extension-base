const BASE_PATH = "./src/api/hooks";

export function apiHookGenerator(plop) {
  plop.setGenerator("apiHook", {
    description: "Generate a api hook",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "apiHook name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: `${BASE_PATH}/{{ camelCase name }}/{{ camelCase name }}.ts`,
        templateFile: "./tooling/apiHook/apiHook.ts.hbs",
      },
      {
        type: "add",
        path: `${BASE_PATH}/{{ camelCase name }}/index.ts`,
        templateFile: "./tooling/apiHook/index.ts.hbs",
      },
      {
        type: "append",
        path: `${BASE_PATH}/index.ts`,
        pattern: "/* PLOP_INJECT_EXPORT */",
        template: 'export * from "./{{ camelCase name }}";',
      },
    ],
  });
}
