interface BlobProps {
  className?: string;
}

export function Blob({ className = "" }: BlobProps) {
  return (
    <svg
      viewBox="0 0 200 200"
      aria-hidden="true"
      className={className}
      fill="currentColor"
    >
      <path
        transform="translate(100 100)"
        d="M45.3,-58.3C58.4,-49.7,68.5,-35.5,72.5,-19.6C76.5,-3.7,74.4,13.9,66.6,28.5C58.8,43.1,45.3,54.7,29.9,61.5C14.5,68.3,-2.8,70.3,-19.5,66.4C-36.2,62.5,-52.3,52.7,-62.5,38.5C-72.7,24.3,-77,5.7,-73.8,-11.1C-70.6,-27.9,-59.9,-42.9,-46.1,-51.6C-32.3,-60.3,-16.2,-62.7,0.7,-63.6C17.6,-64.5,35.2,-63.9,45.3,-58.3Z"
      />
    </svg>
  );
}
