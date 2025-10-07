import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Button, IconButton, iconButtonClasses } from "@mui/joy";


interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export function TablePagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
    const getPageNumbers = () => {
        const pages = [];
        const maxVisiblePages = 5;

        if (totalPages <= maxVisiblePages) {
            for (let i = 1; i <= totalPages; i++) {
                pages.push(i);
            }
        } else {
            pages.push(1);

            if (currentPage > 3) {
                pages.push('...');
            }

            const start = Math.max(2, currentPage - 1);
            const end = Math.min(totalPages - 1, currentPage + 1);

            for (let i = start; i <= end; i++) {
                pages.push(i);
            }

            if (currentPage < totalPages - 2) {
                pages.push('...');
            }

            pages.push(totalPages);
        }

        return pages;
    };

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
            {getPageNumbers().map((page, index) => (
                <IconButton
                    key={index}
                    size="sm"
                    variant={page === currentPage ? 'solid' : 'outlined'}
                    color={page === currentPage ? 'primary' : 'neutral'}
                    disabled={page === '...'}
                    onClick={() => typeof page === 'number' && onPageChange(page)}
                >
                    {page}
                </IconButton>
            ))}
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
    );
}