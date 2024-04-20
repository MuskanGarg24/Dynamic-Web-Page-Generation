const nunjucks = require("nunjucks");
const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");

const routesData = yaml.load(
  fs.readFileSync("./src/data/yaml/routes.yaml", "utf8")
);

const outputDir = "template";
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

const pageTemplate = fs.readFileSync("page.tsx.njk", "utf8");

const importedComponents = new Set();

routesData.forEach((route) => {
  const { ymlPath, route: routePath, pageName, seo } = route;
  const components = yaml.load(fs.readFileSync(ymlPath, "utf8"));
  components.forEach((component) => {
    importedComponents.add(component.componentName);
  });
  const renderedTemplate = nunjucks.renderString(pageTemplate, {
    pageName,
    seo,
    components,
    importedComponents: Array.from(importedComponents),
  });
  const outputFile = path.join(outputDir, `${pageName}.tsx`);
  fs.writeFileSync(outputFile, renderedTemplate);
  console.log("Generated", outputFile);
});
