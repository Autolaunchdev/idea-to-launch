import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/autolaunch/public';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/como-funciona')({head:()=>metadata('Cómo funciona','De tu idea al lanzamiento: describe, diseña, construye y mejora tu negocio.'),component:Page});
function Page(){return <PublicPage type="how"/>;}
