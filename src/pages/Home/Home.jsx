// Home.jsx
import React, { useEffect, lazy, Suspense, useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import './Home.scss';
import Form from '../../components/Form/Form';
import { fetchEvents, fetchCourseData } from '../../store/actions/action';

// Функции для mapStateToProps и mapDispatchToProps для связи с Redux
const mapStateToProps = (state) => ({
  events: state.events.events,
  courseData: state.courseData.courseData,
  loading: state.courseData.loading,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchCourseData: () => dispatch(fetchCourseData()),
});

// Ленивая загрузка компонента CoursesSection
const CourseSectionLazy = lazy(
  () => import('./../../components/Course/CoursesSection')
);

// Компонент Home отображает приветствие, секцию курсов и форму
const Home = ({
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
    <div className="home">
      <h1>Добро пожаловать в личный кабинет</h1>
      {memoizedCourseSectionLazy()}
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
