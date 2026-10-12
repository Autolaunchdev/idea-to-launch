import { createFileRoute } from '@tanstack/react-router';
import { Control } from '@/components/autolaunch/operations';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/control')({head:()=>metadata('Centro de control','La visión futura de tu operación: flujos, alertas y aprobaciones humanas.'),component:Control});
