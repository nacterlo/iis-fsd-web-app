import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "@/features/auth/components/protected-route";
import { MainLayout } from "../layouts/main-layout";
import AuthLayout from "../layouts/auth-layout";


export const routes = createBrowserRouter([
    {
        path: 'auth',
        Component: AuthLayout,
        children: [
            {
                path: 'login',
                lazy: () => import('@/pages/login-page'),
            }
        ]
    },
    {
        Component: ProtectedRoute,
        children: [
            {
                path: '/',
                Component: MainLayout,
                children: [
                    {
                        path: 'cattle-milk',
                        lazy: () => import('@/pages/iis/cattle-milk-page'),
                    },
                    {
                        path: 'cattle-meat',
                        lazy: () => import('@/pages/iis/cattle-meat-page'),
                    },

                    {
                        path: 'pig',
                        lazy: () => import('@/pages/iis/pig-page'),
                    },

                    {
                        path: 'sheep-rough-haired',
                        lazy: () => import('@/pages/iis/sheep-rough-haired-page'),
                    },
                    {
                        path: 'sheep-romanov',
                        lazy: () => import('@/pages/iis/sheep-romanov-page'),
                    },
                    {
                        path: 'sheep-smushkovy',
                        lazy: () => import('@/pages/iis/sheep-smushkovy-page'),
                    },
                    {
                        path: 'sheep-fine-fleeced',
                        lazy: () => import('@/pages/iis/sheep-fine-flleeced-page'),
                    },
                    {
                        path: 'sheep-meat-shorthair',
                        lazy: () => import('@/pages/iis/sheep-meat-shorthair-page'),
                    },

                    {
                        path: 'goat-dairy',
                        lazy: () => import('@/pages/iis/goat-dairy-page'),
                    },
                    {
                        path: 'goat-beef',
                        lazy: () => import('@/pages/iis/goat-beef-page'),
                    },
                    {
                        path: 'goat-wood',
                        lazy: () => import('@/pages/iis/goat-wood-page'),
                    },
                    {
                        path: 'goat-downy',
                        lazy: () => import('@/pages/iis/goat-downy-page'),
                    },

                    {
                        path: 'bees',
                        lazy: () => import('@/pages/iis/bees-page'),
                    },

                    {
                        path: 'camel',
                        lazy: () => import('@/pages/iis/camel-page'),
                    },

                    {
                        path: 'deer',
                        lazy: () => import('@/pages/iis/deer-page'),
                    },

                    {
                        path: 'fish',
                        lazy: () => import('@/pages/iis/fish-page'),
                    },

                    {
                        path: 'hatching-eggs',
                        lazy: () => import('@/pages/iis/hatching-eggs-page'),
                    },

                    {
                        path: 'horse',
                        lazy: () => import('@/pages/iis/horse-page'),
                    },

                    {
                        path: 'mink',
                        lazy: () => import('@/pages/iis/furry-page'),
                    },

                    {
                        path: 'sperm-production',
                        lazy: () => import('@/pages/iis/spermprod-page'),
                    },

                    {
                        path: 'organization',
                        lazy: () => import('@/pages/iis/organizations-page'),
                    },
                ]
            }
        ]
    }
])