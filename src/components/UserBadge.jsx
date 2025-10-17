export default function UserBadge({ verified }) {
  return verified ? <span className="text-blue-500 font-bold">✔ Verified</span> : null;
}
