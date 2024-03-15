// HomeContainer.jsx
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchCourseData } from '../../store/actions/action';
import CoursesSection from '../path_to/CoursesSection';

const HomeContainer = ({ courseData, loading, fetchCourseData }) => {
  useEffect(() => {
    fetchCourseData();
  }, [fetchCourseData]);

  console.log('HomeContainer courseData:', courseData);

  return <CoursesSection courseData={courseData} loading={loading} />;
};

const mapStateToProps = (state) => ({
  courseData: state.courseData.courseData,
  loading: state.courseData.loading,
});

const mapDispatchToProps = { fetchCourseData };

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
