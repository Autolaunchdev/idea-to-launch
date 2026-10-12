import { createFileRoute } from '@tanstack/react-router';
import { Constructor } from '@/components/autolaunch/build';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/constructor')({head:()=>metadata('Constructor de negocios','Visualiza los módulos, sus dependencias y el estado de construcción de tu negocio.'),component:Constructor});
