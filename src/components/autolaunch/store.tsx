import { useContext, useEffect, useState, type ReactNode } from 'react';
import { initialState, type DemoState, type Project } from '@/lib/autolaunch/domain';
import { toast } from 'sonner';
import { StoreContext } from './store-context';
export function DemoProvider({children}:{children:ReactNode}) {
 const [state,setState]=useState<DemoState>(initialState);const [ready,setReady]=useState(false);
 useEffect(()=>{try {const saved=localStorage.getItem('autolaunch-demo-v1');if(saved){const parsed=JSON.parse(saved);if(Array.isArray(parsed.projects)&&parsed.projects.length&&Array.isArray(parsed.records)&&parsed.activities&&parsed.agentRuns)setState(parsed);}}catch{toast.error('No se pudieron recuperar los cambios locales.');}setReady(true);},[]);
 useEffect(()=>{if(ready)try{localStorage.setItem('autolaunch-demo-v1',JSON.stringify(state));}catch{toast.error('El almacenamiento local está lleno. Los cambios no se han guardado.');}},[state,ready]);
 const project=state.projects.find(p=>p.id===state.active)??state.projects[0];
 if(!project)return null;
 const updateProject=(patch:Partial<Project>)=>setState(s=>({...s,projects:s.projects.map(p=>p.id===project.id?{...p,...patch}:p)}));
 const activity=(text:string,simulated=false)=>setState(s=>({...s,activities:[{text,simulated,time:'Ahora',project:project.id},...s.activities].slice(0,30)}));
 return <StoreContext.Provider value={{state,setState,project,updateProject,activity,ready}}>{children}</StoreContext.Provider>;
}
export function useDemo(){const context=useContext(StoreContext);if(!context)throw new Error('DemoProvider missing');return context;}
