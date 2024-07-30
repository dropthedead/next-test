import { styled } from '@mui/material/styles';
import { ListItemButton as MuiListItemButton } from '@mui/material';

export const ListItemButton = styled(MuiListItemButton)({
	backgroundColor: 'rgba(0, 0, 0, 0.1)',
	'&:hover': {
		backgroundColor: 'rgba(0, 0, 0, 0.2)',
	},
});
