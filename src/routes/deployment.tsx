import { createFileRoute } from '@tanstack/react-router';
import { Deployment } from '@/components/autolaunch/build';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/deployment')({head:()=>metadata('Deployment','Revisa la preparación, construcción, pruebas y aprobación de tu lanzamiento de demostración.'),component:Deployment});
