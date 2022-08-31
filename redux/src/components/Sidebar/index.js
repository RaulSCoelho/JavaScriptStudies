import { useDispatch, useSelector } from 'react-redux';

import * as CourseActions from '../../store/actions/course';

function Sidebar() {
  const modules = useSelector((state) => state.course.modules);
  const dispatch = useDispatch();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', fontSize: '40pt' }}>
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                <div style={{ display: 'flex', padding: '10px 0' }}>
                  {lesson.title}
                  <button
                    type="button"
                    style={{
                      textAlign: 'center',
                      margin: '10px',
                      cursor: 'pointer',
                    }}
                    onClick={() => dispatch(CourseActions.toggleLesson(module, lesson))}
                  >
                    select
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Sidebar;
