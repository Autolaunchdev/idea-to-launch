import { createFileRoute } from '@tanstack/react-router';
import { Landing } from '@/components/autolaunch/public';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/')({head:()=>metadata('Tu idea merece convertirse en un negocio real','Autolaunch transforma ideas en planes de negocio, sistemas conectados y lanzamientos bajo supervisión humana. Explora el prototipo.'),component:Landing});
