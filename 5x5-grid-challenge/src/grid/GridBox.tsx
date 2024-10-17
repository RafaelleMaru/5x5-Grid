import {
	ArrowBack,
	ArrowDownward,
	ArrowForward,
	ArrowUpward,
} from '@mui/icons-material';
import { Box, Grid2, Icon, Paper } from '@mui/material';

interface Props {
	placement: string;
}

const directionsMap: { [key: string]: JSX.Element } = {
	NORTH: <ArrowUpward />,
	EAST: <ArrowForward />,
	SOUTH: <ArrowDownward />,
	WEST: <ArrowBack />,
};

export default function GridBox({ placement = '1,1 EAST' }: Props) {
	const myPlacement = prompt('Type a placement');
	const [coordinates, direction] =
		myPlacement === null ? placement.split(' ') : myPlacement.split(' ');
	const [x, y] = coordinates.split(',').map(Number);
	console.log(myPlacement);
	// Create an array to represent a 5x5 grid
	return (
		<Box sx={{ flexGrow: 2, padding: 2 }}>
			<Grid2 container spacing={2}>
				{Array.from({ length: 5 }).map((_, rowIndex) => (
					<Grid2 container key={rowIndex} spacing={2}>
						{Array.from({ length: 5 }).map((_, colIndex) => (
							<Grid2
								size={{ xs: 2.4, sm: 2.4, md: 2.4, lg: 2.4 }}
								key={colIndex}
							>
								<Paper
									elevation={3}
									sx={{
										height: 100,
										width: 100,
										display: 'flex',
										justifyContent: 'center',
										alignItems: 'center',
									}}
								>
									{rowIndex === x && colIndex === y ? (
										<Icon>{directionsMap[direction]}</Icon>
									) : (
										''
									)}
								</Paper>
							</Grid2>
						))}
					</Grid2>
				))}
			</Grid2>
		</Box>
	);
}
