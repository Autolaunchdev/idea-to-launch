import { defineMcp } from "@lovable.dev/mcp-js";
import { calculateCostsTool, getDeploymentChecklistTool, getInterviewQuestionsTool, listAgentsTool, listKitsTool } from "./tools/catalog";

export default defineMcp({
  name: "idea-to-launch",
  title: "Idea To Launch",
  version: "0.1.0",
  instructions:
    "Información general de Autolaunch: agentes especialistas, Kits de demostración, checklist de Deployment, preguntas de la entrevista y una calculadora de costes. No accede a proyectos de usuarios.",
  tools: [listAgentsTool, listKitsTool, getDeploymentChecklistTool, getInterviewQuestionsTool, calculateCostsTool],
});
