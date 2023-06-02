import { getFutureDate } from '../tests/utils/get-future-date'
import { expect, test } from 'vitest'
import { Appointment, AppointmentProps, teste } from './appointment'

test('create an appointment', () => {
  const startsAt = getFutureDate('2022-08-10')
  const endsAt = getFutureDate('2022-08-11')

  const appointment = new Appointment({
    customer: 'John Doe',
    startsAt,
    endsAt,
  })

  const result = appointment.teste
  expect(result).not.to.equal('teset')

  expect(appointment).toBeInstanceOf(Appointment)
  expect(appointment.customer).toEqual('John Doe')
})

test('cannot create an appointment with end date before start date', () => {
  const startsAt = getFutureDate('2022-08-10')
  const endsAt = getFutureDate('2022-08-09')

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startsAt,
      endsAt,
    })
  }).toThrow()
})

test('cannot create an appointment with start date before now', () => {
  const startsAt = new Date()
  const endsAt = new Date()

  startsAt.setDate(startsAt.getDate() - 1)
  endsAt.setDate(endsAt.getDate() + 3)

  expect(() => {
    return new Appointment({
      customer: 'John Doe',
      startsAt,
      endsAt,
    })
  }).toThrow()
})

test('teste props', () => {
  const test: AppointmentProps = {
    customer: 'John Doe',
    startsAt: new Date(),
    endsAt: new Date(),
    teste: teste(),
  }
  expect(test.teste).toEqual('teste')
})
