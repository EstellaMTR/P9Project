
import { Box, Typography, LinearProgress } from "@mui/material";
import Button from "./Button";
import theme from "../styles/theme";

type CourseCardProps = {
  variant: "featured" | "inProgress" | "recommended";
  title: string;
  description: string;
  progress?: number;
  xp: number;
  onAction: () => void;
};

function CourseCard({
  variant,
  title,
  description,
  progress,
  xp,
  onAction,
}: CourseCardProps) {
  const isFeatured = variant === "featured";
  const isRecommended = variant === "recommended";

  const cardTheme = theme.palette.courseCard;

  const textColor = isFeatured
    ? cardTheme.featuredText
    : cardTheme.standardText;

  return (
    <Box
      sx={{
        width: isFeatured
          ? cardTheme.featuredWidth
          : isRecommended
            ? cardTheme.recommendedWidth
            : cardTheme.inProgressWidth,
        minHeight: isFeatured
          ? cardTheme.featuredMinHeight
          : isRecommended
            ? cardTheme.recommendedMinHeight
            : cardTheme.inProgressMinHeight,
        boxSizing: "border-box",
        p: isFeatured
          ? cardTheme.featuredPadding
          : isRecommended
            ? cardTheme.recommendedPadding
            : cardTheme.inProgressPadding,
        borderRadius: cardTheme.borderRadius,
        backgroundColor: isFeatured
          ? cardTheme.featuredBackground
          : cardTheme.standardBackground,
        color: textColor,
        boxShadow: cardTheme.boxShadow,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: cardTheme.cardGap,
      }}
    >
      {/* Title and XP */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 1,
        }}
      >
        <Typography
          variant={isFeatured ? "h4" : "h6"}
          sx={{
            fontWeight: cardTheme.titleFontWeight,
            color: textColor,
            ...(isRecommended && {
              fontSize: cardTheme.recommendedTitleFontSize,
            }),
          }}
        >
          {title}
        </Typography>

        <Box
          sx={{
            backgroundColor: cardTheme.xpBackground,
            color: cardTheme.xpText,
            borderRadius: cardTheme.xpBorderRadius,
            px: cardTheme.xpPaddingX,
            py: cardTheme.xpPaddingY,
            whiteSpace: "nowrap",
            fontSize: cardTheme.xpFontSize,
            fontWeight: cardTheme.xpFontWeight,
          }}
        >
          +{xp} XP
        </Box>
      </Box>

      {/* Description */}
      <Typography
        variant="body2"
        sx={{
          color: textColor,
          opacity: cardTheme.descriptionOpacity,
        }}
      >
        {description}
      </Typography>

      {/* Progress bar: featured and inProgress */}
      {!isRecommended && progress !== undefined && (
        <Box>
          <LinearProgress
            variant="determinate"
            value={Math.max(0, Math.min(progress, 100))}
            sx={{
              height: cardTheme.progressHeight,
              borderRadius: cardTheme.progressBorderRadius,
              backgroundColor: cardTheme.progressBackground,
              "& .MuiLinearProgress-bar": {
                backgroundColor: cardTheme.progressBar,
              },
            }}
          />

          <Typography
            variant="caption"
            sx={{
              display: "block",
              textAlign: "right",
              mt: cardTheme.progressTextMarginTop,
              color: textColor,
            }}
          >
            {progress}% done
          </Typography>
        </Box>
      )}

      {/* Course buttons */}
      {isFeatured ? (
        <Button
          label="Continue course"
          color="primary"
          onClick={onAction}
        />
      ) : isRecommended ? (
        <Box sx={{ width: cardTheme.recommendedButtonWidth }}>
          <Button
            label="Start course"
            color="secondary"
            onClick={onAction}
          />
        </Box>
      ) : (
        <Button
          label="Continue course"
          color="secondary"
          onClick={onAction}
        />
      )}
    </Box>
  );
}

export default CourseCard;
