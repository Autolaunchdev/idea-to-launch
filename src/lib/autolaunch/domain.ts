export const phases = ['Idea definida', 'Modelo de negocio', 'Validación', 'Construcción', 'Deployment', 'Operación'];
export const moduleNames = ['Estrategia y modelo de negocio', 'Marca y web', 'Marketing', 'Captación de clientes', 'CRM y ventas', 'Entrega del servicio', 'Operaciones', 'Finanzas', 'Administración'];
export const states = ['Pendiente', 'En planificación', 'En construcción', 'Necesita aprobación', 'Probándose', 'Operativo', 'Error'];
export const blueprintTabs = ['Resumen ejecutivo', 'Cliente ideal', 'Problema', 'Propuesta de valor', 'Oferta comercial', 'Modelo de ingresos', 'Competencia', 'Estrategia de captación', 'Plan de lanzamiento', 'Presupuesto', 'Riesgos y supuestos'];
export const interviewSteps = [
 { title: 'Tu idea', subtitle: 'Todo gran negocio empieza con una buena pregunta.', fields: [['name','¿Cómo se llama tu proyecto?'],['idea','Describe tu idea de negocio.'],['product','¿Qué producto o servicio quieres ofrecer?'],['problem','¿Qué problema resuelve?'],['evidence','¿Qué te hace pensar que alguien lo compraría?']] },
 { title: 'Tu cliente', subtitle: 'No construyes para todo el mundo. ¿Para quién construyes?', fields: [['client','¿Quién es tu cliente ideal?'],['country','¿En qué país quieres operar?'],['clientProblem','¿Qué problema tiene?'],['alternative','¿Cómo lo resuelve actualmente?'],['interviews','¿Has hablado con posibles clientes?']] },
 { title: 'Tu modelo', subtitle: 'Hagamos que tu idea sea también un negocio.', fields: [['revenue','¿Cómo vas a generar ingresos?'],['price','¿Cuál es tu precio estimado?'],['category','¿Servicios, productos digitales, software o productos físicos?'],['resources','¿Qué recursos tienes actualmente?']] },
 { title: 'Tus recursos', subtitle: 'Un plan realista empieza por lo que tienes hoy.', fields: [['budget','¿Cuál es tu presupuesto inicial?'],['weeklyHours','¿Cuántas horas semanales puedes dedicar?'],['technical','¿Qué conocimientos técnicos tienes?'],['tools','¿Qué herramientas utilizas?'],['team','¿Trabajas solo o con un equipo?']] },
 { title: 'Tu objetivo', subtitle: 'Un primer paso pequeño. Una dirección clara.', fields: [['goal','¿Qué quieres conseguir en los próximos 30 días?'],['essential','¿Qué es imprescindible para lanzar?'],['later','¿Qué no necesitas todavía?']] },
];
export type Project = { id: string; name: string; status: string; answers: Record<string,string>; blueprint: Record<string,string>; modules: string[]; checks: boolean[]; income: number; rate: number; price: number; maintenance: number; supportHours: number; approvals: string[] };
export type WorkRecord = { id: string; project: string; date: string; phase: string; task: string; hours: number; tool: string; cash: number; result: string; reusable: boolean };
export type DemoState = { projects: Project[]; active: string; records: WorkRecord[]; draft: Record<string,string>; draftStep: number; activities: { text: string; simulated: boolean; time: string; project: string }[]; agentRuns: Record<string,string>; sharedCosts: number };
export const agents = [
 { name: 'Business Architect', specialty: 'Estrategia', objective: 'Estructurar tu modelo de negocio y su plan de ejecución.', task: 'Preparar el mapa de hipótesis', icon: 'strategy', autonomy: 'Supervisada' },
 { name: 'Marketing Agent', specialty: 'Marketing', objective: 'Dar forma a tu propuesta de valor, marca y captación.', task: 'Definir una propuesta de valor', icon: 'marketing', autonomy: 'Con aprobación' },
 { name: 'Sales Agent', specialty: 'Ventas', objective: 'Convertir oportunidades en un proceso comercial claro.', task: 'Preparar un seguimiento comercial', icon: 'sales', autonomy: 'Con aprobación' },
 { name: 'Operations Agent', specialty: 'Operaciones', objective: 'Diseñar procesos internos eficientes y repetibles.', task: 'Documentar el proceso de entrega', icon: 'operations', autonomy: 'Supervisada' },
 { name: 'Finance Agent', specialty: 'Finanzas', objective: 'Estimar costes y mantener tu presupuesto bajo control.', task: 'Revisar el presupuesto inicial', icon: 'finance', autonomy: 'Solo recomendaciones' },
 { name: 'Integration Agent', specialty: 'Integraciones', objective: 'Planificar conexiones y comprobar los flujos de trabajo.', task: 'Comprobar el recorrido de un contacto', icon: 'integration', autonomy: 'Con aprobación' },
];
export const deploymentTasks = [
 {phase:'Preparación',name:'Definir alcance y criterios de éxito',owner:'Business Architect',cost:0,hours:2,dependency:'Entrevista completada',criterion:'Alcance y objetivo revisados por la fundadora'},
 {phase:'Construcción',name:'Crear la página web',owner:'Marketing Agent',cost:25,hours:6,dependency:'Oferta comercial definida',criterion:'Contenido revisado y web visible en móvil y escritorio'},
 {phase:'Construcción',name:'Configurar el formulario de contacto',owner:'Integration Agent',cost:0,hours:2,dependency:'Página web preparada',criterion:'Formulario valida los campos y registra el contacto de prueba'},
 {phase:'Integraciones',name:'Conectar el CRM y seguimiento comercial',owner:'Sales Agent',cost:20,hours:3,dependency:'Formulario configurado',criterion:'Contacto recibido en CRM y seguimiento asignado'},
 {phase:'Pruebas',name:'Comprobar el recorrido de un contacto',owner:'Integration Agent',cost:0,hours:2,dependency:'CRM conectado',criterion:'Prueba de extremo a extremo superada'},
 {phase:'Revisión humana',name:'Obtener la aprobación de la fundadora',owner:'Responsable humano',cost:0,hours:1,dependency:'Todas las pruebas técnicas superadas',criterion:'Aprobación explícita registrada'},
 {phase:'Entrega',name:'Documentar el funcionamiento',owner:'Operations Agent',cost:0,hours:2,dependency:'Aprobación humana obtenida',criterion:'Guía de uso y mantenimiento entregada'},
];
export const kits = [
 {name:'Captación de clientes',category:'Marketing y ventas',description:'Del primer contacto a una oportunidad organizada.',tools:'Web · Formularios · CRM',resources:8,icon:'sales'},
 {name:'Tu primera web',category:'Marca y presencia',description:'Una presencia digital centrada en tu oferta.',tools:'Web · Analítica · Dominio',resources:6,icon:'marketing'},
 {name:'Operaciones sin fricción',category:'Procesos y automatización',description:'Un proceso de entrega claro, paso a paso.',tools:'Notion · Calendario · Email',resources:10,icon:'operations'},
 {name:'Control financiero',category:'Finanzas',description:'Presupuesto, horas y costes en una misma base.',tools:'Hojas de cálculo · Informes',resources:5,icon:'finance'},
];
export function makeProject(name: string, answers: Record<string,string>, id = crypto.randomUUID()): Project {
 const value = (key: string) => answers[key]?.trim() || 'Pendiente de entrevista';
 return {id,name,status:'Modelo de negocio',answers,blueprint:{'Resumen ejecutivo':value('idea'),'Cliente ideal':value('client'),'Problema':value('problem'),'Propuesta de valor':value('product'),'Oferta comercial':value('essential'),'Modelo de ingresos':value('revenue'),'Competencia':value('alternative'),'Estrategia de captación':'Hipótesis: entrevistar a cinco posibles clientes antes de elegir un canal.','Plan de lanzamiento':value('goal'),'Presupuesto':value('budget'),'Riesgos y supuestos':value('evidence')},modules:moduleNames.map((_,i)=> i===0?'En planificación':'Pendiente'),checks:deploymentTasks.map(()=>false),income:0,rate:35,price:0,maintenance:0,supportHours:0,approvals:['Campaña de lanzamiento','Presupuesto del proyecto','Nueva suscripción de CRM','Modificación de la web']};
}
export const orto: Project = {...makeProject('Ortoholistic',{},'ortoholistic'),status:'Descubrimiento',blueprint:Object.fromEntries(blueprintTabs.map(t=>[t,'Pendiente de entrevista con la fundadora.']))};
export const studio: Project = {...makeProject('Estudio Norte',{idea:'Un estudio de diseño de marca para pequeños negocios.',product:'Servicios de identidad visual y diseño web.',client:'Emprendedores y pequeños negocios en España.',problem:'Una marca poco coherente y una presencia digital fragmentada.',revenue:'Paquetes de servicios con un precio cerrado.',budget:'1.500 €',goal:'Validar una oferta y preparar una primera web.',essential:'Una oferta, una web y un formulario de contacto.',evidence:'Hipótesis pendiente de entrevistas.'},'estudio-norte'),status:'En construcción',modules:['Operativo','En construcción','En planificación','Pendiente','Pendiente','En planificación','Pendiente','En planificación','Pendiente'],price:1500,income:750};
export const initialState: DemoState = {projects:[studio,orto],active:'estudio-norte',draft:{},draftStep:0,records:[
 {id:'r1',project:'estudio-norte',date:'2026-10-10',phase:'Preparación',task:'Definir el modelo de negocio',hours:3,tool:'Notion',cash:0,result:'Modelo inicial preparado',reusable:true},
 {id:'r2',project:'estudio-norte',date:'2026-10-11',phase:'Construcción',task:'Diseñar la identidad y la web',hours:6,tool:'Figma',cash:25,result:'Primera propuesta de diseño',reusable:true},
 {id:'r3',project:'estudio-norte',date:'2026-10-12',phase:'Integraciones',task:'Preparar el flujo de captación',hours:2.5,tool:'CRM',cash:20,result:'Flujo pendiente de revisión',reusable:false},
],activities:[{text:'Blueprint actualizado',simulated:true,time:'Hace 15 min',project:'estudio-norte'},{text:'Identidad visual en construcción',simulated:true,time:'Hace 1 hora',project:'estudio-norte'},{text:'Flujo de captación preparado',simulated:true,time:'Hace 2 horas',project:'estudio-norte'}],agentRuns:{},sharedCosts:59};
export function calculateCosts(records: WorkRecord[], project: Project) {
 const rows=records.filter(r=>r.project===project.id);
 const hours=rows.reduce((n,r)=>n+r.hours,0);
 const cash=rows.reduce((n,r)=>n+r.cash,0);
 const labor=hours*project.rate;
 return {hours,cash,labor,economic:cash+labor,margin:project.income-cash-labor,reusable:rows.filter(r=>r.reusable).length};
}
export function canCompleteDeployment(checks: boolean[]) {return checks.length === deploymentTasks.length && checks.every(Boolean);}
export function canRunCheck(checks: boolean[], index: number) {return index===0 || checks.slice(0,index).every(Boolean);}
export const euro=(n:number)=>new Intl.NumberFormat('es-ES',{style:'currency',currency:'EUR',maximumFractionDigits:2}).format(n);
export function downloadFile(filename: string, content: string, type='text/plain') {const url=URL.createObjectURL(new Blob([content],{type}));const a=document.createElement('a');a.href=url;a.download=filename;a.click();URL.revokeObjectURL(url);}
