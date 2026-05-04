import { useEffect } from 'react';
import { menuOpenSettingsChannel } from '@shared/events/appEvents';
import { events } from '@renderer/lib/ipc';
import { useNavigate } from '@renderer/lib/layout/navigation-provider';

export function AppMenuEvents({ onOpenSettings }: { onOpenSettings?: () => void }) {
  const { navigate } = useNavigate();

  useEffect(() => {
    return events.on(menuOpenSettingsChannel, () => {
      onOpenSettings?.();
      navigate('settings');
    });
  }, [navigate, onOpenSettings]);

  return null;
}
