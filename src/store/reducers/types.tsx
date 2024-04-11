// types.ts
export type Event = {
  Name: string;
  startDate: string;
  Image: string;
};

export type Course = {
  id: string;
  title: string;
  description: string;
};

export type EventsState = {
  events: Event[];
  loading: boolean;
  error: Error | null;
};

export type CourseDataState = {
  courseData: Course[];
  loading: boolean;
  error: Error | null;
};
