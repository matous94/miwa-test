import * as React from 'react';

const PageNumber: React.FC<{ onClick: () => void; active: boolean }> = ({
  onClick,
  active,
  children,
}) => (
  <button
    type="button"
    onClick={onClick}
    style={{
      padding: '4px',
      margin: '0 2px',
      background: active ? 'rgba(0, 0, 0, 0.08' : 'transparent',
      border: 'none',
      borderRadius: '100%',
      minWidth: '32px',
      minHeight: '32px',
      cursor: 'pointer',
    }}
  >
    {children}
  </button>
);

const Pagination: React.FC<{
  count: number;
  current: number;
  onChange: (pageNumber: number) => void;
}> = ({ count, current, onChange }) => {
  if (count === 1) return null;

  const pageNumbers = [];

  for (let i = 1; i <= count; i += 1) {
    pageNumbers.push(
      <PageNumber key={i} active={current === i} onClick={() => onChange(i)}>
        {i}
      </PageNumber>
    );
  }

  return <div style={{ display: 'flex' }}>{pageNumbers}</div>;
};

export default Pagination;
