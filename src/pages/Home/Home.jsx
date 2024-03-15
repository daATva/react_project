import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PageContainer from '../PageContainer/PageContainer';
import './Home.scss';
import Form from '../../components/Form/Form';
import CoursesSection from '../../components/Course/CoursesSection';
import { fetchEvents, fetchCourseData } from '../../store/actions/action';

const mapStateToProps = (state) => ({
  events: state.events.events,
  courseData: state.courseData.courseData,
  loading: state.courseData.loading,
});
const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchCourseData: () => dispatch(fetchCourseData()),
});
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

  return (
    <div className="home">
      <h1>Добро пожаловать в личный кабинет</h1>
      <Form />
      <CoursesSection courseData={courseData} loading={loading} />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
