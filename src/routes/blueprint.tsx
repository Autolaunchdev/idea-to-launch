import { createFileRoute } from '@tanstack/react-router';
import { Blueprint } from '@/components/autolaunch/build';
import { blueprintTabs } from '@/lib/autolaunch/domain';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/blueprint')({validateSearch:(s:Record<string,unknown>):{tab?:string}=>({tab:typeof s['tab']==='string'&&blueprintTabs.includes(s['tab'])?s['tab']:'Resumen ejecutivo'}),head:()=>metadata('Blueprint del negocio','Edita tu plan estratégico y distingue información confirmada, hipótesis y recomendaciones.'),component:Page});
function Page(){const {tab}=Route.useSearch();return <Blueprint tab={tab??'Resumen ejecutivo'}/>;}
