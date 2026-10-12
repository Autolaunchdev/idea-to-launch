import { describe,it,expect } from 'vitest';
import { calculateCosts, initialState, orto, studio, canCompleteDeployment, canRunCheck, makeProject, deploymentTasks } from '@/lib/autolaunch/domain';
describe('Autolaunch economics',()=>{
 it('imputes labor as hours multiplied by internal hourly rate',()=>{expect(calculateCosts(initialState.records,studio).labor).toBe(11.5*35);});
 it('cash includes only direct payments attributable to the active project',()=>{expect(calculateCosts(initialState.records,studio).cash).toBe(45);expect(calculateCosts(initialState.records,orto).cash).toBe(0);});
 it('delivery economic cost is cash plus imputed labor',()=>{expect(calculateCosts(initialState.records,studio).economic).toBe(447.5);});
 it('contribution margin is project income minus variable delivery costs',()=>{expect(calculateCosts(initialState.records,studio).margin).toBe(302.5);expect(calculateCosts(initialState.records,{...studio,income:0}).margin).toBe(-447.5);});
 it('shared costs do not enter delivery calculations',()=>{const changed={...initialState,sharedCosts:99999};expect(calculateCosts(changed.records,studio).economic).toBe(447.5);});
 it('maintenance and post-delivery support remain separate',()=>{expect(calculateCosts(initialState.records,{...studio,maintenance:100,supportHours:20}).economic).toBe(447.5);});
});
describe('Human review and pilot',()=>{
 it('Ortoholistic starts in discovery without invented business answers',()=>{expect(orto.status).toBe('Descubrimiento');expect(orto.answers).toEqual({});expect(orto.blueprint['Oferta comercial']).toBe('Pendiente de entrevista con la fundadora.');});
 it('deployment cannot complete with six of seven checks',()=>{expect(canCompleteDeployment([true,true,true,true,true,true,false])).toBe(false);expect(canCompleteDeployment([])).toBe(false);});
 it('deployment completes only with all seven acceptance checks passed',()=>{expect(deploymentTasks).toHaveLength(7);expect(canCompleteDeployment([true,true,true,true,true,true,true])).toBe(true);});
 it('human review requires preceding technical checks',()=>{expect(canRunCheck([true,true,false,true,true,false,false],5)).toBe(false);expect(canRunCheck([true,true,true,true,true,false,false],5)).toBe(true);});
 it('new project blueprint uses supplied founder responses',()=>{const p=makeProject('Prueba',{idea:'Servicio confirmado',client:'Cliente entrevistado'},'test');expect(p.blueprint['Resumen ejecutivo']).toBe('Servicio confirmado');expect(p.blueprint['Cliente ideal']).toBe('Cliente entrevistado');expect(p.income).toBe(0);});
});
