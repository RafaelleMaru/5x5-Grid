import React from 'react';
import { Alert, Box, Collapse, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';

interface Props {
	message: string;
	withError: boolean;
}

export default function NotificaitonPopup({
	message,
	withError = true,
}: Props) {
	const [open, setOpen] = React.useState(withError);

	return (
		<Box sx={{ width: '100%' }}>
			<Collapse in={open}>
				<Alert
					action={
						<IconButton
							aria-label='close'
							color='inherit'
							size='small'
							onClick={() => {
								setOpen(false);
							}}
						>
							<Close fontSize='inherit' />
						</IconButton>
					}
					sx={{ mb: 2 }}
				>
					{message}
				</Alert>
			</Collapse>
		</Box>
	);
}
