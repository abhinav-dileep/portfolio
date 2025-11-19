interface CircularProgressProps {
  percentage: number
  skill: string
}

export default function CircularProgress({ percentage, skill }: CircularProgressProps) {
  const radius = 50
  const circumference = 2 * Math.PI * radius
  const strokeDasharray = circumference
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <svg width="120" height="120" className="mb-4">
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#e5e7eb"
          strokeWidth="8"
          fill="none"
        />
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#3b82f6"
          strokeWidth="8"
          fill="none"
          strokeDasharray={strokeDasharray}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)"
          className="transition-all duration-1000"
        />
        <text x="60" y="65" textAnchor="middle" className="text-2xl font-bold fill-current">{percentage}%</text>
      </svg>
      <p className="text-lg font-semibold">{skill}</p>
    </div>
  )
}