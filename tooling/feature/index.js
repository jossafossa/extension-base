const BASE_PATH = "./src/features";

export function featureGenerator(plop) {
  plop.setGenerator("feature", {
    description: "Generate a React feature",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "feature name:",
      },
    ],
    actions: [
      {
        type: "add",
        path: `${BASE_PATH}/{{ pascalCase name }}/{{ pascalCase name }}.tsx`,
        templateFile: "./tooling/feature/feature.tsx.hbs",
      },
      {
        type: "add",
        path: `${BASE_PATH}/{{ pascalCase name }}/index.ts`,
        templateFile: "./tooling/feature/index.ts.hbs",
      },
      {
        type: "append",
        path: `${BASE_PATH}/index.ts`,
        pattern: "/* PLOP_INJECT_EXPORT */",
        template: 'export * from "./{{ pascalCase name }}";',
      },
    ],
  });
}
