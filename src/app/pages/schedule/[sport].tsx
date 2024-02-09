// pages/schedule/[sport].tsx
import { useRouter } from 'next/router';

const SchedulePage = () => {
  const router = useRouter();
  const { sport } = router.query;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Today's Match Schedule for {sport}</h1>
      {/* Fetch and list today's match schedules for {sport} */}
    </div>
  );
};

export default SchedulePage;
