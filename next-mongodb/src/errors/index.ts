import { v4 as uuid } from 'uuid'

// Base
interface BaseProps {
  message: string
  action: string
  statusCode: number
  errorId?: string
  stack?: any
}

class BaseError extends Error {
  action: string
  statusCode: number
  errorId?: string

  constructor(props: BaseProps) {
    super()
    this.name = this.constructor.name
    this.message = props.message
    this.action = props.action
    this.statusCode = props.statusCode || 500
    this.errorId = props.errorId || uuid()
    this.stack = props.stack
  }
}

// NotFound
interface NotFoundProps {
  message?: string
  action?: string
  errorId?: string
  stack?: any
}

export class NotFoundError extends BaseError {
  constructor(props?: NotFoundProps) {
    const defaultMessage = 'Não foi possível encontrar este recurso no sistema.'
    const defaultAction =
      'Verifique se o caminho (PATH) e o método (GET, POST, PUT, DELETE) estão corretos.'

    super({
      message: props?.message || defaultMessage,
      action: props?.action || defaultAction,
      statusCode: 404,
      errorId: props?.errorId,
      stack: props?.stack
    })
  }
}

// Service
interface ServiceProps {
  message?: string
  action?: string
  statusCode?: number
  stack?: any
}

export class ServiceError extends BaseError {
  constructor(props?: ServiceProps) {
    const defaultMessage = 'Serviço indisponível no momento.'
    const defaultAction = 'Verifique se o serviço está disponível.'

    super({
      message: props?.message || defaultMessage,
      action: props?.action || defaultAction,
      statusCode: props?.statusCode || 503,
      stack: props?.stack
    })
  }
}

// Unauthorized
interface UnauthorizedProps {
  message?: string
  action?: string
  stack?: any
}

export class UnauthorizedError extends BaseError {
  constructor(props?: UnauthorizedProps) {
    const defaultMessage = 'Usuário não autenticado.'
    const defaultAction =
      'Verifique se você está autenticado e tente novamente.'

    super({
      message: props?.message || defaultMessage,
      action: props?.action || defaultAction,
      statusCode: 401,
      stack: props?.stack
    })
  }
}

// Forbidden
interface ForbiddenProps {
  message?: string
  action?: string
  stack?: any
}

export class ForbiddenError extends BaseError {
  constructor(props?: ForbiddenProps) {
    const defaultMessage = 'Você não possui permissão para executar esta ação.'
    const defaultAction =
      'Verifique se você possui permissão para executar esta ação.'

    super({
      message: props?.message || defaultMessage,
      action: props?.action || defaultAction,
      statusCode: 403,
      stack: props?.stack
    })
  }
}

// Validation
interface ValidationProps {
  message?: string
  action?: string
  statusCode?: number
  stack?: any
}

export class ValidationError extends BaseError {
  constructor(props?: ValidationProps) {
    const defaultMessage = 'Um erro de validação ocorreu.'
    const defaultAction = 'Ajuste os dados enviados e tente novamente.'

    super({
      message: props?.message || defaultMessage,
      action: props?.action || defaultAction,
      statusCode: props?.statusCode || 400,
      stack: props?.stack
    })
  }
}
