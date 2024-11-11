
import { useRouter } from 'next/router';
import SingleJobDetails from '../../components/SingleJobDetails';

const JobDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      {/* Here you can pass the job ID or any other props needed */}
      <SingleJobDetails jobId={id} />
    </div>
  );
};

export default JobDetailPage;
