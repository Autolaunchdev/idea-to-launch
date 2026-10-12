import { createFileRoute } from '@tanstack/react-router';
import { Settings } from '@/components/autolaunch/operations';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/ajustes')({head:()=>metadata('Ajustes del proyecto','Gestiona el proyecto, los datos de demostración y sus preferencias locales.'),component:Settings});
