$ErrorActionPreference = "Stop"

Add-Type -AssemblyName System.Drawing

$root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$assetDir = Join-Path $root "src\assets"
New-Item -ItemType Directory -Force -Path $assetDir | Out-Null

$width = 1800
$height = 1100
$bitmap = New-Object System.Drawing.Bitmap $width, $height
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

function New-Color {
  param([string]$Hex, [int]$Alpha = 255)
  $value = $Hex.TrimStart("#")
  $r = [Convert]::ToInt32($value.Substring(0, 2), 16)
  $g = [Convert]::ToInt32($value.Substring(2, 2), 16)
  $b = [Convert]::ToInt32($value.Substring(4, 2), 16)
  [System.Drawing.Color]::FromArgb($Alpha, $r, $g, $b)
}

function New-Brush {
  param([string]$Hex, [int]$Alpha = 255)
  New-Object System.Drawing.SolidBrush (New-Color $Hex $Alpha)
}

function New-Pen {
  param([string]$Hex, [float]$Width = 1, [int]$Alpha = 255)
  New-Object System.Drawing.Pen (New-Color $Hex $Alpha), $Width
}

function New-RoundedRect {
  param([float]$X, [float]$Y, [float]$W, [float]$H, [float]$R)
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $R * 2
  $path.AddArc($X, $Y, $d, $d, 180, 90)
  $path.AddArc($X + $W - $d, $Y, $d, $d, 270, 90)
  $path.AddArc($X + $W - $d, $Y + $H - $d, $d, $d, 0, 90)
  $path.AddArc($X, $Y + $H - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  $path
}

function Fill-Round {
  param($Brush, [float]$X, [float]$Y, [float]$W, [float]$H, [float]$R)
  $path = New-RoundedRect $X $Y $W $H $R
  $graphics.FillPath($Brush, $path)
  $path.Dispose()
}

function Stroke-Round {
  param($Pen, [float]$X, [float]$Y, [float]$W, [float]$H, [float]$R)
  $path = New-RoundedRect $X $Y $W $H $R
  $graphics.DrawPath($Pen, $path)
  $path.Dispose()
}

$bg = New-Brush "#0b1919"
$graphics.FillRectangle($bg, 0, 0, $width, $height)

$gridPen = New-Pen "#ffffff" 1 20
for ($x = 0; $x -le $width; $x += 80) {
  $graphics.DrawLine($gridPen, $x, 0, $x, $height)
}
for ($y = 0; $y -le $height; $y += 80) {
  $graphics.DrawLine($gridPen, 0, $y, $width, $y)
}

$panelBrush = New-Brush "#102927" 210
$panelBorder = New-Pen "#d8f4ea" 2 70
Fill-Round $panelBrush 118 135 610 215 26
Stroke-Round $panelBorder 118 135 610 215 26
Fill-Round $panelBrush 118 392 610 215 26
Stroke-Round $panelBorder 118 392 610 215 26
Fill-Round $panelBrush 1280 190 370 500 28
Stroke-Round $panelBorder 1280 190 370 500 28

$fontLarge = New-Object System.Drawing.Font "Segoe UI", 34, ([System.Drawing.FontStyle]::Bold)
$fontMedium = New-Object System.Drawing.Font "Segoe UI", 22, ([System.Drawing.FontStyle]::Bold)
$fontSmall = New-Object System.Drawing.Font "Segoe UI", 18, ([System.Drawing.FontStyle]::Regular)
$fontTiny = New-Object System.Drawing.Font "Segoe UI", 15, ([System.Drawing.FontStyle]::Bold)
$white = New-Brush "#ffffff" 235
$muted = New-Brush "#d8f4ea" 175
$saffron = New-Brush "#f4b23b"
$coral = New-Brush "#ef6f61"
$green = New-Brush "#2f9e62"

$graphics.DrawString("LIVE NEWS STREAM", $fontTiny, $muted, 150, 160)
$graphics.DrawString("YouTube ticker scan", $fontLarge, $white, 150, 205)
$graphics.DrawString("OCR reading lower thirds and breaking plates", $fontSmall, $muted, 153, 266)

$playPoints = @(
  [System.Drawing.PointF]::new(622, 217),
  [System.Drawing.PointF]::new(622, 285),
  [System.Drawing.PointF]::new(680, 251)
)
$graphics.FillPolygon($coral, $playPoints)

$graphics.DrawString("GEMINI CHECK", $fontTiny, $muted, 150, 417)
$graphics.DrawString("Announcement confidence", $fontLarge, $white, 150, 462)
$graphics.DrawString("District, wording, source, urgency", $fontSmall, $muted, 153, 523)
Fill-Round $saffron 574 457 98 42 18
$graphics.DrawString("94%", $fontMedium, (New-Brush "#0b1919"), 597, 461)

$mapPoints = @(
  [System.Drawing.PointF]::new(1018, 152),
  [System.Drawing.PointF]::new(1116, 220),
  [System.Drawing.PointF]::new(1160, 306),
  [System.Drawing.PointF]::new(1226, 392),
  [System.Drawing.PointF]::new(1188, 488),
  [System.Drawing.PointF]::new(1238, 575),
  [System.Drawing.PointF]::new(1198, 704),
  [System.Drawing.PointF]::new(1140, 820),
  [System.Drawing.PointF]::new(1064, 934),
  [System.Drawing.PointF]::new(944, 942),
  [System.Drawing.PointF]::new(872, 834),
  [System.Drawing.PointF]::new(820, 726),
  [System.Drawing.PointF]::new(786, 618),
  [System.Drawing.PointF]::new(832, 518),
  [System.Drawing.PointF]::new(780, 420),
  [System.Drawing.PointF]::new(834, 302),
  [System.Drawing.PointF]::new(930, 220)
)
$mapBrush = New-Brush "#0d9488" 120
$mapPen = New-Pen "#d8f4ea" 5 190
$graphics.FillPolygon($mapBrush, $mapPoints)
$graphics.DrawPolygon($mapPen, $mapPoints)

$coastPen = New-Pen "#f4b23b" 4 190
$graphics.DrawCurve($coastPen, @(
  [System.Drawing.PointF]::new(1120, 224),
  [System.Drawing.PointF]::new(1180, 370),
  [System.Drawing.PointF]::new(1208, 560),
  [System.Drawing.PointF]::new(1160, 750),
  [System.Drawing.PointF]::new(1058, 922)
))

$dotBrushes = @($saffron, $green, $coral, (New-Brush "#d8f4ea"))
$dotPoints = @(
  @(1030, 262, 0), @(1100, 376, 1), @(996, 468, 2), @(1088, 560, 0),
  @(938, 628, 3), @(1038, 704, 1), @(974, 812, 0), @(1130, 646, 2)
)
foreach ($dot in $dotPoints) {
  $graphics.FillEllipse($dotBrushes[$dot[2]], $dot[0], $dot[1], 18, 18)
  $pulse = New-Pen "#ffffff" 2 70
  $graphics.DrawEllipse($pulse, $dot[0] - 12, $dot[1] - 12, 42, 42)
  $pulse.Dispose()
}

$graphics.DrawString("TN + Puducherry", $fontMedium, $white, 850, 980)
$graphics.DrawString("District-aware alert routing", $fontSmall, $muted, 850, 1024)

$graphics.DrawString("ALERT QUEUE", $fontTiny, $muted, 1320, 224)
$graphics.DrawString("WhatsApp", $fontLarge, $white, 1320, 268)
$graphics.DrawString("Call fallback", $fontLarge, $white, 1320, 326)

Fill-Round (New-Brush "#dcf8c6") 1320 410 270 92 22
$graphics.DrawString("School holiday", $fontMedium, (New-Brush "#153428"), 1344, 426)
$graphics.DrawString("Verified live", $fontSmall, (New-Brush "#24443a"), 1346, 466)

Fill-Round (New-Brush "#ef6f61") 1320 542 168 52 22
$graphics.DrawString("CALL READY", $fontTiny, $white, 1347, 557)

$ringPen = New-Pen "#f4b23b" 7 165
$graphics.DrawEllipse($ringPen, 1370, 760, 92, 92)
$graphics.DrawEllipse($ringPen, 1340, 730, 152, 152)
$graphics.DrawEllipse($ringPen, 1310, 700, 212, 212)

$graphics.DrawString("Faster than TV", $fontMedium, $white, 1308, 950)
$graphics.DrawString("YouTube live signals first", $fontSmall, $muted, 1310, 992)

$leftMask = New-Brush "#050e0e" 232
$graphics.FillRectangle($leftMask, 0, 0, 760, $height)

$assetPath = Join-Path $assetDir "freeday-live-monitor.png"
$bitmap.Save($assetPath, [System.Drawing.Imaging.ImageFormat]::Png)

$gridPen.Dispose()
$panelBrush.Dispose()
$panelBorder.Dispose()
$fontLarge.Dispose()
$fontMedium.Dispose()
$fontSmall.Dispose()
$fontTiny.Dispose()
$white.Dispose()
$muted.Dispose()
$saffron.Dispose()
$coral.Dispose()
$green.Dispose()
$mapBrush.Dispose()
$mapPen.Dispose()
$coastPen.Dispose()
$ringPen.Dispose()
$leftMask.Dispose()
$bg.Dispose()
$graphics.Dispose()
$bitmap.Dispose()

Write-Host "Generated $assetPath"
