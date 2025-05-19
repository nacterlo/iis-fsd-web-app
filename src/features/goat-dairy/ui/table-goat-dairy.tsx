import { useGetGoatDairyListQuery } from "../api/goat-dairy-api"

import { formattedDate } from "@/shared/lib/utils"
import { TableError } from "@/shared/ui/table-error"
import { TableLoading } from "@/shared/ui/table-loading"
import { TableNoData } from "@/shared/ui/table-nondata"
import { LibraryAddCheckRounded, CheckRounded, PublishRounded, Block, CheckCircleRounded, AutoDeleteRounded, DeleteForeverRounded } from "@mui/icons-material"
import { Sheet, Table, Typography, Chip, ColorPaletteProp } from "@mui/joy"
import { useState } from "react"

interface TableProps {
    onOpenModalUpdate: (id: number) => void
}


export const TableGoatDairy = ({ onOpenModalUpdate }: TableProps) => {
    const [page, _setPage] = useState(1)
    const limit = 10

    const { data: goatList, isLoading: loadingGoatList, isError } = useGetGoatDairyListQuery({ limit, page })

    return (
        <Sheet
            className="OrderTableContainer"
            variant="outlined"
            sx={{
                display: { xs: 'none', sm: 'initial' },
                width: '100%',
                borderRadius: 'sm',
                flexShrink: 1,
                flexGrow: 1,
                overflow: 'auto',
                minHeight: 0,
            }}
        >

            <Table
                aria-labelledby="tableAnimal"
                stickyHeader
                hoverRow={goatList && !loadingGoatList || !isError || !!goatList?.data}
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
                        <th style={{ width: '20%', padding: '12px 6px', color: '#2e93fe' }}>Инд. номер</th>
                        <th style={{ width: '20%', padding: '12px 6px' }}>Порода</th>
                        <th style={{ width: '10%', padding: '12px 6px' }}>Пол</th>
                        <th style={{ width: '15%', padding: '12px 6px' }}>Дата создания</th>
                        <th style={{ width: '35%', padding: '12px 6px', textAlign: 'center' }}>Статус</th>
                    </tr>
                </thead>
                {goatList && goatList.data ? (
                    <tbody>
                        {goatList.data.length === 0 ? (
                            <TableNoData />
                        ) : null}
                        {[...goatList.data].map((animal, index) => (
                            // <tr key={index} style={{ cursor: 'pointer' }} onClick={() => handleClickView(animal.id)}>
                            <tr key={index} style={{ cursor: 'pointer' }} onClick={() => onOpenModalUpdate(animal.id)}>
                                <td>
                                    <Typography level="title-sm">{animal.identificationNumber}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{animal.breed}</Typography>
                                </td>
                                <td>
                                    <Typography level="title-sm" sx={{ color: animal.sexCode === 'M' ? '#59a1f9' : '#ff00c3' }}>{animal.sexCode}</Typography>
                                </td>
                                <td>
                                    <Typography level="body-xs">{formattedDate(animal.createdAt ? new Date(animal.createdAt).toISOString() : 'Не указана')}</Typography>
                                    {/* <Typography level="body-xs">{new Date(animal.createdAt).toISOString()}</Typography> */}
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                    <Chip
                                        variant="soft"
                                        size="sm"
                                        startDecorator={
                                            {
                                                0: <LibraryAddCheckRounded />,
                                                1: <CheckRounded />,
                                                2: <PublishRounded />,
                                                3: <Block />,
                                                4: <LibraryAddCheckRounded />,
                                                5: <CheckRounded />,
                                                6: <PublishRounded />,
                                                7: <Block />,
                                                8: <CheckCircleRounded />,
                                                9: <AutoDeleteRounded />,
                                                10: <AutoDeleteRounded />,
                                                11: <DeleteForeverRounded />,
                                                12: <DeleteForeverRounded />
                                            }[animal.status.id]
                                        }
                                        color={
                                            {
                                                0: 'neutral',
                                                1: 'success',
                                                2: 'warning',
                                                3: 'danger',
                                                4: 'neutral',
                                                5: 'success',
                                                6: 'warning',
                                                7: 'danger',
                                                8: 'success',
                                                9: 'warning',
                                                10: 'danger',
                                                11: 'danger',
                                                12: 'danger'
                                            }[animal.status.id] as ColorPaletteProp
                                        }
                                    >
                                        {animal.status.name}
                                    </Chip>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                ) : loadingGoatList ? (
                    <TableLoading />
                ) : isError ? (
                    <TableError />
                ) : (
                    <TableNoData />
                )}

            </Table>

        </Sheet>
    )
}