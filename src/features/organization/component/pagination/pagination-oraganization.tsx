import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import { Box, iconButtonClasses, Button, IconButton } from '@mui/joy'
import React from 'react'

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}
export const PaginationOrganization = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    return (
        <Box
            className="Pagination-laptopUp"
            sx={{
                pt: 2,
                gap: 1,
                [`& .${iconButtonClasses.root}`]: { borderRadius: '50%' },
                display: {
                    xs: 'none',
                    md: 'flex',
                },
                width: '50%',
                alignSelf: 'center',
            }}
        >
            <Button
                size="sm"
                variant="outlined"
                color="neutral"
                startDecorator={<KeyboardArrowLeft />}
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                Предыдущее
            </Button>

            <Box sx={{ flex: 1 }} />
            <Button
                size="sm"
                variant="outlined"
                color="neutral"
                endDecorator={<KeyboardArrowRight />}
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                Следующее
            </Button>
        </Box>
    )
}
