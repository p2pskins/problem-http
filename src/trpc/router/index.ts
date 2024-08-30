import { inferReactQueryProcedureOptions } from '@trpc/react-query';
import { inferRouterInputs, inferRouterOutputs } from '@trpc/server';
import {
  authenticatedProcedure,
  publicProcedure,
  router,
  triggerEvent,
} from '../methods';
import { getXYZ } from '~/lib/rpc';

export const appRouter = router({
  health: publicProcedure.query(() => getXYZ()),

  message: triggerEvent({
    procedure: publicProcedure,
    channel: 'websockets',
    event: 'message',
  }),

  profile: authenticatedProcedure.query((opts) => ({
    /**
     * @enable LuciaAuth
     */
    // githubId: opts.ctx.user?.githubId,
  })),
});

export type AppRouter = typeof appRouter;
export type ReactQueryOptions = inferReactQueryProcedureOptions<AppRouter>;
export type RouterInputs = inferRouterInputs<AppRouter>;
export type RouterOutputs = inferRouterOutputs<AppRouter>;
