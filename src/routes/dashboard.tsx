import { createFileRoute } from '@tanstack/react-router';
import { Dashboard } from '@/components/autolaunch/dashboard';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/dashboard')({head:()=>metadata('Dashboard','Tu espacio para construir un negocio con un plan claro y un equipo de agentes simulados.'),component:Dashboard});
