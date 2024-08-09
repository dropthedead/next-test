import { Box, Skeleton } from '@mui/material';

export default function Loading() {
	return (
		<>
			<Box sx={{ display: 'flex', gap: '5px', flexDirection: 'column' }}>
				<Skeleton variant="rectangular" width={'100%'} height={46} />
				<Skeleton variant="rectangular" width={'100%'} height={46} />
				<Skeleton variant="rectangular" width={'100%'} height={46} />
				<Skeleton variant="rectangular" width={'100%'} height={46} />
			</Box>
		</>
	);
}
