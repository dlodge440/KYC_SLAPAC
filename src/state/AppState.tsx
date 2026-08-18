import { createContext, useContext, useMemo, useState, type ReactNode } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import {
  addChild as calcAddChild,
  createRoot,
  removeNode as calcRemoveNode,
  updateNode as calcUpdateNode,
  type CalcNode,
} from '../lib/calculator';
import { initialWizardAnswers, wizardSetField, type WizardAnswers } from '../lib/wizard';

export const ROLE_IDS = ['broker', 'backoffice', 'finance', 'compliance', 'cso'] as const;
export type RoleFilter = 'all' | (typeof ROLE_IDS)[number];

export interface RegistryFilters {
  registryLevel?: string;
}

interface AppStateValue {
  role: RoleFilter;
  setRole: (role: RoleFilter) => void;
  filters: RegistryFilters;
  setFilters: (filters: RegistryFilters) => void;

  wizardStep: number;
  wizardAnswers: WizardAnswers;
  wizardSet: (field: keyof WizardAnswers, value: unknown) => void;
  wizardNext: () => void;
  wizardBack: () => void;
  wizardRestart: () => void;

  calcRoot: CalcNode;
  calcAdd: (parentId: string) => void;
  calcRemove: (id: string) => void;
  calcUpdate: (id: string, patch: Partial<CalcNode>) => void;
  calcReset: () => void;

  toolkitLang: 'en' | 'zh';
  setToolkitLang: (lang: 'en' | 'zh') => void;
}

const AppStateContext = createContext<AppStateValue | null>(null);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useLocalStorage<RoleFilter>('kyc_role', 'all');
  const [filters, setFilters] = useLocalStorage<RegistryFilters>('kyc_filters', {});

  const [wizardStep, setWizardStep] = useState(1);
  const [wizardAnswers, setWizardAnswers] = useState<WizardAnswers>(() => initialWizardAnswers());

  const [calcRoot, setCalcRoot] = useState<CalcNode>(() => createRoot());

  const [toolkitLang, setToolkitLang] = useState<'en' | 'zh'>('en');

  const value = useMemo<AppStateValue>(
    () => ({
      role,
      setRole,
      filters,
      setFilters,

      wizardStep,
      wizardAnswers,
      wizardSet: (field, fieldValue) => {
        setWizardAnswers((prev) => wizardSetField(prev, field, fieldValue as never));
      },
      wizardNext: () => setWizardStep((s) => s + 1),
      wizardBack: () => setWizardStep((s) => Math.max(1, s - 1)),
      wizardRestart: () => {
        setWizardStep(1);
        setWizardAnswers(initialWizardAnswers());
      },

      calcRoot,
      calcAdd: (parentId) => setCalcRoot((r) => calcAddChild(r, parentId)),
      calcRemove: (id) => setCalcRoot((r) => calcRemoveNode(r, id)),
      calcUpdate: (id, patch) => setCalcRoot((r) => calcUpdateNode(r, id, patch)),
      calcReset: () => setCalcRoot(createRoot()),

      toolkitLang,
      setToolkitLang,
    }),
    [role, setRole, filters, setFilters, wizardStep, wizardAnswers, calcRoot, toolkitLang],
  );

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
}

export function useAppState(): AppStateValue {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within an AppStateProvider');
  return ctx;
}
