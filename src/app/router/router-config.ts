import LoginPage from "@/pages/login-page";
import { createBrowserRouter } from "react-router";
import { ProtectedRoute } from "@/features/auth/components/protected-route";
import { MainLayout } from "../layouts/main-layout";
import CattleMilk from "@/pages/iis/cattle-milk-page";
import AuthLayout from "../layouts/auth-layout";
import { CattleMeat } from "@/pages/iis/cattle-meat-page";
import { PigPage } from "@/pages/iis/pig-page";
import { BeesPage } from "@/pages/iis/bees-page";
import { CamelPage } from "@/pages/iis/camel-page";
import { DeerPage } from "@/pages/iis/deer-page";
import { FishPage } from "@/pages/iis/fish-page";
import { HatchingEggsPage } from "@/pages/iis/hatching-eggs-page";
import { HorsePage } from "@/pages/iis/horse-page";
import { SpermProdPage } from "@/pages/iis/spermprod-page";
import { OrganizationsPage } from "@/pages/iis/organizations-page";
import { GoatDairyPage } from "@/pages/iis/goat-dairy-page";
import { GoatWoodPage } from "@/pages/iis/goat-wood-page";
import { GoatBeefPage } from "@/pages/iis/goat-beef-page";
import { GoatDownyPage } from "@/pages/iis/goat-downy-page";
import { SheepRoughHairedPage } from "@/pages/iis/sheep-rough-haired-page";
import { SheepRomanovPage } from "@/pages/iis/sheep-romanov-page";
import { SheepSmushkovyPage } from "@/pages/iis/sheep-smushkovy-page";
import { SheepFineFleecedPage } from "@/pages/iis/sheep-fine-flleeced-page";
import { SheepMeatShorthairPage } from "@/pages/iis/sheep-meat-shorthair-page";
import { FurryPage } from "@/pages/iis/furry-page";


export const routes = createBrowserRouter([
    {
        path: 'auth',
        Component: AuthLayout,
        children: [
            { path: 'login', Component: LoginPage }
        ]
    },
    {
        Component: ProtectedRoute,
        children: [
            {
                path: '/',
                Component: MainLayout,
                children: [
                    { path: 'cattle-milk', Component: CattleMilk },
                    { path: 'cattle-meat', Component: CattleMeat },

                    { path: 'pig', Component: PigPage },

                    { path: 'sheep-rough-haired', Component: SheepRoughHairedPage },
                    { path: 'sheep-romanov', Component: SheepRomanovPage },
                    { path: 'sheep-smushkovy', Component: SheepSmushkovyPage },
                    { path: 'sheep-fine-fleeced', Component: SheepFineFleecedPage },
                    { path: 'sheep-meat-shorthair', Component: SheepMeatShorthairPage },

                    { path: 'goat-dairy', Component: GoatDairyPage },
                    { path: 'goat-beef', Component: GoatBeefPage },
                    { path: 'goat-wood', Component: GoatWoodPage },
                    { path: 'goat-downy', Component: GoatDownyPage },

                    { path: 'bees', Component: BeesPage },

                    { path: 'camel', Component: CamelPage },

                    { path: 'deer', Component: DeerPage },

                    { path: 'fish', Component: FishPage },

                    { path: 'hatching-eggs', Component: HatchingEggsPage },

                    { path: 'horse', Component: HorsePage },

                    { path: 'mink', Component: FurryPage },

                    { path: 'sperm-production', Component: SpermProdPage },

                    { path: 'organization', Component: OrganizationsPage },
                ]
            }
        ]
    }
])