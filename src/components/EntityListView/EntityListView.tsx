import * as React from 'react';
import { Link } from 'react-router-dom';

interface HasName {
  name: string;
}

interface Props<T> {
  heading: string;
  getter: () => Promise<void>;
  items: T[];
  ListItem: React.FC<{ item: T }>;
}

const EntityListView = <T extends HasName>({
  heading,
  getter,
  items,
  ListItem,
}: Props<T>) => {
  const [hasError, setHasError] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(items.length === 0);

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

  const goBackLink = (
    <Link
      to="/"
      style={{
        marginLeft: '20px',
        marginTop: '20px',
        display: 'inline-block',
      }}
    >
      Go back
    </Link>
  );

  if (isLoading) {
    return <div className="center">Loading</div>;
  }

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
      <ul style={{ maxWidth: '720px', margin: '24px auto' }}>
        {items.map((item) => (
          <ListItem key={item.name} item={item} />
        ))}
      </ul>
    </>
  );
};

export default EntityListView;
