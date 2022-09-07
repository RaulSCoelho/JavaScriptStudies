const modules = [
  {
    id: 1,
    title: 'Iniciando com React',
    lessons: [
      { id: 1, title: 'Primeira aula' },
      { id: 2, title: 'Segunda aula' },
    ],
  },
  {
    id: 2,
    title: 'Aprendendo Redux',
    lessons: [
      { id: 1, title: 'Terceira aula' },
      { id: 2, title: 'Quarta aula' },
    ],
  },
]

const INITIAL_STATE = {
  activeLesson: modules[0].lessons[0],
  activeModule: modules[0],
  modules,
}

export default function course(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_LESSON':
      return {
        ...state,
        activeLesson: action.lesson,
        activeModule: action.module,
      }
    default:
      return state
  }
}
