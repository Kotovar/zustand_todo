import { createFileRoute } from '@tanstack/react-router';

import { MyDay } from '../../pages/Myday';

export const Route = createFileRoute('/_authenticated/myday')({
  component: MyDay,
});
