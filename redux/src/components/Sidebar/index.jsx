import React from "react";
import { connect } from "react-redux";
import * as CourseActions from "../../store/actions/course";

const Sidebar = ({ modules, toggleLesson }) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", fontSize: "40pt" }}>
      {modules.map((module) => (
        <div key={module.id}>
          <strong>{module.title}</strong>
          <ul>
            {module.lessons.map((lesson) => (
              <li key={lesson.id}>
                <div style={{ display: "flex", padding: "10px 0" }}>
                  {lesson.title}
                  <button
                    style={{
                      textAlign: "center",
                      margin: "10px",
                      cursor: "pointer",
                    }}
                    onClick={() => toggleLesson(module, lesson)}
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
};

const mapStateToProps = (state) => ({
  modules: state.course.modules,
});

const mapDispatchToProps = (dispatch) => ({
  toggleLesson: (module, lesson) =>
    dispatch(CourseActions.toggleLesson(module, lesson)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
