import { createFileRoute } from '@tanstack/react-router';
import { Analytics } from '@/components/autolaunch/operations';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/analitica')({validateSearch:(s:Record<string,unknown>)=>({q:typeof s.q==='string'?s.q:'',phase:typeof s.phase==='string'?s.phase:''}),head:()=>metadata('Analítica y costes','Registra horas y pagos directos. Calcula caja, trabajo imputado, coste económico y margen sin doble contabilización.'),component:Page});
function Page(){const {q,phase}=Route.useSearch();return <Analytics query={q} phase={phase}/>;}
