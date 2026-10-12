import { createFileRoute } from '@tanstack/react-router';
import { Business } from '@/components/autolaunch/dashboard';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/mi-negocio')({head:()=>metadata('Mi negocio','Explora tu proyecto, completa la entrevista y descubre el caso piloto Ortoholistic.'),component:Business});
