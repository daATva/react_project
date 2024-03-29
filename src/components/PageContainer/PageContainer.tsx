import * as React from 'react';
import './PageContainer.scss';

interface PageContainerProps {
  children: React.ReactNode;
}

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return <div className="page-container">{children}</div>;
};

export default PageContainer;
