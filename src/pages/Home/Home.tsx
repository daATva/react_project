import React, {
  useEffect,
  lazy,
  Suspense,
  useMemo,
  useCallback,
  useState,
} from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './Home.scss';
import { fetchEvents, fetchCourseData } from '../../store/actions/action';
import { Form, PageContainer } from '../../components/index';
import ProfileHeader from '../../components/ProfileHeader/ProfileHeader';
import TaskList from '../../components/TaskList/TaskList';
import TestModal from '../../components/TestModal/TestModal';
import users from '../../data/user'; // Импорт данных пользователей

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
  const navigate = useNavigate();
  const [profile, setProfile] = useState<any | null>(null); // Изменим тип на any
  const [error, setError] = useState<string | null>(null);
  const [isTestModalOpen, setIsTestModalOpen] = useState<boolean>(false);

  useEffect(() => {
    fetchEvents();
    fetchCourseData();
    const storedProfile = localStorage.getItem('currentUser');
    if (storedProfile) {
      setProfile(JSON.parse(storedProfile));
    } else {
      const defaultUser = users.find((user) => user.username === 'user1'); // Ищем пользователя по умолчанию
      if (defaultUser) {
        setProfile(defaultUser.profile);
      }
    }
  }, [fetchEvents, fetchCourseData]);

  const memoizedForm = useMemo(() => <Form />, []);
  const memoizedCourseSectionLazy = useCallback(
    () => (
      <Suspense fallback={<div>Загрузка курсов...</div>}>
        <CourseSectionLazy courseData={courseData} loading={loading} />
      </Suspense>
    ),
    [courseData, loading]
  );

  const handleLoginClick = () => {
    navigate('/login'); // Navigate to login page
  };

  const handleRegisterClick = () => {
    navigate('/register'); // Navigate to register page
  };

  const handleAddTestClick = () => {
    setIsTestModalOpen(true);
  };

  const handleCloseTestModal = () => {
    setIsTestModalOpen(false);
  };

  const handleAddTestToUser = (userId: string, testId: number) => {
    const user = users.find((user) => user.username === userId);
    if (user) {
      // Logic to add the test to the user's profile
      console.log(`Adding test ${testId} to user ${userId}`);
      // Example: user.profile.tests.push(testId);
    }
    handleCloseTestModal();
  };

  if (error) {
    return <div className="error">{error}</div>;
  }

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <PageContainer>
      <div className="home">
        <h1>Добро пожаловать в личный кабинет</h1>
        <ProfileHeader
          name={profile.name}
          role={profile.role}
          location={profile.location}
          manager={profile.manager}
          department={profile.department}
          openTasks={profile.openTasks}
          onClick={handleLoginClick}
          onAddTest={handleAddTestClick} // Pass handleAddTestClick here
        />
        <TaskList tasks={profile.tasks} />
        {memoizedCourseSectionLazy()}

        <div className="auth-buttons">
          <button onClick={handleLoginClick}>Войти</button>
          <button onClick={handleRegisterClick}>Зарегистрироваться</button>
        </div>

        {isTestModalOpen && (
          <TestModal
            onClose={handleCloseTestModal}
            onAddTestToUser={handleAddTestToUser}
          />
        )}
      </div>
    </PageContainer>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
