const BASE_PATH = "./src/api/utils";

export function apiUtilGenerator(plop) {
  plop.setGenerator("apiUtil", {
    description: "Generate a api util",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "apiUtil name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: `${BASE_PATH}/{{ camelCase name }}/{{ camelCase name }}.ts`,
        templateFile: "./tooling/apiUtil/apiUtil.ts.hbs",
      },
      {
        type: "add",
        path: `${BASE_PATH}/{{ camelCase name }}/index.ts`,
        templateFile: "./tooling/apiUtil/index.ts.hbs",
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
