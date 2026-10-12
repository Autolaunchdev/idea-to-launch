import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/autolaunch/public';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/agentes-ia')({head:()=>metadata('Un equipo de IA para tu negocio','Conoce los especialistas de estrategia, marketing, ventas, operaciones, finanzas e integraciones.'),component:Page});
function Page(){return <PublicPage type="agents"/>;}
