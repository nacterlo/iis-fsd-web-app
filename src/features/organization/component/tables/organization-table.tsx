import { useGetOrganizationsQuery } from '@/app/store/api/organization-api'
import { Box, CircularProgress, Link, Sheet, Table, Typography } from '@mui/joy'
import React from 'react'
import { PaginationOrganization } from '../pagination/pagination-oraganization'


interface OrganizationTableProps {
    onOpenModalUpdate: (id: number) => void
 }

export default function OrganizationTable({ onOpenModalUpdate }: OrganizationTableProps) {

    const limit = 10
    const [page, setPage] = React.useState(1)
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
    }

    const { data: organizations, isLoading: loadingOrganizations } = useGetOrganizationsQuery({ limit, page })

    return (
        <React.Fragment>

            <Sheet
                className="OrderTableContainer"
                variant="outlined"
                sx={{
                    display: { xs: 'none', sm: 'initial' },
                    width: '50%',
                    borderRadius: 'sm',
                    alignSelf: 'center',
                    flex: 1,
                    flexShrink: 1,
                    overflow: 'auto',
                    minHeight: 0,
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={{
                        '--TableCell-headBackground': 'var(--joy-palette-background-level1)',
                        '--Table-headerUnderlineThickness': '1px',
                        '--TableRow-hoverBackground': 'var(--joy-palette-background-level1)',
                        '--TableCell-paddingY': '4px',
                        '--TableCell-paddingX': '8px',
                    }}
                >
                    <thead>
                        <tr>
                            <th style={{ width: 140, padding: '12px 6px' }}>
                                <Link
                                    underline="none"
                                    color="primary"
                                    component="button"
                                >
                                    Наименование организации
                                </Link>
                            </th>
                            <th style={{ width: 140, padding: '12px 6px' }}>Код страны</th>
                            <th style={{ width: 80, padding: '12px 6px' }}> </th>
                        </tr>
                    </thead>
                    {loadingOrganizations ? (
                        <tbody>
                            <tr style={{ height: 400 }}>
                                <td style={{ textAlign: 'center' }} colSpan={3}>
                                    <CircularProgress size='lg' />
                                </td>
                            </tr>
                        </tbody>
                    ) : organizations ? (
                        <tbody>
                            {organizations.data.length === 0 && (
                                <tr>
                                    <td colSpan={2} style={{ textAlign: 'center', height: 400 }}>
                                        <Typography level="title-lg">Организации отсутствуют</Typography>
                                    </td>
                                </tr>
                            )}
                            {[...organizations.data].map((row) => (
                                <tr key={row.id}>
                                    <td>
                                        <Typography level="body-xs">{row.name}</Typography>
                                    </td>
                                    <td>
                                        <Typography level="body-xs">{row.countryCode}</Typography>
                                    </td>
                                    <td>
                                        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                                            <Link level="body-xs" component="button" onClick={() => onOpenModalUpdate(row.id)}>
                                                Просмотр
                                            </Link>
                                            {/* <RowMenu /> */}
                                            {/* <IconButton>
                                                <FileUploadRounded />
                                            </IconButton> */}
                                        </Box>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    ) : null}

                </Table>
            </Sheet>
            {organizations && organizations.totalCount > limit && (
                <PaginationOrganization
                    currentPage={page}
                    totalPages={organizations ? Math.ceil(organizations.totalCount / limit) : 0}
                    onPageChange={handlePageChange}

                />
            )}
        </React.Fragment>
    )
}
