import {
	ArrowBack,
	ArrowDownward,
	ArrowForward,
	ArrowUpward,
} from '@mui/icons-material';
import { Box, Grid2, Icon, Paper } from '@mui/material';
import NotificaitonPopup from '../notification/NotificationPopup';

interface Props {
	placement: string;
}

const directionsMap: { [key: string]: JSX.Element } = {
	NORTH: <ArrowUpward />,
	EAST: <ArrowForward />,
	SOUTH: <ArrowDownward />,
	WEST: <ArrowBack />,
};

export function parseInput(input: string) {
	console.log(input);
	const validDirections = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
	const coordinates = input.split(' ')[0];
	const direction = input.split(' ')[1];

	console.log(`Direction: ${direction}`);
	console.log(`Coordinates: ${coordinates}`);

	if (coordinates == null || direction == null) {
		return {
			error: "Input must be in the format 'X,Y direction'. e.g: '1,1 NORTH'",
		};
	}

	const x = parseInt(coordinates.split(',')[0].trim(), 10);
	const y = parseInt(coordinates.split(',')[1].trim(), 10);

	if (isNaN(x) || isNaN(y)) {
		return {
			error: 'Coordinates must be valid integers',
		};
	}

	if (!validDirections.includes(direction)) {
		return {
			error: 'Invalid direction. It must be one of NORTH, EAST, SOUTH, or WEST',
		};
	}

	return { x, y, direction };
}

export default function GridBox({ placement = '1,1 EAST' }: Props) {
	const result = parseInput(placement);
	if (result.error) {
		console.error(result.error);
		<NotificaitonPopup message={result.error} withError={true}/>;
	} else {
		console.log(
			`X: ${result.x}, Y: ${result.y}, Direction: ${result.direction}`
		);
	}

	// const myPlacement = prompt('Type a placement');
	// const [coordinates, direction] =
	// 	myPlacement === null ? placement.split(' ') : myPlacement.split(' ');
	// const [x, y] = coordinates.split(',').map(Number);
	// console.log(myPlacement);
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
									{rowIndex === result.x && colIndex === result.y ? (
										<Icon>{directionsMap[result.direction]}</Icon>
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
