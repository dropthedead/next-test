'use client';
import { Collapse, List, ListItemIcon, ListItemText } from '@mui/material';
import { useState } from 'react';
import DraftsIcon from '@mui/icons-material/Drafts';
import React from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ListItemButton } from './styles/userpagestyle';
import HomeIcon from '@mui/icons-material/Home';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import LanguageIcon from '@mui/icons-material/Language';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface UserData {
	id: string;
	name: string;
	email: string;
	address: {
		city: string;
		street: string;
		suite: string;
	};
	phone: string;
	website: string;
}

export default function UserPageContent({ userData }: { userData: UserData }) {
	const [openStates, setOpenStates] = useState({
		email: false,
		address: false,
		phone: false,
		website: false,
	});

	const handleToggle = (key: keyof typeof openStates) => {
		setOpenStates((prevStates) => ({ ...prevStates, [key]: !prevStates[key] }));
	};

	return (
		<List>
			<ListItemButton onClick={() => handleToggle('email')}>
				<ListItemIcon>
					<DraftsIcon />
				</ListItemIcon>
				<ListItemText primary="Email" />
				{openStates.email ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={openStates.email} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<ArrowForwardIosIcon />
						</ListItemIcon>
						<ListItemText
							primary={userData.email}
							onClick={() => window.open(`mailto:${userData.email}`, '_blank')}
						/>
					</ListItemButton>
				</List>
			</Collapse>
			<ListItemButton onClick={() => handleToggle('address')}>
				<ListItemIcon>
					<HomeIcon />
				</ListItemIcon>
				<ListItemText primary="Address" />
				{openStates.address ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={openStates.address} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<ArrowForwardIosIcon />
						</ListItemIcon>
						<ListItemText primary={`City: ${userData.address.city}`} />
						<ListItemText primary={`Street: ${userData.address.street}`} />
						<ListItemText primary={`Suite: ${userData.address.suite}`} />
					</ListItemButton>
				</List>
			</Collapse>
			<ListItemButton onClick={() => handleToggle('phone')}>
				<ListItemIcon>
					<PhoneEnabledIcon />
				</ListItemIcon>
				<ListItemText primary="Phone" />
				{openStates.phone ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={openStates.phone} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<ArrowForwardIosIcon />
						</ListItemIcon>
						<ListItemText
							primary={userData.phone}
							onClick={() => window.open(`phoneto:${userData.phone}`)}
						/>
					</ListItemButton>
				</List>
			</Collapse>
			<ListItemButton onClick={() => handleToggle('website')}>
				<ListItemIcon>
					<LanguageIcon />
				</ListItemIcon>
				<ListItemText primary="Website" />
				{openStates.website ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={openStates.website} timeout="auto" unmountOnExit>
				<List component="div" disablePadding>
					<ListItemButton sx={{ pl: 4 }}>
						<ListItemIcon>
							<ArrowForwardIosIcon />
						</ListItemIcon>
						<ListItemText
							primary={userData.website}
							onClick={() =>
								window.open(
									`http://${userData.website}`,
									'_blank',
									'noopener,noreferrer'
								)
							}
						/>
					</ListItemButton>
				</List>
			</Collapse>
		</List>
	);
}
