import { createFileRoute } from '@tanstack/react-router';
import { Onboarding } from '@/components/autolaunch/onboarding';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/onboarding')({validateSearch:(search:Record<string,unknown>)=>({interview:typeof search.interview==='string'?search.interview:undefined}),head:()=>metadata('Construir mi negocio','Describe tu idea, cliente, modelo de ingresos, recursos y objetivos para preparar tu Blueprint.'),component:Page});
function Page(){const {interview}=Route.useSearch();return <Onboarding key={interview??'new'} interviewId={interview}/>;}
