export const SUBJECT_STYLES: Record<string, { bg: string; fg: string; icon: string }> = {
  english:          { bg: '#a78bfa', fg: '#fff', icon: 'book' },
  math:             { bg: '#06b6d4', fg: '#fff', icon: 'calculator' },
  science:          { bg: '#ef4444', fg: '#fff', icon: 'flask' },
  generalKnowledge: { bg: '#f59e0b', fg: '#fff', icon: 'globe' },
  religion:         { bg: '#22c55e', fg: '#fff', icon: 'heart' },
  socialStudies:    { bg: '#8b5cf6', fg: '#fff', icon: 'map' },
  stories:          { bg: '#ec4899', fg: '#fff', icon: 'star' },
};


export const CLASS_TINTS: Record<string, string> = {
  // Preschool
  baby:  '#a3e635', // lime-400
  middle:'#38bdf8', // sky-400
  top:   '#f97316', // orange-500
  // Junior
  p1:    '#60a5fa', // blue-400
  p2:    '#f472b6', // pink-400
  p3:    '#34d399', // emerald-400
  // Lower
  p4:    '#f43f5e', // rose-500
  p5:    '#22c55e', // green-500
  // Upper
  p6:    '#8b5cf6', // violet-500
  p7:    '#14b8a6', // teal-500
};

type RichVariant = 'rounded' | 'cut' | 'bevel' | 'roundLeft' | 'roundRight';
type LegacyVariant = 'left' | 'right' | 'rounded';
export type BorderVariant = RichVariant | LegacyVariant;

// Accepts both new + legacy names
export const buttonShape = (variant: BorderVariant) => {
  const v: RichVariant =
    variant === 'left' ? 'roundLeft'
    : variant === 'right' ? 'roundRight'
    : variant; // 'rounded' passes through

  switch (v) {
    case 'cut':
      return {
        borderRadius: 18,
        borderTopLeftRadius: 4,
        borderBottomRightRadius: 4,
      };
    case 'bevel':
      return { borderRadius: 10 };
    case 'roundLeft':
      return {
        borderTopLeftRadius: 28,
        borderBottomLeftRadius: 28,
        borderTopRightRadius: 14,
        borderBottomRightRadius: 14,
      };
    case 'roundRight':
      return {
        borderTopRightRadius: 28,
        borderBottomRightRadius: 28,
        borderTopLeftRadius: 14,
        borderBottomLeftRadius: 14,
      };
    default:
      return { borderRadius: 22 }; // rounded
  }
};

// Consolidated class styles: bg (surface), tint (accent), borderVariant (shape)
export const CLASS_STYLES: Record<
  string,
  { bg: string; tint: string; borderVariant: BorderVariant }
> = {
  // Preschool
  baby:   { bg: '#ecfccb', tint: CLASS_TINTS.baby,   borderVariant: 'rounded'   },
  middle: { bg: '#e0f2fe', tint: CLASS_TINTS.middle, borderVariant: 'cut'       },
  top:    { bg: '#fef9c3', tint: CLASS_TINTS.top,    borderVariant: 'roundLeft' },

  // Junior
  p1:     { bg: '#f1f5f9', tint: CLASS_TINTS.p1,     borderVariant: 'rounded'   },
  p2:     { bg: '#fef2f2', tint: CLASS_TINTS.p2,     borderVariant: 'bevel'     },
  p3:     { bg: '#faf5ff', tint: CLASS_TINTS.p3,     borderVariant: 'roundRight'},

  // Lower
  p4:     { bg: '#f0fdf4', tint: CLASS_TINTS.p4,     borderVariant: 'bevel'     },
  p5:     { bg: '#fff7ed', tint: CLASS_TINTS.p5,     borderVariant: 'cut'       },

  // Upper
  p6:     { bg: '#eef2ff', tint: CLASS_TINTS.p6,     borderVariant: 'bevel'     },
  p7:     { bg: '#f5f3ff', tint: CLASS_TINTS.p7,     borderVariant: 'cut'       },
};

