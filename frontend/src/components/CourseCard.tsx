import { Box, Typography, LinearProgress } from '@mui/material';
import Button from './Button';
import courseCardStyles from '../styles/CourseCard';

type CourseCardProps = {
  variant: 'featured' | 'inProgress' | 'recommended';
  title: string;
  description: string;
  duration: string;
  progress?: number;
  xp: number;
  onAction: () => void;
};

function CourseCard({
  variant,
  title,
  description,
  duration,
  progress,
  xp,
  onAction,
}: CourseCardProps) {
  const isFeatured = variant === 'featured';
  const isRecommended = variant === 'recommended';
  const textColor = isFeatured ? 'common.white' : 'secondary.main';

  return (
    <Box
      sx={{
        width: isFeatured
          ? courseCardStyles.featuredWidth
          : isRecommended
            ? courseCardStyles.recommendedWidth
            : courseCardStyles.inProgressWidth,
        minHeight: isFeatured
          ? courseCardStyles.featuredMinHeight
          : isRecommended
            ? courseCardStyles.recommendedMinHeight
            : courseCardStyles.inProgressMinHeight,
        boxSizing: 'border-box',
        minWidth: 0,
        p: isFeatured
          ? courseCardStyles.featuredPadding
          : isRecommended
            ? courseCardStyles.recommendedPadding
            : courseCardStyles.inProgressPadding,
        borderRadius: courseCardStyles.borderRadius,
        backgroundColor: isFeatured ? 'secondary.main' : 'common.white',
        color: textColor,
        boxShadow: courseCardStyles.boxShadow,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: courseCardStyles.cardGap,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: courseCardStyles.titleRowGap,
          flexWrap: courseCardStyles.titleRowFlexWrap,
        }}
      >
        <Typography
          variant={isFeatured ? 'h4' : 'h6'}
          sx={{
            fontWeight: courseCardStyles.titleFontWeight,
            color: textColor,
            minWidth: 0,
            overflowWrap: 'anywhere',
          }}
        >
          {title}
        </Typography>

        <Typography
          component="span"
          variant="body2"
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            backgroundColor: 'warning.main',
            color: 'secondary.main',
            borderRadius: courseCardStyles.xpBorderRadius,
            px: courseCardStyles.xpPaddingX,
            py: courseCardStyles.xpPaddingY,
            fontSize: courseCardStyles.xpFontSize,
            whiteSpace: 'nowrap',
            fontWeight: courseCardStyles.xpFontWeight,
          }}
        >
          +{xp} XP
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: courseCardStyles.contentGap,
          flexDirection: isFeatured
            ? courseCardStyles.featuredContentFlexDirection
            : 'row',
          minWidth: 0,
        }}
      >
        <Box sx={{ minWidth: 0, overflowWrap: 'anywhere' }}>
          <Typography
            variant="body2"
            sx={{ color: textColor, opacity: courseCardStyles.descriptionOpacity }}
          >
            {description}
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: textColor,
              fontWeight: courseCardStyles.durationFontWeight,
              mt: courseCardStyles.durationMarginTop,
            }}
          >
            {duration}
          </Typography>
        </Box>

        {isFeatured && progress !== undefined && (
          <Box
            sx={{
              width: courseCardStyles.featuredProgressWidth,
              flexShrink: courseCardStyles.featuredProgressFlexShrink,
              minWidth: 0,
            }}
          >
            <LinearProgress
              variant="determinate"
              value={Math.max(0, Math.min(progress, 100))}
              sx={{
                height: courseCardStyles.progressHeight,
                borderRadius: courseCardStyles.progressBorderRadius,
                backgroundColor: 'common.white',
                '& .MuiLinearProgress-bar': { backgroundColor: 'success.main' },
              }}
            />
            <Typography
              variant="caption"
              sx={{
                display: 'block',
                textAlign: 'right',
                mt: courseCardStyles.progressLabelMarginTop,
                color: textColor,
              }}
            >
              {progress}% done
            </Typography>
          </Box>
        )}
      </Box>

      {!isFeatured && !isRecommended && progress !== undefined && (
        <Box>
          <LinearProgress
            variant="determinate"
            value={Math.max(0, Math.min(progress, 100))}
            sx={{
              height: courseCardStyles.progressHeight,
              borderRadius: courseCardStyles.progressBorderRadius,
              backgroundColor: 'common.white',
              boxShadow: courseCardStyles.progressBoxShadow,
              '& .MuiLinearProgress-bar': { backgroundColor: 'success.main' },
            }}
          />
          <Typography
            variant="caption"
            sx={{
              display: 'block',
              textAlign: 'right',
              mt: courseCardStyles.progressLabelMarginTop,
              color: textColor,
            }}
          >
            {progress}% done
          </Typography>
        </Box>
      )}

      {isFeatured ? (
        <Box
          sx={{
            width: courseCardStyles.featuredButtonWidth,
            maxWidth: courseCardStyles.featuredButtonMaxWidth,
          }}
        >
          <Button label="Continue course" color="primary" onClick={onAction} />
        </Box>
      ) : isRecommended ? (
        <Box
          sx={{
            width: courseCardStyles.recommendedButtonWidth,
            maxWidth: courseCardStyles.featuredButtonMaxWidth,
          }}
        >
          <Button label="Start course" color="white" onClick={onAction} />
        </Box>
      ) : (
        <Button label="Continue course" color="secondary" onClick={onAction} />
      )}
    </Box>
  );
}

export default CourseCard;
