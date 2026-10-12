import { createContext } from 'react';
import type { DemoState, Project } from '@/lib/autolaunch/domain';

export type DemoContextValue = {
  state: DemoState;
  setState: (fn: (state: DemoState) => DemoState) => void;
  project: Project;
  updateProject: (patch: Partial<Project>) => void;
  activity: (text: string, simulated?: boolean) => void;
  ready: boolean;
};

// Keep context identity outside the component refresh boundary. All consumers
// and the provider must reference the same instance across development updates.
export const StoreContext = createContext<DemoContextValue | null>(null);