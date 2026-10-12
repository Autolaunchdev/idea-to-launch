import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { agents, deploymentTasks, interviewSteps, kits, moduleNames, phases } from "@/lib/autolaunch/domain";

const ro = { readOnlyHint: true, idempotentHint: true, openWorldHint: false } as const;
const ok = (data: Record<string, unknown>) => ({ content: [{ type: "text" as const, text: JSON.stringify(data, null, 2) }] });

export const listAgentsTool = defineTool({
  name: "list_agents",
  title: "Listar agentes",
  description: "Lista los seis agentes especialistas de Autolaunch con su objetivo y nivel de autonomía.",
  inputSchema: {},
  annotations: ro,
  handler: () => ok({ agents: agents.map(({ name, specialty, objective, autonomy }) => ({ name, specialty, objective, autonomy })) }),
});

export const listKitsTool = defineTool({
  name: "list_kits",
  title: "Listar Kits",
  description: "Lista los Kits de demostración (ficticios, no validados en proyectos reales).",
  inputSchema: {},
  annotations: ro,
  handler: () => ok({ note: "Datos de demostración, no validados.", kits: kits.map(({ name, category, description, tools }) => ({ name, category, description, tools })) }),
});

export const getDeploymentChecklistTool = defineTool({
  name: "get_deployment_checklist",
  title: "Checklist de Deployment",
  description: "Devuelve las tareas del Deployment por fase con responsable, coste, horas, dependencia y criterio de aceptación.",
  inputSchema: {},
  annotations: ro,
  handler: () => ok({ phases, modules: moduleNames, tasks: deploymentTasks.map((t) => ({ ...t })) }),
});

export const getInterviewQuestionsTool = defineTool({
  name: "get_interview_questions",
  title: "Preguntas de la entrevista",
  description: "Devuelve las preguntas de los cinco pasos del onboarding para definir un negocio.",
  inputSchema: {},
  annotations: ro,
  handler: () => ok({ steps: interviewSteps.map((s) => ({ title: s.title, questions: s.fields.map(([key, label]) => ({ key: key ?? "", label: label ?? "" })) })) }),
});

export const calculateCostsTool = defineTool({
  name: "calculate_project_costs",
  title: "Calcular costes",
  description: "Calcula coste laboral (horas × tarifa), coste económico (caja + laboral) y margen (ingresos − costes).",
  inputSchema: {
    hours: z.number().min(0).describe("Horas invertidas."),
    rate: z.number().min(0).describe("Tarifa interna por hora en euros."),
    cash: z.number().min(0).describe("Pagos directos atribuibles en euros."),
    income: z.number().min(0).describe("Ingresos cobrados en euros."),
  },
  annotations: ro,
  handler: ({ hours, rate, cash, income }) => {
    const r = (n: number) => Math.round((n + Number.EPSILON) * 100) / 100;
    const labor = r(hours * rate);
    return ok({ labor, cash: r(cash), economic: r(cash + labor), margin: r(income - cash - labor) });
  },
});
