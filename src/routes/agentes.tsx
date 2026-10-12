import { createFileRoute } from '@tanstack/react-router';
import { Agents } from '@/components/autolaunch/build';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/agentes')({head:()=>metadata('Centro de agentes','Gestiona seis especialistas y simula sus tareas con revisión humana.'),component:Agents});
