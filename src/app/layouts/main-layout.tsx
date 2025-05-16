import Header from "@/shared/components/layout/header"
import Layout from "@/shared/components/layout/layout"
import Navigation from "@/shared/components/layout/navigation"
import { Box } from "@mui/joy"
import React from "react"
import { Outlet } from "react-router"



export const MainLayout = () => {

    const [drawerOpen, _setDrawerOpen] = React.useState(false)

    return (
        <Layout.Root
            sx={[
                drawerOpen && {
                    // height: '100vh',
                    overflow: 'hidden',
                },
            ]}
        >
            <Layout.Header>
                <Header />
            </Layout.Header>
            <Layout.SideNav>
                <Navigation />
            </Layout.SideNav>
            <Layout.Main>
                <Box
                    component="main"
                    className="MainContent"
                    sx={{
                        px: { xs: 2, md: 6 },
                        pt: {
                            xs: 'calc(12px + var(--Header-height))',
                            sm: 'calc(12px + var(--Header-height))',
                            md: 3,
                        },
                        pb: { xs: 2, sm: 2, md: 3 },
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        gap: 1,
                        height: '85dvh'
                    }}
                >
                    {/* <SuccessSnackBar />
                    <ErrorSnackBar /> */}
                    <Outlet />
                </Box>

            </Layout.Main>
        </Layout.Root>
    )
}