import { LinearProgress, Stack, Typography } from '@mui/material';

type XpProgressBarProps = {
  currentXp: number;
  targetXp: number;
  level?: number;
};

export default function XpProgressBar({ currentXp, targetXp, level }: XpProgressBarProps) {
  const progress = targetXp > 0 ? Math.max(0, Math.min(100, (currentXp / targetXp) * 100)) : 0;
  const xpRemaining = Math.max(0, targetXp - currentXp);

  return (
    <Stack spacing={0.5}>
      <Stack direction="row" sx={{ justifyContent: 'space-between' }}>
        <Typography variant="caption" sx={{ fontWeight: 700 }}>
          {currentXp} / {targetXp} XP
        </Typography>
        {level !== undefined && (
          <Typography variant="caption" sx={{ fontWeight: 700 }}>
            Level {level}
          </Typography>
        )}
      </Stack>
      <LinearProgress
        variant="determinate"
        value={progress}
        color="warning"
        aria-label="XP progress toward next level"
        aria-valuetext={`${currentXp} of ${targetXp} XP`}
        sx={{ height: 16, borderRadius: '999px', bgcolor: 'common.white', boxShadow: 2 }}
      />
      <Typography variant="caption" sx={{ textAlign: 'right' }}>
        Only {xpRemaining} more XP until the next level!
      </Typography>
    </Stack>
  );
}
