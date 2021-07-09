import * as React from 'react';
import { Link } from 'react-router-dom';
import useCreateChuncks from '../../hooks/useCreateChuncks';
import Pagination from '../Pagination';

interface ArrayWithName<T> extends Array<T> {
  name: string;
}

interface Props<T> {
  heading: string;
  getter: () => Promise<void>;
  items: T[];
  ListItem: React.FC<{ item: T }>;
}

const EntityListView = <T extends ArrayWithName<T>>({
  heading,
  getter,
  items,
  ListItem,
}: Props<T>) => {
  const [currentPage, setCurrentPage] = React.useState(1);
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(items.length === 0);
  const itemChuncks = useCreateChuncks(items, { size: 30 });

  React.useEffect(() => {
    if (items.length > 0) return;
    setIsLoading(true);
    getter()
      .then(() => {
        return setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setHasError(true);
        setIsLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <h1 className="center">Loading...</h1>;
  }

  const goBackLink = (
    <Link
      to="/"
      style={{
        marginLeft: '20px',
        marginTop: '20px',
        marginBottom: '0',
        display: 'inline-block',
      }}
    >
      Go back
    </Link>
  );

  if (hasError) {
    return (
      <>
        {goBackLink}
        <div className="center">Something went wrong. Try again later.</div>
      </>
    );
  }

  return (
    <>
      {goBackLink}
      <h1 style={{ textAlign: 'center', margin: 0 }}>{heading}</h1>
      <ul
        style={{ maxWidth: '720px', minHeight: '540px', margin: '20px auto' }}
      >
        {itemChuncks[currentPage - 1].map((item) => (
          <ListItem key={item.name} item={item} />
        ))}
      </ul>
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          margin: '24px 0',
        }}
      >
        <Pagination
          count={itemChuncks.length}
          current={currentPage}
          onChange={setCurrentPage}
        />
      </div>
    </>
  );
};

export default EntityListView;
