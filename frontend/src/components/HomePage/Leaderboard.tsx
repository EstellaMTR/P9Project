import { Avatar, Box, Typography } from '@mui/material';
import type { LeaderboardEntryDto } from '../../api';
import '../../styles/Leaderboard.css';
import trophy from '../../assets/leaderboardRank1.svg';

type LeaderboardProps = {
  employees: LeaderboardEntryDto[];
  employeeId: number;
};

export default function Leaderboard({ employees, employeeId }: LeaderboardProps) {
  return (
    <div className="leaderboard-container">
      <Box
        component="section"
        sx={{ bgcolor: 'background.paper', borderRadius: '12px', p: 2 }}
      >
        <Typography component="h2" variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
          Leaderboard
        </Typography>

        <ul className="leaderboard-list">
          {employees.map((employee, index) => (
            <Box
              component="li"
              key={employee.employeeId}
              className="leaderboard-entry"
              sx={{
                bgcolor: employee.employeeId === employeeId ? 'secondary.main' : 'background.paper',
                borderRadius: '8px',
                p: 1,
                mb: 1,
                boxShadow: 1,
                color: employee.employeeId === employeeId ? 'common.white' : 'text.primary',
              }}
            >
              <Avatar alt={employee.firstName} sx={{ width: 32, height: 32, fontSize: 16 }}>
                {employee.firstName.charAt(0)}
              </Avatar>
              <div className="leaderboard-person">
                <div className="leaderboard-name" title={`${employee.firstName} ${employee.lastName}${employee.employeeId === employeeId ? ' (You)' : ''}`}>
                  {employee.firstName} {employee.lastName}
                  {employee.employeeId === employeeId && ' (You)'}
                </div>
                <Typography variant="caption" sx={{ display: 'block', fontSize: 11, lineHeight: 1.3 }}>
                  Level {Math.floor(employee.xpAccumulated / 100)}
                </Typography>
              </div>
              <div className="leaderboard-placement">
                  {index === 0 && (
                    <img src={trophy} alt="Winner" className="leaderboard-trophy"
                      style={{ filter: employee.employeeId === employeeId ? 'brightness(0) invert(1)' : undefined }} />
                  )}
                <strong className="leaderboard-rank">#{index + 1}</strong>
              </div>
            </Box>
          ))}
        </ul>
      </Box>
    </div>
  );
}
