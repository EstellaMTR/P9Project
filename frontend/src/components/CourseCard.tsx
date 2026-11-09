
import { Box, Typography, LinearProgress } from "@mui/material";
import Button from "./Button";

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

  const textColor = isFeatured ? "#FFFFFF" : "#082044";

  return (
<Box
  sx={{
    width: isFeatured ? "100%" : isRecommended ? "280px" : "380px",
    minHeight: isFeatured ? 185 : isRecommended ? 160 : 170,
    boxSizing: "border-box",
    p: isFeatured ? 3 : isRecommended ? 1.5 : 2,
    borderRadius: "18px",
    backgroundColor: isFeatured ? "#041E42" : "#FFFFFF",
    color: textColor,
    boxShadow: "0 3px 5px rgba(0,0,0,0.15)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: 1.5,
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
            fontWeight: 700,
            color: textColor,
            ...(isRecommended && { fontSize: "20px" }),
        }}
        >
        {title}
        </Typography>

        <Box
          sx={{
            backgroundColor: "#FFB51B",
            color: "#082044",
            borderRadius: "20px",
            px: 1.5,
            py: 0.5,
            whiteSpace: "nowrap",
            fontSize: "12px",
            fontWeight: 700,
          }}
        >
          +{xp} XP
        </Box>
      </Box>

      {/* Description */}
      <Typography
        variant="body2"
        sx={{ color: textColor, opacity: 0.9 }}
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
              height: 10,
              borderRadius: 10,
              backgroundColor: "#FFFFFF",
              "& .MuiLinearProgress-bar": {
                backgroundColor: "#48D69B",
              },
            }}
          />

          <Typography
            variant="caption"
            sx={{
              display: "block",
              textAlign: "right",
              mt: 0.5,
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
        <Box sx={{ width: "90%" }}>
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
