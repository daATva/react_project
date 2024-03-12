import React, { useState, useEffect } from 'react';
import PageContainer from '../PageContainer/PageContainer';
import './Home.scss';
import Form from '../../components/Form/Form';
import CoursesSection from '../../components/Course/CoursesSection';
import { fetchEvents, fetchCourseData } from '../../store/actions/action';

const mapStateToProps = (state) => ({
  events: state.events,
  courseData: state.courseData,
});

const mapDispatchToProps = (dispatch) => ({
  fetchEvents: () => dispatch(fetchEvents()),
  fetchCourseData: () => dispatch(fetchCourseData()),
});

const Home = ({ events, courseData, fetchEvents, fetchCourseData }) => {
  useEffect(() => {
    fetchEvents();
    fetchCourseData();
  }, [fetchEvents, fetchCourseData]);

  return (
    <div className="home">
      <h1>Добро пожаловать в личный кабинет</h1>
      <p>Нужно исправить паддинг тут</p>
      <Form />
      <CoursesSection courses={events} courseData={courseData} />
    </div>
  );
};

export default Home;
