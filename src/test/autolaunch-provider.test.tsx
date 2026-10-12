import { act, render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import { DemoProvider, useDemo } from '@/components/autolaunch/store';

function Consumer() {
  const { project, ready } = useDemo();
  return <output aria-label="Active project">{ready ? project.name : 'Loading'}</output>;
}

describe('Demo provider context', () => {
  beforeEach(() => localStorage.clear());

  it('keeps the shared context available when the provider tree rerenders', async () => {
    const view = render(<DemoProvider><Consumer /></DemoProvider>);
    expect(await screen.findByText('Estudio Norte')).toBeInTheDocument();
    await act(async () => view.rerender(<DemoProvider><Consumer /></DemoProvider>));
    expect(screen.getByLabelText('Active project')).toHaveTextContent('Estudio Norte');
  });
});