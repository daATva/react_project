import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Test.scss';
import { PageContainer, TestCard } from '../../components/index';

interface Test {
  id: number;
  image: string;
  name: string;
  description: string;
}

const Test: React.FC = () => {
  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
    axios
      .get('https://66410886a7500fcf1a9f6434.mockapi.io/tests_data')
      .then((response) => {
        setTests(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <PageContainer>
      <div className="test">
        <header className="testheader">
          <h1>Тесты</h1>
        </header>
        <main className="test-main">
          {tests.map((test) => (
            <div key={test.id} className="test-card-wrapper">
              <TestCard
                id={test.id}
                image={test.image}
                name={test.name}
                description={test.description}
              />
            </div>
          ))}
        </main>
      </div>
    </PageContainer>
  );
};

export default Test;
