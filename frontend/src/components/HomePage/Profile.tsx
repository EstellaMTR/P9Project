import { Avatar, Box, Stack, Typography } from '@mui/material';
import XpProgressBar from '../XpProgressBar';

type ProfileProps = {
  employeeId: number;
  firstName: string | undefined;
  lastName: string | undefined;
  xpAccumulated: number | undefined;
};

export default function Profile({
  employeeId,
  firstName,
  lastName,
  xpAccumulated,
}: ProfileProps) {
  const fullName =
    `${firstName} ${lastName}`.trim() || `Employee ${employeeId}`;
  const xpPerLevel = 100;
  const totalXp = xpAccumulated ?? 0;

  const level = Math.floor(totalXp / xpPerLevel);
  const currentXp = totalXp % xpPerLevel;

  return (
    <div className="profile-container">
      <Box
        component="section"
        sx={{ bgcolor: 'background.paper', borderRadius: '12px', p: 2 }}
      >
        <Typography component="h2" variant="h6" sx={{ fontWeight: 700 }}>
          My Progress
        </Typography>

        <Stack direction="row" spacing={1} sx={{ alignItems: 'center', my: 2 }}>
          <Avatar alt={fullName}>{fullName.charAt(0)}</Avatar>
          <Typography variant="body2">{fullName}</Typography>
        </Stack>

        <XpProgressBar currentXp={currentXp} targetXp={xpPerLevel} level={level} />
      </Box>
    </div>
  );
}
