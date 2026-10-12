import { createFileRoute } from '@tanstack/react-router';
import { PublicPage } from '@/components/autolaunch/public';
import { metadata } from '@/lib/autolaunch/metadata';
export const Route=createFileRoute('/producto')({head:()=>metadata('Blueprint, Kit y Deployment','Descubre los tres niveles del producto Autolaunch, desde el plan hasta la operación.'),component:Page});
function Page(){return <PublicPage type="product"/>;}
