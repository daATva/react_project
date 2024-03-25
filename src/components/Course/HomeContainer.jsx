// HomeContainer.jsx
import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { fetchCourseData } from '../../store/actions/action';
import CoursesSection from '../path_to/CoursesSection';

// Контейнерный компонент HomeContainer управляет состоянием и данными для секции курсов
const HomeContainer = ({ courseData, loading, fetchCourseData }) => {
  // Загрузка данных курсов при монтировании компонента
  useEffect(() => {
    fetchCourseData();
  }, [fetchCourseData]);

  console.log('HomeContainer courseData:', courseData);

  // Мемоизация компонента CoursesSection для предотвращения излишних рендеров
  const MemoizedCoursesSection = useMemo(
    () => <CoursesSection courseData={courseData} loading={loading} />,
    [courseData, loading]
  );

  return MemoizedCoursesSection;
};

// Мапинг состояния Redux в пропсы компонента
const mapStateToProps = (state) => ({
  courseData: state.courseData.courseData,
  loading: state.courseData.loading,
});

// Мапинг экшенов Redux в пропсы компонента
const mapDispatchToProps = { fetchCourseData };

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
