// Home.tsx
import React, { useEffect, lazy, Suspense, useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import { fetchEvents, fetchCourseData } from '../../store/actions/action';
import { Form, PageContainer } from '../../components/index';

interface HomeProps {
  events: any[];
  courseData: any;
  loading: boolean;
  fetchEvents: () => void;
  fetchCourseData: () => void;
}
const mapStateToProps = (state: any) => ({
  events: state.events.events,
  courseData: state.courseData.courseData,
  loading: state.courseData.loading,
});

const mapDispatchToProps = (dispatch: any) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchCourseData: () => dispatch(fetchCourseData()),
});

const CourseSectionLazy = lazy(
  () => import('../../components/Course/CoursesSection')
);

const Home: React.FC<HomeProps> = ({
  events,
  courseData,
  loading,
  fetchEvents,
  fetchCourseData,
}) => {
  useEffect(() => {
    fetchEvents();
    fetchCourseData();
  }, [fetchEvents, fetchCourseData]);

  const memoizedForm = useMemo(() => <Form />, []);
  const memoizedCourseSectionLazy = useCallback(
    () => (
      <Suspense fallback={<div>Загрузка курсов...</div>}>
        <CourseSectionLazy courseData={courseData} />
      </Suspense>
    ),
    [courseData]
  );

  return (
    <PageContainer>
      <div className="home">
        <h1>Добро пожаловать в личный кабинет</h1>
        {memoizedCourseSectionLazy()}
      </div>
    </PageContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
