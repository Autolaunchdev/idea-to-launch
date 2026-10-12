import { createFileRoute } from '@tanstack/react-router';
import { Kits } from '@/components/autolaunch/build';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/kits')({validateSearch:(s:Record<string,unknown>)=>({q:typeof s.q==='string'?s.q:''}),head:()=>metadata('Biblioteca de Kits','Explora paquetes de plantillas, flujos, documentación e instrucciones de demostración.'),component:Page});
function Page(){const {q}=Route.useSearch();return <Kits query={q}/>;}
